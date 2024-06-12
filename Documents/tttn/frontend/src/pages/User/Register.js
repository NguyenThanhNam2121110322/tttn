import axios from "axios";
import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";

function Register() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [passwordHash, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const userData = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      passwordHash: passwordHash,
      phone: phone,
    };

    try {
      const response = await axios.post(
        "http://localhost:8080/api/customers",
        userData
      )
      console.log("Response:", response.data);
      alert("Thanh cong");
      setIsSuccess(true);

    } catch (error) {
      console.error("Error submitting data:", error);
      alert("Email da duoc su dung");
     
    }
    
    
  };
  if (isSuccess) {
    return <Navigate to="/dang-nhap" />;
  }

  return (
    <>
      <section className="section-content padding-y">
        <div
          className="card mx-auto"
          style={{ maxWidth: "520px", marginTop: "40px" }}
        >
          <article className="card-body">
            <header className="mb-4">
              <h4 className="card-title">Sign up</h4>
            </header>
            <form>
              <div className="form-row">
                <div className="col form-group">
                  <label>First name</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder=""
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                </div>
                <div className="col form-group">
                  <label>Last name</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder=""
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                  />
                </div>
              </div>
              <div className="form-group">
                <label>Email</label>
                <input
                  type="email"
                  className="form-control"
                  placeholder=""
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <small className="form-text text-muted">
                  We'll never share your email with anyone else.
                </small>
              </div>

              <div className="form-group">
                <label>Password</label>
                <input
                  type="password"
                  className="form-control"
                  placeholder=""
                  value={passwordHash}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label>Phone</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder=""
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>


             

              <div className="form-group">
                <button
                  type="submit"
                  className="btn btn-primary btn-block"
                  onClick={handleSubmit}
                  
                >
                  Register
                </button>
              </div>
              <div className="form-group">
                <label className="custom-control custom-checkbox">
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    checked=""
                  />
                  <div className="custom-control-label">
                    I am agree with <a href="#">terms and conditions</a>
                  </div>
                </label>
              </div>
            </form>
          </article>
        </div>
        <p className="text-center mt-4">
          Have an account? <a href="">Log In</a>
        </p>
        <br />
      </section>
    </>
  );
}

export default Register;