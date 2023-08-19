import { Component } from "react";
 import { createPortal } from "react-dom";
  import Modal from 'react-modal';

const modalRoot = document.querySelector('#modal-root');

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


openModal = () => this.setState({ modalOpen: true });
closeModal = () => this.setState({ modalOpen: false });

render(){
  const { modalOpen } = this.state;
   const { tags, largeImageURL, webformatURL } = this.props.item;

  return createPortal (
    
    <div>
    <img
      src={webformatURL}
      alt={tags}
      load="lazy"
      onClick={this.openModal}
    />
    <Modal
      isOpen={modalOpen}
      onRequestClose={this.closeModal}
      contentLabel="Example Modal"
    >
      <img src={largeImageURL} alt={tags} />
    </Modal>
  </div>
    ,
    modalRoot,
  )
}



}