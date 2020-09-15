## Scripts

- `npm run start:app`: Starts the Create React App application, which enables local testing of our NPM-published component library.
- `npm run start:storybook`: Runs an instance of Storybook, for easier component-driven development.
- `npm run test`: Runs component tests using Enzyme and Jest.
- `npm run build:lib`: Builds our component library using Rollup (anything inside `src/lib/` into the `dist` folder)
- `npm run build:storybook`: Generates static files and a `storybook-static` folder for external consumption of our design system. This will be continuously deployed through Netlify at [design.forensic-architecture.org]()

### Library building and testing with Rollup

Run `npm run build:lib` from the root folder — this will generate a `dist/` folder, along with styles. Then, run:

```
cd dist/
npm link
```

### Developing timemap via design-system
Or any other external repo locally:
```
npm run build:watch
# in the timemap repo
npm link fa-design-system
```

Componets from design-system can then be imported like so: `import {Button} from 'fa-design-system'`. Provided the build system of the external repo watches 'node_modules' for changes, the code should auto-refresh on changes in design-system as it normally would for changes within the timemap repo.

