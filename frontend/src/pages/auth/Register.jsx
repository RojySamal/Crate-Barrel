import React, { useState } from "react";
import "./register.css";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [title, setTitle] = useState("");
  const [fname, setFName] = useState("");
  const [lname, setLName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async () => {
    const payload = {
      title: title,
      firstName: fname,
      lastName: lname,
      email: email,
      password: password,
      phone: phone,
      shippingAddresses: "",
    };
    let res = await fetch("http://localhost:5000/users/register", {
      method: "POST",
      body: JSON.stringify(payload),
      headers: {
        "Content-Type": "application/json",
      },
    });
    let data = await res.json();
    console.log(data.msg);
    if (data.msg === "User registration successful") {
      alert("Registration Succesful");
      navigate("/login");
    }
  };
  return (
    <div>
      <div id="heading">
        <h2>Create account</h2>
      </div>
      <div id="register">
        <div className="register" style={{ alignItems: "flex-start" }}>
          <label htmlFor="title">Title</label>
          <br />
          <select
            name={title}
            id="title"
            onChange={(e) => setTitle(e.target.value)}
          >
            <option value="">Choose a title</option>
            <option value="MR">Mr.</option>
            <option value="MRS">Mrs.</option>
            <option value="MS">Ms.</option>
            <option value="MISS">Miss</option>
            <option value="MX">Mx.</option>
            <option value="DOCTOR">Doctor</option>
            <option value="OTHER">Other</option>
          </select>
          <br />
          <label htmlFor="first-name">First name</label>
          <br />
          <input
            type="text"
            id="first-name"
            name="first-name"
            required
            value={fname}
            onChange={(e) => setFName(e.target.value)}
          />
          <br />
          <label htmlFor="last-name">Last name</label>
          <br />
          <input
            type="text"
            id="last-name"
            name="last-name"
            value={lname}
            onChange={(e) => setLName(e.target.value)}
          />
          <br />
          <label htmlFor="email">Email Address (required)</label>
          <br />
          <input
            type="email"
            id="email"
            name="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <br />
          <label htmlFor="password">Password</label>
          <br />
          {/* <p>
            Your password should be at least 8 characters in length, and contain
            at least 1 number and 1 letter
          </p> */}
          <input
            type="password"
            id="password"
            name="password"
            minlength="8"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <br />
          <label htmlFor="phone">Phone</label>
          <br />
          <input
            type="tel"
            id="phone"
            name="phone"
            required
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          <br />
          <p>
            We'll only use this to contact you about your order or to send you
            SMS about your delivery
          </p>
          {/* <p>
            By creating an account with Charles Tyrwhitt, you confirm that you
            have read and accept our <a href="#">Terms and Conditions</a> and{" "}
            <a href="#">Privacy Policy</a>
          </p> */}
          <br />
          <button id="create-account" onClick={handleSubmit}>
            CREATE AN ACCOUNT
          </button>
        </div>
        <div className="login">
          <h3 style={{ paddingBottom: "20px" }}>HAVE AN ACCOUNT?</h3>
          <button
            id="login-btn"
            onClick={() => {
              navigate("/login");
            }}
          >
            CLICK HERE TO LOG IN
          </button>
        </div>
      </div>
    </div>
  );
};

export default Register;
