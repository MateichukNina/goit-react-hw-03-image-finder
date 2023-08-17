


export const ImageGallery = ({items}) =>{
  return(
    <ul className="gallery">
    {items.map((item) => (
      <li key={item.id}>
        <img src={item.url}  />
      </li>
    ))}
  </ul>
  )
}