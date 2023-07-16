import { Link } from "react-router-dom";
import "../components/home.css";
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
      <h1 className="welcome">Welcome, adventurer...</h1>
      <div className="homepage-main">
        <p className="body-text">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          facilis obcaecati repellat corrupti libero nihil culpa dolor quo
          voluptas sit dolores voluptatibus, temporibus odio ratione iusto
          doloremque similique veritatis nostrum?
        </p>
      </div>
    </>
  );
};

export default Home;
