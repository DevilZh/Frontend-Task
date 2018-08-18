import React from 'react'
import { Route, Switch } from 'react-router-dom'

import Header from '../../components/Header'
import Footer from '../../components/Footer'

import Home from '../Home'
import style from './style.scss'

class App extends React.Component {
  componentWillMount() {

  }
  componentWillReceiveProps(nextProps) {
    console.log(nextProps)
  }

  render() {
    return (
      <div className={style.container}>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
        <Footer />
      </div>
    )
  }
}
export default App
