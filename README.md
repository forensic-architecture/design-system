## Scripts

- `npm run start:app`: Starts the Create React App application, which enables local testing of our NPM-published component library.
- `npm run start:storybook`: Runs an instance of Storybook, for easier component-driven development.
- `npm run test`: Runs component tests using Enzyme and Jest.
- `npm run build:react:lib`: Builds our React component library using Rollup (anything inside `src/lib/` into the `dist` folder)
- `npm run build:react:storybook`: Generates static files and a `storybook-static` folder for external consumption of our design system. This will be continuously deployed through Netlify at [design.forensic-architecture.org]()

### Library building and testing with Rollup

Run `npm run build:react:lib` from the root folder — this will generate a `dist/` folder, along with styles. Then, run:

```
cd dist/
npm link
```

### Initial publication to NPM

Publish under our `@forensic-architecture` organization.
`npm publish --access public`.

### Developing timemap via design-system

Or any other external repo locally:

```bash
# Ensure that this repo is using the same react and react-dom versions of your repo by running the following in this repo:
# See https://reactjs.org/warnings/invalid-hook-call-warning.html for more detail
npm link ../timemap/node_modules/react
npm link ../timemap/node_modules/react-dom
# Run the build process to watch for changes in this repo:
npm run build:react:watch
# Set up a symlink to the local copy in your timemap repo: 
npm link @forensic-architecture/design-system
```

Components from design-system can then be imported like so: `import {Button} from '@forensic-architecture/design-system'`. Provided the build system of the external repo watches 'node_modules' for changes, the code should auto-refresh on changes in design-system as it normally would for changes within the timemap repo.
