import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./videos.css";

function Videos() {
  const [videos, setVideos] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}/videos?api_key=c8a65028465c18a0af0841ac79b572fd&language=en-US`
    )
      .then((response) => response.json())
      .then((data) => setVideos(data.results));
  }, []);
  return (
    <>
      <h1 id="unique">Youtube Videos</h1>
      <div className="videos_container">
        {videos.map((video) => (
          <iframe
            src={`https://www.youtube.com/embed/${video.key}`}
            loading="lazy"
            title={video.name}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;"
            allowFullScreen
          ></iframe>
        ))}
      </div>
    </>
  );
}

export default Videos;
