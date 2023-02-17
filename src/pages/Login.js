import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../context/authContext";

function Login() {
  const [inputs, setInputs] = useState({
    username: "",
    password: "",
  });
  const [err, setErr] = useState(null);

  const navigate = useNavigate();

  const { login } = useContext(AuthContext);

  const handleChange = (e) => {
    setInputs((prevInputs) => ({
      ...prevInputs,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await login(inputs);
      navigate("/");
    } catch (error) {
      setErr(error.response.data);
    }
  };

  return (
    <div className="auth">
      <h1>Login</h1>
      <form action="">
        <input
          type="text"
          name="username"
          placeholder="username"
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="password"
          onChange={handleChange}
          required
        />
        <button onClick={handleSubmit}>Login</button>
        {err && <p>{err}</p>}
        <span>
          Don't have an acoount? <Link to="/register">Register</Link>
        </span>
      </form>
    </div>
  );
}

export default Login;
