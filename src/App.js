import React from 'react'
import './App.scss'
import { Router, Route, Switch } from 'react-router-dom'
import history from './history'
import NavBar from './components/sidenavtopbar/NavBar/NavBar'
import SlideMenu from './components/sidenavtopbar/SlideMenu/SlideMenu'
import Hamburger from './components/sidenavtopbar/Hamburger/Hamburger'
import Drawer from './components/sidenavtopbar/Drawer/Drawer'
import FirstPage from './pages/FirstPage'
import SecondPage from './pages/SecondPage'
import Footer from './components/Footer/Footer'

class App extends React.Component {
  state = { display: false }

  handleClick = () => {
    this.setState(previousState => {
      return { display: !previousState.display }
    })
  }

  render() {
    let appClass = ''

    if (this.state.display) {
      appClass = 'left'
    }

    return (
      <div className="App">
        <Hamburger click={this.handleClick} show={this.state.display} />
        {this.state.display ? '' : <SlideMenu />}
        {this.state.display ? <Drawer /> : ''}
        <div className={appClass}>
          <NavBar />
          <Router history={history}>
            <Switch>
              <Route path="/" exact component={FirstPage} />
              <Route path="/page_two" exact component={SecondPage} />
            </Switch>
          </Router>
          <Footer />
        </div>
      </div>
    )
  }
}

export default App
