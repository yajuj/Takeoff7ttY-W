import React from 'react';
import Spinner from 'react-bootstrap/esm/Spinner';
import CSS from 'csstype';
interface ICustomSpinner {
  style?: CSS.Properties;
}

const CustomSpinner: React.FC<ICustomSpinner> = ({ style }) => {
  return (
    <div
      style={style}
      className='d-flex  justify-content-center align-items-center'
    >
      <Spinner animation='border' size='sm' />
    </div>
  );
};

export default CustomSpinner;
