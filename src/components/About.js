import React from "react";
import image1 from "../assets/image1.jpg"; // Replace with actual image paths
import image2 from "../assets/image2.jpg"; // Replace with actual image paths

const About = () => {
  return (
    <div className="about-section">
      <div className="about-content">
        <h2 className="about-title">Little Lemon</h2>
        <h3 className="about-location">Chicago</h3>
        <p className="about-description">
          Little Lemon was born out of a shared passion for Mediterranean flavors
          and a dream of bringing the vibrant spirit of the Mediterranean coast
          to the heart of Chicago. Founded by two childhood friends who spent
          summers exploring the markets of Greece, Italy, and Turkey, the
          restaurant aims to deliver an authentic experience inspired by their
          travels.
          <br /><br />
          Every dish tells a story—of sun-drenched lemon groves, rustic olive
          farms, and the warmth of Mediterranean hospitality. Since opening its
          doors, Little Lemon has become a cherished destination for those
          seeking a slice of Mediterranean paradise in the bustling city.
        </p>
      </div>
      <div className="about-images">
        <img
          src={image1}
          alt="Mediterranean dish"
          className="about-image image1"
        />
        <img
          src={image2}
          alt="Fresh ingredients"
          className="about-image image2"
        />
      </div>
    </div>
  );
};

export default About;
