import "./Hero.scss";
const Hero = () => {
  return (
    <>
      <div className="introduction">
        <p className="introduction__mission">Our Mission:</p>
        <p className="introduction__text">
          Provide photographers a space to share photos of the neighborhoods
          they cherish,
          <span className="introduction__text-italic">
            &nbsp;expressed in their unique style.
          </span>
        </p>
      </div>
    </>
  );
};

export default Hero;
