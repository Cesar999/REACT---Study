import React from 'react'
import { Field, reduxForm } from 'redux-form';

const validate = values => {
    const errors = {}
    if (!values.username) {
      errors.username = 'Required'
    } else if (values.username.length > 10) {
      errors.username = 'Must be 10 characters or less'
    }
    if (!values.email) {
      errors.email = 'Required'
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
      errors.email = 'Invalid email address'
    }
    if (!values.age) {
      errors.age = 'Required'
    } else if (isNaN(Number(values.age))) {
      errors.age = 'Must be a number'
    } else if (Number(values.age) < 18) {
      errors.age = 'Sorry, you must be at least 18 years old'
    }
    if (!values.favoriteColor) {
        errors.favoriteColor = 'Required'
    }
    if (!values.sex) {
        errors.sex = 'Required'
    }
    return errors
}

const renderField = ({
    input,
    placeholder,
    type,
    meta: { touched, error}
    }) => (
    <div>
      <div>
        <input {...input} placeholder={placeholder} type={type} />
        {touched &&(error && <div>{error}</div>)}
      </div>
    </div>
)

const SimpleForm = props => {
  const { handleSubmit, reset, invalid, sendFormToApi } = props;

  return (
    <form onSubmit={handleSubmit(sendFormToApi)}>

      <div>
        <label>Username</label>
        <div>
          <Field
            name="username"
            component={renderField}
            type="text"
            placeholder="Ricardo"
          />
        </div>
      </div>

      <div>
        <label>Age</label>
        <div>
          <Field
            name="age"
            component={renderField}
            type="number"
          />
        </div>
      </div>

      <div>
        <label>Email</label>
        <div>
          <Field
            name="email"
            component={renderField}
            type="email"
          />
        </div>
      </div>

      <div>
        <label>Sex</label>
        <div>
          <label>
            <Field name="sex" component="input" type="radio" value="male" />{' '}
            Male
          </label>
          <label>
            <Field name="sex" component="input" type="radio" value="female" />{' '}
            Female
          </label>
          <label>
            <Field name="sex" component="input" type="radio" value="other" />{' '}
            Other
          </label>
        </div>
      </div>

      <div>
        <label>Favorite Color</label>
        <div>
          <Field name="favoriteColor" component="select">
            <option />
            <option value="ff0000">Red</option>
            <option value="00ff00">Green</option>
            <option value="0000ff">Blue</option>
          </Field>
        </div>
      </div>

      <div>
        <button type="submit" disabled={invalid}>
          Submit
        </button>
        <button type="button" onClick={reset}>
          Clear Values
        </button>
      </div>

    </form>
  )
};

const formConfiguration = {
    form: 'simple', // a unique identifier for this form\
    validate
}

export default reduxForm(formConfiguration)(SimpleForm);
