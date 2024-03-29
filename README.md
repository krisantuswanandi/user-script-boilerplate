# User Script Boilerplate

Boilerplate for Custom [User Scripts](https://wiki.greasespot.net/).

## Installation

- Install [bun](https://bun.sh/) if you haven't `brew install oven-sh/bun/bun`.
- Copy the project with [degit](https://github.com/Rich-Harris/degit) `bunx degit krisantuswanandi/user-script-boilerplate my-script`.
- Install dependencies with `bun install`.
- Run `bun run dev` to start the development server.
- Open [Violentmonkey](https://violentmonkey.github.io/) and choose `Install from URL`.
- Enter `http://localhost:3000/script.user.js`.
- Toggle on `Track external edits` and keep the page open to enable auto updates.

## Distribution

- Run `bun run build` to build the script.
- Copy the content of `dist/script.user.js` to User Script Hosts like [Greasy Fork](https://greasyfork.org/).
- It's recommended to include the `dist` folder in the repository as an alternative for distribution.
