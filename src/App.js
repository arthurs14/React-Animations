import React, { Component } from "react";

import "./App.css";
import Modal from "./components/Modal/Modal";
import Backdrop from "./components/Backdrop/Backdrop";
import List from "./components/List/List";

class App extends Component {
  state = {
    modalIsOpen: false,
    showBlock: false,
  }

  showModal = () => {
    this.setState({ modalIsOpen: true });
  }

  closeModal = () => {
    this.setState({ modalIsOpen: false });
  }

  render() {
    const { modalIsOpen, showBlock } = this.state;
    return (
      <div className="App">
        <h1>React Animations</h1>
        <button onClick={() => this.setState(prevState => ({ showBlock: !prevState.showBlock }))}>Toggle</button>
        {
          showBlock ? (
            <div 
              style={{
                backgroundColor: 'red',
                width: 100,
                height: 100,
              }}>
            </div>
          ) : null
        }
        {modalIsOpen ? <Modal show={modalIsOpen} closed={this.closeModal} /> : null}
        {modalIsOpen ? <Backdrop show={modalIsOpen} /> : null}
        <button className="Button" onClick={this.showModal}>Open Modal</button>
        <h3>Animating Lists</h3>
        <List />
      </div>
    );
  }
}

export default App;
