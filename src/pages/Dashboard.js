import TinderCard from "react-tinder-card";
import { useState } from "react";
import ChatContainer from "../components/ChatContainer";

const Dashboard = () => {
  const db = [
    {
      name: "Raju",
      url: "https://humornama.com/wp-content/uploads/2022/03/Akshay-Kumar-Pose-Meme-Template-on-Phir-Hera-Pheri-1152x648.jpg",
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
      url: "https://humornama.com/wp-content/uploads/2022/03/Aap-Do-Na-Meme-Template-on-Chup-Chup-Ke-1152x691.jpg",
    },
    {
      name: "Bada Ladka",
      url: "https://humornama.com/wp-content/uploads/2022/03/Choti-Bachi-Ho-Kya-Meme-Template-on-Heropanti-1152x691.jpg",
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
