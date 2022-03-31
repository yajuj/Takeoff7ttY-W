import React from 'react';
import Spinner from 'react-bootstrap/esm/Spinner';

const CustomSpinner = () => {
  return (
    <div className='d-flex  justify-content-center align-items-center'>
      <Spinner animation='border' size='sm' />
    </div>
  );
};

export default CustomSpinner;
