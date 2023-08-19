import { ModalImage } from '../Modal/Modal'
import { Gallery } from './ImageGallery.styled'


export const ImageGallery = ({items}) =>{
  return(
    <div>
      <Gallery>
    {items.map((item) => (
      <li key={item.id}>
        <ModalImage item={item}  />
      </li>
    ))}
  </Gallery>
    </div>
    
  )
}