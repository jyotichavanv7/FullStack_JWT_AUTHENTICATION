import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Home = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const verifyUser = async () => {
      const token = localStorage.getItem("authToken");

      if (!token) {
        setLoading(false);
        navigate("/login");
        return;
      }

      try {
        const { data } = await axios.post(
          "http://localhost:4000/", // 🌟 Backend route ab accessible hoga
          {},
          {
            headers: { Authorization: `Bearer ${token}` }
          }
        );

        const { status, user } = data;

        if (status) {
          setUsername(user);
          setLoading(false);
        } else {
          localStorage.removeItem("authToken");
          setLoading(false);
          navigate("/login");
        }
      } catch (err) {
        console.error("Verification error:", err);
        localStorage.removeItem("authToken");
        setLoading(false);
        navigate("/login");
      }
    };

    verifyUser();
  }, [navigate]);

  const Logout = () => {
    localStorage.removeItem("authToken");
    navigate("/login");
  };

  if (loading) {
    return <div style={{ padding: "20px" }}>Loading your dashboard...</div>;
  }

  return (
    <div className="home_page" style={{ padding: "20px" }}>
      <h4>Welcome <span>{username}</span></h4>
      <button onClick={Logout}>LOGOUT</button>
    </div>
  );
};

export default Home;
