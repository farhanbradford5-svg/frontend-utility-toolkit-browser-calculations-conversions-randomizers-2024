# Workspace

## Overview

pnpm workspace monorepo using TypeScript. Each package manages its own dependencies.

## Stack

- **Monorepo tool**: pnpm workspaces
- **Node.js version**: 24
- **Package manager**: pnpm
- **TypeScript version**: 5.9
- **API framework**: Express 5
- **Database**: PostgreSQL + Drizzle ORM
- **Validation**: Zod (`zod/v4`), `drizzle-zod`
- **API codegen**: Orval (from OpenAPI spec)
- **Build**: esbuild (CJS bundle)

## Key Commands

- `pnpm run typecheck` — full typecheck across all packages
- `pnpm run build` — typecheck + build all packages
- `pnpm --filter @workspace/api-spec run codegen` — regenerate API hooks and Zod schemas from OpenAPI spec
- `pnpm --filter @workspace/db run push` — push DB schema changes (dev only)
- `pnpm --filter @workspace/api-server run dev` — run API server locally

See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details.

## CalcSpark (`artifacts/calcspark`)

A complete browser-based calculator and converter website with 166+ tools.

### Design System
- **Palette**: Deep indigo (primary) + electric lime (accent)
- **Fonts**: Sora (headings) + Inter (body) via Google Fonts in index.css
- **Theme**: Full light/dark mode via CSS variables
- **Router**: wouter (NOT React Router)

### Architecture
- `src/App.tsx` — full routing for all 166+ tool pages
- `src/data/tools.ts` — tool registry with all metadata, search, and popular tool arrays
- `src/components/Layout.tsx` — sticky header, global search, nav dropdowns, mobile menu, footer
- `src/components/ToolPage.tsx` — reusable tool page shell with Field, Input, Select, CalcButton, ResultBox, ResultGrid
- `src/pages/HomePage.tsx` — homepage with hero, popular tools, category grid
- `src/pages/CategoryPage.tsx` — category listing page
- `src/pages/RandomizersPage.tsx` — randomizers listing page

### Tool Pages

All tools are pure client-side JavaScript, no APIs.

#### Calculator tools (in `src/pages/tools/`)
- `business/BusinessTools.tsx` + `business/ROICalculator.tsx` — ROI, break-even, margin, markup, commission, etc.
- `finance/FinanceTools.tsx` — compound interest, loans, VAT, APY, present value, etc.
- `datetime/DateTimeTools.tsx` — age, days between dates, sleep, time card, etc.
- `health/HealthTools.tsx` — BMI, calorie, water intake, body fat, BMR, etc.
- `fitness/FitnessTools.tsx` — TDEE, macro, 1RM, heart rate, pace, protein
- `math/MathTools.tsx` — fraction, exponent, scientific notation, ratio, LCM/GCD, etc.
- `geometry/GeometryTools.tsx` — area, volume, perimeter, surface area, midpoint, Pythagorean
- `trig/TrigTools.tsx` — sin, cos, tan, arcsin, arccos, arctan
- `stats/StatsTools.tsx` — standard deviation, Z-score, p-value, confidence interval, etc.
- `physics/PhysicsTools.tsx` — Ohm's law, kinetic energy, acceleration, density, half-life, pressure
- `data/DataTools.tsx` — download time, RAID calculator
- `crypto/CryptoTools.tsx` — SHA-256, SHA-512, SHA-1 hash generators (uses SubtleCrypto)
- `cooking/CookingTools.tsx` — recipe scaler, pizza dough, rice, coffee ratio
- `construction/ConstructionTools.tsx` — paint, concrete, tile, gravel, brick, etc.
- `transportation/TransportTools.tsx` — fuel cost, MPG, speed-distance-time, average speed
- `other/OtherTools.tsx` — tip, percent off, grade, GPA, odds, dog years, marks percentage

#### Converter tools (in `src/pages/tools/converters/ConverterTools.tsx`)
- Dimensions: length, height, inches↔cm, feet↔cm, meters↔feet, mm↔inches
- Distance: km↔miles, meters↔miles
- Area: area converter, acres↔hectares, sqm↔sqft
- Volume: volume converter
- Speed: speed converter, mph↔kmh
- Date/Time: time zone, military time, unix timestamp, minutes↔hours, salary converter
- Math: roman numerals, fractions↔percent↔decimal, binary↔decimal, hex↔decimal, shoe size
- Data: data storage, grams↔ml
- Physics: temperature (°C/°F/K), pressure (Pa/PSI/bar/atm), energy (J/kcal/kWh/BTU)
- Cooking: cups↔grams, grams↔cups, cups↔ml/tbsp/tsp, butter converter, recipe converter

#### Randomizer tools (in `src/pages/tools/randomizers/RandomizerTools.tsx`)
- Random number generator, password generator, color generator, list randomizer, dice roller, name picker, team generator

### Route Patterns
- `/calculators/{subcategory}/{slug}` — calculator tools
- `/converters/{subcategory}/{slug}` — converter tools  
- `/randomizers/{slug}` — randomizer tools
- `/calculators/{subcategory}` — category listing
- `/converters/{subcategory}` — converter category listing
- `/randomizers` — all randomizers listing
