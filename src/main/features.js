const Features = (props) => {
    return (
        <div className="feature">
            <div className="feature__container">
                <div className="feature__container__img">
                    <img className="feature__img" src={props.src} alt={props.alt} />
                </div>
                <div className="feature__container__captions">
                    <h2>{props.caption}</h2>
                    <p>{props.text}</p>
                </div>
            </div>

        </div>
    )
}
export default Features