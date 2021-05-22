---
title: Conditional class names in Reactjs without pain
description: Using conditional class names in react is a little bit on the bad DX side. There are some npm packages that solve this issue, but you can do this with barely 4-5 lines of code. Let's see how can we do it.
date: 2021-05-22
banner: /react-class.webp
author: 
    name: Sambit Sahoo
    github: soulsam480  
tags: react,helpers,css
---
I've been working on multiple **Reactjs** projects for the last few months. Coming from a strong **Vuejs** background, it wasn't that hard for me to catch the basic concepts of the very popular library. Under the hood they work on the same battle-tested concept i.e. **Virtual DOM**. Even though  **Vue** has support for **JSX**, the experience is far better with **React** . It really feels amazing to write everything with the same language, but there are some trade-offs that are hard to ignore. 


Out of the many reasons why most of the **Vue** developers find it uncomfortable to switch to **React**, conditional rendering is a fairly important one. It's really very intuitive in Vuejs to render something based on some conditions without leaving your **html**. 

```html
<h1 v-if="isDay" >I'm rendered during day</h1>
<h1 v-else>Else I'm rendered</h1>
```
It's also the same experience while doing conditional rendering in React without leaving **JSX** by using the **ternary operator**.
```jsx
{ isDay ?
  (<h1>I'm rendered during day</h1>):
  (<h1>Else I'm rendered</h1>)
}
```
But where the Vue really shines in terms of conditional rendering is when doing it with **css classes**. e.g.

```html
<h1 :class="{'text-red': isRed}" >I'm red.</h1>
<h1 :class="{'text-red': !isRed}" >I'm not red.</h1>
```
The React way with **js template literals** e.g.
```jsx
<h1 className={`${isRed ? 'text-red': ''}`} >I'm red.</h1>
<h1 className={`${!isRed ? 'text-red': ''}`} >I'm not red.</h1>
```

As we can see in above examples, in Vue it's a bit more intuitive to use css classes conditionally. In React it won't be that much troublesome when there are a few number of css classes on a HTML element. But when there are multiple css classes and you want to use selective css classes conditionally, it'll lead to a not-so-good looking code with **template literals**. e.g.

```tsx
<div className={`modal ${!isModal ? 'opacity-0 pointer-events-none' : ''}  fixed w-full h-full top-0 left-0 flex items-center justify-center`}
></div>
```
There is a npm package which solves this issue by providing a helper method to write conditional css classes. You can do the same without installing the package with just 4-5 lines of code.

```ts
export function classNames(classes: Record<string, boolean>) {
  const toBeClasses = Object.keys(classes).map((key) =>
    classes[key] === true ? key : '',
  );
  return toBeClasses.join(' ');
}
```
We can use the helper method to write conditional css classes in a more simpler way i.e.

```tsx
// import {classNames} from './helpers'
<div
    className={classNames({
        'flex items-center justify-center py-2 px-4 rounded-md max-w-xs lg:max-w-2xl drop-shadow-lg transition-all mb-2': true,
        'bg-green-400 text-white': type === 'success',
        'bg-red-400 text-white': type === 'error',
    })}
>
    <div className="text-md font-semibold">{message}</div>
</div>
```
This way it's easier to have control over conditional css classes. The Typescript types can be removed to use this as a Javascript method.

Have a good day with React :atom_symbol:. Peace :peace_symbol: