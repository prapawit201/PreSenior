import React, { useEffect, useState } from "react";
import axios from "./config/base_axios";

const App = () => {
  const [profile, setUser] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchUser();
  }, []);

  const fetchUser = async () => {
    setLoading(true);
    try {
      const result = await axios.get("/users");
      console.log(profile);
      setUser(result.data.user);
      console.log(profile);
    } catch (error) {
      setError(error);
      console.error("Fetch user error : ${error}");
    } finally {
      setLoading(false);
    }
  };
  return (
    <div>
      <h1>
        {error
          ? "something Wrong"
          : loading
          ? "loading"
          : profile && profile.name}
      </h1>
    </div>
  );
};
export default App;
