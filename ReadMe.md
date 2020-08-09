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

Part 5: Integrate Redux and API
- API Documentation - [documentation](https://react-ssr-api.herokuapp.com/)
    - End Points - `/users, /admins, /auth/google, /logout, /current_user, /users/xss`
- Add Redux - store, provider, thunk middleware
- Problems - Server side does not support lifecycle hence return initial rendered react code. 

Part 6: Server side data loading.
- use `react-router-config` library 
    - convert Routes into `routes array`.
    - use `renderRoutes` to create Routes component from `routes array`.
    - use `matchRoutes` to dispatch actions to fetch data before rendering application.
    - use `Promise.all` then render application.

Part 7: Page component file structure - refactoring
- Keep single use component as page component under `pages folder`.
- Reusable component under `components folder`.
- export `{component, loadData}` from page component.

Part 8: Client side re-hydration
- Dump server side redux store into client side store to avoid warning and blank screen.

Part 9: Mitigate XSS attacks
- Use API - [XSS USERS API](https://react-ssr-api.herokuapp.com/users/xss).
- Use `serialize-javascript` library to serialize state.

Part 10: Server side authentication
- JWT cannot use as during initial URL hit we do not have client side code to attach JWT token.
- Use cookie based authentication.
- Use proxy at render server for all api call from browser to handle cookie domain policy error.

Part 11: Axios instances
- For client side API endpoint will be a proxy endpoint `/api`.
- For server side API endpoint will be `API server endpoint`.
    - Also configure client side cookie in server axios instance.
- Use axios instances and thunk extra argument to configure setup.

Part 12: Add App and Header Component 
- Create App component and nested routes under it.
- Create Header component.
- Create auth action and reducer and use `/current_user` api to check status.
- Use `/auth/google` to login and `/logout` to logout.

Part 13: Style pages
- use [materializecss](https://materializecss.com/getting-started.html)

Part 14: Error Handling
- Display `Not Found Page` for routes does not exist.
- Use staticRouters context and respond with 404 in case `Not Found Page` rendered.

Part 15: Admins Page
- Create adminsListPage, action, reducer and routes considering user will be logged in.

Part 16: Promises.all failure
- It will hung browser screen.
- Solution 1 - use `catch` and send `generic error message` - Not an elegant solution.
- Solution 2 - use `catch` and render app without data - Not an elegant solution.
- Solution 3 - map each promise, wrap them around Promise and resolve them before promises.all call.

Part 17: Implement RequireAuth HOC
- Create withRequireAuth HOC which `check auth state`
- If user is authenticated - render AdminsListPage component
- If user is not authenticated - redirect to '/' home page
- `Redirect` from `react-router-dom` does not work at server side.

