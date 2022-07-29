# Bitburner in TypeScript (VSCode)

Want to get started learning how to dev in TypeScript? [Check out my YouTube channel for tutorial videos](https://www.youtube.com/channel/UCJmUpPQWyY78qQUnGBDhH2A)

## Setup
1. [Download and install typescript](https://www.typescriptlang.org/download)
1. `git clone` this repository and open it in VSCode.
1. `npm install` 
1. Install the Bitburner for VSCode extension from the Marketplace and set it up. Have it watch the `build` directory - that's where your finished work will be.
1. Run `npm run build`
1. Verify the files were copied into BitBurner by typing `run runtimes/launcher.js` in the console.

## Config
1. *tsconfig.json* - If you map the folder structure you'd like to see in the game via the `paths` section of this file, it will reduce or eliminate your importing issues, but this isn't strictly required. TypeScript is pretty smart.
1. *package.json* - Under scripts, you can see the available commands you may use. prefix these with `npm run`. The most common of these that you'll use is `npm run re` - which rebuilds the project from scratch and pushes the entire thing into BitBurner.

## Directories
- `src` - the root directory. all of your code lives here.
- `resources` - these files are copied as-is into the game. You'll notice that this installer has a bunch of javascript files in this folder - we'd just like those to end up inside BitBurner without TypeScript being involved. 
