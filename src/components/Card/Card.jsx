import "./Card.css";

const Card = ({
  photoDescription,
  photo,
  photographer,
  tags,
  showFiltered,
}) => {
  return (
    <>
      <div className={`card ${showFiltered ? "card__with-filters" : ""}`}>
        <img className="card__image" src={photo} alt={photoDescription} />
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
