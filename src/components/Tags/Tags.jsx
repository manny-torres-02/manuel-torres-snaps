import "./Tags.css";
const Tags = ({ isSelected, name, onClick }) => {
  return (
    <>
      <button
        className={`tags ${isSelected ? "tags--active" : ""}`}
        onClick={onClick}
      >
        {name}
      </button>
    </>
  );
};

export default Tags;
