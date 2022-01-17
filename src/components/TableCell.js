import React from 'react';

class TableCell extends React.Component {
  render() {
    return (
      <td
        className="cell"
        onClick={this.props.changeColor}
        onMouseDown={this.props.mouseDown}
        onMouseUp={this.props.mouseUp}
        onMouseEnter={this.props.mouseEnter}
      ></td>
    );
  }
}

export default TableCell;