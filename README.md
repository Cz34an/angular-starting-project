# Angular starting template

This repo contains a clean Angular project with:

- Angular 22.2 and Angular CDK
- Tailwind CSS 4.3 and spartan/ui 1.8
- ESLint 10 and Prettier 3
- Vitest 5 and jsdom 30, using the Angular test builder

Use Node.js 24 LTS (24.15.0 or newer) and npm 11.17.0. The complete supported
Node.js range is declared in `package.json`. TypeScript stays on 6.0.x because
Angular 22.2 requires TypeScript >=6.0 and <6.1.

```sh
npm ci
npm start
npm run build
npm run lint
npm test -- --watch=false
```

On Windows with PowerShell script execution disabled, use `npm.cmd` instead of
`npm`.

Update Angular with `ng update` so that its migrations run. Keep the spartan brain
and CLI packages on the same version and run its health check after updates:

```sh
npm exec -- ng update @angular/core @angular/cli @angular/cdk angular-eslint
npm exec -- ng generate @spartan-ng/cli:healthcheck --auto-fix --interactive=false
```

See the [Angular update guide](https://angular.dev/update) and
[spartan update guide](https://www.spartan.ng/documentation/update-guide).
