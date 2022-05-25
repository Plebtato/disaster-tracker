import { Icon } from '@iconify/react'
import locationIcon from '@iconify/icons-carbon/flood'

const FloodMarker = ({lat, lng, onClick}) => {
    return (
        <div className="location-marker" onClick={onClick}>
            <Icon icon={locationIcon} className="flood-icon"/>
        </div>
    )
}

export default FloodMarker