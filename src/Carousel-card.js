function Card() {
    return (
        <div className="Carousel-card">
            <div className="card-img">

            </div>
            <div className="card-availability">

            </div>
            <div className="card-reviews">
                <img src={require("./star.png")} className="card-star" />
                <div className="rating"></div>
                <div className="rating-count"></div>
            </div>
            <div className="card-content">

            </div>
            <div className="card-price">

            </div>
        </div>
    )
}

export default Card;