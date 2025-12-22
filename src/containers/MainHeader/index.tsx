import { Layout} from 'antd';
import { observer } from 'mobx-react';
import './style.less';
const MainHeader = () => {
  return (
    <Layout.Header className="main-header">  </Layout.Header>
  );
};

export default observer(MainHeader);
