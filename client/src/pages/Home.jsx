import { Link } from "react-router-dom";
import "../components/home.css";
import Modal from "../components/modal";

import { useQuery } from "@apollo/client";
import { QUERY_USERS } from '../utils/queries';

const Home = () => {
  const { loading, data } = useQuery(QUERY_USERS);
  if(!loading){
    console.log(data)
  }

  // const matchupList = data?.matchups || [];

  return (
    <>
      <h1 className="welcome">Welcome, valiant adventurer...</h1>
      <div className="homepage-main">
        <p className="body-text">
        This is a realm of infinite possibilities! Prepare yourself for a thrilling journey through our enchanting medieval world.
<br></br>
<br></br>
Harness the power of your imagination and embark on epic quests, battle fierce creatures, and uncover hidden treasures. But remember, the true test of valor lies not only in your skill but in your name etched in the annals of glory.
<br></br>
<br></br>
By signing up and logging in, you unlock the key to eternal recognition. Your courageous feats will be forever immortalized on our esteemed leaderboard. Rise through the ranks, prove your mettle, and let your name echo throughout the kingdom.
<br></br>
<br></br>
To begin your quest, venture forth to the illustrious "Play" section, awaiting your arrival on the noble navigation bar. There, you shall find the sacred scrolls of rules and guidelines, ensuring a fair and honorable journey.
<br></br>
<br></br>
The realm awaits your arrival, noble hero. Prepare your sword, sharpen your wits, and let your legend be forged within these mythical lands. May the gods favor your every step as you tread the path to greatness. Adventure awaits!
        </p>
      </div>
    </>
  );
};

export default Home;
