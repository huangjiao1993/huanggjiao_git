import React from 'react';
import { Layout } from 'antd';
import MainHeader from '@/containers/MainHeader/index';
import PermissionManage from '@/components/PermissionManage/Index';
import './style.css';

const BasicLayout = ({ route, children }) => (
  // <Layout className="main-layout">
  <>
       <MainHeader />
       <PermissionManage/>
       </>
  // </Layout>
);

export default BasicLayout;
