import React from "react";
import PropTypes from "prop-types";

const UserDetails = (props) => {
  return (
    <div key={props.mockUser.id}>
      <b>ID : </b>
      <span>{props.mockUser.id}</span>
      <br />
      <b>Username : </b>
      <span>{props.mockUser.username}</span>
      <br />
      <b>Email : </b>
      <span>{props.mockUser.email}</span>
      <br />
    </div>
  );
};

UserDetails.propTypes = {
  mockUser: PropTypes.shape({
    id: PropTypes.number.isRequired,
    username: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
  }),
};

export default UserDetails;
