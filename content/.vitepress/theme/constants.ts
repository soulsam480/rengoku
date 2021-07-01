interface Link {
  url: string;
  label: string;
}
interface Project {
  title: string;
  desc: string;
  links: Link[];
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
  },
];
