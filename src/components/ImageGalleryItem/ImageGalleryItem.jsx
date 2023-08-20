
//  import {Image} from './ImageGalleryItem.styled'


//  export const ImageGalleryItem = ({ image }) => {
//     return (
//       <Image>
//        <a href={image.largeImageURL}>
//          <img src={image.webformatURL} alt="" />
//         </a>
      
//      </Image>
//    );
//   };
import React from 'react';
import {Image} from './ImageGalleryItem.styled'
import { Component } from 'react';
import {Modal} from '../Modal/Modal'


export class ImageGalleryItem extends Component {
  state = {
    isModalOpen: false,
  };

  openModal = () => {
    this.setState({ isModalOpen: true });
    window.addEventListener('keydown', this.handleKeyDown);
  };

  closeModal = () => {
    this.setState({ isModalOpen: false });
    window.removeEventListener('keydown', this.handleKeyDown);
  };

  handleKeyDown = e => {
    if (e.code === 'Escape') {
      this.closeModal();
    }
  };

  render() {
    const { webformatURL, tags} = this.props.image;
    const { isModalOpen } = this.state;

    return (
      <Image className="gallery-item">
        <img
          src={webformatURL}
          alt={tags}
          onClick={this.openModal}
          className="gallery-image"
        />
        {isModalOpen && (
          <Modal onClose={this.closeModal} image={this.props.image} />
        )}
      </Image>
    );
  }
}
