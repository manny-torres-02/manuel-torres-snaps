import "./Tags.css";
const Tags = ({ name }) => {
  return (
    <>
      {/* <button>{name}</button> */}
      <button className="filterTags">{name}</button>
    </>
  );
};

export default Tags;
