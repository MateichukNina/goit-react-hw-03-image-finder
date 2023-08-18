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
 toggleModal = () => {
  this.setState(prevState => ({
    showModal: !prevState.showModal
  }));
};

render(){
  const { showModal } = this.state;
   const { webformatURL, tags, largeImageURL } = this.props.item;

  return createPortal (
    
    <div className="Overlay" onClick={this.handleBackdropClick}>
      <div className="Modal"> <img
          src={webformatURL}
          load="lazy"
          onClick={this.toggleModal}
          alt={tags}
        />
        <div
           isOpen={showModal}
          onRequestClose={this.toggleModal}
        >
          <img src={largeImageURL} alt={tags}/>
        </div></div>
    </div>,
    modalRoot,
  )
}



}