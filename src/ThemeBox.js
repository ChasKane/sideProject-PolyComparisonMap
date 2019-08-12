import React from 'react';
import ReactMarkdown from 'react-markdown'
import { Collapse, Icon } from 'antd';
import { purple, blue, red, white, black } from './common'

const { Panel } = Collapse;

export default props => (
  <Collapse >
    <Panel header={props.title} key="1" >
      <ReactMarkdown source={props.text}/>
    </Panel>
  </Collapse>
)
