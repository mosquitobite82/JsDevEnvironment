2017-01-30  Johannes Lindgren  <mosquitobite82@gmail.com>
    * Fully functional up to build and pushed up to github
        Includes:
         - EditorConfig
         - Development Server
         - Fake Production Server (for running prod code)
         - Babel Transpiling
         - Linting with ESLint
         - Automation via npm scripts
         - Webpack Bundling for dev and prod code
         - Polyfills via Fetch
         - Mock data with JsonServer, JsonSchemaFaker
         - Testing with Mocha, jsDOM and chai
         - Continous Integration with TravisCI
        
2017-01-31  Johannes Lindgren  <mosquitobite82@gmail.com>
    * Added following:
        - Bundle splitting for .js files
            One vendor bundle for dependencies
            One main bundle for js files
        - Bundle splitting for .css files
            One for css files
        - Cache busting through file name hashing
            Added to css and js files
