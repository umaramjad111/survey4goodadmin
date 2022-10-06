import React from "react";
import { Container, Row, Col } from "reactstrap";
import Survey from "../images/surveyimg.jpg";
import LoginImg from "../images/login.png";
import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase/firebase";
export default function Login() {
  const initialformvalues = { email: "", password: "" };
  const [formvalues, setFormvalues] = useState({ ...initialformvalues });
  const [formError, setFormError] = useState({});
  const [issubmit, setIssubmit] = useState(false);
  const [user, loading, error] = useAuthState(auth);
  const history = useHistory();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormvalues({ ...formvalues, [name]: value });
    console.log(formvalues);
  };
  const handleSubmit = (e) => {
    //refresh sa bachany ky liye lgaty hain isko prevent ko
    e.preventDefault();
    setFormError(validate(formvalues));
    setIssubmit(true);
    signInWithEmailAndPassword(auth, formvalues.email, formvalues.password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log("qqq", user);
        if (user.email === "admin@survey4good.com") {
          //   const token = localStorage.setItem("access__token", user.accessToken);
          history.push("/dashboard");
          alert("good");
        } else {
          alert("Wrong email and password");
        }

        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorCode);
      });
  };

  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.email) {
      errors.email = "Email is Required";
    }
    if (!values.password) {
      errors.password = "Password is Required";
    }
    return errors;
  };

  useEffect(() => {
    console.log(formError);
    if (Object.keys(formError).length === 0 && issubmit) {
      console.log(formvalues);
    }
  }, [formError]);

  // useEffect(() => {
  //   if (loading) {
  //     // maybe trigger a loading screen
  //     console.log("nnn");
  //     return;
  //   }
  //   if (user) history.push("/dashboard");
  // }, [user, loading]);
  return (
    <form className="login__section" onSubmit={handleSubmit}>
      <Row>
        <Col lg="6" md="6" sm="12" xs="12" className="image__col">
          <div className="d-flex flex-column survey">
            <h1>Survey 4 Good</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem,
              illo distinctio? Corporis ratione excepturi laboriosam ex quo!
              Soluta expedita alias praesentium tempora aspernatur ad hic
              aperiam vero rerum, tempore quidem?
            </p>
            <div>
              <img src={Survey} alt="" />
            </div>
          </div>
        </Col>
        <Col lg="6" md="6" sm="12" xs="12" className="login__col">
          <div>
            <div className="text-center">
              <img src={LoginImg} alt="logo" />
            </div>
            <div>
              <label htmlFor="">
                Email
                <input
                  type="email"
                  placeholder="Enter your Email"
                  name="email"
                  onChange={handleChange}
                />
                {formError.email ? (
                  <p className="error__msg">{formError.email}</p>
                ) : (
                  ""
                )}
              </label>

              <label htmlFor="">
                Passowrd
                <input
                  type="password"
                  placeholder="Enter your Password"
                  name="password"
                  onChange={handleChange}
                />
                {formError.password ? (
                  <p className="error__msg ">{formError.password}</p>
                ) : (
                  ""
                )}
              </label>

              <button type="submit">login</button>
            </div>
          </div>
        </Col>
      </Row>
    </form>
  );
}
