---
title: "Research"
layout: "standard"
summary: "Peer-reviewed papers, conference presentations, and technical reports in reactor physics, radiation transport, and fuel cycle analysis."
order: 2
seo:
  title: "Research — Nuclear Engineering Portfolio"
  description: "Research publications and technical reports in nuclear engineering: neutron transport methods, Monte Carlo variance reduction, decay heat uncertainty, and reactor physics benchmarking."
---

## Research Overview

My research focuses on the convergence of computational methods and engineering practice in nuclear systems — improving accuracy, reducing uncertainty, and expanding the applicability of simulation tools in regulatory and design contexts.

```stat-grid
3 | Publications
2 | Conference Papers
1 | Technical Report
2022–2024 | Active Research Period
```

---

## Publications

### BSc Thesis — Neutron Flux Benchmarking for Low-Power Research Reactors
**2022 · BSc Thesis · Department of Nuclear Engineering**

Established a systematic benchmarking methodology for validating MCNP6 neutron flux predictions against experimental measurements at a pool-type research reactor. Evaluated sensitivity to cross-section library selection (ENDF/B-VII.1 vs ENDF/B-VIII.0) and geometry discretization tolerance.

Key findings:
- Cross-section library choice contributes ±0.5% variation in thermal flux predictions at the core center.
- Geometry discretization tolerance below 0.5 mm does not produce statistically significant flux differences.
- Recommended benchmark suite of 12 flux map conditions for ongoing facility quality assurance.

---

### Conference Paper — Monte Carlo Variance Reduction for Deep-Penetration Shielding
**2023 · ANS Winter Meeting, Proceedings Vol. 129**

Presented a comparison of weight-window variance reduction techniques (manual, MAGIC, ADVANTG-generated) for deep-penetration shielding problems representative of spent fuel cask secondary gamma sources. Evaluated figure-of-merit improvement and reliability of flux estimates at large mean-free-path depths.

Key findings:
- ADVANTG-generated weight windows produced the most consistent figure-of-merit improvement (10×–40× over analog) across problem configurations.
- Manual weight window generation was competitive for simpler geometries but degraded reliability for anisotropic source distributions.
- Highlighted failure modes in weight-window generation at streaming paths through thin annular gaps.

---

### Technical Report — Decay Heat Uncertainty Quantification for Interim Dry Storage
**2024 · Internal Technical Report**

Quantified aleatory and epistemic uncertainty contributions to decay heat predictions for spent PWR fuel assemblies under ANS-5.1 standard. Source terms included: initial enrichment tolerance, irradiation history reconstruction uncertainty, and nuclear data covariance propagation through ORIGEN.

Key findings:
- Irradiation history reconstruction uncertainty is the dominant contributor to short-term (&lt;5 year) decay heat uncertainty at high burnups.
- Nuclear data uncertainty becomes the marginal contributor beyond 50-year cooling times.
- Developed a conservative bounding envelope approach applicable to licensing basis thermal analysis.

---

## Research Interests

My current and prospective research directions reflect evolving computational capabilities and engineering priorities in the nuclear industry.

```timeline
Near-term | High-fidelity coupled neutronics/thermal-hydraulics for research reactor experiment design
Near-term | Machine learning surrogate models for MCNP shielding optimization loops
Mid-term  | Non-classical transport methods for highly heterogeneous media (pebble-bed cores)
Mid-term  | Uncertainty quantification frameworks for advanced reactor licensing applications
Long-term | Closed fuel cycle systems modeling with proliferation resistance metrics
```

---

## Methodological Expertise

- **Monte Carlo transport:** MCNP6, OpenMC — criticality, shielding, flux mapping.
- **Deterministic transport:** Discrete ordinates (S_N) methods in 1-D and 2-D.
- **Fuel depletion:** ORIGEN-S (SCALE), Python-wrapped post-processing pipelines.
- **Thermal-hydraulics:** RELAP5-3D for safety analysis transients.
- **Uncertainty quantification:** Sensitivity coefficient methods, TSUNAMI-3D.
- **Scientific computing:** Python (NumPy, SciPy, Matplotlib), basic parallel workflows on HPC clusters.
