import React, { Component } from "react";

class MemeForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      topText: '',
      bottomText: '',
      imgUrl: ''
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.newMeme(this.state);
    this.setState({ 
      topText: '',
      bottomText: '',
      imgUrl: ''
    });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input name="topText" placeholder="Top text" onChange={this.handleChange} value={this.state.topText}></input>
          <input name="bottomText" placeholder="Bottom text" onChange={this.handleChange} value={this.state.bottomText}></input>
          <input name="imgUrl" placeholder="Img URL" onChange={this.handleChange} value={this.state.imgUrl}></input>
          <button>Get Meme</button>
        </form>
      </div>
    );
  }
}

export default MemeForm;