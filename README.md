## Content-focused minimal blog template

It is really simple static blog template, based on Markdown files. Every markdown file is a post. Each post will be displayed on the front page.

### Made with

- Gatsby
- Tailwind CSS + Typography
- ❤️

### Quick start

- Clone this repo
- Install all dependencies `npm install`
- For start developing `npm run develop`, running at http://localhost:8000
- Create your posts at `src/posts` folder
- Build your site `npm run build`
- Deploy wherever you want 🤘

### Deploy to Github Pages

- Clone this repo to your github and set new repo name in `gatsby-config.json` in key `pathPrefix`
- Now, when you run `npm run deploy` all contents of the `public` folder will be moved to your repository’s `gh-pages` branch. Make sure that your repository’s settings has the `gh-pages` branch set as the source to deploy from.
- More info [here](https://www.gatsbyjs.com/docs/how-to/previews-deploys-hosting/how-gatsby-works-with-github-pages/)

### Additional info

- [Gatsby Documentation](https://www.gatsbyjs.com/docs/)
- [Tailwind Documentation](https://tailwindcss.com/)
