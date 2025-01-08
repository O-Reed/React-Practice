import PropTypes from "prop-types"

const UserUsername = (props) => {
  return (
    <div>
        <b>Username : </b>
        <span>{props.username}</span>
    </div>
  )
}

UserUsername.propTypes = {
    username: PropTypes.string.isRequired,
}

export default UserUsername