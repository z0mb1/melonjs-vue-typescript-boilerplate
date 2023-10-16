# melonJS Vue TypeScript Vite Boilerplate
![melonJS Logo](https://github.com/melonjs/melonJS/raw/master/media/Banner/Banner%20-%20Billboard%20-%20Original%20Logo%20-%20horizontal.png)

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://github.com/melonjs/es6-boilerplate/blob/master/LICENSE)

A simple Vue TypeScript Vite based boilerplate to create games with [melonJS](https://github.com/melonjs/melonJS), built with :
- [melonJS 2](https://github.com/melonjs/melonJS)
- [Vue 3](https://github.com/vuejs/core)
- [TypeScript](https://www.typescriptlang.org) structure and semantic
- [Vite](https://vitejs.dev) ultra fast bundler
- melonJS [debug plugin](https://github.com/melonjs/debug-plugin) to display stats on number of objects, memory usage, draw time, frame rate, etc...

Use the power of [Vue 3](https://github.com/vuejs/core) to create user interface (HUD panel, modals, dialogs ets.) with awesome game engine [melonJS 2](https://github.com/melonjs/melonJS).
Boilerplate includes `CustomLoader.vue` component to replace native engine loader.

## Prerequisites

Ensure you have [Node.js](http://nodejs.org/) installed, then install all the build dependencies in the folder where you cloned the repository :

    $ [sudo] npm install

## Usage

- `npm run dev` to start the dev server on watch mode at `localhost:5173`.
- `npm run build` to generate a minified, production-ready build, in the `dist` folder

if everything goes well, on running the dev server for the first time you should see this :
![boilerplate-helloworld](https://user-images.githubusercontent.com/4033090/134762171-6e1fac3d-8b41-4665-890b-daa217ba61dc.png)


## Folder structure

```none

public
 ├── bgm
 ├── fnt
 ├── img
 ├── map
 └── sfx
src
 ├── components
 ├── widgets
 |    └── melonjs-example
 |         ├── components
 |         |    └── CustomLoader
 |         |         ├── CustomLoader.composable.ts
 |         |         ├── CustomLoader.vue
 |         |         └── index.ts
 |         ├── scripts
 |         |    ├── renderables
 |         |    └── stage
 |         ├── HelloWorld
 |         ├── index.ts
 |         └── manifest.ts
 ├── App.vue
 ├── main.ts
 └── style.css
index.html
tsconfig.json
vite.config.ts
```

- `src`
  - the root folder for your game source code
  - The entry file is [main.ts](src/index.ts).
  - [style.css](src/sryle.css) and [index.html](index.html) are default templates that can be customized
  - [manifest.ts](src/widgets/melonjs-example/manifest.ts.ts) is a list of asset to be preloaded by melonJS
- `src/widgets/melonjs-example/scripts`
  - add your source classes here
- `public`
  - where to add your game assets

Debug plugin
-------------------------------------------------------------------------------
The boilerplate include the melonJS plugin, and will automatically import and instantiate it when running under a development environement.

the Debug Panel is hidden by default and can be displayed using the "S" key, see [here](https://github.com/melonjs/debug-plugin/blob/main/README.md) for more details about the plugin.


Questions, need help ?
-------------------------------------------------------------------------------
If you need technical support, you can contact us through the following channels :
* Forums: with melonJS 2 we moved to a new discourse [forum](https://melonjs.discourse.group), but we can still also find the previous one [here](http://www.html5gamedevs.com/forum/32-melonjs/)
* Chat: come and chat with us on [discord](https://discord.gg/aur7JMk)
* we tried to keep our [wikipage](https://github.com/melonjs/melonJS/wiki) up-to-date with useful links, tutorials, and anything related melonJS.


Thank you and Final Note
-------------------------------------------------------------------------------
* Thank you @edmundg for providing a first version of this TypeScript x Vite boilerplate
* TypeScript support in melonJS is still a work in progress, if you notice any TS definition missing you can use `@ts-ignore` to ignore the error message for a specific line, please then please report it [here](https://github.com/melonjs/melonJS/issues)
* if you wish to request for a missing feature in the boileplate, open a ticket [here](https://github.com/melonjs/melonJS/issues) or submit a pull request