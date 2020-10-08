# hugo-course-publisher

This implements OCW course sites using the [Hugo](https://gohugo.io/) static
site generator.  The content is provided by
[ocw-to-hugo](https://github.com/mitodl/ocw-to-hugo), and CSS and JS is built
for the site using webpack.

## install dependencies

To install this project's dependencies, run the following:

```sh
yarn install --pure-lockfile
```

## importing content from OCW

This repository does not contain any course markdown content. To import a set of example courses from OCW using [`ocw-to-hugo`](https://github.com/mitodl/ocw-to-hugo), you must first set environment variables so we can pull content from AWS.  AWS credentials can be configured by setting the standard `AWS_REGION`, `AWS_ACCESS_KEY`, `AWS_SECRET_ACCESS_KEY`, configuring an instance profile or using configuration files stored in `~/.aws` as documented in the AWS SDK.

If all you need to do is import the example courses for development, simply configure the AWS SDK and run `npm run import:ocw:example_courses`. The rest of this section is only relevant if you are deploying the site.

### env variables

| Variable | Description  | Required? |
| :------- | :------------ | :------------ |
| `AWS_REGION` | The AWS region to connect to, i.e. `us-east-1` | Only if `OCW_TO_HUGO_DOWNLOAD` is true |
| `AWS_BUCKET_NAME` | The bucket to use, i.e. `open-learning-course-data-production` | Only if `OCW_TO_HUGO_DOWNLOAD` is true |
| `AWS_SECRET_ACCESS_KEY` | The secret access key that pairs with your access key | Only if `OCW_TO_HUGO_DOWNLOAD` is true |
| `AWS_ACCESS_KEY` | Your AWS Access Key with access to said bucket | Only if `OCW_TO_HUGO_DOWNLOAD` is true |
| `OCW_TO_HUGO_INPUT` | The input folder of OCW courses and where courses to be processed are downloaded to if using the `import:ocw` command | Yes  |
| `OCW_TO_HUGO_DOWNLOAD` | A boolean flag indicating whether or not to download courses from the specified AWS bucket | No  |
| `OCW_TO_HUGO_COURSES_JSON` | Path to a JSON file with a list of courses to be downloaded, using the format described [here](https://github.com/mitodl/ocw-to-hugo#usage)  | No |
| `OCW_TO_HUGO_STRIPS3` | A boolean flag that will strip the s3 prefix (i.e. `https://open-learning-course-data-production.s3.amazonaws.com`) from all URL's | No |
| `OCW_TO_HUGO_STATIC_PREFIX` | An optional static prefix to replace the s3 prefix with, used in conjunction with `OCW_TO_HUGO_STRIPS3` | No |
| `OCW_TO_HUGO_VERBOSE` | A boolean flag that will enable verbose console output from `ocw-to-hugo` | No |

### import scripts

The following are the various `npm run` scripts for importing data from OCW's `open-learning-course-data` buckets.

| Script | Description  |
| :------- | :------------ |
| `import:ocw:example_courses` | Run this to import the courses in `example_courses.json` directly to the `site/content/courses` folder.  This is useful for importing some example courses for development, and only requires AWS connection info to be set. |
| `import:ocw` | This script runs `ocw-to-hugo` with arguments specified by the environment variables above. |

## running in development

To install and run the site locally you can either use docker or run it
natively.

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
npm start
```

You should be able to navigate to <http://localhost:3000>. You may need the
`--ignore-engines` flag for `yarn`.

## search

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

## single course mode

You can also run site locally for just one course. Instead of the root of the site 
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

## build course zips

Each course renders a "Download Course Materials" button in the course info section.
These archives can be generated using the following command:

```sh
npm run build:zips
```

### env variables

| Variable | Description  | Default Value | Required? |
| :------- | :------------ | :------------ | :------------ |
| `COURSE_ZIPS_DIST_PATH` | The path to output build artifacts to | `dist` | No |
| `COURSE_ZIPS_COURSES_PATH` | The path to source course markdown from | `site/content/courses` | No |
| `COURSE_ZIPS_DESTINATION` | The path to output course zips to | `zips` | No |
| `COURSE_ZIPS_STATIC_ASSET_PATH` | The input folder of OCW courses synced from the bucket specified by `AWS_BUCKET_NAME` to copy static assets from | Unset | No |
| `COURSE_ZIPS_STATIC_PREFIX` | The static prefix used in `ocw-to-hugo` if it was used to generate markdown | Unset | Only if used to generate markdown |

This command will run the webpack and pdfjs build once, then iterate the courses found in 
`/site/content/courses` and run the Hugo build for each of them. Archives are created for 
each course, and when the whole process is done they are placed in `zips` by default, if 
`COURSE_ZIPS_DESTINATION` is not set. If `COURSE_ZIPS_STATIC_ASSET_PATH` is set, static assets 
for each course will be pulled and included. This path will likely be the same thing as 
`OCW_TO_HUGO_INPUT`, as static assets are currently stored alongside master json in the synced 
bucket specified in `AWS_BUCKET_NAME`.  If a static prefix was used for CDN content when running 
`ocw-to-hugo`, you will want to set `COURSE_ZIPS_STATIC_PREFIX` to this value so it matches what 
has been written into the course markdown.

## deployment

This project is set to automatically deploy to Netlify, so every commit
both on the main branch and on PRs will be built and deployed automatically.

The documentation for the production deployment is available [here](https://docs.odl.mit.edu/en/ocw-next/build-server).

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
