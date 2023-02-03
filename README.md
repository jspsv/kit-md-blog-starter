# kit-md-blog-starter

Sveltekit blog starter with Markdown support using Remark

# Features

- Sveltkit Skelton Project (with TS, ESLint, Prettier, Vitest)
- Tailwind
- File System based routing for blog content located in `./content`.
  - E.g. `./content/<category>/<post-file>`.
  - Assets like images, GIFs, etc. are place along the content.
  - TODO: transoform these assets during build (Vite).

## Running the project

```bash
nvm use

# dev
pnpm run dev

# build
pnpm run build
pnpm run preview
```

<!-- ## old

Everything you need to build a Svelte project, powered by [`create-svelte`](https://github.com/sveltejs/kit/tree/master/packages/create-svelte).

## Creating a project

If you're seeing this, you've probably already done this step. Congrats!

```bash
# create a new project in the current directory
npm create svelte@latest

# create a new project in my-app
npm create svelte@latest my-app
```

## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

To create a production version of your app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://kit.svelte.dev/docs/adapters) for your target environment. -->
