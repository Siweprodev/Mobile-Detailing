import "./Hero.css";
import video from "../assets/Hero.mp4" ;

function Hero() {
  return (
    <section className="hero">

<video autoPlay muted loop playsInline className="hero-video">
    <source src={video} type="video/mp4" />
  </video>


      <div className="hero-content">
        <h1>Premium Mobile Detailing</h1>

        <p>Professional detailing services brought to your location.</p>

        <button className = "hero-button">Book Now</button>
      </div>
    </section>
  );
}

export default Hero;
