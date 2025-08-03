// Starter data
const movies = [
  { title: "Inception", genre: "Sci-Fi", rating: 8.8 },
  { title: "Frozen", genre: "Animation", rating: 7.5 },
  { title: "The Godfather", genre: "Crime", rating: 9.2 },
  { title: "Interstellar", genre: "Sci-Fi", rating: 8.6 }
];

const topMovies = movies.filter(m => m.rating >= 8);
console.log("Movies with rating ≥ 8:", topMovies);

const movieList = movies.map(m => `${m.title} (${m.genre}) - ${m.rating} ⭐`);
console.log("Movie list:", movieList);

const recommend = (movie, minRating = 8) => movie.rating >= minRating;
console.log("Recommend Inception?", recommend(movies[0]));
console.log("Recommend Frozen?", recommend(movies[1]));