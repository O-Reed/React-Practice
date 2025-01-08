
import UserFavoriteFoods from "./UserFavoriteFoods";
import UserUsername from "./UserUsername";

const UserProfile = (props) => {
  return (
    <div id="user-profile">
        <UserUsername username="Anthony" />
        <b>Age: </b>
        <span>{props.age}</span>
        <UserFavoriteFoods />
    </div>
  )
}

export default UserProfile;