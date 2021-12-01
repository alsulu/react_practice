function Heroes(props) {
    return (
        <div className="superHero">
            <img src={props.url} alt="hero" />
            <h2>{props.name}</h2>
            <p><span className="name">Вселенная:</span> {props.university}</p>
            <p><span className="name">Альтер-эго:</span> {props.alterEgo}</p>
            <p><span className="name">Род деятельности:</span> {props.work.join(", ")}</p>
            <p><span className="name">Друзья:</span> {props.friends.join(", ")}</p>
            <p><span className="name">Суперспособности:</span> {props.superPowers.join(", ")}</p>
            <p className="description"><span className="name">Описание:</span> {props.description.replace(/%/g, "<br><br>")}</p>
        </div>
    )
}

export default Heroes;