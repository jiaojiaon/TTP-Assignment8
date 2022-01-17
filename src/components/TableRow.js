import React from 'react';
import TableCell from "./TableCell";

class TableRow extends React.Component {

  render() {

    let tableCols = [];
    for (let i = 0; i <= this.props.colsNum; i++) {
      tableCols.push(
        <TableCell
          key={i}
          changeColor={this.props.changeColor}
          mouseDown={this.props.mouseDown}
          mouseUp={this.props.mouseUp}
          mouseEnter={this.props.mouseEnter}
        />
      );
    }
    return <tr>{tableCols}</tr>;
  }
}
export default TableRow;