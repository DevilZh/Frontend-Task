/* @flow */
import React from 'react'
import style from '../style.scss'

type props = {
  input: Object,
  label: string,
  type: string,
  meta: Object
}

const RenderInput = ({
  input,
  label,
  type,
  meta: { touched, error }
} : props) => (
  <div>
    <div>
      <input className={style.formField} {...input} placeholder={label} type={type} />
      {touched &&
        (error && <p className={style.formWarn}>{error}</p>)}
    </div>
  </div>
)

export default RenderInput
