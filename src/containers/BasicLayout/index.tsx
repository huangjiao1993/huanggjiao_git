import React from 'react';
import { Layout } from 'antd';
import MainHeader from '@/containers/MainHeader/index';
import PermissionManage from '@/components/PermissionManage/Index';
import './style.css';

const BasicLayout = ({ route, children }) => (
  <Layout className="main-layout">
     <MainHeader />
     <Layout className="main-layout-basic">
      <Layout.Content className="main-layout-content">
       <PermissionManage/>
      </Layout.Content>
    </Layout>
  </Layout>
);

export default BasicLayout;
