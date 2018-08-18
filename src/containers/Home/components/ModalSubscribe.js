/* @flow */
import * as React from 'react'
import { connect } from 'react-redux'
import { submit, reset } from 'redux-form'

import Modal from '../../../components/Modal'
import Form, { validate } from '../components/Form'
import { subscribeRequest, subscribeSuccess } from '../action'
import style from '../style.scss'

type props = {
  validateForm: (arg: string) => {},
  resetForm: (arg: string) => {},
  subscribeRequest: ({
    name: string,
    email: string
  }) => {},
  subscribeSuccess: () => {},
  onModalClose: () => {},
  authSuccessRes: string,
  authErrorMsg: string,
  submitting: boolean
}

const mapStateToProps = state => ({
  submitting: state.home.submitting,
  authSuccessRes: state.home.authSuccessRes,
  authErrorMsg: state.home.authErrorMsg
})
const mapDispatchToProps = {
  subscribeRequest,
  subscribeSuccess,
  validateForm: submit,
  resetForm: reset
}

@connect(mapStateToProps, mapDispatchToProps)
class ModalSubscribe extends React.Component<props> {
  constructor() {
    super()
    const self: any = this
    self.onValidate = this.onValidate.bind(this)
    self.closeModal = this.closeModal.bind(this)
  }
  componentDidMount() {
  }
  onValidate() {
    this.props.validateForm('userInfo')
  }
  onSubmit = (value: {
    username: string,
    email: string,
    emailConfirm: string
  }) => {
    const {submitting, subscribeRequest }= this.props
    const { username: name, email } = value
    if( submitting ) return
    if (validate(value)) {
      subscribeRequest({
        name,
        email
      })
    }
  }
  closeModal (): any{
    const {submitting, subscribeSuccess, onModalClose }= this.props
    if( submitting ) return
    this.props.resetForm('userInfo')
    subscribeSuccess()
    onModalClose()
  }
  render() {
    const { authSuccessRes } = this.props
    return (
      <Modal onRequestClose={this.closeModal} showModal={true}>
        { !authSuccessRes ? this.form : this.submitSuccess }
      </Modal>
    )
  }
  get form(): React.Element<*> {
    const { submitting, authErrorMsg } = this.props
    return (
      <div className={style.modalBody}>
        <p className={style.formTitle}>Request an Invite </p>
        <hr />
        <Form onSubmit={this.onSubmit}>
          <button className={style.formBtnSubmit} type="button" onClick={this.onValidate}>
            {submitting ? 'sending,please wait...' : 'send'}
          </button>
        </Form>
        { authErrorMsg && <div className={style.txtError}>{authErrorMsg}</div>}
      </div>
    )
  }
  get submitSuccess(): React.Element<*> {
    return (
      <div className={style.modalBody}>
        <p className={style.formTitle}>All done! </p>
        <hr />
        <div>
          <p className={style.txtSuccess}>You will be one of the first to experience Broccoli &amp; Co. when we launch.</p>
          <button className={style.formBtnSubmit} type="button" onClick={this.closeModal}>ok</button>
        </div>
      </div>
    )
  }
}

export default ModalSubscribe
