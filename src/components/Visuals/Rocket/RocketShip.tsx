/* Modified Rocketship component by JkHuger */
import "./RocketShip.css";

const RocketShip = () => {
  return (
    <section className="rocket-container">
      <div className="rocket">
        <div className="rocket-body">
          <div className="body"></div>
          <div className="fin fin-left"></div>
          <div className="fin fin-right"></div>
          <div className="window"></div>
        </div>

        <div className="exhaust-flame"></div>

        <ul className="exhaust-fumes">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>

      <div className="rocket-cutoff" />
      <div className="rocket-boundary" />
    </section>
  );
};

export default RocketShip;

