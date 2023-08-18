import { Component } from "react";
 import { createPortal } from "react-dom";
//  import Modal from 'react-modal';

const modalRoot = document.querySelector('#modal-root');

export class ModalImage extends Component{
state = {
  showModal: false,
}


componentDidMount(){
  
   window.addEventListener('keydown', this.handleKeydown)
}
componentWillUnmount(){
 
  window.removeEventListener('keydown', this.handleKeydown)
 
}


handleKeydown = e =>{
  if(e.code === 'Escape'){
    
     this.props.onClose()
   }
 }

 handleBackdropClick = evt =>{
  if(evt.target === evt.currentTarget){
    this.props.onClose()
  }
 }

 toggleModal = () => this.setState(({showModal}) => ({
  showModal: !showModal
 }))

render(){
  const { isModalOpen } = this.state;
   const { webformatURL, largeImageURL } = this.props.item;

  return createPortal (
    
    <div className="Overlay" onClick={this.handleBackdropClick}>
      <div className="Modal"> <img
          src={webformatURL}
          load="lazy"
          onClick={this.toggleModal}
        />
        <div
          isOpen={isModalOpen}
          onRequestClose={this.toggleModal}
        >
          <img src={largeImageURL} />
        </div></div>
    </div>,
    modalRoot,
  )
}



}