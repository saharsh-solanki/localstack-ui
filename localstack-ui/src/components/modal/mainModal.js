import Modal from 'react-bootstrap/Modal';

export const RootModal = ({ isOpen, onClose, ModalBody,ModalFooter }) => {

  return ( <>
      <Modal show={isOpen} onHide={onClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
           {ModalBody?<ModalBody></ModalBody>:""}
        </Modal.Body>
        <Modal.Footer>
          {ModalFooter ? <ModalFooter></ModalFooter> : <></>}
        </Modal.Footer>
      </Modal>
    </> );
};
