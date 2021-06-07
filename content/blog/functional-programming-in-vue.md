---
title: Functional programming in Vue
description: A brief discussion on the state of functional programming in vue. The whys' and the why nots'.
date: 2021-06-07
banner: /fp-vue.svg
author: 
    name: Sambit Sahoo
    github: soulsam480  
tags: vue,functional-programming,clean-code
---
I have been using __Vue__ for a little more that 2 years. There was a time when I was a noobie (I still am) at writing efficient vue code and also unable to understand some of the basic concepts. Even though it has a very small learning barrier, things get pretty easy after you go past it. It's also easy to fall prey to write really messy code. In the context of functional programming in __Vue__, with the latest version i.e. [vue 3](https://v3.vuejs.org) things are very promising. The Vue team is pushing for functional programming with the introduction of the [__Composition API__](https://v3.vuejs.org/api/composition-api.html#composition-api). But things are not the same with __Vue 2.x__. It has the [__Vue constructor__](https://vuejs.org/v2/api/#Vue-extend), which creates a new class based instance of the App on mount. Same goes for Vue components also. In this article we'll discuss about what really is [__Functional Programming__](https://en.wikipedia.org/wiki/Functional_programming), the scope and current scenario of __FP__ in Vue 2.x and 3.x. We'll also go through a few examples in vue and discuss my experiences with it.

### Functional Programming

Let's first discuss what is __Functional Programming__ and why I'm using this word so often in this article. To get started this is not really a new paradigm. It's been there since ages and thrre are many languages which are purely functional. In the case of JavaScript (and TypeScript) too, it's a little bit complicated. To give a basic definition of __FP__, 

> _In computer science, functional programming is a programming paradigm where programs are constructed by applying and composing functions.
It is a declarative programming paradigm in which function definitions are trees of expressions that map values to other values, 
rather than a sequence of imperative statements which update the running state of the program._ -- __Wikipedia__

The first basic concept of FP is __Pure Functions__.

A function is pure when 
- It returns the same result if given the same arguments.
- It doesn't produce any observable side effects.

To get more clarity on the above conditions and also __FP__ visit this amazing [article](https://www.freecodecamp.org/news/functional-programming-principles-in-javascript-1b8fc6c3563f/) on freecodecamp.

### What can be referred to as FP in Vue ?
- Treating Functions as [first-class](https://developer.mozilla.org/en-US/docs/Glossary/First-class_Function) citizens.
- Composition over inheritance
- Composable functions instead of Mixins
- Using the composition API over the Options API

#### Functions as first-class citizens
The idea behind is functions can be treated as any other variable. They can be passed as arguments to other functions, can be assigned to new variables and also returned by another functions. This opens a whole new dimension of advanced programming in JS. We can use currying, closures and many advanced programming patterns in JS. e.g.

```ts
// in Vue 3

const users = ref([]);

const filterUsers = (users: User[], key: string) => {
    return users.filter((user)=> user.id === key)
}

// pass filtering function as an argument
const fetchUsers = async (filterUsers) => { 
    const result = await axios.get('/users');
    return filterUsers(result)
}

console.log(await fetchUsers(filterUsers)) // top level await

```

#### Composition over inheritance
The basic goal is instead of inheriting a __base class__ use can just use specific composable functions for specific tasks. This also explains the usage of composable functions over Mixins e.g.
```ts
// with mixins (a class that inherits Vue constuctor)
// in vue 2
const userMixin = Vue.extend({
  data() {
    return {
      user: {
        name: 'Sambit',
      },
    };
  },
  methods: {
    getName() {
      return this.user.name;
    },
  },
});


// in vue 2 components
export default {
  mixins: [userMixin], // Vue 2 inherits the mixin class here
  mounted() {
    console.log(this.getName());
  },
};

//-------------------------

// with composition API 
// in vue 3 
const getUserName = (user: User) => user.name

// In vue 3 component inside setup() 
const user = ref({name: 'Sambit'});

onMounted(() => getUserName(user.value)) // clean right ?
```
This is not a very practical example but we get the idea right ?

#### Using the Composition API over Options API
__Composition API__ has opened a world of totally new and more efficient, readable way of writing functional code in vue. To understand this let's go through some commonly used patterns in both the Options and Composition API.

```ts
//Options API
export default {
  data() {
    name: 'Sambit';
  },
  computed: {
    getName() {
      return this.name;
    },
  },
  mounted() {
    console.log(this.getName);
    this.setName('Sahoo')
  },
  methods: {
    setName(name: string) {
      this.name = name;
    },
  },
};

//Composition API
export default {
  setup() {
    const name = ref('Sambit');

    const getName = computed(() => name.value);

    const setName = (name: string) => {
      name.value = name;
    };

    onMounted(() => {
      console.log(getName.value);
    });
  },
};
```
From the above example we can see that, code written using the Composition API is much more readable, clean and functional than the Options API code. So we have to use it more to write better, efficient and more functional code.

### Scope of FP in vue

In Vue 3 with the introduction of the new API, __FP__ is easier and approachable than ever. In Vue 2 the same can be achieved by using the standalone [@vue/composition-api](https://github.com/vuejs/composition-api#readme) package. It's under active maintenance by [antfu](https://antfu.me), a Vue core team member. The API is totally similar to the Vue 3 version with some helpers missing. But it does the Job and does it well enough. 

### My experience
I'm learning new things about Vue everyday and after Vue 3 I'm trying to use the new API as much as possible. The experience is great, and it feels really amazing to write Pure JS (Classes don't belong to JS, I feel this way). Functional code is much better to read and write both. Also the IDE intellisense inside the composition API __setup__ function is really fast with the [Volar](https://github.com/johnsoncodehk/volar) Extension. Vue is pretty late to adapt FP as compare to Svelte and React but it's always better late than never. The direction Vue is now going is pretty promising and only on the brighter side.

I also feel that there are many points missed by me. This was more like an introduction to FP in Vue. Thanks for reading. Peace.

##### References
- [article by TK](https://www.freecodecamp.org/news/functional-programming-principles-in-javascript-1b8fc6c3563f/)
- [Wikipedia on FP](https://en.wikipedia.org/wiki/Functional_programming)
- [Functional Programming guide Repo by TK](https://github.com/leandrotk/functional-programming-learning-path)