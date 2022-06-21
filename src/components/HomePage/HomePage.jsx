import { fetchTrendingMovies } from "../Services/Services";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Loader from '../Loader';
import s from './HomePage.module.css';

export default function HomePage() {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    
    useEffect(() => {
        const trendingMovies = async () => {
            setLoading(true);
        try {
            const topMovies = await fetchTrendingMovies();
            setMovies(topMovies);
} catch (error) {
    setError(error)
        } finally {
            setLoading(false)
}
        }
        trendingMovies();
    }, [])

    return (
        <div>
            <h1>Trending today</h1>
            {loading && <Loader />}
            {!error &&  <ol className={s.list}>
                {movies.map((movie => <li className={s.item} key={movie.id}>
                    <Link className={s.link} to={`/movies/${movie.id}`}>{movie.title}</Link>
                </li>))}
            </ol>}
           
            </div>
    )
}

