---
title: Why I'm moving to Typescript!
description: I have been a Javascript user for about three years. My first line of
  code was in javascript. I love writing code in Javascript because of its
  simplicity and adaptability. Javascript has escaped the browser long ago
  thanks to Nodejs and Ryan Dahl and there are possibly a few devices that can't
  run js. It feels great to write the front end and backend of an application in
  the same language regardless of it's size. Also, the community support of
  javascript and all the frameworks based on it is immense. Big tech companies
  to small startups you name it all use javascript in some part of their
  product/service. So It's not easy to run away from javascript.
date: 2020-10-08
author: 
   name: Sambit Sahoo
   github: soulsam480 
banner: /ts-baner.webp
---
I have been a Javascript user for about three years. My first line of code was in javascript. I love writing code in Javascript because of its simplicity and adaptability. Javascript has escaped the browser long ago thanks to Nodejs and Ryan Dahl and there are possibly a few devices that can't run Js. It feels great to write the front end and backend of an application in the same language regardless of it's size. Also, the community support of javascript and all the frameworks based on it is immense. Big tech companies to small startups you name it all use javascript in some part of their product/service. So It's not easy to run away from javascript.

I came to know of Typescript a year ago or less. I didn't know much about it as I never came to use it before. So after getting a bit familiar with Vue, I thought of learning React. Like Vue, I tried to learn React by myself, and in the process, I found that React is more intuitive with Typescript. For those who don't know of React, it uses a flavor of Javascript which is `JSX`. JSX makes it possible to write HTML in Javascript. It's not some alien stuff, just javascript combined with HTML. I went through a couple of youtube tutorials on React and I noticed that when wrote with `TSX`(Typescript counterpart of JSX) it's more error-proof, intuitive and the overall experience of coding is good.
So I hopped on to learn Ts. Typescript is not a new language, it's more like a superset of Javascript. Any valid Javascript code is valid in Ts. To understand the need for Typescript we have to find out what are the problems with Javascript.

So if anybody is familiar with statically typed languages like Java and C, should have noticed that there is no such thing as type declarations in Javascript. Javascript is a dynamically typed language i.e. a variable which has a string value can be reassigned to number value and Js won't through an error. But in production or runtime, there may be unknown errors. Writing and using classes in Js is pain. Ts makes it more easy and intuitive to work with classes and modules support. Documenting a codebase in Js is also hard, ex.

```javascript
/**
 * @param {object} user 
 * 
*/

function yolo(user){
    console.log(user.name)
    console.log(user.email)
}

const user1 = "sambit"

yolo(user1) // IDE won't warn us here but this will throw 
// an error in runtime
```

As we can see that even with JsDoc there is no way our editor can warn us if we pass the user parameter as a string.

But with Ts this is possible

```javascript
interface User{
    name:string,
    email:string
}

function yolo(user:User){
    console.log(user.name)
    console.log(user.email)
}

const user1 = "sambit"

yolo(user1) 
// here Ts will throw an error because the type of user doesn't match
// the required type.

const user2:User = {
    name:"sambit",
    email:"sambit@yd.com"
}
```

As we can see above the constant `user2`is assigned a type of `User` by type assertion. So Ts knows that user1is of User type and the function yolo accepts user parameter which has the type User. As a result, there won't be any runtime error.
But if we try to do this

```javascript
const user2:User = {
    name:"sambit",
    email:"sambit@yd.com",
    age: 21,
}
```

Ts will throw an error as there is no property age defined in the User interface. This will make the development process error-free and the experience will be great.

The main purpose of Ts is to provide type definitions so that there will be fewer runtime errors. With type definitions, we will be knowing what type of parameters a function accepts, and that will lead to a clean codebase.

It's been about two months since I started using Ts in my projects. The experience has been great. Ts is not fully integrated into Vue 2.x so there are some problems during development. But Vue 3.0.0 is completely written in Typescript. This means you don't need any additional tooling to use TypeScript with Vue 3 - it has first-class citizen support. With React, the experience is great. In my backend projects, I'm slowly starting to use Ts. I'm also migrating my old codebases in Javascript to Typescript.

Typescript has revolutionized the Javascript development scenario. Microsoft has done a great job in creating Ts and it's also open-source. It's in active development and a new version comes out in regular intervals. Ending this post with an amazing comment from Ryan Dahl (the creator of Nodejs) 

> "I'm convinced that Typescript is future version of Javascript."

Thank you for reading. Peace ✌🏼.

###### image from www.positronx.io