import React, { useState, useCallback, useEffect } from 'react';
import { Tooltip } from 'antd';
import type { TooltipPlacement } from 'antd/lib/tooltip';
import './ColumnOverflow.css';
type Props = {
  title: string;
  copyText?: string;
  direction?: 'horizontal' | 'vertical';
  styles?: React.CSSProperties;
  placement?: TooltipPlacement;
};
const ColumnOverflow: React.FC<Props> = React.memo(
  ({
    title,
    direction = 'horizontal',
    styles = {},
    placement = 'right'
  }) => {
    const [showTooltip, setShowTooltip] = useState(false);
    useEffect(() => {
        const ev = document.querySelector('.column-overflow');
        isShowTooltip(ev)
     }, []); 
    // 仅首次渲染执行
    const visibilityChange = useCallback(
      (event: any) => {
        const ev = event.target;
        isShowTooltip(ev)
      },
      [direction]
    );
     const isShowTooltip=(ev:any)=>{
        let evSize = ev.scrollWidth;
        let contentSize = ev.clientWidth;
        if (direction === 'vertical') {
          evSize = ev.scrollHeight;
          contentSize = ev.clientHeight;
        }
        if (evSize > contentSize) {
          setShowTooltip(true);
        } else {
          setShowTooltip(false);
        }
    }
    let copyableElement = null;
    const htmlDom = <div dangerouslySetInnerHTML={{ __html: title }} />;

    return (
        <div
          className="column-overflow"
          onMouseEnter={visibilityChange}
          onMouseLeave={() => setShowTooltip(false)}
        >
          <div className="column-overflow__content">
            <Tooltip
              overlayStyle={{ ...styles }}
              overlayInnerStyle={{
                whiteSpace: 'pre-wrap'
              }}
              title={htmlDom}
              open={showTooltip}
              placement={placement}
            >
              <div className="column-overflow__hidden">{htmlDom}</div>
            </Tooltip>
          </div>
          {copyableElement}
        </div>
    );
  }
);

export default ColumnOverflow;