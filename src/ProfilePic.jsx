
function ProfilePicture() {

    const imgUrl = "./src/assets/lexus3.jpg";

    const handleClick = (e) => e.target.style.display = "none";

    return(<img onClick={(e) => handleClick(e)} src={imgUrl}/>)
}

export default ProfilePicture