import { readdirSync, readFileSync, statSync } from "node:fs";
import path from "node:path";

const outDir = path.resolve(process.cwd(), "out");
const basePathArg = process.argv[2] ?? process.env.NEXT_PUBLIC_BASE_PATH ?? "";

if (!basePathArg || !basePathArg.startsWith("/")) {
  console.error("Expected base path argument like '/scrollytelling'.");
  process.exit(1);
}

const normalizedBasePath = basePathArg.endsWith("/")
  ? basePathArg.slice(0, -1)
  : basePathArg;

function collectHtmlFiles(dir) {
  const files = [];
  for (const entry of readdirSync(dir)) {
    const abs = path.join(dir, entry);
    const stats = statSync(abs);
    if (stats.isDirectory()) {
      files.push(...collectHtmlFiles(abs));
      continue;
    }
    if (entry.endsWith(".html")) {
      files.push(abs);
    }
  }
  return files;
}

const htmlFiles = collectHtmlFiles(outDir);
if (!htmlFiles.length) {
  console.error("No HTML files found in out/. Run a static build first.");
  process.exit(1);
}

const duplicateToken = `${normalizedBasePath}${normalizedBasePath}/`;
let hasBasePathRef = false;
const duplicateMatches = [];

for (const filePath of htmlFiles) {
  const html = readFileSync(filePath, "utf8");
  if (html.includes(`href=\"${normalizedBasePath}/`) || html.includes(`src=\"${normalizedBasePath}/`)) {
    hasBasePathRef = true;
  }
  if (html.includes(duplicateToken)) {
    duplicateMatches.push(path.relative(process.cwd(), filePath));
  }
}

if (!hasBasePathRef) {
  console.error(`No '${normalizedBasePath}/' references found in built HTML. Check basePath build configuration.`);
  process.exit(1);
}

if (duplicateMatches.length) {
  console.error(`Detected duplicated base path token '${duplicateToken}' in:`);
  for (const match of duplicateMatches) {
    console.error(`- ${match}`);
  }
  process.exit(1);
}

console.log(`Base path output verification passed for '${normalizedBasePath}'.`);
