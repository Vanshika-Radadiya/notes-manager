
function MovieModal({ movie, onClose }) {

  return (

    <div className="modal" onClick={onClose}>

      <div
        className="modal-content"
        onClick={(e) => e.stopPropagation()}
      >

        <span className="close" onClick={onClose}>
          &times;
        </span>

        <img
          className="banner"
          src={movie.bannerUrl}
          alt={movie.name}
        />

        <h1>{movie.name}</h1>
        <p>
          ⭐ {movie.rating}
          &nbsp;&nbsp;
          {movie.releaseYear}
          &nbsp;&nbsp;
          {movie.duration}
        </p>
        <br />
        <p>
          <strong>Genre:</strong>
          {movie.genre}
        </p>
        <p>
          <strong>Director:</strong>
          {movie.director}
        </p>
        <p>
          <strong>Cast:</strong>
=
          {movie.cast}
        </p>
        <br />
        <p>{movie.description}</p>
        <br />
        {/* <a

          href={movie.trailer}

          target="_blank"

          rel="noreferrer"

          className="watch"

        >

          ▶ Watch Trailer

        </a> */}



 <iframe
      width="100%"
      height="415"
      src={movie.trailer}
      title="YouTube video player"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerPolicy="strict-origin-when-cross-origin"
      allowFullScreen
    ></iframe>


      </div>

    </div>

  );

}

export default MovieModal;