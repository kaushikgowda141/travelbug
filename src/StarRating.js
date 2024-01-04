import React, { useState, useEffect } from "react";

const StarRating = ({ initialRating }) => {
  const [rating, setRating] = useState(initialRating);

  useEffect(() => {
    // Simulate fetching rating from an API
    // Replace this with your actual API call
    // For now, we'll use a static value for demonstration purposes
    const fetchRatingFromAPI = async () => {
      // const response = await fetch('your-api-endpoint');
      // const data = await response.json();
      // setRating(data.rating);
    };

    fetchRatingFromAPI();
  }, []); // Empty dependency array to simulate componentDidMount

  const renderStars = () => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(<i key={i} className="fa fa-star rating-color"></i>);
    }

    if (hasHalfStar) {
      stars.push(<i key="half" className="fa fa-star-half-o rating-color"></i>);
    }

    return stars;
  };

  return <div className="rating">{renderStars()}</div>;
};

export default StarRating;
