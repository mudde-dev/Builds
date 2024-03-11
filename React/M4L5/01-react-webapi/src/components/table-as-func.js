import React, {useState} from 'react';
import PropTypes from 'prop-types';


export default function TableAsFunc(props)
{
  const [data, setData] = useState(props.initialData);

  return (
    <table>
      <thead>
        <tr>
          {props.headers.map((title, idx) => (
            <th key={idx}>{title}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, idx) => (

          //assign the id to the row and the eventhandler from props
          <tr key={row.id} data-rowitemid={row.id} onDoubleClick={props.onDoubleClick}>
            {row.data.map((cell, idx) => (
              <td key={idx}>{cell}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

//using React prop types to make the data more type secure
//https://reactjs.org/docs/typechecking-with-proptypes.html#gatsby-focus-wrapper
TableAsFunc.propTypes = {
  headers: PropTypes.arrayOf(PropTypes.string),
  initialData: PropTypes.arrayOf(PropTypes.object),
};
