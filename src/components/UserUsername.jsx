import PropTypes from "prop-types";
import React from "react";
import styles from "./styles.module.css";

const UserUsername = (props) => {
  return (
    <>
      <b className={styles.username}>Username : </b>
      <span>{props.username}</span>
    </>
  );
};

UserUsername.propTypes = {
  username: PropTypes.string.isRequired,
};

export default UserUsername;
