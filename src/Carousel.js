import Card from "./Card"
import data from "./data"

function Carousel() {
    const cards = data.map(item => {
        return (
            <Card
                //props below
                img={item.coverImg}
                rating={item.stats.rating}
                count={item.stats.reviewCount}
                location={item.location}
                title={item.title}
                price={item.price}
            />
        )
    })
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
                {cards}
            </div>
        </div>
    );
}

export default Carousel;