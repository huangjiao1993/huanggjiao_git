// src/Home.jsx
import { Avatar, Col, Divider, Row, Input, Tag, Card, Descriptions, Button, Dropdown, Space, Tooltip } from 'antd';
import { MoreOutlined, DoubleRightOutlined, UserOutlined, AntDesignOutlined } from '@ant-design/icons';
import ColumnOverflow from '@/components/PermissionManage/ColumnOverflow';
import type { MenuProps } from 'antd';
import styled from 'styled-components';
import './Index.css';
export default function StatusOption(props: any) {
  const items: MenuProps['items'] = [
    {
      label: '1st menu item',
      key: '1',
    },
    {
      label: '2nd menu item',
      key: '2',
    },
    {
      label: '3rd menu item',
      key: '3',
    },
  ];
  const ButtonCustom = styled(Button)`
      border: 1px solid #2B4096 !important;
      span{
        color:#2B4096;
      }
  `;
  const Tag_1 = styled(Tag)`
     background-color: #E6E8F2;
    margin-right: 5px;
  `;
  const Tag_2 = styled(Tag)`
     background-color: #F4D7C3 ;  
     border-radius: 8px;
  `;
  const { status, td1, td2, td3, td4, isHistoryTable, product } = props;
  return (
    <div>
      <Row gutter={[0, 0]} className='progressCard-row'>
        <Col style={{ width: td1, maxWidth: 'unset' }}>
          <div  >
            <Row >
              <Col span={24} className='tagRow'>
                <Tag_1 color="#5A6AAD" className='tag1'>天美</Tag_1>
                <Tag_2 color="#C58354" className="circle-tag tag2"> <span className="circle"></span>王者荣耀</Tag_2>
              </Col>
            </Row>
            <Row>
              <Col span={24} className='detailInfor' style={{ paddingRight: '40px' }}>
                <div style={{ marginLeft: 2, whiteSpace: 'nowrap', width: product ? '50%' : '100%' }}>
                  <ColumnOverflow
                    title="safasfddddsdfasfdasdfasdsadfasdfasfasfsdfasdfasdfasdfasfsfdasdfsdfasdfasfasfd"
                  />
                </div>
                {
                  product ? <span className='productType'>
                    <DoubleRightOutlined />
                    <span className='product'>Product</span>
                  </span> : ''
                }
              </Col>
            </Row>
            <Row>
              <Col span={24}>
                <Descriptions >
                  <Descriptions.Item label="创建者">
                    <Avatar.Group
                      maxCount={2}
                      maxPopoverTrigger="click"
                      size={20}
                      maxStyle={{ color: '#939393', backgroundColor: '#DDDDDD', cursor: 'pointer' }}
                    >
                      <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                      <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                      <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                    </Avatar.Group>
                  </Descriptions.Item>
                  <Descriptions.Item label="协作者">
                    <Avatar.Group
                      maxCount={2}
                      maxPopoverTrigger="click"
                      size={20}
                      maxStyle={{ color: '#939393', backgroundColor: '#DDDDDD', cursor: 'pointer' }}
                    >
                      <Avatar gap={20} src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                      <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                      <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                      <Avatar style={{ backgroundColor: '#939393' }} icon={<AntDesignOutlined />} />
                    </Avatar.Group>
                  </Descriptions.Item>
                </Descriptions>
              </Col>
            </Row></div>

        </Col>
        <div className="vertical-line"></div>
        {
          isHistoryTable ? <Col style={{ width: td2, maxWidth: 'unset', padding: '0 45px' }} className='time' >
            <div>
              2024-10-11 to 2024-10-11
            </div>
          </Col> : <Col style={{ width: '290px', maxWidth: 'unset', padding: '0 60px' }} className='time' >
            <div>
              2024-10-11 18:00:00
            </div>
            <div>
              |
            </div>
            <div>
              2024-10-11 18:00:00
            </div>
          </Col>
        }
        <div className="vertical-line"></div>
        <Col style={{ width: td3, maxWidth: 'unset' }} className='time'>
          <div>端手游体验室（深圳-D1-0445)</div>
        </Col>
        <div className="vertical-line"></div>
        <Col className='operate' style={{ width: td4 }} >
          <Dropdown menu={{ items }} trigger={['click']} >
            <a onClick={e => e.preventDefault()}>
              <Space>
                <Button shape="circle" icon={<MoreOutlined />} style={{ marginRight: '7px' }} />
              </Space>
            </a>
          </Dropdown>
          {
            status == '0' ? <Button type="primary" className='anterLive' >进入直播</Button> : ''
          }
          {
            status == '1' ? <ButtonCustom className='continueLive' >继续直播</ButtonCustom> : ''
          }
          {
            status == '2' ? <ButtonCustom className='continueLive' >开始直播</ButtonCustom> : ''
          }
        </Col>
      </Row>
    </div>
  );
}
