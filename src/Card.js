//you can add javascript code to a jsx element by enclosing it in curly braces
//you can write javascript code in component functions before the return value (makes the logic more readable)
//props are function parameters and they are objects containing all the info for a component
//props can be destructured into their separate elements

function Card(props) {
    return (
        <div className="card">
            <img className="card-img"
                src={`../images/${props.img}`}
            />
            <div className="card-availability">
                {props.avail}
            </div>
            <div className="card-stats">
            <img src={require("./star.png")} className="card-star" />
                <div className="rating">{props.rating}</div>
                <div className="rating-count">{props.count}</div>
            </div>
            <div className="card-location">
                {props.location}
            </div>
            <div className="card-title">
                {props.title}
            </div>
            <div className="card-price">
                {props.price}
            </div>
        </div>
    )
}

export default Card;