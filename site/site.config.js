export default {
  docs: [
    {
      title: '开始',
      type: 'doc', // 普通文档
      children: [
        {
          title: '快速开始',
          name: 'getting-started',
          path: '/vue/getting-started',
          component: () => import('@/site/docs/getting-started.md'),
        },
        // {
        //   title: '组件概览',
        //   name: 'overview',
        //   path: '/vue/overview',
        //   component: () => import('@common/docs/web/overview.md'),
        // },
      ],
    },
    {
      title: '基础',
      type: 'component', // 组件文档
      children: [
        {
          title: 'Button 按钮',
          name: 'button',
          path: '/vue/components/button',
          component: () => import('@/examples/button/button.md'),
        },
      ],
    },
  ],
};
