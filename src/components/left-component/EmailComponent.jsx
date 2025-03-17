import "./mail.css";
import Logo from "../../assets/ez_logo.png";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import {formSubmit, setEmail} from "../../redux/slice/formSlice.js"


const EmailComponent = () => {
  const dispatch = useDispatch();
  const { email, isLoading, isSubmitted } = useSelector((state) => state.form);
const [validationError, setValidationError] = useState('');

  const handleSubmit = (e) =>{
    e.preventDefault();

    if(!email){
      setValidationError("Email is required");
      return;
    }else if(!/^[^@]+@[^@]+\.[^@]+$/.test(email)){
      setValidationError('Invalid email format');
      return;
    }else if(email.endsWith('@ez.words')){
      setValidationError('Email from @ez.works is not allowed');
      return;
    }
    setValidationError('');
    dispatch(formSubmit(email));
    setEmail('');
  }

  return (
    <div className="left-side">
      {/**Logo of the Company*/}
      <div className="company-logo">
        <div className="logo">
          <img src={Logo} alt="logo" className="img-logo" />
        </div>

        <p className="logo-text">Works</p>
      </div>

      {/**Slogon of the Company */}
      <div className="company-slogon">
        <div className="slogon">A Suite of Business Support Service </div>
      </div>

      {/**description */}
      <div className="company-description">
        <p className="description">
          Lorem ipsum dolor sit amet, consectetur adipiscing edit, sed do
          eiusmod tempor incididunt... Lorem ipsum dolor sit amet, consectetur
          adipiscing edit, sed
        </p>
      </div>

      {/**Email  */}
      <div className="email-container">
        <div className="email-sub-container">
          <form className="email-form" onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="Email Address"
              className="email-field"
              value={email}
              onChange={(e)=>dispatch(setEmail(e.target.value))}
            />
            {validationError && <p style={{color : 'red'}}>{validationError}</p>}
            {isSubmitted && <p style={{color : "green"}}> Form Submitted</p>}
            <button type="submit" disabled={isLoading}  className="email-btn">
              Contact Me
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EmailComponent;
