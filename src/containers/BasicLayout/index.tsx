import React from 'react';
import { Layout } from 'antd';
import MainHeader from '@/containers/MainHeader/index';
import PermissionManage from '@/components/PermissionManage/Index';
import './style.css';

const BasicLayout = ({ route, children }) => (
  <>
       <MainHeader />
       <PermissionManage/>
       </>
);

export default BasicLayout;
