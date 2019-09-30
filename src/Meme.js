import React, { Component } from "react";

class Meme extends Component {
  constructor(props) {
    super(props)

    this.handleDelete = this.handleDelete.bind(this);
  }

  handleDelete(e) {
    e.preventDefault(e);
    this.props.removeMeme(this.props.meme.id);
  }

  render() {
    return (
      <div className="meme">
        <img className='meme' src={`${this.props.meme.imgUrl}`} alt='meme'></img>
          <p className="top-text">{this.props.meme.topText}</p>
          <p className="bottom-text">{this.props.meme.bottomText}</p>
          <button className="meme" onClick={this.handleDelete}>X</button>
      </div>
      );
    }
  }
  
export default Meme;