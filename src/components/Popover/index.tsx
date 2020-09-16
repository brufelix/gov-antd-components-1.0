import React from 'react'
import { Popover, Button } from 'antd'

const buttonWidth = 70

const text = <span>Title</span>
const content = (
  <div>
    <p>Content</p>
    <p>Content</p>
  </div>
)

function PopoverGov(): JSX.Element {
    return (
        <>
            <div className="demo">
                <div style={{ marginLeft: buttonWidth, whiteSpace: 'nowrap' }}>
                    <Popover placement="topLeft" title={text} content={content} trigger="click">
                        <Button style={{ margin: 5 }} type="primary">TL</Button>
                    </Popover>
                    <Popover placement="top" title={text} content={content} trigger="click">
                        <Button style={{ margin: 5 }} type="primary">Top</Button>
                    </Popover>
                    <Popover placement="topRight" title={text} content={content} trigger="click">
                        <Button style={{ margin: 5 }} type="primary">TR</Button>
                    </Popover>
                </div>
                <div style={{ width: buttonWidth, float: 'left' }}>
                    <Popover placement="leftTop" title={text} content={content} trigger="click">
                        <Button style={{ margin: 5 }} type="primary">LT</Button>
                    </Popover>
                    <Popover placement="left" title={text} content={content} trigger="click">
                        <Button style={{ margin: 5 }} type="primary">Left</Button>
                    </Popover>
                    <Popover placement="leftBottom" title={text} content={content} trigger="click">
                        <Button style={{ margin: 5 }} type="primary">LB</Button>
                    </Popover>
                </div>
                <div style={{ width: buttonWidth, marginLeft: buttonWidth * 4 + 24 }}>
                    <Popover placement="rightTop" title={text} content={content} trigger="click">
                        <Button style={{ margin: 5 }} type="primary">RT</Button>
                    </Popover>
                    <Popover placement="right" title={text} content={content} trigger="click">
                        <Button style={{ margin: 5 }} type="primary">Right</Button>
                    </Popover>
                    <Popover placement="rightBottom" title={text} content={content} trigger="click">
                        <Button style={{ margin: 5 }} type="primary">RB</Button>
                    </Popover>
                </div>
                <div style={{ marginLeft: buttonWidth, clear: 'both', whiteSpace: 'nowrap' }}>
                    <Popover placement="bottomLeft" title={text} content={content} trigger="click">
                        <Button style={{ margin: 5 }} type="primary">BL</Button>
                    </Popover>
                    <Popover placement="bottom" title={text} content={content} trigger="click">
                        <Button style={{ margin: 5 }} type="primary">Bottom</Button>
                    </Popover>
                    <Popover placement="bottomRight" title={text} content={content} trigger="click">
                        <Button style={{ margin: 5 }} type="primary">BR</Button>
                    </Popover>
                </div>
            </div>
        </>
    )
}

export default PopoverGov