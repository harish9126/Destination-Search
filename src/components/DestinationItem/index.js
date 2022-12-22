import './index.css'

const DestinationItem = props => {
  const {destinationItem} = props
  const {name, imgUrl} = destinationItem

  return (
    <li className="destination-item">
      <img alt={name} src={imgUrl} className="destination-image" />
      <p className="heading">{name}</p>
    </li>
  )
}

export default DestinationItem
