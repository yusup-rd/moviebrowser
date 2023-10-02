import Hero from "./Hero";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const MovieView = () => {
    const { id } = useParams();
    const [movieDetails, setMovieDetails] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetch(
            `https://api.themoviedb.org/3/movie/${id}?api_key=c860df0230a7626cf17a026be5a79a7c`
        )
            .then((response) => response.json())
            .then((data) => {
                setMovieDetails(data)
                setIsLoading(false)
            });
    }, [id]);

    function renderMovieDetails() {
        if(isLoading) {
            return <Hero text="Loading..." />
        }
        if(movieDetails) {
            let posterPath = `https://image.tmdb.org/t/p/original/${movieDetails.poster_path}`

            if (!movieDetails.poster_path) {
                posterPath = 'https://placehold.jp/343a40/ffffff/150x225.png?text=No%20Image'
            }
        

            const backdropUrl = `https://image.tmdb.org/t/p/original/${movieDetails.backdrop_path}`
            console.log(backdropUrl)
            
            return (
                <>
                    <Hero text={movieDetails.original_title} backdrop={backdropUrl}/>
                    <div className="container my-5">
                        <div className="row">
                            <div className="col-md-3">
                                <img src={posterPath} alt="..." className="img-fluid shadow rounded"/>
                            </div>
                            <div className="col-md-9">
                                <h2>{movieDetails.original_title}</h2>
                                <p className="lead">
                                    {movieDetails.overview}
                                </p>
                                <p className="lead">
                                    Release Date: {movieDetails.release_date}
                                </p>
                                <p className="lead">
                                    Rating: {movieDetails.vote_average.toFixed(1)}
                                </p>
                            </div>
                        </div>
                    </div>
                </>
            )
                
        }
    }

    return renderMovieDetails();
};

export default MovieView;
