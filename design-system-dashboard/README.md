This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.


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