import Card from "./Carousel-card"

function Carousel() {
    return (
        <div className="carousel-section">
            <h1>
                Online Experiences
            </h1>
            <p>
                Join unique interactive activities led by<br></br>
                one-of-a-kind hosts - all without leaving<br></br>
                home!
            </p>
            <div className="carousel">
                <Card />
            </div>
        </div>
    );
}

export default Carousel;