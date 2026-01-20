import "./AboutMe.css";
import ProfileOrbit from "../Visuals/ProfileOrbit/ProfileOrbit";

const AboutMe = () => {
  return (
    <section className="about-section" id="about">
      <div className="about-container">
        {/* Profile image orbit on left */}
        <div className="about-orbit">
          <ProfileOrbit />
        </div>

        {/* Text content on right */}
        <div className="about-content">
          <h2>About Section</h2>

          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea hic dolores aliquam illum quaerat sed eum laboriosam sit, qui nulla voluptates porro ullam deserunt numquam odio magni quidem sapiente nobis.
          </p>

          <div className="about-actions">
            <button>Button 1</button>
            <button>Button 2</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
