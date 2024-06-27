# Nuxt Clippy

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![License][license-src]][license-href]
[![Nuxt][nuxt-src]][nuxt-href]

The Nuxt Clippy module for doing amazing things.

![clippy-agents](https://user-images.githubusercontent.com/3016806/223058578-e4123bc3-0f4b-4913-a15d-d04e8be04525.png)

## Quick Setup

Install the module to your Nuxt application with one command:

```bash
npx nuxi module add nuxt-clippy
```

That's it! You can now use Nuxt Clippy in your Nuxt app ✨


## Actions
All the agent actions are queued and executed by order, so you could stack them.

```javascript
// play a given animation
agent.play('Searching');

// play a random animation
agent.animate();

// get a list of all the animations
agent.animations();
// => ["MoveLeft", "Congratulate", "Hide", "Pleased", "Acknowledge", ...]

// Show text balloon
agent.speak('When all else fails, bind some paper together. My name is Clippy.');

// move to the given point, use animation if available
agent.moveTo(100,100);

// gesture at a given point (if gesture animation is available)
agent.gestureAt(200,200);

// stop the current action in the queue
agent.stopCurrent();

// stop all actions in the queue and go back to idle mode
agent.stop();
```

# Licence
MIT

## Special Thanks
- [lizozom for the clippy typescript implementation](https://github.com/lizozom/clippyts/tree/master)
- [pi0 for the original clippyJS implementation](https://github.com/pi0/clippyjs)
- The [Clippy.JS](http://smore.com/clippy-js) project by [Smore](http://smore.com)
- The awesome [Cinnamon Software](http://www.cinnamonsoftware.com/) for developing [Double Agent](http://doubleagent.sourceforge.net/)
  the program we used to unpack Clippy and his friends!
- Microsoft, for creating clippy :)

## Contribution

<details>
  <summary>Local development</summary>
  
  ```bash
  # Install dependencies
  npm install
  
  # Generate type stubs
  npm run dev:prepare
  
  # Develop with the playground
  npm run dev
  
  # Build the playground
  npm run dev:build
  
  # Run ESLint
  npm run lint
  
  # Run Vitest
  npm run test
  npm run test:watch
  
  # Release new version
  npm run release
  ```

</details>


<!-- Badges -->
[npm-version-src]: https://img.shields.io/npm/v/nuxt-clippy/latest.svg?style=flat&colorA=020420&colorB=00DC82
[npm-version-href]: https://npmjs.com/package/nuxt-clippy

[npm-downloads-src]: https://img.shields.io/npm/dm/nuxt-clippy.svg?style=flat&colorA=020420&colorB=00DC82
[npm-downloads-href]: https://npmjs.com/package/nuxt-clippy

[license-src]: https://img.shields.io/npm/l/nuxt-clippy.svg?style=flat&colorA=020420&colorB=00DC82
[license-href]: https://npmjs.com/package/nuxt-clippy

[nuxt-src]: https://img.shields.io/badge/Nuxt-020420?logo=nuxt.js
[nuxt-href]: https://nuxt.com
