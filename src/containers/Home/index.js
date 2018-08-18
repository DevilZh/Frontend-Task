import React from 'react'

import ModalSubscribe from './components/ModalSubscribe'
import style from './style.scss'

class Home extends React.Component {
  constructor() {
    super()
    this.state = {
      showModal: false
    }
    this.onModalShow = this.onModalShow.bind(this)
    this.onModalClose = this.onModalClose.bind(this)
  }

  onModalShow() {
    this.setState({
      showModal: true
    })
  }
  onModalClose() {
    this.setState({
      showModal: false
    })
  }
  render() {
    const { showModal } = this.state
    return (
      <div className={style.contentMain}>
        <div className={style.txtSlogan} >
          <h2>A better way</h2>
          <h2>to enjoy every day.</h2>
        </div>
        <p className={style.txtIntro}>Be the first to know when we launch.</p>
        <button className={style.btnShowModal} onClick={this.onModalShow}>Request an invite</button>
        { showModal && <ModalSubscribe onModalClose={this.onModalClose}/> }
      </div>
    )
  }
}

export default Home
