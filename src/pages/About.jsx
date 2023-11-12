import NavBar from "../components/NavBar";
import Particle from "../components/Particle";
import SocialIcons from "../components/SocialIcons";

function About() {
  return (
    <main id="about">
      <NavBar />
      <div className="particle-container">
        <Particle />
      </div>
      <section>
        <h1 className="heading">About us</h1>
        <p className="aboutus">
          Kerala Blasters Football Club is one of the most popular and
          successful football clubs in India. It competes in the Indian Super
          League (ISL), the top tier of Indian football league system. The club
          is based in Kochi, Kerala. It was founded in 2014 as one of the eight
          original ISL franchises. The club has a large and passionate fan base,
          known as the Manjappada. The Jawaharlal Nehru International Stadium,
          the home ground of Kerala Blasters, is one of the most attended
          stadiums in India. The stadium is often referred to as the 'Fortress'
          by the fans. Kerala Blasters is yet to win the ISL title. However, the
          club has finished as runners-up twice, in 2014 and 2016. The club has
          also won the ISL League Winner's Shield once, in 2019-20. Some of the
          club's notable players include former India captain Sandesh Jhingan,
          former Manchester United striker Dimitar Berbatov, former Indian
          international CK Vineeth and current India international Adrian Luna.
          Kerala Blasters has a strong youth development system. The club has a
          number of youth teams that compete in various leagues at different age
          groups. The club also has a women's team that competes in the Indian
          Women's League (IWL), the top tier of women's football league system
          in India. Kerala Blasters is a major force in Indian football and is
          committed to developing the sport in the country. The club has a large
          and passionate fan base and is one of the most successful clubs in the
          ISL.
        </p>
        <footer>
        <h1 className="heading">Socials</h1>
        <SocialIcons />
        <div className="copyright">
            <p>Copyright &copy; 2023</p>
            <p>Designed and Bulit by <a href="https://arjuncvinod.me">Arjun C Vinod</a></p>
        </div>
        </footer>
      </section>
    </main>
  );
}

export default About;
