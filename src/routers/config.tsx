import React, { lazy } from 'react';
const  PermissionManage = lazy(() => import('@/components/PermissionManage/Index'));
const  BasicLayout = lazy(() => import('@/containers/BasicLayout/index'));
const config = [
  {
     path: '/',
     component: BasicLayout, 
     childRoutes:[
                {
                  path: '/home',
                  name: 'home主页',
                  component: PermissionManage,
      }]
  },
];

export default config;
