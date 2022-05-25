import { Icon } from '@iconify/react'
import disasterIcon from '@iconify/icons-carbon/tropical-storm'

const Header = ({lat, lng, onClick}) => {
    return (
        <header className="header">
            <h1><Icon icon={disasterIcon} className='header-icon'/> NASA EONET Natural Disaster Tracker <Icon icon={disasterIcon} className='header-icon'/></h1>
        </header>
    )
}

export default Header