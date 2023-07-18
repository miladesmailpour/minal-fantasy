import { Link } from "react-router-dom";
import { useQuery } from "@apollo/client";
import "../components/about.css";

const About = () => {
  return (
    <>
      <h1 className="about-header">Our Story</h1>
      <div className="about-main">
        <p className="about-body-text">
        Welcome to the enchanting realm of Minal Fantasy, a visionary project forged by the brilliant minds of Mahdi, Griffin, and Tyler. United by their unwavering passion for web development and gaming, these intrepid individuals have embarked on a daring quest to breathe new life into the classic Minesweeper game and transmute it into a thrilling Medieval RPG adventure.
<br></br>
<br></br>
Drawing inspiration from the magical worlds of old, Minal Fantasy promises to transport players to a realm where knights, wizards, and mythical creatures collide in an epic battle between strategy and chance. The trio's collective intellect and ardor for both the technological and gaming domains have laid the very foundation of this innovative spin-off.
<br></br>
<br></br>
Individually, they are masters in their own right, each possessing a unique set of skills that complement one another like the pieces of a legendary artifact. Mahdi, a coding sorcerer, weaves intricate spells in the form of elegant algorithms that breathe life into the game's mechanics. Griffin, a gaming visionary, crafts captivating visuals and immersive landscapes that bewitch players and capture their imaginations. And Tyler, a design virtuoso, conducts a mesmerizing symphony of style, crafting a user interface that ensures the experience is as enchanting as it is challenging.
<br></br>
<br></br>
The journey began as a humble spark in their hearts, but fueled by their boundless ambition and unyielding dedication, it has now ignited into a blazing inferno of creativity. Driven by a relentless pursuit of perfection, the team strives to create an unforgettable experience that will transcend mere entertainment and transform into an odyssey of discovery and camaraderie.
<br></br>
<br></br>
But it's not just about crafting an extraordinary game. Oh no! These trailblazers have set their sights on revolutionizing the genre itself. With their sharp minds and hearts ablaze, they're pushing the boundaries of what Minesweeper spin-offs can be, ingeniously blending classic gameplay with the captivating allure of RPG elements.
<br></br>
<br></br>
And they don't stop there! Amidst the fires of innovation, Mahdi, Griffin, and Tyler harbor an unshakable belief in the power of community and collaboration. They seek to foster a vibrant community of adventurers who will come together to share their tales, strategize, and collectively shape the future of Minal Fantasy.
<br></br>
<br></br>
So, dear visitor, whether you're a seasoned explorer of virtual realms or a newcomer to the world of games, join us on this grand expedition! Together, let's embark on a journey of wonder, magic, and camaraderie, as we unveil the next chapter in the gaming universe with Minal Fantasy - a testament to the brilliance, ambition, and passion of our intrepid trio.
        </p>
      </div>
    </>
  );
};

export default About;