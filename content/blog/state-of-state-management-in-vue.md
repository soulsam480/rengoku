---
title: State of state management in Vue
description: Let's have a look at the current scenario of state management in Vue 3 and why you may not need a separate library to do it.
date: 2021-07-14
banner: /state-of-state.svg
author: 
    name: Sambit Sahoo
    github: soulsam480  
tags: vue,state,composition-api,discussion
---
While developing a middle to large scale project, you'll need some kind of global state down the road and to organise and manage the state you may go for some state management library. If we compare the current state management libraries across various front-end frameworks, there are multiple options to choose from. Every library is built upon a specific philosophy to solve a specific problem. TBH I think it should be pattern instead of philosophy. Among these patterns the __Flux__ pattern/architecture is quite common and has been implemented in `Vuex` and `Redux`, and both of them are quite popular in their framework scope. 

`Vuex` is the preferred and go to state management setup while working with Vue applications. It's actively maintained by the Vue core team and the major `v4` of the library just went stable a few months ago. If we look from the `Flux` point of view I think vuex implements the pattern as effectively as possible and they also did a great job with the API. I mentioned __as effectively as possible__ because `Flux` by design brings some limitations and same goes for __vuex__ too. Let's have a look at the current limitations with __Vuex__ that I faced frequently

- __Typescript__ support

This is a quite common issue which many developers face. Some might say it's a trivial issue but I feel that DX should be good regardless of the language and it should be definitely good when there is scope for improvements. Let's have a brief look at the issue.

```ts
// in store.ts
const store = createStore({
  state() {
    return {
      count: 0, 
    };
  },
  mutations: {
    increment(state) {
      state.count++; // types will be inferred
    },
  },
  getters: {
    doubled(state) {
      return state * 2; // types will be inferred
    },
  },
});
```
```vue
<!-- in component.vue -->
<script>
export default {
  computed: {
    ...mapGetters({
      doubled: 'doubled', // types will not be inferred
    }),
    getDoubled(): number {
      return this.$store.getters.doubled; // specifying return type
    },
  },
};
</script>
```
Without specifying the return type, we won't be able to get intellisense from the IDE. This is quite cumbersome while working with __ts__. There is really no way in vuex to get type inference without complex setup.

- Mutations and Actions as __string__

While dispatching an action or committing a mutation, there are two approaches as mentioned below

```vue
<script>
export default {
  methods: {
    ...mapMutations({
      increament: 'increament',
    }),
    inc() {
      this.$store.commit('increment');
    },
  },
};
</script>
```
Same goes here too, there is a plenty of room to make mistakes while committing a mutation. We can misspell the mutation/action and boom, there is an error. By design Vuex doesn't allow us to restrict/type the mutation/action and thus making the app more prone to errors and bugs.

- Nested and namespaced modules

I never liked the concept of namespaced modules. It's really difficult after a certain scale to manage many files i.e. state, mutation, getters, actions etc. for different modules. It's also quite verbose while consuming namespaced modules, I don't like it and most people don't I think. 

There are some of the issues I faced frequently while workng with vuex. Before Vue 3 was released, there wasn't any concrete solution to these above mentioned issues. Vue 3 brought __composition API__ and oh boy, that alone solved most of the issues. [Pinia](https://pinia.esm.dev/) is an appropriate implementation of the new API for state management and it addresses the issues with vuex quite effectively and offers great DX.

Pinia takes a very functional approach to write and consume global state in Vue. It's really simple and intuitive to write and read. e.g. 

```ts
// from pinia docs
// in ts types will be inferred automatically
import { defineStore } from 'pinia'

export const useTodoStore = defineStore({
  id: 'todos',
  state: () => ({
    /** @type {{ text: string, id: number, isFinished: boolean }[]} */ // for js files
    todos: [],
  }),
  getters: {
    finishedTodos(state) {
      // autocompletion! ✨
      return state.todos.filter((todo) => todo.isFinished)
    },
    unfinishedTodos(state) {
      return state.todos.filter((todo) => !todo.isFinished)
    },
  },
  actions: {
    // any amount of arguments, return a promise or not
    addTodo(text) {
      // you can directly mutate the state
      this.todos.push({ text, id: this.nextId++, isFinished: false })
    },
  },
})
```
to consume just call the function, this can be also called inside normal ts/js files
```ts
  setup() {
    const { finishedTodos } = useTodoStore(); // full type support
  },
```
The functional approach allows IDEs to provide rich intellisense and it's also easier to work with. There is also official devtools support and from my experience that works great. The API is very similar to __Vuex 5__ as it was designed to test a proposal for the same. Learn more about pinia [here](https://pinia.esm.dev/).

Now we come to the question do we really need a state management library ? With the new composition API it's pretty easy to achieve the same results with just a few lines of code. Let's see how. Just a disclaimer, this won't provide the DX and reliability of libraries like __pinia__ as a lot goes into writing a library. This is one of the many approaches that can possibly fulfill the needs.

We'll be using Vue 3's __provide/inject__ API and due to composition API, a global provider can be reactive and can be watched for changes as well. Let's see how

```ts
// from furikaeru
//types
type AlertAPI = {
  set: (alert: Alert) => void;
  remove: (id: string) => void;
  alerts: ComputedRef<Alert[]>;
};

const AlertKey: InjectionKey<AlertAPI> = Symbol();

const alerts = ref<Alert[]>([]);

export const getAlerts = computed(() => readonly(alerts.value));

export interface Alert {
  message: string;
  icon?: string;
  id?: string;
  type: 'success' | 'danger' | 'warning';
}

export function setAlerts(alert: Alert) {
  if (alerts.value.find((el) => el.message === alert.message)) return;
  alerts.value.push({ ...alert, id: uuid() });
  setTimeout(() => {
    if (alerts.value.length > 0) {
      alerts.value.shift();
    }
  }, 5000);
}

export function removeAlert(id: string) {
  const alertIndex = alerts.value.findIndex((el) => el.id === id);
  if (alertIndex === -1) return;
  alerts.value.splice(alertIndex, 1);
}

export function useAlert() {
  return inject(AlertKey) as AlertAPI;
}
```
As we can see above, the __useAlert__ composable returns the __reactive__ alert state and some methods to mutate it. The methods can also be promises too. The reactive instance is being provided to the app instance and can be injected with the composable. This is being used in production in [Furikaeru](https://furikaeru.sambitsahoo.com) and works like a charm. This can be extended to provide many functionalities and sky is the limit for improvements.

I like the way __Vue__ is moving towards a functional style of writing apps and it's really great. Thanks for reading. Peace :green_heart:  