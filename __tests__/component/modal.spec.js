import React from 'react'
import { render, configure, mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import ModalView from '../../src/components/Modal'

configure({ adapter: new Adapter() })

const props = {
  showModal: true,
  children: <p />,
  onRequestClose: jest.fn()
}

describe('Modal Components test', () => {

  it('should be rendered correctly', () => {
    const modal = render(<ModalView {...props} />)
    expect(modal.find('div').length).toBe(2)
  })

  it('callback shoud be called when clicking the overlay element', () => {
    const modal = mount(<ModalView {...props} />)
    modal.find('div').at(1).simulate('click')
    expect(props.onRequestClose).toBeCalled()
  })

})
