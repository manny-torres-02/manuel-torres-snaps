import "./Card.css";

const Card = ({ photoDescription, photo, photographer, tags }) => {
  return (
    <>
      <div className="card">
        <img className="card__image" src={photo} alt={photoDescription} />
        {/* <div className="card__data-wrapper"> */}
        <p className="card__photographer"> {photographer}</p>
        {/* Work through the tags
        TODO: format, use join or something to add in commas */}
        
        <p className="card__tags">{tags}</p>
        {/* </div> */}
      </div>
    </>
  );
};

export default Card;
