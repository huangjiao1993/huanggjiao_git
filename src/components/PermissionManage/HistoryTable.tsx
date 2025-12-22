import {MinusOutlined, ClockCircleOutlined,CaretDownOutlined, CaretRightOutlined, MoreOutlined } from '@ant-design/icons';
import { Badge,Table, Card, } from 'antd';
import React, { useState } from 'react';
import './Index.css';
import StatusOption from '@/components/PermissionManage/StatusOption';
import ColumnOverflow from '@/components/PermissionManage/ColumnOverflow';
import styled from 'styled-components';
const App: React.FC = () => {
   const CustomCard = styled(Card)`
    .ant-card-body {
      padding: 10px 30px 15px 10px;
    }
  `;
  const [historyList, setHistoryList] = useState([{
    title: '姓名',
    dataIndex: 'name',
    key: '1',
    isShow: true,
    columns:[
          {
            dataIndex: 'name',
            key: 'name',
            width:160,
            render: text => 
              <div style={{color:'#6070B0',width: '165px'}} >
              <ColumnOverflow title={text} />
              </div>,
          },
          {
            dataIndex: 'age',
            key: 'age',
            width:385,
              render: text => 
              <div className='rowTime'>
                <span className='timeItem'>时间:</span>
                <ClockCircleOutlined />
                2024-08-19 15:30 
                <MinusOutlined />
                <ClockCircleOutlined />
                  2024-08-19 15:30 
              </div>,
          },
          {
            dataIndex: 'address',
            key: 'address',
            width:260,
              render: text => 
              <div>
                端手游体验室（深圳-D1-0445）
              </div>,
          },
          {
            dataIndex: 'address',
            key: 'address',
            width:200,
            render: text => 
              <div>
              luceyyang(杨琪丹)
              </div>,
          },
          {
            dataIndex: 'address',
            key: 'address',
            render: text => 
              <div className='operate'>
                    <MoreOutlined />
              </div>,
          },
    ],
  dataSource:[
    {
      key: '1',
      name: '胡彦斌胡彦斌胡asdffds胡彦斌胡彦斌胡胡彦斌胡彦斌胡胡彦斌胡彦斌胡胡彦斌胡彦斌胡胡彦斌胡彦斌胡胡彦斌胡彦斌胡',
      age: 32,
      address: '西湖区湖底公园1号',
    },
    {
      key: '2',
      name: '胡彦祖',
      age: 42,
      address: '西湖区湖底公园1号',
    },
  ]
  },
  {
    title: '年龄',
    dataIndex: 'age',
    key: '2',
    isShow: false,
  },
  {
    title: '住址',
    dataIndex: 'address',
    key: '3',
    isShow: false,
  },]);
  const changeCollapse = (item1: any,) => {
    let newArr = historyList.map(p => {
      return { ...p, isShow: false };
    });
    const index = newArr.findIndex(item3 => item3.key == item1.key);
    if (index !== -1) {
      if (item1.isShow) {
        newArr[index].isShow = false;
      } else {
        newArr[index].isShow = true;
      }
    }
    setHistoryList(newArr)
  }
const CustomRow = ({ children, ...restProps }) => {
  return (
    <tr {...restProps} style={{ height: '46px' }}>
      {children}
    </tr>
  );
};
 const rowClassName = (record, index) => {
    return 'custom-row';
};
  return (
    <div className='HistoryData'>
      <div className='title progressing PermissionManage-my-title'>历史数据</div>
      {
        historyList.map(item => {
          return <CustomCard className='historyCard' style={{ borderLeftColor:'#D9D9D9'}}>
                  <div style={{width: '100%',display: 'flex'}}>
                    <div  className="collapseHistroy">
                      <div className="circle">
                        {
                          item.isShow ? <span onClick={() => changeCollapse(item)} className='CaretDown'><CaretDownOutlined /></span> : <span onClick={() => changeCollapse(item)} className='CaretRight'><CaretRightOutlined /></span>
                        }
                      </div>
                    </div>
                     <StatusOption  td1='340px' td2='335px' td3='385px' isHistoryTable={true}/>
                    </div>
                    {
                      item.isShow?<Table style={{width:1100,paddingLeft: '40px',boxSizing: 'content-box'}} 
                  dataSource={item.dataSource} 
                  columns={item.columns} 
                  className='HistoryTable' 
                  pagination={false} 
                  rowClassName={rowClassName}
                  components={{
                        body: {
                          row: CustomRow, // 使用自定义的行组件
                        },
                  }} />:''
                    }
              </CustomCard>
        })
      }
    </div>
  );
};

export default App;