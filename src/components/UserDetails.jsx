import React from "react";
import PropTypes from "prop-types";

const UserDetails = (props) => {
  return (
    <div key={props.user.id}>
      <b>ID : </b>
      <span>{props.user.id}</span>
      <br />
      <b>Username : </b>
      <span>{props.user.username}</span>
      <br />
      <b>Email : </b>
      <span>{props.user.email}</span>
      <br />
    </div>
  );
};

UserDetails.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.number.isRequired,
    username: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
  }),
};

export default UserDetails;
