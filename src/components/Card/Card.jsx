import "./Card.scss";
import LikeOutline from "../../assets/images/Like_Outline.svg?react";
import { NavLink, Link } from "react-router-dom";
import { useParams } from "react-router-dom";

const Card = ({
  photo,
  showLikes,
  showFiltered,
  likes,
  showTimeStamp,
  showPhotographerNameInCard,
  forPhotoPage,
}) => {
  const { id } = useParams();

  const adjustDate = (item) => {
    const date = new Date(item);
    // months are 0 indexed
    const month = String(date.getUTCMonth() + 1);
    const day = String(date.getDate()).padStart(2, "0"); //padstring to properly show the date if needed.
    const year = String(date.getUTCFullYear());
    let placeholder = month + "/" + day + "/" + year;
    return placeholder;
  };

  return (
    <>
      {!forPhotoPage ? (
        <div className={`card ${showFiltered ? "card__with-filters" : ""}`}>
          <Link className="gallery__link" to={`/photos/${photo.id}`}>
            <img
              className="card__image"
              src={photo.photo}
              alt={photo.photoDescription}
            />
          </Link>
          {showPhotographerNameInCard === false && (
            <p className="card__photographer"> {photographer}</p>
          )}

          <div>
            <div className="card__tag-wrapper">
              {photo.tags &&
                photo.tags.map((tag, index) => (
                  <p className="card__tags" key={index}>
                    {tag}
                  </p>
                ))}
              {showLikes && <p className="card__likes"> {photo.likes} likes</p>}
              {showTimeStamp && (
                <p className="card__timestamp">
                  {" "}
                  {adjustDate(photo.timestamp)}
                </p>
              )}
              {showPhotographerNameInCard && (
                <p className=""> {photo.photographer}</p>
              )}
            </div>
          </div>
        </div>
      ) : (
        <div className={`photoPageCard `}>
          <img
            className="photoPageCard__image"
            src={photo.photo}
            alt={photo.photoDescription}
          />
          <div className="photoPageCard__metadata">
            <div className="photoPageCard__tag-wrapper">
              {photo.tags &&
                photo.tags.map((tag, index) => (
                  <p className="photoPageCard__tags" key={index}>
                    {tag}
                  </p>
                ))}
            </div>
            <div className="photoPageCard__data">
              {showLikes && (
                <p className="photoPageCard__likes">
                  <LikeOutline />
                  {photo.likes} likes
                </p>
              )}
              {showTimeStamp && (
                <p className="photoPageCard__timestamp">
                  {adjustDate(photo.timestamp)}
                </p>
              )}
              <p className="photoPageCard__photographer">
                Photo by: {photo.photographer}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Card;
