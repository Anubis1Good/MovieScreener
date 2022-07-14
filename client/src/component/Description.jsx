import React from 'react';
import cl from './Description.module.css'

function Description(props) {
  return ( 
  <div className={cl.description}>
    <ul>
      <li><span>Name:</span> {props.name}</li>
      <li><span>Year:</span> {props.year}</li>
      <li><span>Country:</span> {props.country}</li>
      <li><span>Genres:</span> {props.genres}</li>
      <li><span>Runtime:</span> {props.runtime}</li>
      <li><span>Languages:</span> {props.languages}</li>
      <li><span>Plot:</span> {props.plot}</li>
      <li><span>Actors:</span> {props.actors}</li>
      <li><span>Director:</span> {props.director}</li>
      <li><span>Writer:</span> {props.writer}</li>
    </ul>
  </div> 
  );
}

export default Description;