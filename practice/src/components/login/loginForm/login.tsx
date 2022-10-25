import './login.css';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className='lockContainer'>
            <div className="form">
                <div className="signIn">
                    SIGN IN TO YOUR ACCOUNT
                </div>
                <form className="formContainer">
                    <div className="mobile">
                        <label htmlFor="mobile">
                            <input type="text" name="mobileNo" id="mobile" className="input" placeholder=" Mobile Number " />
                        </label>
                    </div>
                    <div className="mPin">
                        <input type='text' name="mPin" id="mPin" className="input" placeholder="MPin" minLength={4}

                            maxLength={4} />
                        <img src={require("../../../assets/images/eye_on.png")} alt="eye" className='toggleEye' />
                    </div>
                    <div className='bottomDisplay'>
                        <div className="ForgotPassword">
                            Forgot your Password?
                        </div>
                        <div className="button">
                            <input type="submit" value="SIGN IN" className='signInText' />
                        </div>
                        <div className="reg">Don't have a Account? <Link to="/signUp" className="link">SIGN UP</Link></div>
                        
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login