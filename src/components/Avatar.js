import React from "react";
import styles from "../styles/Avatar.module.css";

const Avatar = ({ height = 45, text }) => {
  return (
    <span>
      <img
        className={styles.Avatar}
        src={"https://res.cloudinary.com/dlorcehfq/image/upload/v1678551729/default_profile_y7itwz.jpg"}
        height={height}
        width={height}
        alt="avatar"
      />
      {text}
    </span>
  );
};

export default Avatar;