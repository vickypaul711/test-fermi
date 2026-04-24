## Remote site url

https://test-one-opal-13.vercel.app/dashboard


## github url

https://github.com/vickypaul711/test-fermi



## Tree structure

├── app
│   ├── analytics
│   │   ├── page.module.css
│   │   └── page.tsx
│   ├── api
│   │   ├── analytics
│   │   │   └── route.ts
│   │   ├── stats
│   │   │   └── route.ts
│   │   └── users
│   │       └── route.ts
│   ├── dashboard
│   │   ├── page.module.css
│   │   └── page.tsx
│   ├── favicon.ico
│   ├── layout.tsx
│   ├── page.tsx
│   └── users
│       ├── page.module.css
│       └── page.tsx
├── components
│   ├── dashboard
│   │   ├── analyticsCard
│   │   │   └── analyticsCard.tsx
│   │   ├── dataTable
│   │   │   ├── dataTable.module.css
│   │   │   ├── dataTable.tsx
│   │   │   └── skeleton
│   │   │       ├── skeleton.tsx
│   │   │       └── tableSkeleton.module.css
│   │   └── statsCard
│   │       ├── statsCard.module.css
│   │       └── statsCard.tsx
│   ├── layout
│   │   ├── dashboardLayout
│   │   │   ├── dashboardLayout.module.css
│   │   │   └── dashboardLayout.tsx
│   │   ├── sidebar
│   │   │   ├── sidebar.module.css
│   │   │   └── sidebar.tsx
│   │   └── topNav
│   │       ├── topNav.module.css
│   │       └── topNav.tsx
│   └── ui
│       ├── button
│       │   ├── button.module.css
│       │   └── button.tsx
│       ├── card
│       │   ├── card.module.css
│       │   └── card.tsx
│       ├── input
│       │   ├── input.module.css
│       │   └── input.tsx
│       └── themeToggle.tsx
├── lib
│   ├── api
│   ├── hooks
│   │   └── useDebounce.ts
│   ├── types.ts
│   └── utils
│       └── baseUrl.ts
└── styles
    ├── globals.css
    ├── themes
    │   ├── dark.css
    │   └── light.css
    └── tokens
        └── tokens.css


## Fluid Typography & Spacing System

A fluid system was implemented using `clamp()` to scale typography and spacing smoothly between mobile and large screens without relying on breakpoints.

### Approach

Each value follows:

```css
clamp(min, preferred, max)
```

Where:

* **min** = smallest usable value (mobile constraint)
* **max** = upper bound to prevent excessive scaling
* **preferred** = viewport-based scaling using `vw`

### Viewport Assumptions

* Minimum viewport: **320px**
* Maximum viewport: **1440px**

This defines the interpolation range.

### Deriving the Preferred Value

For a given property:

```
slope = (max - min) / (viewportMax - viewportMin)
```

Example (body text):

* min = 14px
* max = 18px

```
slope = (18 - 14) / (1440 - 320)
      = 4 / 1120
      ≈ 0.00357
```

Converted to viewport units:

```
preferred ≈ 0.36vw
```

To align the curve with the minimum at 320px, an offset is added:

```css
font-size: clamp(14px, 0.36vw + 12px, 18px);
```

In practice, a simplified and consistent scale was used:

```css
--font-size-sm: clamp(14px, 1vw, 16px);
--font-size-md: clamp(16px, 1.2vw, 18px);
--font-size-lg: clamp(18px, 1.5vw, 22px);
```

### Design Principles

* Text never scales below **14px** for readability
* Values are capped to avoid oversized UI on large displays
* Larger typography scales more aggressively than smaller text
* The same logic is applied to spacing tokens to maintain proportional layout

This results in smooth, predictable scaling across devices without introducing breakpoint complexity.

---

## Part D Challenges Completed

### 1. Container Queries

Container queries were used to make components responsive based on their container rather than the viewport. This allows the same component (e.g., stats cards) to adapt differently when placed in the main layout versus a narrower sidebar.

This was chosen because it reflects modern CSS practices and improves component reusability in complex layouts.

### 2. Fluid Typography & Spacing

A token-driven fluid system using `clamp()` was implemented for both typography and spacing. This reduces dependency on breakpoints and ensures consistent scaling across devices.

This was chosen because it demonstrates system-level thinking and aligns with scalable design system principles.

---

## Server vs Client Components

Server Components were used by default for data fetching (e.g., stats and analytics) to leverage SSR benefits and reduce client-side JavaScript.

Client Components were introduced only where interactivity was required, such as:

* Data table (pagination, sorting, search)
* Theme toggle

The trickiest boundary was the data table. While it depends on server data, it also requires client-side interaction and URL state synchronization. The final approach keeps data fetching server-driven while managing UI state in the client, ensuring a clear separation of concerns.

---

## Trade-offs

Due to time constraints, a few areas were simplified:

* Charts were implemented using CSS instead of a full charting solution
* No advanced filtering beyond search and sorting
* No automated tests were included
* The design system does not include full documentation or tooling

With more time , I would:

* Add richer data visualizations
* Expand table features (multi-column sort, filters)
* Introduce unit test coverage
* Improve accessibility (keyboard navigation, ARIA roles)

---

## Hardest Part

The most challenging part was designing a consistent system across tokens, components, and layouts while maintaining separation of concerns.

key difficulties:

* Ensuring all styling was token-driven (no hardcoded values)
* Handling dark mode correctly without component-level overrides
* Managing URL-driven state for the data table without introducing complexity

solutions:

* Defining tokens early and strictly adhering to them
* Iteratively refining components to remove hardcoded values
* Treating the URL as the single source of truth for table state
