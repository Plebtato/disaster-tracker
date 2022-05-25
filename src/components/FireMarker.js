import { Icon } from '@iconify/react'
import locationIcon from '@iconify/icons-carbon/fire'

const FireMarker = ({lat, lng, onClick}) => {
    return (
        <div className="location-marker" onClick={onClick}>
            <Icon icon={locationIcon} className="fire-icon"/>
        </div>
    )
}

export default FireMarker