import { useState, useEffect } from "react";
import { fetchMoviesByName } from '../Services/Services';
import { Link, useSearchParams, useLocation } from "react-router-dom";
import toast from 'react-hot-toast';
import Loader from "components/Loader";
import SearchForm from "../SearchForm";
import s from '../HomePage/HomePage.module.css';

export default function MoviesPage() {
    // const [movieName, setMovieName] = useState('');
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(false);
    // const [error, setError] = useState(null);
    const [searchParams, setSearchParams] = useSearchParams();
    const location = useLocation();
    const currentItem = searchParams.get('query');

    async function searchMovies(movieName) {
         if (!movieName) {
      return
        }
            setLoading(true);
    try {
        const movies = await fetchMoviesByName(movieName);
        if (movies.length === 0) {
            toast.error('Movie not found');
            return;
        }
        setMovies(movies);
    } catch (error) {
         toast.error("Movie not found")
    } finally {
        setLoading(false);
    }
        }
   
    const formSubmitSearch = (movieName) => {
        setSearchParams({query: movieName })
        // setMovieName(movieName);
        searchMovies(movieName);
    }
    useEffect(() => {
        if (currentItem) {
            searchMovies(currentItem);
        }
    }, [currentItem])
    
    return (
        <div>
       <SearchForm onSubmit={formSubmitSearch}/>
        {loading && <Loader/>}
           {movies &&  <ol className={s.list}>
                {movies.map((movie => <li className={s.item} key={movie.id}>
                    <Link className={s.link} to={`/movies/${movie.id}`} state={{from: location}}>{movie.title}</Link>
                </li>))}
            </ol>}
            </div>
    )
}