import React from 'react';
import PropTypes from 'prop-types';

class TableAsClass extends React.Component {
  constructor(props) {
    super();
    this.state = { data: props.initialData };
  }
  render() {
    return (
      <table>
        <thead>
          <tr>
            {this.props.headers.map((title, idx) => (
              <th key={idx}>{title}</th>
            ))}
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
TableAsClass.propTypes = {
  headers: PropTypes.arrayOf(PropTypes.string),
  initialData: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.string)),
};

export default TableAsClass;