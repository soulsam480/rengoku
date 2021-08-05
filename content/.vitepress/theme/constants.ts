interface Link {
  url: string;
  label: string;
}
interface Project {
  title: string;
  desc: string;
  links: Link[];
  stack: string[];
}

export const myGithub = 'https://github.com/soulsam480/';

export const projects: Project[] = [
  {
    title: 'PDF Donkey',
    desc: 'Generate PDFs on the fly with fully customizable templates, Rich editing experience and template variables. ',
    links: [
      {
        url: 'https://donkey.sambitsahoo.com',
        label: 'site',
      },
      {
        url: 'pdf-donkey',
        label: 'github',
      },
    ],
    stack: ['reactjs', 'expressjs', 'postgreSQL', 'typescript'],
  },
  {
    title: 'Furikaeru',
    desc: 'Furikaeru is a small PWA for retro discussion. It features a simple kanban board with support for public/private boards.',
    links: [
      {
        url: 'https://furikaeru.sambitsahoo.com',
        label: 'site',
      },
      {
        url: 'furikaeru',
        label: 'github',
      },
    ],
    stack: ['vue 3', 'expressjs', 'socket.io', 'postgreSQL', 'typescript'],
  },
  {
    title: 'BillBird',
    desc: 'BillBird is a suite of applications for complete bussiness management with inventory, customers, suppliers management and Ledger.',
    links: [
      {
        url: 'https://beta.billbird.in',
        label: 'site',
      },
    ],
    stack: ['vue 3', 'typescript'],
  },
  {
    title: 'Noter',
    desc: 'Noter is an open source note taking and sharing platform built with Vuejs and Firebase. It has various types of text formatting features with realtime note update across multiple devices.',
    links: [
      {
        url: 'https://noter.sambitsahoo.com',
        label: 'site',
      },
      {
        url: 'noter',
        label: 'github',
      },
    ],
    stack: ['vue 2', 'firebase', 'typescript'],
  },
  {
    title: 'Ecom CMS',
    desc: 'A CMS built on top of Vuejs and Firebase which can be used to manager E-commerce applications.',
    links: [
      {
        url: 'https://admin.sambitsahoo.com',
        label: 'site',
      },
      {
        url: 'ecom-cms',
        label: 'github',
      },
    ],
    stack: ['vue 2', 'firebase', 'javascript'],
  },
  {
    title: 'Dango',
    desc: 'Dango is an attempt to create functional routing controllers for express.',
    links: [
      {
        url: 'dango',
        label: 'github',
      },
    ],
    stack: ['expressjs', 'typescript'],
  },
  {
    title: 'June',
    desc: 'A social networking site wit certain limitations. (ongoing)',
    links: [
      {
        url: 'https://junev2.netlify.app',
        label: 'site',
      },
      {
        url: 'junev2',
        label: 'github',
      },
    ],
    stack: ['reactjs', 'expressjs', 'typescript', 'mongodb'],
  },
  {
    title: 'Kumo',
    desc: 'Personal cloud for files with a web app to manage files (ongoing)',
    links: [
      {
        url: 'kumo',
        label: 'github',
      },
    ],
    stack: ['vue 3', 'expressjs', 'typescript', 'aws s3'],
  },
  {
    title: 'Shoyo',
    desc: 'Shoyo is a light and minimal CSS library written for personal projects.',
    links: [
      {
        url: 'https://shoyo.sambitsahoo.com',
        label: 'site',
      },
      {
        url: 'shoyo',
        label: 'github',
      },
    ],
    stack: ['sass'],
  },
  {
    title: 'Ecom test',
    desc: 'A complete E-commerce web application with a simple UI with many useful features.',
    links: [
      {
        url: 'https://store.sambitsahoo.com',
        label: 'site',
      },
      {
        url: 'ecom-test',
        label: 'github',
      },
    ],
    stack: ['vue 2', 'firebase', 'javascript'],
  },
  {
    title: 'WebRTC Chat',
    desc: 'A voice and text chat app using WebRTC for realtime connection and Websockets for signaling server',
    links: [
      {
        url: 'https://rtc.sambitsahoo.com',
        label: 'site',
      },
      {
        url: 'ws-wrtc-client',
        label: 'github',
      },
    ],
    stack: ['vue 3', 'expressjs', 'webRTC', 'socket.io', 'typescript'],
  },
  {
    title: 'Shoyify',
    desc: 'Shoyify is a vue 3 component library built with typescript.',
    links: [
      {
        url: 'https://shoyify.sambitsahoo.com',
        label: 'site',
      },
      {
        url: 'shoyify',
        label: 'github',
      },
    ],
    stack: ['vue 2', 'firebase', 'typescript'],
  },
];
