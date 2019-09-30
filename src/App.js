import React from 'react';
import './App.css';
import MemeForm from './MemeForm';
import Meme from './Meme';
import { connect } from 'react-redux';


class App extends React.Component {
  constructor(props) {
    super(props);

    this.newMeme = this.newMeme.bind(this);
    this.removeMeme = this.removeMeme.bind(this);
  }

  newMeme(data) {
    this.props.dispatch({ type: "MEME", payload: data })
  }

  removeMeme(key) {
    this.props.dispatch({ type: "REMOVE_MEME", payload: key })
  }

  render() {
    return (
      <div>
        <MemeForm newMeme={this.newMeme} />
        <div className="memes-container">
          {this.props.meme.map(meme => <Meme removeMeme={this.removeMeme} meme={meme} key={meme.id} />)}
        </div>
      </div>
    );
  }
}

function anotherFn(state) {
  return { meme: state.meme }
}

export default connect(anotherFn)(App);
