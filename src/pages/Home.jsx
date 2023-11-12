import NavBar from "../components/NavBar";
import video from "../assets/videos/kbfc-bg.mp4";
import { Link } from "react-router-dom";
function Home() {
  return (
    <main id="home">
      <NavBar />
      <section className="hero">
          <video autoPlay muted loop className="back-video">
            <source src={video} type="video/mp4" />
          </video>
        <h1>Kerala Blasters</h1>
        <Link to="/squad"><button>View more</button></Link>
      </section>
    </main>
  );
}

export default Home;
