const Content = (props) => {
    return(
        <div className="content">
            <div className="place-img-container">
                <img src={props.img.src} alt={props.img.alt} className="place-img"/>
            </div>
            <div className="about-content">
                <img src="/src/assets/images/marker.png" alt="marker" className="marker" />
                <span className="place-name">{props.country}</span>
                <a href={props.googleMapsLink} target="_blank" className="place-link">View on Google Maps</a>
                <h1 className="content-head">{props.title}</h1>
                <p className="content-date">{props.date}</p>
                <p className="content-description">{props.text}</p>
            </div>
        </div>
    )
}

export default Content;