import React from 'react';
import NavBar from '../components/NavBar';

const directorsData = [
  {
    id: 1,
    name: 'Director 1',
    movies: ['Movie A', 'Movie B'],
  },
  {
    id: 2,
    name: 'Director 2',
    movies: ['Movie C', 'Movie D'],
  },
];

function Directors() {
  return (
    <div>
      <NavBar />
      <h1>Directors Page</h1>
      {directorsData.map((director) => (
        <article key={director.id}>
          <h2>{director.name}</h2>
          <ul>
            {director.movies.map((movie, index) => (
              <li key={index}>{movie}</li>
            ))}
          </ul>
        </article>
      ))}
    </div>
  );
}

export default Directors;
