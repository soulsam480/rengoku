---
title: Introducing PDF Donkey
description: A fast, free and open-source alternative to PDF Donkey with support for self hosting.
date: 2021-05-29
banner: /pdf-donkey.svg
author: 
    name: Sambit Sahoo
    github: soulsam480  
tags: welcome,pdf-donkey,open-source
---

[__Project__](https://donkey.sambitsahoo.com) | [__GitHub Repo__](https://github.com/soulsam480/pdf-donkey) | [__Product Hunt__](https://www.producthunt.com/posts/pdf-donkey?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-pdf-donkey) | [__Changelog__](https://github.com/soulsam480/pdf-donkey/blob/master/CHANGELOG.md)

It's been a couple of months since I joined **Evidev LLP** (Where i work). In some of our projects we use **PDF Monkey** for generating PDFs and templating. It's a very popular service and fairly cheap I guess. While working with PDF Monkey and integrating it's APIs, I noticed a couple of things. 

- It doesn't have a **Rich text editor** for editing templates.
- There is no support code formatting.

While the later is not big of an issue, I felt that the need for a **Rich text editor**. It'll lead to better __UX__ because 

- Most of the **bussiness guys** won't have to write code (it'll make their life easier).
- The readability will increase exponentially as there will be less _HTML_ or _Liquid_ syntax to be confused.
- Formatting the template will be much easier (say bye bye to custom _CSS_).
- There will be less chances of **template errors** (forgot a closing tag, we don't have that here).

From the above points, we can see that it's not big of a feature (A _Rich text editor_) to implement. But writing templates directly has some advantages too.

- Flexibility of writing custom __CSS__.
- Developer friendly (We can't leave them).

After going through the features of _PDF Monkey_, I felt that why not build a _open-source_ version of this one. I can add all the extra features that I have in my mind and it'll also be a good learning experience. 

## Stack

Then I started finalizing the _Stack_ that will be used in building __PDF Donkey__ (Yes that's the name 😅). It's as follows

### Backend

- Expressjs
- SQLite 3
- TypeORM
- TypeScript
- Routing Controllers
- Google OAuth 2 / JWT tokens
- Liquidjs (for templating)
- Node-html-pdf (for generating PDF)

### Frontend

- Reactjs
- Tailwind CSS
- TypeScript

I didn't use __PostgreSQL__ because it's not required (I don't think we have that much traffic on the site) and it's not that hard to setup _Postgres_ if someone wants to self-host Donkey.

## Status of the project ![GitHub package.json version (branch)](https://img.shields.io/github/package-json/v/soulsam480/pdf-donkey/master)

There are many features that have been implemented completely (and more coming). A couple of them are listed below

- Full support for templates.
- Template syntax highlighting and auto-formatting.
- Rich template editing.
- PDF generation through API keys and directly from the platform.
- Profile update.

As the time of writing, Donkey is in _**alpha**_. Not completely ready for production but it can be used to test the platform. Donkey is also licensed under __MIT__, it's free for everyone to use. Any kind of contribution is welcome.

Thanks for reading ✌️. Peace ☮️