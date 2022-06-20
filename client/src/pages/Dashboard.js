import TinderCard from "react-tinder-card";
import { useState } from "react";
import ChatContainer from "../components/ChatContainer";

const Dashboard = () => {
  const db = [
    {
      name: "Raju",
      url: "https://d33wubrfki0l68.cloudfront.net/2a3556a09e73a07aacedb2bcfaa39512cd37a3f4/68f50/img/templates/akshay-kumar-scheme-pose.png",
    },
    {
      name: "Ronduu",
      url: "https://newfastuff.com/wp-content/uploads/2020/04/wvqqk6g8z6r41-150x150.png",
    },
    {
      name: "Deepak Kalal",
      url: "https://www.celebrityborn.com/admin/assets/images/people/deepak_kalal_504.png",
    },
    {
      name: "Bandya",
      url: "https://mirchiplay.com/wp-content/uploads/2021/09/r1_5faa6607c23f7.jpeg",
    },
    {
      name: "Bada Ladka",
      url: "https://img.mensxp.com/media/content/2022/Apr/header_626a736305242.jpeg?w=1100&h=558&cc=1",
    },
  ];

  const characters = db;
  const [lastDirection, setLastDirection] = useState();

  const swiped = (direction, nameToDelete) => {
    console.log("removing: ", nameToDelete);
    setLastDirection(direction);
  };

  const outOfFrame = (name) => {
    console.log(name + " left the screen!");
  };

  return (
    <div className="dashboard">
      <ChatContainer />
      <div className="swipe-container">
        <div className="card-container">
          {characters.map((character) => (
            <TinderCard
              className="swipe"
              key={character.name}
              onSwipe={(dir) => swiped(dir, character.name)}
              onCardLeftScreen={() => outOfFrame(character.name)}
            >
              <div
                style={{ backgroundImage: "url(" + character.url + ")" }}
                className="card"
              >
                <h3>{character.name}</h3>
              </div>
            </TinderCard>
          ))}
          <div className="swipe-info">
            {lastDirection ? <p>You swiped {lastDirection}</p> : <p />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
