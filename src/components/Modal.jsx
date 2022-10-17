import { Component } from "react";
import { render } from "react-dom";

import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Form,
  FormGroup,
  Input,
  Label,
} from "reactstrap";

export class CustomModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeItem: this.props.activeItem,
    };
  }

  handleChange = (e) => {
    let { name, value } = e.target;
    if (e.target.type === "checkbox") {
      value = e.target.checked;
    }
    const activeItem = { ...this.state.activeItem, [name]: value };
    this.setState({ activeItem });
  };


  render(){
    const { toggle, onSave } = this.props;
    return (
      <Modal isOpen={true} toggle={toggle}>
        <ModalHeader toggle={toggle}>Task Item</ModalHeader>
        <ModalBody>
          <Form>
            <FormGroup>
              <label for="title">Title</label>
              <input
                type="text"
                name="title"
                value={this.state.activeItem.title}
                onChange={this.handleChange}
                placeholder="Enter Task Description"
              />
            </FormGroup>
            <FormGroup>
              <label for="description">Description</label>
              <input
                type="text"
                name="description"
                value={this.state.activeItem.description}
                placeholder="Enter Task Description"
              />
            </FormGroup>
            <FormGroup check>
              <label for="completed">
                <input
                  type="checkbox"
                  name="completed"
                  value={this.state.activeItem.completed}
                  onChange={this.handleChange}
                />
                Completed
              </label>
            </FormGroup>
          </Form>
        </ModalBody>
        <ModalFooter>
          <Button color="success" onClick={() => onSave(this.state.activeItem)}>
            Save
          </Button>
        </ModalFooter>
      </Modal>
    )
}
}









export default Modal;
