import React from 'react';
import styles from './formInput.module.css';

const FormInput = ({ type, placeholder, value, handleChange }) => {
  return (
    <input
      className={styles.formInput}
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={handleChange}
    />
  )
};

export default FormInput;