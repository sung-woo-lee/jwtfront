import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/auth-context";
import { useHistory, Redirect } from "react-router-dom";

const ProfilePage = (props) => {
  const history = useHistory();
  const { user, setUser } = useContext(AuthContext);
  const [medal, setMedal] = useState("");
  const [medalValue, setMedalValue] = useState("");
  const [showMedal, setShowMedal] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setMedalValue(medal);
  };

  const logOut = () => {
    localStorage.removeItem("jwt");
    setUser(null);
    history.push("/");
  };

  if (!user) {
    return <Redirect to="/" />;
  }
  return (
    <div style={{ margin: "2rem" }}>
      <h1>You are {user}, welcome to your profile</h1>
      <h3>You should get some content written here.</h3>
      <h3>CONTENT BLOCK 1!</h3>
      <h3>CONTENT BLOCK 22222</h3>
      <h3>Here is an auth only feature. You get a medal!</h3>
      <form onSubmit={(event) => handleSubmit(event)}>
        <input
          type="text"
          placeholder="type what you want to see on your medal!"
          style={{ width: 400, padding: "0 .25rem" }}
          value={medal}
          onChange={(e) => setMedal(e.target.value)}
        />
        <br />
        <button onClick={() => setShowMedal(true)}>
          CLICK ME FOR AUTH ONLY MEDAL
        </button>
        <br />
      </form>
      <button onClick={() => logOut()}>Log Out</button>
      <div className="medal">
        <h1> Your medal:{user && showMedal ? medalValue : null}</h1>
      </div>
    </div>
  );
};

export default ProfilePage;
