# Installation

```
pnpm create vue@latest
.../191dc9db5d7-22b0                     |   +1 +
.../191dc9db5d7-22b0                     | Progress: resolved 1, reused 0, downloaded 1, added 1, done

Vue.js - The Progressive JavaScript Framework

√ Project name: ... calendar
√ Add TypeScript? ... No
√ Add JSX Support? ... No
√ Add Vue Router for Single Page Application development? ... Yes
√ Add Pinia for state management? ... Yes
√ Add Vitest for Unit Testing? ... Yes
√ Add an End-to-End Testing Solution? » No
√ Add ESLint for code quality? ... Yes
√ Add Prettier for code formatting? ... Yes
√ Add Vue DevTools 7 extension for debugging? (experimental) ... Yes
```

## Install packages

```bash
pnpm install
```

## Install TailwindCSS

```bash
pnpm install -D tailwindcss@latest postcss@latest autoprefixer@latest
npx tailwindcss init -p
```

### Create a new folder inside `/src/assets` directory

```bash
mkdir /src/assets/styles
mv /src/assets/main.css /src/assets/styles/main.css
```

### Create the TailwindCSS CSS file in the same folder with `main.css`

```
@tailwind base;
@tailwind components;
@tailwind utilities;
```

### Modify `main.css` file to import `tailwind.css`