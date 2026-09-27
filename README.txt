WEBPACK WEBSITE TEMPLATE

A foundational template for JavaScript projects featuring a pre-configured Webpack environment. This setup handles HTML generation, CSS injection, image bundling, and includes a streamlined workflow for deploying directly to GitHub Pages.


PROJECT STRUCTURE

dist/             - Production build output (auto-generated)
src/              - Source code
index.html      - Main HTML template
script.js       - Webpack entry point
style.css       - Global styles
ui.js           - UI/DOM manipulation module
package.json      - Project dependencies and scripts
webpack.common.js - Base Webpack configuration
webpack.dev.js    - Development server configuration
webpack.prod.js   - Production build configuration

--------------------------------------------

FEATURES & CONFIGURATION

This template uses webpack-merge to split configurations into development and production environments. The core configuration (webpack.common.js) includes:

* HTML: Uses HtmlWebpackPlugin to automatically inject scripts into ./src/index.html.

* CSS: Processes .css files using css-loader and injects them into the DOM via style-loader. (Note: CSS must be imported into script.js to be bundled).

* Images & Assets: Uses Webpack's built-in asset/resource module to process .png, .svg, .jpg, .jpeg, and .gif files.

* Auto-Cleaning: Automatically cleans the dist folder upon every new build (clean: true).

--------------------------------------------

NPM SCRIPTS

Run these commands in your terminal to manage the project lifecycle:

* npm run dev: Starts the webpack-dev-server using webpack.dev.js for local development with live-reloading.

* npm run build: Compiles production-ready, minified code into the dist directory using webpack.prod.js.

* npm run deploy: Forces a deployment of the current dist folder directly to the gh-pages branch. This script bypasses standard Git tracking conflicts by isolating the dist tree and pushing it forcefully.\

(Utility Scripts: "npm run gitadd" forcefully stages the ignored dist folder, and "npm run gitqdcommit" generates a generic "quick deploy" commit message. These are largely handled by the primary deploy script).

--------------------------------------------

DEPLOYMENT WORKFLOW

Because the dist folder is intentionally ignored by Git (via .gitignore), standard pushing will not update the live site. To push changes to your GitHub Pages site:

1. Make sure all local changes in src are committed to your main branch.
2. Run "npm run build" to generate fresh files in dist/.
3. Run "npm run gitadd" to forcefully add the dist file, then commit the file or use "gitqdcommit" for a quick commit"
4. Run "npm run deploy" to isolate the built files and force-update the remote gh-pages branch.