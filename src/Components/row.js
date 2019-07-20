import React from 'react'
import Box from './box'

import '../style.css'

class Row extends React.Component {
    constructor (props) {
      super(props);
    }
    createBoxes () {
      let boxRepeat = 8;
      let container = [];
      let boxJsxInsert = [];
      for (let i = 0; i < boxRepeat; i++) {
        boxJsxInsert.push(<Box id={i}/>);
      }
      container.push(<div>{boxJsxInsert}</div>);
      return container;
  }

    render () {
        return <div className="row">
            {this.createBoxes()}
        </div>
}}

export default Row
