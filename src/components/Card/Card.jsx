const Card = ({ photoDescription, photo, photographer, tags }) => {
  return (
    <>
      <div>
        <img src={photo} alt={photoDescription} />
        <p> {photographer}</p>
        {/* Work through the tags
        TODO: format, use join or something to add in commas */}
        <p>{tags}</p>
        {/* <p>{photoDescription}</p> */}
      </div>
    </>
  );
};

export default Card;
