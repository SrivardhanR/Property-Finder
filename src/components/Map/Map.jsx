import "./map.scss";
import { MapContainer, TileLayer ,Marker,Popup} from 'react-leaflet';
import "leaflet/dist/leaflet.css";
import Pin from "../Pin/Pin";
function Map({items}){
  return (
        <MapContainer center={[17.3850, 78.4867]} zoom={7} scrollWheelZoom={true} className="map">
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {items.map( (item) =>(
                <Pin item = {item} key={item.id}/>
            ))}
        </MapContainer>
  )
}

export default Map;