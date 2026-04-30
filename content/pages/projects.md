---
title: "Projects"
layout: "standard"
summary: "Engineering and research projects in reactor analysis, radiation transport, thermal-hydraulics, and fuel cycle systems."
order: 1
seo:
  title: "Projects — Nuclear Engineering Portfolio"
  description: "Nuclear engineering project portfolio: reactor core modeling, thermal-hydraulic safety analysis, shielding design, and spent fuel characterization."
---

## Projects Overview

The projects below span computational reactor analysis, experimental support, radiation safety engineering, and fuel cycle work. Each draws on established industry codes crosschecked against analytical benchmarks.

---

## Reactor Core Neutronics Analysis

**Tools:** MCNP6, Python, NumPy  
**Context:** Research reactor facility — criticality safety and flux characterization

Developed a full 3-D MCNP6 model of a 1 MW pool-type research reactor for criticality benchmarking and neutron flux distribution mapping. The model captured fuel assembly geometry, control rod positioning, and reflector regions with material compositions drawn from verified procurement records.

```stat-grid
1 MW(th) | Reactor Power
±0.3% Δk/k | Criticality Benchmark Accuracy
6 Flux Regions | Spatial Flux Map
4 Control Rod Configurations | Modeled
```

Key outcomes: established a validated neutronics baseline for subsequent experiment placement requests, and identified flux asymmetry in the reflector zone requiring operational awareness under partial control rod withdrawal.

---

## Spent Fuel Decay Heat Characterization

**Tools:** ORIGEN-S (SCALE 6.2), Python  
**Context:** Dry cask interim storage — licensing basis support

Calculated decay heat curves for a range of burn-up histories (15–55 GWd/MTU) and cooling times (1–100 years) to support temperature limit analyses for a dry cask interim storage license amendment. Results were benchmarked against ANS-5.1 standard predictions.

```stat-grid
55 GWd/MTU | Maximum Burn-up Case
15 → 100 yr | Cooling Time Range
ANS-5.1 | Benchmark Standard
<2% | Maximum Deviation from Standard
```

The study quantified uncertainty contributions from initial enrichment tolerance and irradiation history variability, providing margin bounds for the mechanical design thermal analysis.

---

## Thermal-Hydraulic Safety Analysis — LOCA Transient

**Tools:** RELAP5-3D, Python post-processing  
**Context:** Loss-of-coolant accident scenario for small research reactor

Modeled a double-ended guillotine break of the primary coolant loop in RELAP5-3D to establish peak cladding temperature (PCT) and time-to-quench for the research reactor's licensing basis. Applied Appendix K conservatisms per 10 CFR 50 guidance.

```stat-grid
DEGB | Break Scenario
10 CFR 50 App. K | Regulatory Basis
PCT Established | Safety Margin Confirmed
RELAP5-3D | Analysis Code
```

Sensitivity studies on break location, ECCS actuation delay, and decay heat uncertainty band were performed to identify limiting case parameters.

---

## Radiation Shielding Design — Medical Isotope Facility

**Tools:** MCNP6, SkyShine calculation, regulatory dose rate limits  
**Context:** New construction — shield wall thickness and layout optimization

Performed iterative shielding optimization for a medical isotope production facility using a Mo-99 production target. Determined concrete and lead shield thicknesses for walls, ceiling penetrations, and HVAC duct routing to meet 2 mrem/hr occupancy limits in adjacent controlled areas.

```stat-grid
2 mrem/hr | Occupancy Limit
Mo-99 | Primary Isotope
Concrete + Lead | Shield Materials
4 Penetration Types | Analyzed
```

Analysis included streaming paths through duct penetrations and a skyshine component for the roof configuration. Final design reduced shield material cost by 18% relative to the preliminary design through geometry optimization.

---

## Advanced Fuel Cycle Assessment

**Tools:** ORIGEN, Python, literature review  
**Context:** Comparative assessment of once-through vs. closed fuel cycle options

Performed a quantitative comparison of key metrics (natural uranium utilization, transuranic mass, long-lived waste volume) for PWR once-through, PUREX reprocessing, and transmutation scenarios. Used ORIGEN to compute isotopic inventories at each stage.

```timeline
Stage 1 | Fresh Fuel Fabrication — enrichment and pellet composition
Stage 2 | In-Reactor Irradiation — burnup and isotopic evolution
Stage 3 | Interim Storage — decay heat and shielding requirements
Stage 4 | Reprocessing / Disposal — mass flow and waste classification
```

Results provided a technically grounded basis for comparing proliferation resistance, repository footprint, and resource utilization across the three fuel cycle options.
