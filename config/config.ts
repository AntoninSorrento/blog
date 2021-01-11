import { defineConfig } from 'dumi';

export default defineConfig({
  title: '博客',
  mode: 'site',
  navs: [
    {
      title: '程序',
      path: '/programmer',
    },
    {
      title: '英语',
      path: '/english',
    },
    {
      title: 'GitHub',
      path: 'https://github.com/AntoninSorrento/blog',
    },
  ],
  // more config: https://d.umijs.org/config
});
