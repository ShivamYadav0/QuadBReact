import React, { useState, useEffect } from "react";
import { Route, Link, useNavigate, useParams } from "react-router-dom";
import parse from 'html-react-parser'
import Form from "./Form";
const ShowDetailsScreen = () => {
  const [show, setShow] = useState(null);
  const { id } = useParams();
  const history = useNavigate(null);
  useEffect(() => {
    fetch(`https://api.tvmaze.com/shows/${id}`)
      .then((response) => response.json())
      .then((data) => {
        //console.log(data.genres.length);
        setShow(data);
      })

      .catch((error) => console.error(error));
  }, [id]);

  if (!show) {
    return null;
  }

  return (
    <div className="container mx-auto px-4 pt-8">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-4xl font-bold">{show.name}</h1>
        <button
          className="px-4 py-2 rounded-lg bg-blue-500 text-white"
          onClick={() => history("/")}
        >
          Back
        </button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <img
          src={show.image?.original}
          alt={show.name}
          className="w-full h-96 object-cover"
        />
        <div className="p-4">
          <h2 className="text-lg font-bold mb-2">Genres</h2>
          <ul className="list-disc list-inside">
            {show.genres.map((genre) => {
              return <li key={genre}>{genre}</li>;
            })}
          </ul>

          <div className="mt-5">
            <h2 className="text-lg font-bold mb-2">Summary</h2>
            <div className="text-md font-400 mb-2"> {parse(show.summary)}</div>
          </div>
          <div className="mt-5">
            <Form movie={show}/>
            
          </div>
        </div>
      </div>

    </div>
  );
};

export default ShowDetailsScreen;
