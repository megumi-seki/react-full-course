import profilePic from "./assets/lexus3.jpg"

function Card(){
    return(
        <div className="card">
            <img className="card-image" src={profilePic} alt="profile picture" />
            <h2 className="card-title">Megumi</h2>
            <p className="card-text">I am collage student and learn english and spanish</p>
        </div>
    );
}

export default Card