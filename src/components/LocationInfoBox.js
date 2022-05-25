const LocationInfoBox = ({info}) => {
    return (
        <div className="location-info">
            <h2>Disaster Info</h2>
            <ul>
                <li>Name: <strong>{ info.title }</strong></li>
                <li>ID: <strong>{ info.id }</strong></li>
            </ul>
        </div>
    )
}

export default LocationInfoBox