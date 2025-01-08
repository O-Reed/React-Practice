
import UserFavoriteFoods from "./UserFavoriteFoods";

const UserProfile = () => {
  return (
    <div id="user-profile">
        <p>Username: Anthony</p>
        <div>
            <span>Emaile: </span>
            <span>anthony@dev.com</span>
        </div>
        <UserFavoriteFoods />
    </div>
  )
}

export default UserProfile;