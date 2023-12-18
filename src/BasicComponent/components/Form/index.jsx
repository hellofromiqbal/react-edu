import React, { useState } from 'react';
import FormInput from '../FormInput';
import styles from './form.module.css';

const Form = () => {
  const [state, setState] = useState({
    name: "",
    email: "",
    password: ""
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(state);
  };
  
  return (
    <form
      className={styles.form}
      onSubmit={handleSubmit}
    >
      <FormInput
        type={"text"}
        placeholder={"Name"}
        value={state.name}
        handleChange={(e) => setState({...state, name: e.target.value})}
      />
      <FormInput
        type={"text"}
        placeholder={"Email"}
        value={state.email}
        handleChange={(e) => setState({...state, email: e.target.value})}
      />
      <FormInput
        type={"password"}
        placeholder={"Password"}
        value={state.password}
        handleChange={(e) => setState({...state, password: e.target.value})}
      />
      <button className={styles.formButton} type='submit'>Submit</button>
    </form>
  )
};

export default Form;