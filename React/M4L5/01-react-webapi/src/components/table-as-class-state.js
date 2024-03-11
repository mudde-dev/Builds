import React from 'react';
import PropTypes from 'prop-types';

class TableAsClassState extends React.Component {
  constructor(props) {
    super();
    this.state = {
      data: props.initialData,
      sortedColumn: null,
      descending: false,
    };

    //Eventhandler binding to this instance - needed in class component
    this.sortByColumn = this.sortByColumn.bind(this);
  }

  sortByColumn(e) {

    const columnClicked = Number(e.target.dataset.cellIndex);
    const sortedData = clone(this.state.data);

    //toggle descending if already set before
    const desc =
      this.state.sortedColumn === columnClicked && !this.state.descending;
    
    //Sort the data according to the column clicked, either ascending or descending
    sortedData.sort((a, b) => {
      if (a.data[columnClicked] === b.data[columnClicked]) {
        return 0;
      }

      //tell sort how to objects compare relative descending
      if (desc)
        return a.data[columnClicked] < b.data[columnClicked] ?1 :-1;
      else
        return a.data[columnClicked] > b.data[columnClicked] ?1 :-1;
    });

    //updated the state
    this.setState({
      data: sortedData,           
      sortedColumn: columnClicked,
      descending: desc, 
    });
  }

  render() {
    return (
      <table>
        <thead onClick={this.sortByColumn}>
          <tr>
            {this.props.headers.map((title, idx) => {
              if (this.state.sortedColumn === idx) {
                title += this.state.descending ? ' \u2191' : ' \u2193';
              }
              return <th key={idx} data-cell-index={idx}>{title}</th>;
            })}
          </tr>
        </thead>
        <tbody>
          {this.state.data.map((row, idx) => (

            //assign the id to the row and the eventhandler from props
            <tr key={row.id} data-rowitemid={row.id} onDoubleClick={this.props.onDoubleClick}>
              {row.data.map((cell, idx) => (
                <td key={idx}>{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}

//using React prop types to make the data more type secure
//https://reactjs.org/docs/typechecking-with-proptypes.html#gatsby-focus-wrapper
TableAsClassState.propTypes = {
  headers: PropTypes.arrayOf(PropTypes.string),
  initialData: PropTypes.arrayOf(PropTypes.object),
};

//helper function to clone an object using deep copy. 
function clone(o) {
  return JSON.parse(JSON.stringify(o));
}

export default TableAsClassState;