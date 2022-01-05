# CodingChallenge

Welcome to the React coding challenge using [Nx](https://nx.dev).

## Your task

Update the [sidebar component](libs/ui/src/lib/sidebar.tsx) and import it to [the app](apps/webextension/src/app/app.tsx).

Requirements:

- `nx serve webextension` should render your Sidebar component
- `npx nx storybook ui` should display your Sidebar component
- the sidebar component should look as follows
  - The button `Copy to clipboard` should store the text from the above text field in the clipboard

Please use nx' generate commands (see Code scaffolding) in case you want to generate a new component.

Also, please use tailwind to style your components.

## Getting started

1. fork this repo
2. clone your forked repo locally
3. npm install
4. Run `nx serve my-app` for a dev server. Navigate to http://localhost:4200/.
5. In a separate terminal window, run `npx nx storybook ui`. Navigate to http://localhost:4400/.

## Code scaffolding

Run `nx g @nrwl/react:component my-component --project=my-app` to generate a new component.

## Further help

Visit the [Nx Documentation](https://nx.dev) to learn more.
