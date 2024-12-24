import React, { useState, useEffect } from "react";
// import {
//   Card,
//   CardContent,
//   CardFooter,
//   CardHeader,
// } from "@/components/ui/card";
import { Card, CardContent, CardFooter, CardHeader } from "./components/Card";
// import { Star } from "lucide-react";

const MovieCards = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch("https://dummyapi.online/api/movies");
        const data = await response.json();
        setMovies(data);
        setLoading(false);
      } catch (err) {
        setError("Failed to fetch movies");
        setLoading(false);
      }
    };

    fetchMovies();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-lg font-semibold">Loading...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-lg font-semibold text-red-500">{error}</div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Popular Movies</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {movies.map((movie) => (
          <Card
            key={movie.id}
            className="overflow-hidden hover:shadow-lg transition-shadow duration-300"
          >
            <CardHeader className="p-0">
              <img
                // src="/api/placeholder/400/225"
                src="https://raw.githubusercontent.com/madanpiske3/assets/refs/heads/main/car-t.png"
                alt={movie.movie}
                className="w-full h-48 object-cover"
              />
            </CardHeader>
            <CardContent className="p-4">
              <h2 className="text-xl font-semibold mb-2 truncate">
                {movie.movie}
              </h2>
              <div className="flex items-center space-x-1">
                {/* <Star className="w-5 h-5 text-yellow-400 fill-current" /> */}
                <span className="text-lg font-medium">{movie.rating}</span>
              </div>
            </CardContent>
            <CardFooter className="p-4 pt-0">
              <a
                href={movie.imdb_url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 transition-colors duration-200"
              >
                View on IMDB
              </a>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default MovieCards;
