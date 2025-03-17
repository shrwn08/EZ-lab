import presentation from "../../assets/presentation.png";
import cinema from "../../assets/cinema.png";
import graphic from "../../assets/illustration.png";
import translation from "../../assets/translation.png";
import research from "../../assets/research.png";
import dataProcessing from "../../assets/data-processing.png";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import {formSubmit, setEmail} from "../../redux/slice/formSlice.js"

import "./cards.css";

const Cards = () => {
  const dispatch = useDispatch();
  const { email, isLoading, isSubmitted } = useSelector(
    (state) => state.form
  );
  const [validationError, setValidationError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email) {
      setValidationError("Email is required");
      return;
    } else if (!/^[^@]+@[^@]+\.[^@]+$/.test(email)) {
      setValidationError("Invalid email format");
      return;
    } else if (email.endsWith("@ez.words")) {
      setValidationError("Email from @ez.works is not allowed");
      return;
    }
    setValidationError("");
    dispatch(formSubmit(email));
  };
  const data = [
    {
      image: presentation,
      title: "Presentation Design",
      description:
        "Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet,",
    },
    {
      image: cinema,
      title: "Audio - Visual Production",
      description:
        "Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet,",
    },
    {
      image: translation,
      title: "Translation Service",
      description:
        "Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet,",
    },
    {
      image: graphic,
      title: "Graphic Design",
      description:
        "Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet,",
    },
    {
      image: research,
      title: "Research & Analytics",
      description:
        "Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet,",
    },
    {
      image: dataProcessing,
      title: "Data Processing",
      description:
        "Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet,",
    },
  ];
  return (
    <div className="cards-email-container">
      <div className="cards">
        {data.map((cardData, index) => (
          <div key={index} className="card">
            <div className="card-elements">
              <div className="img-title">
                <div className="image-container">
                  <img
                    src={cardData.image}
                    alt={cardData.title}
                    className="image"
                  />
                </div>
                <p className="card-title">{cardData.title}</p>
              </div>
              <p className="card-description">{cardData.description}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="email-container-right">
        <div className="email-sub-container-right" >
          <form className="email-form-right" onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="Email Address"
              className="email-field-right"
              value={email}
              onChange={(e) => dispatch(setEmail(e.target.value))}
            />
            {validationError && (
              <p style={{ color: "red" }}>{validationError}</p>
            )}
            {isSubmitted && <p style={{ color: "green" }}> Form Submitted</p>}
            <button
              type="submit"
              disabled={isLoading}
              className="email-btn-right"
            >
              Contact Me
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Cards;
