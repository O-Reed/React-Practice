import PropTypes from "prop-types"
import React from "react"

const UserUsername = (props) => {
  return (
    <React.Fragment>
        <b>Username : </b>
        <span>{props.username}</span>
    </React.Fragment>
  )
}

UserUsername.propTypes = {
    username: PropTypes.string.isRequired,
}

export default UserUsername