import { ModalImage } from '../Modal/Modal'
import { Gallery, Image } from './ImageGallery.styled'




export const ImageGallery = ({ items }) => {
  return (
    <div>
      <Gallery>
        {items.map((item) => {
          console.log("Item:", item); 
          return (
            <Image key={item.id}>
              <ModalImage item={item} />
            </Image>
          );
        })}
      </Gallery>
    </div>
  );
};






