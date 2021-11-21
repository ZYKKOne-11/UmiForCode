/**
 * src目录下的可以直接写
 * src/pages目录下可以直接写
 * src/components目录下的可以直接写
 */

export const pageRoutes = {
  path: '/',
  component: '@/layouts',
  routes: [
    { path: '/', redirect: '/overview' },
    {
      path: '/overview',
      component: 'overview',
      title: '个人数据',
      icon: '',
      access: '/overview'
    },
    {
      path: '/task',
      component: 'task',
      title: '任务计划',
      icon: '',
      access: '/task',
      routes: [
        { path: '/', redirect: 'task/task-plan' },
        {
          path: '/task/task-plan',
          component: 'task/TaskPlan',
          title: '今日计划',
          icon: '',
          access: '/task/task-plan'
        },
        {
          path: '/task/task-history',
          component: 'task/TaskHistory',
          title: '历史',
          icon: '',
          access: '/task/task-history'
        }
      ]
    },
    {
      path: '/hotel',
      component: 'hotel',
      title: '客栈',
      icon: '',
      access: '/hotel',
      routes: [
        { path: '/', redirect: 'hotel/hotel-board' },
        {
          path: '/hotel/hotel-board',
          component: 'hotel/HotelBoard',
          title: '排行榜',
          icon: '',
          access: '/hotel/hotel-board'
        },
        {
          path: '/hotel/hotel-studyguide',
          component: 'hotel/HotelStudyGuide',
          title: '学习指南',
          icon: '',
          access: '/hotel/hotel-studyguide'
        },
        {
          path: '/hotel/hotel-studyroad',
          component: 'hotel/HotelStudyRoad',
          title: '学习路线',
          icon: '',
          access: '/hotel/hotel-studyroad'
        }
      ]
    },
    {
      path: '/other',
      component: 'other',
      title: '其他',
      icon: '',
      access: '/other',
      routes: [
        { path: '/', redirect: '/other' },
        {
          path: '/other1',
          component: 'other',
          title: '暂未开放',
          icon: '',
          access: ''
        },
        {
          path: '/other2',
          component: 'other',
          title: '暂未开放',
          icon: '',
          access: ''
        }
      ]
    },
    {
      path: '/setting',
      component: 'setting',
      title: '设置',
      icon: '',
      access: '/theme-setting',
      routes: [
        {
          path: '/personal-settings',
          component: 'setting/PersonalSetting',
          title: '个人设置',
          icon: '',
          access: '/personal-settings'
        },
        {
          path: '/theme-setting',
          component: 'setting/ThemeSetting',
          title: '主题设置',
          icon: '',
          access: '/theme-setting'
        },
      ]
    },
  ]
}

export const headRoutes = {
  path: '/',
  component: '@/layouts',
  routes: [
    {
      path: '/hotInfo',
      component: 'hotInfo',
      title: '热点资讯',
      icon: '',
      access: '/hotInfo'
    },
    {
      path: '/setting',
      component: 'setting',
      title: '设置',
      icon: '',
      access: '/theme-setting',
      routes: [
        {
          path: '/personal-settings',
          component: 'setting/PersonalSetting',
          title: '个人设置',
          icon: '',
          access: '/personal-settings'
        },
        {
          path: '/theme-setting',
          component: 'setting/ThemeSetting',
          title: '主题设置',
          icon: '',
          access: '/theme-setting'
        },
      ]
    },
  ]
}

const route = [
  { path: '/login', component: './login' },
  // { path: '/hotNews', component: './hotInfo' },
  // { path: '/setting-ThemeSetting', component: './setting/ThemeSetting' },
  { ...pageRoutes },
  { ...headRoutes }
]

export default route
