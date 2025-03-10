import "./Card.scss";
import { NavLink, Link } from "react-router-dom";
import { useParams } from "react-router-dom";

const Card = ({
  photoDescription,
  photo,
  photographer,
  tags,
  showFiltered,
  showLikes,
  likes,
  timestamp,
  comments,
  showTimeStamp,
  showPhotographerNameInCard,
  photoID,
  forPhotoPage,
}) => {
  const { id } = useParams();

  return (
    <>
      {!forPhotoPage ? (
        <div className={`card ${showFiltered ? "card__with-filters" : ""}`}>
          <Link className="gallery__link" to={`/Photos/${photoID}`}>
            <img className="card__image" src={photo} alt={photoDescription} />
          </Link>
          {showPhotographerNameInCard === false && (
            <p className="card__photographer"> {photographer}</p>
          )}

          <div>
            <div className="card__tag-wrapper">
              {tags &&
                tags.map((tag, index) => (
                  <p className="card__tags" key={index}>
                    {tag}
                  </p>
                ))}
              {/* TODO: update the styling for all three items */}
              {showLikes && <p className="card__likes">Likes: {likes}</p>}
              {showTimeStamp && <p className="card__timestamp"> {timestamp}</p>}
              {showPhotographerNameInCard && (
                <p className=""> {photographer}</p>
              )}
            </div>
          </div>
        </div>
      ) : (
        <div className={`photoPageCard `}>
          {/* <Link className="gallery__link" to={`/Photos/${photoID}`}> */}
          <img className="card__image" src={photo} alt={photoDescription} />
          {/* </Link> */}
          {/* {showPhotographerNameInCard === false && ( */}
          <p className="photoPageCard__photographer"> {photographer}</p>
          {/* )} */}
          <div className="photoPageCard__metadata">
            <div className="photoPageCard__tag-wrapper">
              {tags &&
                tags.map((tag, index) => (
                  <p className="photoPageCard__tags" key={index}>
                    {tag}
                  </p>
                ))}
              {/* TODO: update the styling for all three items */}
            </div>
            {showLikes && <p className="card__likes">Likes: {likes}</p>}
            {showTimeStamp && <p className="card__timestamp"> {timestamp}</p>}
            {showPhotographerNameInCard && <p className=""> {photographer}</p>}
          </div>
        </div>
      )}
    </>
  );
};

export default Card;
