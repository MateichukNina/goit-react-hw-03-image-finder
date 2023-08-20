import { Component } from "react";
 import { createPortal } from "react-dom";
import {ImageItem} from './Modal.styled'
  import Modal from 'react-modal';

const modalRoot = document.querySelector('#modal-root');

 const customStyles = {
   content: {
     top: '52%',
     left: '50%',
     right: 'auto',
     bottom: 'auto',
     marginRight: '-50%',
     transform: 'translate(-50%, -50%)',
     padding: '0',
     border: 'none',
     maxWidth: 'calc (100vw - 48px)',
    maxHeight: 'calc(100vh - 24px)',
     overflow: 'none',
   },
   overlay: {
     backgroundColor: 'rgba(0, 0, 0, 0.8)',
   },
 };

export class ModalImage extends Component{
state = {
  modalOpen: false,
}


componentDidMount(){
  
   window.addEventListener('keydown', this.handleKeydown)
}
componentWillUnmount(){
 
  window.removeEventListener('keydown', this.handleKeydown)
 
}


// handleKeydown = e =>{
//   if(e.code === 'Escape'){
    
//      this.props.onClose()
//    }
//  }

//  handleBackdropClick = evt =>{
//   if(evt.target === evt.currentTarget){
//     this.props.onClose()
//   }
//  }
//  toggleModal = () => {
//   this.setState(prevState => ({
//     showModal: !prevState.showModal
//   }));
// };


// openModal = () => this.setState({ modalOpen: true });
// closeModal = () => this.setState({ modalOpen: false });

openModal = () => {
  console.log('Opening modal');
  this.setState({ modalOpen: true });
};

closeModal = () => {
  console.log('Closing modal');
  this.setState({ modalOpen: false });
};



render(){
  const { modalOpen } = this.state;
   const { tags, largeImageURL, webformatURL } = this.props.item;

  return createPortal (
    
    <ImageItem>
    <img
      src={webformatURL}
      alt={tags}
      load="lazy"
      onClick={this.openModal}
    />
    <Modal
      isOpen={modalOpen}
      style={customStyles}
      onRequestClose={this.closeModal}
      contentLabel="Example Modal"
    >
      <img src={largeImageURL} alt={tags} />
    </Modal>
  </ImageItem>
    ,
    modalRoot,
  )
}



}