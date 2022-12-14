import "./signUp.css";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const navigate = useNavigate();
  const previousUsers = localStorage.getItem("users") || "[]";
  if (previousUsers === "[]") {
    localStorage.setItem("users", JSON.stringify([]));
  }

  const signUpHandler = (e: any) => {
    e.preventDefault();

    const mobileNumber = e.target.mobileNo.value;
    const mpin = e.target.mpin.value;
    const confirmMPin = e.target.confirmMPin.value;

    const userData = {
      mobileNumber,
      mpin,
      confirmMPin,
    };

    const previousData = JSON.parse(localStorage.getItem("users") || "[]");
    console.log(previousData);

    const arr: any[] = [];
    previousData.map((user: any) => {
      if (userData.mobileNumber === user.mobileNumber) {
        arr.push("exist");
      }
    });

    if (arr.includes("exist")) {
      alert("User already exist");
    } else {
      if (
        userData.mobileNumber !== "" &&
        userData.mpin !== "" &&
        userData.confirmMPin !== ""
      ) {
        if (userData.mpin === userData.confirmMPin) {
          previousData.push(userData);
          localStorage.setItem("users", JSON.stringify(previousData));
          navigate("/");
          window.location.reload();
        } else {
          alert("Wrong Password");
        }
      } else {
        alert("Enter all fields");
      }
    }
  };

  return (
    <div className="lockContainer">
      <div className="form">
        <div className="signUp">SIGN UP</div>
        <form className="formContainer" onSubmit={signUpHandler}>
          <div className="mobile">
            <label htmlFor="mobile">
              <input
                type="text"
                name="mobileNo"
                id="mobile"
                className="input"
                placeholder=" Mobile Number "
              />
            </label>
          </div>

          <div className="mobile">
            <input
              type="text"
              name="mpin"
              id="mobile"
              className="input"
              placeholder=" Enter 4 Digit MPin "
            />
          </div>

          <div className="mPin">
            <input
              type="text"
              name="confirmMPin"
              id="mPin"
              className="input"
              placeholder="Re-Enter 4 Digit MPin"
            />
            <img
              src={require("../../assets/images/eye_on.png")}
              alt="eye"
              className="toggleEye"
            />
          </div>
          <div className="bottomDisplay">
            <div className="button">
              <input type="submit" value="SIGN UP" className="signUpText" />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
