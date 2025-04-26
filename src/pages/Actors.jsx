import React from 'react';
import NavBar from '../components/NavBar';

const actorsData = [
  {
    id: 1,
    name: 'Actor 1',
    movies: ['Movie X', 'Movie Y'],
  },
  {
    id: 2,
    name: 'Actor 2',
    movies: ['Movie Z', 'Movie W'],
  },
];

function Actors() {
  return (
    <div>
      <NavBar />
      <h1>Actors Page</h1>
      {actorsData.map((actor) => (
        <article key={actor.id}>
          <h2>{actor.name}</h2>
          <ul>
            {actor.movies.map((movie, index) => (
              <li key={index}>{movie}</li>
            ))}
          </ul>
        </article>
      ))}
    </div>
  );
}

export default Actors;
