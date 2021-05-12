---
title: An introduction to Render Functions in Vue 3
description: " In this article we are going to talk about render functions, the
  hidden gem of Vue. We'll talk about how it works behind the scenes of template
  tags, how the API has changed from Vue 2 and how to use them in Vue 3. "
date: 2020-12-03
author: 
   name: Sambit Sahoo
   github: soulsam480 
banner: /vue-js-render.jpeg
---
Evan You released the 3<sup>rd</sup> version Vuejs, `One Piece` on 18<sup>th</sup> of September this year. This release is the most awaited version of Vue with new additions like the Composition API, Teleport, Fragments to name a few. This version comes with the promise to support typescript better which will improve the developer experience drastically. The core library also got split into multiple packages to bring the support for tree shaking and also reduces the size. There are quite a number of [breaking changes](https://v3.vuejs.org/guide/migration/introduction.html#breaking-changes) in this version, which was expected as it will make developing apps easier. The Vue ecosystem is not completely supporting the latest version, but it's a work in progress as most of the core ecosystem libraries are in `rc`. In this article we are going to talk about render functions, the hidden gem of Vue. We'll talk about how it works behind the scenes of template tags, how the API has changed from Vue 2 and how to use them in Vue 3. 

So what are render functions in Vue? Render functions create the virtual DOM which in turn is used to render the DOM and keep it updated. These work behind the scene of template tags and convert each element and piece of text to Virtual DOM nodes. Vue tracks changes in the virtual node and keeps the browser DOM updated by rendering the required HTML. 

Now the question arises why do we need  a virtual DOM and why not change the DOM directly ? In practice it's hard and inefficient to change particular nodes inside the DOM directly. The presence of virtual DOM nodes make it easy and efficient to track and update specific nodes.

Enough talk, now let's have a look at a simple implementation of render functions!!

```javascript
// from vue 3 docs
// https://v3.vuejs.org/guide/render-function.html#the-dom-tree

render() {
  return Vue.h('h1', {}, 'from render function')
}
```

Here we are creating a VNode of the  `h1` tag and rendering the text `from render function`.

The `h()` function is the render function which takes 3 arguments and returns a VNode:

```javascript
// @returns {VNode} 
//from vue 3 docs https://v3.vuejs.org/guide/render-function.html#h-arguments

h(
  // {String | Object | Function } tag
  // An HTML tag name, a component or an async component.
  // Using function returning null would render a comment.
  //
  // Required.
  'div',

  // {Object} props
  // An object corresponding to the attributes, props and events
  // we would use in a template.
  //
  // Optional.
  {},

  // {String | Array | Object} children
  // Children VNodes, built using `h()`,
  // or using strings to get 'text VNodes' or
  // an object with slots.
  //
  // Optional.
  [
    'Some text comes first.',
    h('h1', 'A headline'),
    h(MyComponent, {
      someProp: 'foobar'
    })
  ]
)
```

As we can see above a render function can return a single VNode or multiple children VNodes. 

If we go the other way around, and have a look at how `template` tags are converted to VNodes using  render functions behind the scenes.

```html
<template>
  <div>
    <h1>Render Functions are awesome</h1>
    <p>Some text</p>
  </div>
</template>
```

this will get converted to

```javascript
h("div", {}, [
   h("h1", {}, "Render Functions are awesome"),
   h("p", {}, "Some text")
]);
```

Now let's have a look at how the API has changed from Vue 2.

In 2.x, the `render` function would automatically receive the `h` function (which is a conventional alias for createElement() ) as an argument:

```javascript
// Vue 2 Render Function Example
export default {
  render(h) {
    return h('div')
  }
}
```

In 3.x, `h` is now globally imported instead of being automatically passed as an argument.

```javascript
// Vue 3 Render Function Example
import { h } from 'vue'

export default {
  render() {
    return h('div')
  }
}
```

for more info on how the API has changed visit [Render Function API](https://v3.vuejs.org/guide/migration/render-function-api.html#render-function-api). And for more on how to use `Render Functions` in Vue 3, visit [Render Function Guide](https://v3.vuejs.org/guide/render-function.html)

So when to use `Render Functions` then? The Vue team still recommends to use template tags for applications. The need for render functions arrive when the full programmatic power of javascript is needed, i.e. to have more control over the rendering of an application. Render functions are extremely useful for developing Vue libraries and also used by some.

Thank you for reading !! Peace ✌🏼

<small>Snippets from Vue 3 and Vue 2 Docs. Image from snipcart.io</small>