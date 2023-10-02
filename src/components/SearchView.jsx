import Hero from "./Hero";
import { Link } from "react-router-dom";

const MovieCard = ({ movie }) => {
    let posterUrl = `https://image.tmdb.org/t/p/original/${movie.poster_path}`;

    if (!movie.poster_path) {
        posterUrl =
            "https://placehold.jp/343a40/ffffff/150x225.png?text=No%20Image";
    }

    const detailUrl = `/movies/${movie.id}`;
    return (
        <div className="col-lg-3 col-md-3 col-6 my-4">
            <div className="card">
                <img
                    src={posterUrl}
                    className="card-img-top"
                    alt={movie.original_title}
                />
                <div className="card-body">
                    <h5 className="card-title">{movie.original_title}</h5>
                    <Link to={detailUrl} className="btn btn-primary">
                        Show details
                    </Link>
                </div>
            </div>
        </div>
    );
};

const SearchView = ({ keyword, searchResults }) => {
    const title = `You are searching for ${keyword}`;

    const resultsHtml = searchResults.map((obj, i) => {
        return <MovieCard movie={obj} key={i} />;
    });

    return (
        <div>
            <Hero text={title} />
            {resultsHtml && (
                <div className="container">
                    <div className="row">
                        {resultsHtml.length > 0 ? (
                            resultsHtml
                        ) : keyword === "" ? (
                            <p className="lead my-5">
                                Please enter a name of a movie you are looking for.
                            </p>
                        ) : (
                            <p className="lead my-5">
                                No results named "{keyword}" found.
                            </p>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
};

export default SearchView;
