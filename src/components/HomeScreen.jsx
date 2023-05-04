import React, { useState, useEffect } from "react";
import { Route, Link, useNavigate } from "react-router-dom";

const HomeScreen = () => {
  const [shows, setShows] = useState([]);
  const [search, setSearch] = useState("");

  const history = useNavigate();

  useEffect(() => {
    fetch("https://api.tvmaze.com/search/shows?q=all")
      .then((response) => response.json())
      .then((data) => {
        setShows(data.map(({ show }) => show));
      })
      .catch((error) => console.error(error));
  }, []);

  const handleSearch = (event) => {
    setSearch(event.target.value);
  };

  const filteredShows = shows.filter((show) =>
    show.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container mx-auto px-4 pt-8">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-4xl font-bold">TV Shows</h1>
        <input
          type="text"
          placeholder="Search shows"
          className="py-2 px-4 rounded-lg border-2 border-gray-300"
          value={search}
          onChange={handleSearch}
        />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {filteredShows.map((show) => (
          <div key={show.id} className="rounded-lg h-fit shadow-md overflow-hidden">
            <img
              src={show.image?.medium}
              alt={show.name}
              className="w-full h-64 object-cover"
            />
            <div className="p-4 ">
              <h2 className="text-lg font-bold mb-2">{show.name}</h2>
              <p className="text-gray-600 mb-2">Genres: {show.genres.join(", ")}</p>
              <p className="text-gray-600 mb-2">Language: {show.language}</p>
              <p className="text-gray-600 mb-3">
                Rating: {show.rating?.average ?? "N/A"}
              </p>
              <p>
              <Link
              className="relative mt-5 px-4 py-2 rounded-lg bg-blue-500 text-white"
              to={`/show/${show.id}`}
            >
              Summary
            </Link>
            </p>
            </div>
           
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeScreen;
