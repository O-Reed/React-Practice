import PropTypes from "prop-types";
import UserFavoriteFoods from "./UserFavoriteFoods";
import UserUsername from "./UserUsername";

const UserProfile = (props) => {

    props.callMe();
  return (
    <div id="user-profile">
        <UserUsername username={props.username} />
        <b>Age: </b>
        <span>{props.age}</span>
        <UserFavoriteFoods />
    </div>
  )
}

UserProfile.propTypes = {
    username: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired,
    callMe: PropTypes.func.isRequired,
    isLoggined: PropTypes.bool,
    favoriteFoods: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string.isRequired,
            id: PropTypes.string.isRequired
        })
    )
}

export default UserProfile;