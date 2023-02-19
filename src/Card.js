//you can add javascript code to a jsx element by enclosing it in curly braces
//you can write javascript code in component functions before the return value (makes the logic more readable)
//props are function parameters and they are objects containing all the info for a component
//props can be destructured into their separate elements

function Card(props) {
    let badgeText
    if (props.item.openSpots === 0 ) {
        badgeText = "SOLD OUT"
    } else if (props.item.location === "Online") {
        badgeText = "ONLINE"
    }
    return (
        <div className="card">
            {/*conditional rendering - will only render if openSpots is equal to 0 or if experience is*/}
            {badgeText && <div className="card-badge">{badgeText}</div>}
            <img className="card-img"
            //if elements brought in as whole object, use props.item.elemement - if individual use props.element
            //if elements "spread" across components, use props.element
                src={`../images/${props.item.coverImg}`}
            />
            <div className="card-availability">
                {props.item.avail}
            </div>
            <div className="card-stats">
                <img src={require("./star.png")} className="card-star" />
                <div className="rating">&nbsp;{props.item.stats.rating}</div>
                <div className="rating-count">&nbsp;&nbsp;({props.item.stats.reviewCount} Reviews)&nbsp;&nbsp;•</div>
                <div className="card-location">&nbsp;&nbsp;{props.item.location}</div>
            </div>
            <div className="card-title">
                {props.item.title}
            </div>
            <div className="card-price">
                <strong>From ${props.item.price}</strong> / Person
            </div>
        </div>
    )
}

export default Card;