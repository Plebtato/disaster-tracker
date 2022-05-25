import spinner from './spinner.gif'

const Loader = ({lat, lng, onClick}) => {
    return (
        <div className="loader">
            <img src={spinner} alt="Loading" />
            <h1>Fetching Data</h1>
        </div>
    )
}

export default Loader