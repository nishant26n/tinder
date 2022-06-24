import TinderCard from "react-tinder-card";
import { useState, useEffect } from "react";
import { useCookies } from "react-cookie";
import ChatContainer from "../components/ChatContainer";
import axios from "axios";

const Dashboard = () => {
  const [user, setUser] = useState(null);
  const [genderedUsers, setGenderedUsers] = useState(null);
  const [lastDirection, setLastDirection] = useState();
  const [cookies, setCookie, removeCookie] = useCookies(["user"]);

  const userId = cookies.UserId;

  const getUser = async () => {
    try {
      const response = await axios.get("http://localhost:8000/user", {
        params: { userId },
      });
      setUser(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const getGenderedUsers = async () => {
    try {
      const response = await axios.get("http://localhost:8000/gendered-users", {
        params: { gender: user?.gender_interest },
      });
      setGenderedUsers(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  useEffect(() => {
    if (user) {
      getGenderedUsers();
    }
  }, [getGenderedUsers]);

  // console.log("user", user);
  // console.log("genderedUsers", genderedUsers);

  // const db = [
  //   {
  //     name: "Raju",
  //     url: "https://d33wubrfki0l68.cloudfront.net/2a3556a09e73a07aacedb2bcfaa39512cd37a3f4/68f50/img/templates/akshay-kumar-scheme-pose.png",
  //   },
  //   {
  //     name: "Ronduu",
  //     url: "https://newfastuff.com/wp-content/uploads/2020/04/wvqqk6g8z6r41-150x150.png",
  //   },
  //   {
  //     name: "Deepak Kalal",
  //     url: "https://www.celebrityborn.com/admin/assets/images/people/deepak_kalal_504.png",
  //   },
  //   {
  //     name: "Bandya",
  //     url: "https://mirchiplay.com/wp-content/uploads/2021/09/r1_5faa6607c23f7.jpeg",
  //   },
  //   {
  //     name: "Bada Ladka",
  //     url: "https://img.mensxp.com/media/content/2022/Apr/header_626a736305242.jpeg?w=1100&h=558&cc=1",
  //   },
  // ];

  // const characters = db;

  const swiped = (direction, nameToDelete) => {
    console.log("removing: ", nameToDelete);
    setLastDirection(direction);
  };

  const outOfFrame = (name) => {
    console.log(name + " left the screen!");
  };

  return (
    <>
      {user && (
        <div className="dashboard">
          <ChatContainer user={user} />
          <div className="swipe-container">
            <div className="card-container">
              {genderedUsers?.map((genderedUser) => (
                <TinderCard
                  className="swipe"
                  key={genderedUser.name}
                  onSwipe={(dir) => swiped(dir, genderedUser.first_name)}
                  onCardLeftScreen={() => outOfFrame(genderedUser.first_name)}
                >
                  <div
                    style={{ backgroundImage: "url(" + genderedUser.url + ")" }}
                    className="card"
                  >
                    <h3>{genderedUser.first_name}</h3>
                  </div>
                </TinderCard>
              ))}
              <div className="swipe-info">
                {lastDirection ? <p>You swiped {lastDirection}</p> : <p />}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Dashboard;
