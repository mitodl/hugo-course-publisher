# hugo-course-publisher
This project aims to facilitate the creation of a static course website using the following technologies:

- [Hugo](https://github.com/gohugoio/hugo)
- [Netlify CMS](https://github.com/netlify/netlify-cms)
- [Netlify GoTrue](https://github.com/netlify/gotrue)
- [Netlify Git Gateway](https://github.com/netlify/git-gateway)

# Prerequisites
- docker
- docker-compose

# Environment variables
A number of environment variables are required for gotrue and git-gateway to function properly.  These can be set in .env files in the `gotrue` and `git-gateway` submodule folders, respectively.

## gotrue
`GOTRUE_JWT_SECRET` - `string` **required**
A secret used to sign JWT tokens, used to communicate with git-gateway.  This must be the same secret used by git-gateway.

`GOTRUE_JWT_EXP` - `number`
How long tokens are valid for, in seconds. Defaults to 3600 (1 hour).

`GOTRUE_JWT_AUD` - `string`
The default JWT audience. Use audiences to group users.

`GOTRUE_DB_DRIVER` - `string` **required**
Chooses what dialect of database you want. Must be `mysql` for now, postgres support will be added at a later date.

`DATABASE_URL` - `string` **required**
Connection string for the database.

`GOTRUE_API_HOST` - `string`
Hostname to listen on.  In order to work with this docker configuration, the value must be `0.0.0.0` to listen on all interfaces.

`PORT` - `number`
Port number to listen on.  This defaults to `8081`, and if you decide to change it you must also change the nginx configuration to point at whatever you set it to.

`GOTRUE_SITE_URL` - `string`
The base URL your site is located at. Currently used in combination with other settings to construct URLs used in emails.

`GOTRUE_LOG_LEVEL` - `string`
Controls what log levels are output. Choose from panic, fatal, error, warn, info, or debug. Defaults to info.

`GOTRUE_OPERATOR_TOKEN` - `string`
The shared secret with an operator (usually Netlify) for this microservice. Used to verify requests have been proxied through the operator and the payload values can be trusted.

`GOTRUE_DISABLE_SIGNUP` - `bool`
When signup is disabled the only way to create new users is through invites. Defaults to false, all signups enabled.

`GOTRUE_MAILER_AUTOCONFIRM` - `bool`
If you do not require email confirmation, you may set this to true. Defaults to false.

## git-gateway
`GITGATEWAY_JWT_SECRET` - `string` **required**
A secret used to sign JWT tokens, used to communicate with gotrue.  This must be the same secret used by gotrue.

`GITGATEWAY_DB_DRIVER` - `string`
Chooses what dialect of database you want. Must be `sqlite3` for now.

`GITGATEWAY_API_HOST` - `string`
Hostname to listen on.  In order to work with this docker configuration, the value must be `0.0.0.0` to listen on all interfaces.

`PORT` - `number`
Port number to listen on.  This defaults to `9999`, and if you decide to change it you must also change the nginx configuration to point at whatever you set it to.

`GITGATEWAY_GITHUB_ENDPOINT` - `string`
A fully qualified URL to a Github API, i.e. `https://github.mit.edu/api/v3`.

`GITGATEWAY_GITHUB_ACCESS_TOKEN` - `string` **required**
A personal access token from a Github / Github Enterprise account.

`GITGATEWAY_GITHUB_REPO` - `string` **required**
A repository to use with Git Gateway.

# Running locally
To run the example course hugo site locally, open a terminal at the root of the repository and run `docker-compose up --build`.  Once the server is running, the hugo site will be available at http://localhost:8000/, and Netlify CMS will be available at http://localhost:8000/admin.

# Content management
As detailed in the environment variables that need to be set, you define the repo that git-gateway connects to using the `GITGATEWAY_GITHUB_REPO` variable.  This value also needs to be used in `.gitmodules` in the root of the project.  The last submodule in the list looks like this:

```
[submodule "content"]
	path = app/site/content
	url = git@github.mit.edu:gumaerc/git-gateway-testing.git
```

Change the value of URL in this field to point to your repo where you will store your content.  This repsoitory must contain a blank `_index.md` file for the course home page and an empty `sections` folder at a minimum.  If everything is set up properly, you should be able to edit the course home page content and arbitrarily add as many sections as you want.  Currently, only Title and Body fields are supported, however, front matter can be added to any page by switching to markdown view in the wysiwyg editor and placing the YAML at the top of the page like so:
```
---
menu:
  main:
    weight: 40
---
```
This metadata will not be loaded back into the editor if you bring the page up for editing again, but when you save the page all front matter properties you enter will be merged with other front matter being set by other widgets (such as Title) into the resulting markdown.