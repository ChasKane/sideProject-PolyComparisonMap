import React from 'react'
import posed from 'react-pose'
import ReactMarkdown from 'react-markdown/with-html'
import { Collapse } from 'antd';
import { purple, blue, red, white, black } from './common'

const { Panel } = Collapse;

const Box = posed.div({
  draggable: true
})

export default props => (
  <Box>
    <Collapse>
      <Collapse accordion>
        <Panel header="Description" key="1">
          <ReactMarkdown source={props.description}></ReactMarkdown>
        </Panel>
        <Panel header="Reflections" key="2">
          <ReactMarkdown source={props.reflections}></ReactMarkdown>
        </Panel>
      </Collapse>
    </Collapse>
  </Box>
)
