import React from "react";
import PropTypes from "prop-types";

const foodILike = [
  {
    id: 1,
    name: "Kimchi",
    image: "https://cdn.imweb.me/thumbnail/20200415/6b6e035658bac.png",
  },
  {
    id: 2,
    name: "Samgyeopsal",
    image: "https://t1.daumcdn.net/cfile/tistory/9942B3395A3501C304",
  },
  {
    id: 3,
    name: "Bibimbap",
    image:
      "https://lh3.googleusercontent.com/proxy/h5MlPx7x-WrIc1tvjxRwGgZTldjZVrhmAqg_okCNKC8Z297PFMg411J04UpXKZxP7C1KmX3lLUbfoXMA3MczdoBChjKn0NT0C5yT6tnXlRrPkUaM9whmrRHYUw8EjHY",
  },
  {
    id: 4,
    name: "Doncasu",
    image:
      "https://lh3.googleusercontent.com/proxy/THI0IjJameDw08zsCd8bF_vlLVQ7sRxjRMDdx3bKlZ71lH606a6EyKkFtRNseRLjPjS1heAQyCToS-svIYna-KUAcqkJPlpxHM7X92J5",
  },
];

function Food({ name, picture, rating }) {
  return (
    <div>
      <h2>I Like {name}</h2>
      <h4>{rating}/5</h4>
      <img src={picture} alt={name} />
    </div>
  );
}

Food.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
};

function App() {
  return (
    <div>
      {foodILike.map((dish) => (
        <Food
          key={dish.id}
          name={dish.name}
          picture={dish.image}
          rating={dish.rating}
        />
      ))}
    </div>
  );
}

export default App;
