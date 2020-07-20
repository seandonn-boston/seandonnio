Hello visitor, if you're looking for the most recent changes, look in the Dev branch!

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run analyze`

`source-map-explorer \"build/static/js/*.js\" --html ./build/sme-analysis-report.html && xdg-open ./build/sme-analysis-report.html`

This script was specially deisnged to run on Linux Ubuntu operating system.

This script runs source-map-explorer to create a treemap visualization of the minified version of the entire prject, thus giving insight into byte size of the minified project which helps to identify code bloat. Read the README section at [source-hap-explorer](https://www.npmjs.com/package/source-map-explorer) to learn more.

### `npm run predeploy`

This script effectively runs `npm run build` and that's it. If anything, this provides a more logical name of a command to run before the deploy command. This script was added as part of setting up gh-pages with create-react-app, learn more about the setup process [here](https://blog.usejournal.com/how-to-deploy-your-react-app-into-github-pages-b2c96292b18e)

### `npm run deploy`
`npm run build && echo \"seandonn.io\" > ./build/CNAME && gh-pages -d build`

This script was specially designed to ensure gh-pages does not overwrite the CNAME file being generated, and thus this script ensures the website is being deployed to the custom domain and not the gh-pages generated domain.

This script will build the run the build command and then ensure a CNAME file with the appropriate domain name is created within the built project folders.

**WARNING: running the deploy script will deploy the master branch to the homepage domain. Do not use until you are ready to deploy live.**

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
