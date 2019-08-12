import React, { useState} from 'react'
import { Modal } from 'antd'
import ThemeBox from './ThemeBox.js'
import StrategyBox from './StrategyBox.js'
import 'antd/dist/antd.css';
import { themes, strategies } from './content'
import { purple, blue, red, white, black } from './common'

const customStyle = { background: white, width: "30rem" }

export default () => {
  const [modal, setModal] = useState(true)
  return (
    <div
      style={{
        width: "100%"
        ,height: "100%"
      }}
    >
      {themes.map(theme => <ThemeBox style={customStyle} {...theme}/>)}
      {strategies.map(strategy => <StrategyBox style={customStyle} {...strategy}/>)}
      <Modal
        title="Welcome!"
        visible={modal}
        onOk={() => setModal(false)}
      >
        <p>This site is a work in progress. It doesn't look quite right yet, but elements are currently draggable to give users the ability to make their own map.</p>
      </Modal>
    </div>
  );
}
