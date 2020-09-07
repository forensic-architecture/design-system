## Scripts

- `npm run start`: Starts the Create React App application, which enables local testing of our NPM-published component library.
- `npm run storybook`: Runs an instance of Storybook, for easier component-driven development.
- `npm run test`: Runs component tests using Enzyme and Jest.
- `npm run build:lib`: Builds our component library using Rollup (anything inside `src/lib/` into the `dist` folder)
- `npm run build-storybook`: Generates static files and a `storybook-static` folder for external consumption of our design system. This will be continuously deployed through Netlify at [design.forensic-architecture.org]()

### Library building and testing with Rollup

Run `npm run build:lib` from the root folder — this will generate a `dist/` folder, along with styles. Then, run:

```
cd dist/
npm link
cd ..
npm link design-system
```

to create an alias and be able to require components from the component library like so: `import {Button} from 'design-system'`. Test that this works on `src/App.js`.
