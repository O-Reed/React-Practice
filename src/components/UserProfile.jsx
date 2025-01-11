import PropTypes from "prop-types";
import UserFavoriteFoods from "./UserFavoriteFoods";
import UserUsername from "./UserUsername";

const UserProfile = (props) => {
  props.callMe();
  return (
    <>
      <b>Age: </b>
      <span>{props.age}</span>
      <>
        <UserUsername username={props.username} />
        <UserFavoriteFoods />
      </>
    </>
  );
};

UserProfile.propTypes = {
  username: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
  callMe: PropTypes.func.isRequired,
  isLoggined: PropTypes.bool,
  favoriteFoods: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    })
  ),
};

export default UserProfile;
