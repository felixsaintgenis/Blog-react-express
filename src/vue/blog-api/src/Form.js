import React, { Component } from 'react';
import './Form.css';
import ReactModal from 'react-modal';


class Form extends Component {
  constructor () {
    super();
    this.state = {
      showModal: false
    };

    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }

  handleOpenModal () {
    this.setState({ showModal: true });
  }

  handleCloseModal () {
    this.setState({ showModal: false });
  }

  render () {
    return (
      <div>
        <button onClick={this.handleOpenModal}>Écrire un nouvel article</button>

        <ReactModal
           isOpen={this.state.showModal}
           contentLabel="Minimal Modal Example"
        >
          <div className="Form">

            <form id="myform" name="myform" action="http://localhost:8080/add" method='POST'>
        <input id="Name" type="text" name="Author" placeholder="Author"/>
        <input id="Title" type="text" name="Title" placeholder="Title"/>
        <input id="Content" type="textarea" name="Content" placeholder="Content"/>
        <input type="submit"/>
        </form>

          </div>
          <button onClick={this.handleCloseModal}>Fermer la fenêtre</button>
        </ReactModal>
      </div>
    );
  }
}


export default Form
