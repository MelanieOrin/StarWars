import React from 'react';
import './MovieInfo.css';

const MovieInfo = ({name, data}) => {
    return (
        <div className="movieInfo">
            <h2 className="movieTitle">{name}</h2>
            <div className="movieFont"><div className="category">Episode:</div>{data.episode_id}</div>
            <div className="movieFont"><div className="category">Release year:</div>{(data.release_date).substring(0, 4)}</div>
            <div className="movieFont"><div className="category">Director:</div>{data.director}</div>
            <div className="movieFont"><div className="category">Producer(s):</div>{data.producer}</div>
            <div className="movieFont"><div className="category">Opening crawl:</div>{data.opening_crawl}</div>
         </div>
    );
};

export default MovieInfo;