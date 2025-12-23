// src/Home.jsx
import { Input, Card} from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import HistoryTable from '@/components/PermissionManage/HistoryTable';
import StatusOption from '@/components/PermissionManage/StatusOption';
import styled from 'styled-components';
import './Index.css';
export default function Home() {
  const InputCustom = styled(Input)`
      width: 220px;
      border-radius: 4px;
      &:focus{
        border-color: #2B4096; 
        box-shadow: unset;
      }
      &:hover{
        border-color: #2B4096; 
      }
      &:focus-within {
          border-color: #2B4096;
          box-shadow: unset;
      }
  `;
  return (
    <div className='PermissionManage'>
      <div className='PermissionManage-my'>
        <div className='PermissionManage-my-title'>
          我的座谈会(999)
        </div>
        <div>
          <InputCustom prefix={<SearchOutlined />} placeholder="请输入关键词" className='searchInput' />
        </div>
      </div>
      <div>
        <div className='title progressing PermissionManage-my-title'>进行中</div>
        <Card className='progressCard' style={{ borderLeftColor: '#52C41A' }}>
          <StatusOption td1='355px' td2='230px' td3='280px' status="0" td4='300px' isHistoryTable={false} product={true} />
        </Card>
      </div>
      <div>
        <div className='title progressing PermissionManage-my-title'>暂停中</div>
        <Card className='progressCard' style={{ borderLeftColor: '#6078FF' }}>
          <StatusOption td1='355px' td2='230px' td3='280px' status="1" td4='300px' isHistoryTable={false} product={true} />
        </Card>
      </div>
      <div>
        <div className='title progressing PermissionManage-my-title'>未开始</div>
        <Card className='progressCard' style={{ borderLeftColor: '#E3B016' }}>
          <StatusOption td1='355px' td2='230px' td3='280px' status="2" td4='300px' isHistoryTable={false} product={true} />
        </Card>
      </div>
      <HistoryTable />
    </div>
  );
}
