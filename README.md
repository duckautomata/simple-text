# simple-text

Renders text input to DOM output

## Tech Used

- Node 22
- Vite to run locally
- React18
- MUI 5

## Running Locally

1. Have Node 20 or later installed
2. Clone the repo locally
3. Run `npm install` to install dependencies
4. Run `npm run dev` and open the site it gives you. It should be next to `Local: <site link>`

Every time you save, Vite will automatically refresh the cache and the site should refresh with the new changes.

## Building a new release

This repo holds the dev code. The release code is stored on the `duckautomata.github.io` repo.
I do it this way to ensure that I only have one GitHub Pages repo. And it makes it easier to integrate all apps and make it look consistent.

### Release Process

Once a new version of the app is ready to go.

1. Run `npm run build`
2. Copy the contents of `/dist` and paste them into this repos folder over in the `duckautomata.github.io` repo.
3. Push changes to a new branch and open a PR.
4. Once PR is merged. Changes should be released.
