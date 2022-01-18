import React from "react";
import TableRow from "./TableRow";

class Table extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rows: 0,
      cols: 0,
      color: "",
      hasColor: false,
    };

    this.addRow = this.addRow.bind(this);
    this.addCol = this.addCol.bind(this);
    this.removeRow = this.removeRow.bind(this);
    this.removeCol = this.removeCol.bind(this);
    this.setColor = this.setColor.bind(this);
    this.changeColor = this.changeColor.bind(this);
    this.clearAll = this.clearAll.bind(this);
    this.fillAll = this.fillAll.bind(this);
    this.fillUncolored = this.fillUncolored.bind(this);
    this.mouseDown = this.mouseDown.bind(this);
    this.mouseUp = this.mouseUp.bind(this);
    this.mouseEnter = this.mouseEnter.bind(this);
  }

  addRow() {
    this.setState({
      rows: this.state.rows + 1,
    });
    console.log("addRow")
  }

  addCol() {
    this.setState({
      cols: this.state.cols + 1,
    });
  }

  removeRow() {
    if (this.state.rows > 0) {
      this.setState({
        rows: this.state.rows - 1,
      });
    } else {
      this.setState({
        cols: 0,
      });
    }
  }

  removeCol() {
    if (this.state.cols > 0) {
      this.setState({
        cols: this.state.cols - 1,
      });
    } else {
      this.setState({
        rows: 0,
      });
    }
  }

  setColor(event) {
    this.setState({
      color: event.target.value,
    });
  }

  changeColor(event) {
    event.target.style.backgroundColor = this.state.color;
  }

  clearAll() {
    document.querySelectorAll("td").forEach((cell) => {
      cell.style.backgroundColor = "";
    });
  }

  fillAll() {
    document.querySelectorAll("td").forEach((cell) => {
      cell.style.backgroundColor = this.state.color;
    });
  }

  fillUncolored() {
    document.querySelectorAll("td").forEach((cell) => {
      if (cell.style.backgroundColor === "") {
        cell.style.backgroundColor = this.state.color;
      }
    });
  }

  mouseDown() {
    this.setState({
        hasColor: true,
    });
  }

  mouseUp() {
    this.setState({
        hasColor: false,
    });
  }

  mouseEnter(event) {
    if (this.state.hasColor) {
      event.target.style.backgroundColor = this.state.color;
    }
  }

  render() {
    let tableRows = [];
    for (let i = 0; i <= this.state.rows; i++) {
      tableRows.push(
        <TableRow
          key={i}
          colsNum={this.state.cols}
          changeColor={this.changeColor}
          mouseDown={this.mouseDown}
          mouseUp={this.mouseUp}
          mouseEnter={this.mouseEnter}
        />
      );
    }
    
    return(
        <div className="container">
            <div className="buttons">
                <button onClick={this.addRow} >Add Rows</button>
                <button onClick={this.addCol} >Add Columns</button>
                <button onClick={this.removeRow} >Remove Rows</button>
                <button onClick={this.removeCol} >Remove Columns</button>
                <button onClick={this.clearAll} >Clear All Color</button>
                <button onClick={this.fillAll} >Fill All Color</button>
                <button onClick={this.fillUncolored} >Fill All Uncolored</button>
            


            <div className="dropdown"> 
                <select onChange={this.setColor}>
                    <option value="">-- Choose Color--</option>
                    <option value="black">Black</option>
                    <option value="green">Green</option>
                    <option value="blue">Blue</option>
                    <option value="red">Red</option>
                    <option value="purple">Purple</option>
                </select>
                </div>
            </div>
            <br></br><br></br><br></br>


            <table>
                <div>{tableRows}</div>
            </table>

        </div>
    );
  }
}

export default Table;