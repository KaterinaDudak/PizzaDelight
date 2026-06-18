import Heading from "../components/Heading/Heading";
import Mission from "../components/Mission/Mission";

import hero from "../assets/images/hero.png";
import banner1 from "../assets/images/banner1.png";
import Banner from "../components/Banner/Banner";

const About = () => {
  return (
    <>
      <Banner
        bgUrl={banner1}
        title="Our Story"
        subtitle="From a small family pizzeria to a beloved local favorite, discover the passion behind every pizza we make."
      ></Banner>
      <div className="about container">
        <div className="about__info">
          <Heading
            title="Our Beginning"
            subtitle={`Pizza Delight was founded in 1998 by the Rossi family, who brought their secret recipes all the way from Naples, Italy. What started as a small family restaurant with just four tables has grown into a beloved establishment known for authentic flavors and quality ingredients.
           \nAntonio Rossi, our founder, learned the art of pizza-making from his grandfather in Naples. He was determined to bring those traditional techniques and flavors to a new audience, while maintaining the authentic methods that make Italian pizza so special.`}
          ></Heading>
        </div>
        <img src={hero} alt="pizza" className="about__img" />
      </div>
      <Mission></Mission>
    </>
  );
};
export default About;
