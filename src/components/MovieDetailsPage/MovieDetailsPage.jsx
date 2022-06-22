import { fetchMovieDetails } from '../Services/Services';
import { useParams, Outlet, NavLink, Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { FaArrowAltCircleLeft } from 'react-icons/fa';
import Loader from 'components/Loader';
import toast from 'react-hot-toast';
import s from './MovieDetailsPage.module.css';

export default function MovieDetails() {
    const { movieId } = useParams();
    const [movie, setMovie] = useState(null);
    const [loading, setLoading] = useState(false);
    const location = useLocation();
    const goBackURL = location?.state?.from ?? '/';
    
    useEffect(() => {
        async function fetchMovie() {
            setLoading(true);
        try {
            const movie = await fetchMovieDetails(movieId);
            setMovie(movie);
        } catch (error) {
            toast.error("Movie no found")
        } finally {
            setLoading(false);
        }
        }
        fetchMovie();
    }, [movieId])

    const defaultPoster = `https://i.pinimg.com/200x/e4/71/1e/e4711e46bea5264eaab661d643285ff6.jpg`;
    return (
        
        <div>
            {loading && <Loader />}
            <div className={s.arrowLinkBox}>
                    <FaArrowAltCircleLeft className={s.arrowLink} />
                    <Link  to={goBackURL}> Go back</Link>
                    </div>
            {movie && <div>
                
                <div className={s.container}>
                <img className={s.poster} src={movie.poster_path ? `https://image.tmdb.org/t/p/w300${movie.poster_path}` : defaultPoster} alt={movie.title}
                />
                <ul className={s.list}><li className={s.movieDetailItem}>
                        <h2 className={s.movieDetailsTitle}>{movie.title}</h2>
                        
                <p>Rating: {movie.vote_average ? movie.vote_average : 'No rating for that movie'}</p>
            </li>
                <li className={s.movieDetailItem}>
                            <h3 className={s.movieDetailsTitle}>Overview</h3>
                            {movie.overview ? <p>{movie.overview}</p> : <p>There is no overview for that movie</p>}
                    
            </li>
                <li className={s.movieDetailItem}>
                        <h4 className={s.movieDetailsTitle}>Genres</h4>
                            <div className={s.genreBox}>
                                {movie.genres.length > 0 ? <p>{movie.genres.map(genre => genre.name).join(', ')}</p> : <p>No genres found</p>}
                                
                    </div>
                        </li></ul>
                    </div>
            <div className={s.movieInfoBox}>
                <p className={s.movieInfo}>Additional information</p>
                <ul>
                   <li className={s.movieInfoLink}><NavLink className={({isActive}) => isActive ? s.routeLinkActive : s.routeLink} to={`/movies/${movie.id}/cast`} state={{from: goBackURL}}>Cast</NavLink></li>
                    <li className={s.movieInfoLink}><NavLink className={({isActive}) => isActive ? s.routeLinkActive : s.routeLink} to={`/movies/${movie.id}/reviews`} state={{from: goBackURL}}>Reviews</NavLink></li>
                </ul>
                    </div>
            </div>}
            
            <Outlet/>
        </div>
    )
}

