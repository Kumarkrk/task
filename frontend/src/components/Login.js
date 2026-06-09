import React, { useState } from "react";
import axios from "axios";

function Login() {
  const API_URL = "ask-j4whl9ss7-kumars-projects-437939b2.vercel.app";

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handle = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        `${API_URL}/user/login`,
        form
      );

      console.log("LOGIN RESPONSE:", res.data);
      localStorage.setItem("token", res.data.token);
      alert("Login successfully");

      setForm({ email: "", password: "" });
      window.location.reload();
    } catch (err) {
      console.error(err);
      alert("Login failed");
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <form onSubmit={handle}>
          <h1 style={{ color: "orange", textAlign: "center" }}>
            Login
          </h1>

          <label>Email:</label>
          <input
            type="email"
            value={form.email}
            onChange={(e) =>
              setForm({ ...form, email: e.target.value })
            }
            required
          />

          <label>Password:</label>
          <input
            type="password"
            value={form.password}
            onChange={(e) =>
              setForm({ ...form, password: e.target.value })
            }
            required
          />

          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Login;
