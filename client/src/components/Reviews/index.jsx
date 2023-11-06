import React, { useState } from "react";
import user1 from "../../assets/userImg/user1.png";
import user2 from "../../assets/userImg/user2.png";
import user3 from "../../assets/userImg/user3.png";
import user4 from "../../assets/userImg/user4.jpg";
import user5 from "../../assets/userImg/user5.jpg";
import user6 from "../../assets/userImg/user6.jpg";
import user7 from "../../assets/userImg/user7.jpg";
import user8 from "../../assets/userImg/user8.jpg";
import user9 from "../../assets/userImg/user9.jpg";
import user10 from "../../assets/userImg/user10.jpg";
import "./index.css";

const Reviews = () => {
  // only show 6 reviews to start with
  const [showReviews, setShowReviews] = useState(6);
  const [reviewsDisplay, setReviewsDisplay] = useState();

  // customer reviews
  const customerReviews = [
    {
      name: "John Smith",
      review:
        "ProjectPulse has transformed the way we manage our projects. It's a game-changer!",
      jobTitle: "CEO",
      img: user1,
    },
    {
      name: "Emily Davis",
      review:
        "Outstanding project management tool! It has streamlined our processes and improved our productivity significantly.",
      jobTitle: "Marketing Manager",
      img: user2,
    },
    {
      name: "David Lee",
      review:
        "ProjectPulse's drag and drop feature is a lifesaver. We've never been this organized and efficient.",
      jobTitle: "CFO",
      img: user3,
    },
    {
      name: "Sarah Wilson",
      review:
        "Highly recommended! The customizable dashboard and integration capabilities are top-notch.",
      jobTitle: "CTO",
      img: user4,
    },
    {
      name: "Alicia Turner",
      review:
        "ProjectPulse is the best thing that happened to our team. We now complete projects faster and with precision.",
      jobTitle: "Operations Manager",
      img: user6,
    },
    {
      name: "Michael Brown",
      review:
        "Effortlessly manage tasks from multiple projects. It's a must-have for any project manager.",
      jobTitle: "Project Manager",
      img: user5,
    },
    {
      name: "Laura Miller",
      review:
        "The backup feature provides peace of mind. Our data is secure, thanks to ProjectPulse.",
      jobTitle: "IT Director",
      img: user8,
    },
    {
      name: "Daniel Moore",
      review:
        "ProjectPulse's file editing tool is a game-changer. It saves us time and simplifies our workflows.",
      jobTitle: "Designer",
      img: user7,
    },
    {
      name: "Sandra Wright",
      review:
        "We can't imagine working without ProjectPulse's project templates. It's a real time-saver.",
      jobTitle: "Operations Coordinator",
      img: user9,
    },
    {
      name: "George Harris",
      review:
        "The task boards provide a clear visual of all our tasks. It's a vital tool for our team.",
      jobTitle: "Project Coordinator",
      img: user10,
    },
  ];
  // if they click on the button, we will show the rest of the reviews
  const toggleReviews = () => {
    let newReviewsDisplay;
    let newShowReviews;

    if (reviewsDisplay) {
      newReviewsDisplay = false;
      newShowReviews = 6;
    } else {
      newReviewsDisplay = true;
      newShowReviews = customerReviews.length - 1;
    }

    setReviewsDisplay(newReviewsDisplay);
    setShowReviews(newShowReviews);
  };

  return (
    <div id="mainReviewContainer">
      <h2>Testimonials from Happy Customers</h2>
      <div className="reviewContainer">
        {customerReviews.slice(0, showReviews).map((review) => {
          return (
            <div key={review.name} className="eachReviewContainer">
              <p>"{review.review}"</p>
              <div className="reviewUnderline"></div>
              <div className="userContainer">
                <img src={review.img} alt={review.name} className="userImg" />
                <div className="reviewUserInfo">
                  <h4>{review.name}</h4>
                  <p>{review.jobTitle}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <button onClick={toggleReviews} className="reviewButton">
        {reviewsDisplay ? "Show Less" : "Show More"}
      </button>
    </div>
  );
};

export default Reviews;
