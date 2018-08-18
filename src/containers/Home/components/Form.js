/* @flow */
import * as React from 'react'
import { Field, reduxForm, SubmissionError } from 'redux-form'

import Input from './Input'

type props = {
  handleSubmit: (func: ()=>{})=>{},
  onSubmit: ()=>{},
  children: ()=>React.Node
}

const UserInfoForm = ({
  handleSubmit, onSubmit, children
}: props) => {
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Field name="username" type="text" component={Input} label="Full name" />
      <Field name="email" type="email" component={Input} label="Email" />
      <Field name="emailConfirm" type="confirm email" component={Input} label="Confirm email" />
      { children }
    </form>
  )
}

export default reduxForm({
  form: 'userInfo'
})(UserInfoForm)

type validateValue = {
  username: string,
  email: string,
  emailConfirm: string
}

export const validate = ({username, email, emailConfirm}:validateValue) => {
  if (!username) {
    throw new SubmissionError({
      username: 'Must be Required.'
    })
  } else if (username.length < 3) {
    throw new SubmissionError({
      username: 'Must be 3 characters at least.'
    })
  }
  if (!email) {
    throw new SubmissionError({
      email: 'Must be Required.'
    })
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
    throw new SubmissionError({
      email: 'The email field is Invalid.'
    })
  }
  if (!emailConfirm) {
    throw new SubmissionError({
      emailConfirm: 'Must be Required.'
    })
  } else if (emailConfirm !== email) {
    throw new SubmissionError({
      emailConfirm: 'The second email field must be equal to the first.'
    })
  }
  return true
}

