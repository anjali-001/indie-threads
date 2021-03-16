import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button';

import './style.css';

const CreateThreadModal = (props) => {
    const [formValue, setFormValue] = useState('');

    return (
      <Modal
        {...props}
        size="lg"
        variant="modal"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Create new discussion
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <h3>Enter the name of the discussion thread</h3>
            <form>
                <button type="submit" disabled={!formValue}>
                </button>
                <input value={formValue} onChange={(e) => setFormValue(e.target.value)} placeholder="Start a discussion" />
            </form>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
}

export default CreateThreadModal;
  