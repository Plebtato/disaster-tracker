import { Icon } from '@iconify/react'
import locationIcon from '@iconify/icons-carbon/earthquake'

const EarthquakeMarker = ({lat, lng, onClick}) => {
    return (
        <div className="location-marker" onClick={onClick}>
            <Icon icon={locationIcon} className="earthquake-icon"/>
        </div>
    )
}

export default EarthquakeMarker