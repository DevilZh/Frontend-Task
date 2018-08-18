/* @flow */
import * as React  from 'react'
import cn from 'classnames'

import style from './style.scss'

type Props = {
  showModal: boolean,
  children: React.Node,
  onRequestClose: ()=>{}
}

const Modal = ({ showModal, children, onRequestClose }: Props) => {
  if (document.body) {
    const elementBodyClassList = document.body.classList
    if (showModal) {
      elementBodyClassList.add(style.modalOpen)
    } else {
      elementBodyClassList.remove(style.modalOpen)
    }
  }
  return (
    <div className={cn(style.modalContainer, showModal ? style.active : '')} >
      <div className={style.modalOverlay} onClick={onRequestClose} onKeyUp={onRequestClose} role="button" tabIndex={0} />
      <div className={style.modalContent} >
        {children}
      </div>
    </div>
  )
}
export default Modal
