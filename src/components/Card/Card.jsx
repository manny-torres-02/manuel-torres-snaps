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
  photoID
}) => {
  const { id } = useParams();

  return (
    <>
      <div className={`card ${showFiltered ? "card__with-filters" : ""}`}>
        <Link className="gallery__link" to={`/Photos/${photoID}`}>
          <img className="card__image" src={photo} alt={photoDescription} />
        </Link>
        {/* <h1>card details: {PhotoID}</h1> */}
        {showPhotographerNameInCard === false && (
          <p className="card__photographer"> {photographer}</p>
        )}

        <div>
          <div className="card__tag-wrapper">
            {/* Add in check to make sure tags exist */}
            {tags &&
              tags.map((tag, index) => (
                <p className="card__tags" key={index}>
                  {tag}
                </p>
              ))}
            {/* TODO: update the styling for all three items */}
            {showLikes && <p className="card__likes">Likes: {likes}</p>}
            {showTimeStamp && <p className="card__timestamp"> {timestamp}</p>}
            {showPhotographerNameInCard && <p className=""> {photographer}</p>}
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
