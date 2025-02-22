import "./Tags.css";
const Tags = ({ name }) => {
  return (
    <>
      {/* <button>{name}</button> */}
      <button className="tags">{name}</button>
    </>
  );
};

export default Tags;
