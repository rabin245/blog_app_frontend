import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

function Register() {
  const [inputs, setInputs] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [error, setError] = useState(null);

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputs((prevInputs) => ({ ...prevInputs, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("/auth/register", inputs);
      navigate("/login");
    } catch (error) {
      setError(error.response.data);
    }
  };

  return (
    <div className="auth">
      <h1>Register</h1>
      <form action="">
        <input
          type="text"
          value={inputs.username}
          placeholder="username"
          name="username"
          onChange={handleChange}
          required
        />
        <input
          type="email"
          value={inputs.email}
          placeholder="email"
          name="email"
          onChange={handleChange}
          required
        />
        <input
          type="password"
          value={inputs.password}
          placeholder="password"
          name="password"
          onChange={handleChange}
          required
        />
        <button onClick={handleSubmit}>Register</button>
        {error && <p>{error}</p>}
        <span>
          Already have an account? <Link to="/login">Login</Link>
        </span>
      </form>
    </div>
  );
}

export default Register;
