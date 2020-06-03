import React, { useState } from 'react';
import { User } from '../requests';

function handleSubmit(event, errors, setErrors, history) {
  event.preventDefault();
  const { currentTarget } = event;
  const formData = new FormData(currentTarget);
  const params = {
    user: {
      first_name: formData.get('firstName'),
      last_name: formData.get('lastName'),
      email: formData.get('email'),
      password: formData.get('password'),
      password_confirmation: formData.get('passwordConfirmation')
    }
  }
  User.create(params)
    .then(data => {
      console.log(data);
      if (data.status === 422) {
        setErrors(() => {
          return [...errors, "Failed to log in"]
        })
      } else {
        history.push('/sign_in');
      }
    })
}

function NewUserPage(props) {
  const [errors, setErrors] = useState([]);
  return(
    <main>
      <h1>New User Page</h1>
      { Object.keys(errors).length > 0 ? (
        <div>Failed to create User</div>
      ) : null
      }
      <form onSubmit={(event) => { handleSubmit(event, errors, setErrors, props.history) }}>
        <div>
          <label htmlFor='firstName'>First Name</label>
          <input type='text' name='firstName'/>
        </div>
        <div>
          <label htmlFor='lastName'>Last Name</label>
          <input type='text' name='lastName'/>
        </div>
        <div>
          <label htmlFor='email'>Email</label>
          <input type='email' name='email'/>
        </div>
        <div>
          <label htmlFor='password'>Password</label>
          <input type='password' name='password'/>
        </div>
        <div>
          <label htmlFor='passwordConfirmation'>Confirm Password</label>
          <input type='password' name='passwordConfirmation'/>
        </div>
        <input type='submit' value='Create User'/>
      </form>
    </main>
  )
}

export default NewUserPage