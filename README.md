# hugo-course-publisher

This implements OCW course sites using the [Hugo](https://gohugo.io/) static
site generator.  The content is provided by
[ocw-to-hugo](https://github.com/mitodl/ocw-to-hugo), and CSS and JS is built
for the site using webpack.

## installation

To install and run the site locally you can either use docker or run it
natively.

### search

To use the search feature you need set an environment variable to tell the app
where to find the search API. You can write a `.env` file like this:

```
SEARCH_API_URL=http://localhost:8063/api/v0/search/
```

adjust this if your local open-discussions instance lives at a different URL.

You can also use any other means you like to ensure that the variable is set in
the environment where webpack will run.

The Open Discussions application with the search endpoint above also needs to be told to allow CORS requests from the OCW site. The `OPEN_DISCUSSIONS_CORS_ORIGIN_WHITELIST` variable in the Open app should be amended to include the domain of the OCW site. For example,

```
OPEN_DISCUSSIONS_CORS_ORIGIN_WHITELIST=['my-ocw-site.mit.edu']
```

### docker

To run the site in docker you'll need docker and docker-compose. With those in
place you should be able to simply run:

```sh
docker-compose up
```

and the site should be available at <http://localhost:3000>. Note that after the
docker container comes up it may take a few minutes for the hugo site to finish
rendering. This is because we are rendering a pretty large number of Markdown
files, and a few UI elements are particularly heavy to render.

### without docker

If you prefer not to use docker you can also simply do:

```sh
yarn install --pure-lockfile
npm build
npm start
```

You should be able to navigate to <http://localhost:3000>. You may need the
`--ignore-engines` flag for `yarn`. 

### single course mode

You can also run site locally for just one course.. Instead of the root of the site 
being the home page and the course listing being at `/courses`, the root of the 
site is the course home page for the course passed in:

```js
// dev server:
npm run start:single_course -- 18-06-linear-algebra-spring-2010

// build and output to dist:
npm run build:pdfjs
npm run build:webpack
npm run build:hugo:single_course -- 18-06-linear-algebra-spring-2010
```

### build course zips

Each course renders a "Download Course Materials" button in the course info section.
These archives can be generated using the following command:

```sh
npm run build:zips
```

This command will run the webpack and pdfjs build once, then iterate the courses found in 
`/site/content/courses` and run the Hugo build for each of them. Archives are created for 
each course, and when the whole process is done they are placed in `site/static/zips`.

## deployment

For now this project is set to automatically deploy to netlify, so every commit
both on the main branch and on PRs will be built and deployed automatically.

## webpack bundle analysis

We want to try to keep our webpack bundle small, even as were adding some React-based
UI features. To help us keep an eye on it there's some setup for analyzing our webpack
bundle and seeing what's being included and so on.

To run [webpack-bundle-analyzer](https://github.com/webpack-contrib/webpack-bundle-analyzer)
and see a neat visualization of what's taking up space do:

```
npm run webpack:stats
```

this will run a prod build in `./dist` and generate a statistics file in
`stats.json`. Then you can run

```
npm run webpack:analyze
```

to open a visualization of that file. Neat!

## project layout

```
├── build-scripts
├── dist                       // build destination
├── pdfjs                      // PDF.js submodule
├── scripts
├── site                       // hugo site
│   ├── content                // markdown content
│   ├── data
│   ├── layouts                // templates
│   │   ├── courseindex
│   │   ├── courses
│   │   ├── _default
│   │   │   └── _default
│   │   ├── partials
│   │   └── shortcodes
│   ├── public
│   ├── resources
│   │   └── _gen
│   │       ├── assets
│   │       └── images
│   └── static
│       ├── assignments
│       ├── exams
│       ├── images
│       └── related-resources
└── src                        // webpack sources
    ├── css
    │   └── imports
    ├── fonts
    ├── js
    └── webpack
```
