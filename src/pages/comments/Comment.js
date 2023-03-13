import React from "react";
import { Media } from "react-bootstrap";
import { Link } from "react-router-dom";
import Avatar from "../../components/Avatar";
import styles from "../../styles/Comment.module.css";
import { FaStar } from "react-icons/fa";

const Comment = (props) => {
  const { profile_id, profile_image, owner, updated_at, content, rating } = props;

  // Calculate the number of full and half stars based on the rating
  const fullStars = Math.floor(rating);
  const halfStars = Math.ceil(rating - fullStars);

  // Generate an array of star icons with full stars and half stars
  const stars = Array(fullStars).fill(<FaStar className={styles.Star} />);
  if (halfStars > 0) {
    stars.push(
      <FaStar className={`${styles.Star} ${styles.HalfStar}`} key={fullStars} />
    );
  }

  return (
    <div>
      <hr />
      <Media>
        <Link to={`/profiles/${profile_id}`}>
          <Avatar src={profile_image} />
        </Link>
        <Media.Body className="align-self-center ml-2">
          <span className={styles.Owner}>{owner}</span>
          <span className={styles.Date}>{updated_at}</span>
          <p>{content}</p>
          <p>
            {stars} {rating}/5
          </p>
        </Media.Body>
      </Media>
    </div>
  );
};

export default Comment;
