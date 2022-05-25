import { useState } from 'react'
import GoogleMapReact from 'google-map-react'
import FireMarker from './FireMarker'
import StormMarker from './StormMarker'
import VolcanoMarker from './VolcanoMarker'
import EarthquakeMarker from './EarthquakeMarker'
import FloodMarker from './FloodMarker'
import LocationInfoBox from './LocationInfoBox'

const mapKey = '';

const Map = ({eventData, center, zoom}) => {
    
    const [locationInfo, setLocationInfo] = useState(null)

    const fireMarkers = eventData.map(ev => {
        if (ev.categories[0].id === 8) {
            return <FireMarker
                lat={ev.geometries[0].coordinates[1]}
                lng={ev.geometries[0].coordinates[0]}
                onClick={() => setLocationInfo({id: ev.id, title: ev.title})}
                />
        }
        return null
    })
    
    const stormMarkers = eventData.map(ev => {
        if (ev.categories[0].id === 10) {
            return <StormMarker
                lat={ev.geometries[0].coordinates[1]}
                lng={ev.geometries[0].coordinates[0]}
                onClick={() => setLocationInfo({id: ev.id, title: ev.title})}
                />
        }
        return null
    })

    const volcanoMarkers = eventData.map(ev => {
        if (ev.categories[0].id === 12) {  
            if (ev.geometries[0].type === "Polygon") {
                return <VolcanoMarker
                lat={ev.geometries[0].coordinates[0][0][1]}
                lng={ev.geometries[0].coordinates[0][0][0]}
                onClick={() => setLocationInfo({id: ev.id, title: ev.title})}
                />
            } else {
                return <VolcanoMarker
                lat={ev.geometries[0].coordinates[1]}
                lng={ev.geometries[0].coordinates[0]}
                onClick={() => setLocationInfo({id: ev.id, title: ev.title})}
                />
            }   
        }
        return null
    })

    const earthquakeMarkers = eventData.map(ev => {
        if (ev.categories[0].id === 16) {
            return <EarthquakeMarker
                lat={ev.geometries[0].coordinates[1]}
                lng={ev.geometries[0].coordinates[0]}
                onClick={() => setLocationInfo({id: ev.id, title: ev.title})}
                />
        }
        return null
    })

    const floodMarkers = eventData.map(ev => {
        if (ev.categories[0].id === 9) {
            return <FloodMarker
                lat={ev.geometries[0].coordinates[1]}
                lng={ev.geometries[0].coordinates[0]}
                onClick={() => setLocationInfo({id: ev.id, title: ev.title})}
                />
        }
        return null
    })

    return (
        <div className='map'>
            <GoogleMapReact
                bootstrapURLKeys={{key: mapKey}}
                defaultCenter={ center }
                defaultZoom={ zoom }
            >
                {fireMarkers}
                {stormMarkers}
                {volcanoMarkers}
                {earthquakeMarkers}
            </GoogleMapReact>
            {locationInfo && <LocationInfoBox info={locationInfo}/>}
        </div>
    )
}

Map.defaultProps = {
    center: {
        lat: 20,
        lng: 0
    },
    zoom: 1
}

export default Map