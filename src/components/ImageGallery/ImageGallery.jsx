import { ModalImage } from '../Modal/Modal'


export const ImageGallery = ({items}) =>{
  return(
    <div>
      <ul className="gallery">
    {items.map((item) => (
      <li key={item.id}>
        <ModalImage item={item}  />
      </li>
    ))}
  </ul>
    </div>
    
  )
}