import "./Card.scss";
import { NavLink } from "react-router-dom";
import { useParams } from "react-router-dom";

const Card = ({
  photoDescription,
  photo,
  photographer,
  tags,
  showFiltered,
}) => {
  const { PhotoID } = useParams();

  return (
    <>
      <div className={`card ${showFiltered ? "card__with-filters" : ""}`}>
        {/* <NavLink to="/Photo">Snaps</NavLink> */}
        <img className="card__image" src={photo} alt={photoDescription} />
        <h1>card details: {PhotoID}</h1>
        <p className="card__photographer"> {photographer}</p>
        <div className="card__tag-wrapper">
          {tags.map((tag, index) => (
            <p className="card__tags" key={index}>
              {tag}
            </p>
          ))}
        </div>
      </div>
    </>
  );
};

export default Card;
