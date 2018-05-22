import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class ClickModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal,
    });
  }

  render() {
    return (
      <div>
        <Button color="danger" onClick={this.toggle}>
          {/* {this.props.buttonLabel} */}
          Please Don't Click On Me
        </Button>
        <Modal
          isOpen={this.state.modal}
          toggle={this.toggle}
          className={this.props.className}
        >
          <ModalHeader toggle={this.toggle}>YOU WERE WARNED</ModalHeader>
          <ModalBody>
            YOU HAD YOUR CHANCE AND YOU FAILED, YOU HAVE ANGERED THE BIRB GODS
            (O'^'O") WHAT SAY YOU IN YOUR DEFENSE
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.toggle}>
              I'M SORRY, I'M LEAVING
            </Button>{' '}
            <Button color="secondary" onClick={this.toggle}>
              *DIE*
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default ClickModal;
