import React from 'react';
import Spinner from 'react-bootstrap/esm/Spinner';

const CustomSpinner = () => {
  return (
    <div className='d-sm-flex vh-100 justify-content-center align-items-center'>
      <Spinner animation='border' size='sm' />
    </div>
  );
};

export default CustomSpinner;
