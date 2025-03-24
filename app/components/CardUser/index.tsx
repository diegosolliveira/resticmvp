import "./styles.css"

interface userData {
    name: string;
    description: string;
    time: string;
}

export default function CardUser( {name, description, time}: userData) {
    return (
        <div className="container-carduser">
            <div className="carduser-title">
                <img className="img-user" src="https://cdn-icons-png.flaticon.com/512/3177/3177440.png" alt="" />
                
                <div>
                    <h1 className="carduser-h1">{name}</h1>
                    <span>{description}</span>
                </div>
            </div>

            <span>{time}</span>
        </div>
    )
}