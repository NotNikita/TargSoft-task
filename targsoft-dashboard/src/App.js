import React, { Component } from 'react';
import { connect } from 'react-redux'
import CreatePage from './pages/create/create.component'
import './App.css';
import 'office-ui-fabric-react/dist/css/fabric.css';

import CardList from './components/card-list/card-list.component'


class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isOpen: false
    }
    this.closePanel = this.closePanel.bind(this);
  }

  componentDidMount() {

    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(postsFromApi => {
        this.props.setPosts(postsFromApi)
      })

  }
  async closePanel() {
    this.state.setState({
      isOpen:
        this.state.isOpen ? false : true
    })
  }

  render() {
    const { isOpen } = this.state

    return (
      <div className='ms-Grid' dir='ltr'>
        <div className='ms-Grid-row'>
          <div className='ms-Grid-col ms-sm-1 ms-xl1'>
            <CreatePage openPanel={isOpen} />
          </div>
          <div className='ms-Grid-col ms-sm11 ms-xl11 main-element'>
            <CardList />
          </div>
        </div>
      </div>
    )
  }
}


const mapStateToProps = (state) => {

  return { postListFromReducer: state.post.posts };
}
const mapDispatchToProps = (dispatch) => ({
  setPosts: posts => dispatch({
    type: 'SET_POSTS',
    payload: posts
  })
})
export default connect(mapStateToProps, mapDispatchToProps)(App)