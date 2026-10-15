# Baking & Pastry Portfolio

Single-page portfolio in English, built with Next.js App Router, TypeScript and Tailwind CSS. Local images and a typed catalogue; no database or paid service required.

## Run locally

Requires Node.js 20.9 or newer and npm.

```sh
npm install
npm run dev
```

Open http://localhost:3000. Validate with `npm run lint`, `npm run typecheck` and `npm run build`.

## Lint and formatting

- `npm run lint`: runs Oxlint, then the Next.js ESLint checks (including React Hooks). Warnings fail the check.
- `npm run lint:ox`: runs only Oxlint with `oxlint.config.mjs`.
- `npm run lint:fix`: applies automatic lint fixes.
- `npm run fmt`: formats files with Oxfmt using `oxfmt.config.mjs`.
- `npm run fmt:check`: checks formatting without changing files.

Generated Next.js files, build outputs and dependencies are ignored. Commands invoke the tools through Node to support Windows paths containing `&`.

## Add real work

The catalogue contains 30 original photographs, with optimised WebP copies alongside the unchanged source files. The hero features an original portrait of Bianca Melikardi, with an optimised WebP copy. No stock or generated product photographs are included.

1. Place real images in `public/images/brownies/`, `cakes/`, `pies/`, `puddings/`, `sweets/` or `other/`. Prefer descriptive English filenames and compressed WebP/AVIF images.
2. Add an entry to `src/data/desserts.ts`:

```ts
export const desserts: Dessert[] = [
  {
    id: 'chocolate-brownies',
    name: 'Chocolate Brownies',
    description: 'Rich chocolate brownies with a soft, fudgy centre.',
    category: 'brownies',
    coverImage: '/images/brownies/chocolate-brownies.webp',
    alt: 'Chocolate brownies with a fudgy centre',
    // images: ['/images/brownies/chocolate-brownies-02.webp'],
  },
];
```

Use this example only with a matching real photo. Cards and the photo viewer appear automatically. Category filters appear with at least six products across two categories. The native photo dialog supports Escape, keyboard focus containment and returning focus to its trigger.

## Personal details

Edit `src/data/profile.ts` to add a confirmed email address, full LinkedIn HTTPS URL and professional introduction. Contact links remain hidden until provided. The temporary name is Baking & Pastry Portfolio, as requested. Update the header and metadata if changing the brand.

## Publish on Vercel

1. Create a GitHub repository and push this project (exclude node_modules and .next).
2. Import it into Vercel. Keep the detected Next.js preset and default build settings. No environment variables are needed.
3. Add real work and contact details, review all copy, then change `robots` in `src/app/layout.tsx` to allow indexing when ready.
4. Check the public HTTPS URL on mobile and desktop. Add that link to the text **Baking & Pastry Portfolio** in the CV PDF.

Publication needs the owner's GitHub/Vercel account and the CV PDF to complete the final link. This checkout does not provision hosting or modify a CV.

## Design and accessibility

Cream, dark brown and muted olive; editorial serif headings, system sans-serif body. Responsive one/two/three-column gallery, local images through `next/image`, descriptive alt text, visible focus, skip link, reduced-motion support and no external font requests.
