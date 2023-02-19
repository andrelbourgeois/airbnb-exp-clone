import Card from "./Card"
import data from "./data"

function Carousel() {
    const cards = data.map(item => {
        return (
            <Card
                key={item.id}
                //props can be brought in with whole objects
                item={item}

                //props can be "spread" across components as of JS6
                // {...item}

                //props can be brought in as individual elements - this is the most inconvenient way, especially with larger components
                /*img={item.coverImg}
                rating={item.stats.rating}
                count={item.stats.reviewCount}
                location={item.location}
                title={item.title}
                price={item.price}
                openSpots={item.openSpots}*/
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