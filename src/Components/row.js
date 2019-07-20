import React from 'react'
//import Box from './box'

import '../style.css'

class Row extends React.Component {
    createBox (i) {
      return <div id={i} className="box"></div>
      //React.createElement('Box',[id={i}],[])
}
    createBoxes () {
      let boxRepeat = 8;
      let container = [];
      let boxes = [];
      for (let i = 0; i < boxRepeat; i++) {
        boxes.push(this.createBox(i));
      }
      container.push(<div>{boxes}</div>);
      return container;
}

    render () {
        return <div className="row">
            {this.createBoxes()}
        </div>
}}

export default Row
