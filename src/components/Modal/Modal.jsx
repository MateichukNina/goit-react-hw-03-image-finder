import { Component } from "react";
 import { createPortal } from "react-dom";

const modalRoot = document.querySelector('#modal-root');

export class Modal extends Component{
componentDidMount(){
  console.log('Modal componentDidMount')
   window.addEventListener('keydown', this.handleKeydown)
}


componentWillUnmount(){
  console.log('Modal ')
  window.removeEventListener('keydown', this.handleKeydown)
 
}


handleKeydown = e =>{
  if(e.code === 'Escape'){
    console.log('push esc')
     this.props.onClose()
   }
 }

 handleBackdropClick = evt =>{
  if(evt.target === evt.currentTarget){
    this.props.onClose()
  }
 }

render(){
  return createPortal (
    <div className="Overlay" onClick={this.handleBackdropClick}>
      <div className="Modal">{this.props.children}</div>
    </div>,
    modalRoot,
  )
}



}