Learn SSR

Part 1: Base Setup
- Create first react component.
- Set up Express.
- Use React-DOM/server renderToString to convert component into HTML.
- Add express route to response react content.
- Use webpack to transpile JSX, ES6 code into node executable and browser compatible js file.

Part 2: Client boot up setup
- Add re-build and restart run script task using nodemon and webpack watch.
- Existing bundle will not able to provide event handle functionality at client side.
- Add code to generate React App bundle and expose it as public static content.
    - Add webpack to create client bundle.
    - Expose client bundle as express static content.
    - Update express response as HTML template with client bundle.
- Client boot up - Use react hydrate to re-render static HTML to boot up HTML with react handlers.

Part 3: Refactor webpack and scripts
- Use `webpack-merge` to extract common webpack config.
- use `npm-run-all` to run all dev scripts in parallel.
- use `webpack-node-externals` to avoid bundling node_modules lib in server bundle. 
- Modularize server content - file structure for server side react code.

Part 4: Add Navigation
- Use two set of Routing - StaticRouter and BrowserRouter
    - Server side does not have URL access hence StaticRouter
    - Client side have URL access hence BrowserRouter
- Update Express Routes Tier to allow all URL request to React Router Tier.
