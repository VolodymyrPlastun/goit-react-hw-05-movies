import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import toast from 'react-hot-toast';
import { fetchActorsDetails } from '../Services/Services';
import s from './Cast.module.css';

export default function Cast() {
    const { movieId } = useParams();

const [cast, setCast] = useState(null);
    
    useEffect(() => {
 async function fetchActors() {
        try {
            const cast = await fetchActorsDetails(movieId);
            setCast(cast);
        } catch (error) {
            toast.error("Actors no found");
        }
        }
        fetchActors();
    }, [movieId])
    
const poster = `https://image.tmdb.org/t/p/w200`;
const defaultPoster = `https://i.pinimg.com/200x/e4/71/1e/e4711e46bea5264eaab661d643285ff6.jpg`;

    return (
    <div>
            {cast && <ul className={s.castBox}>
                {cast.cast.length > 0 ? cast.cast.map(({id, profile_path, name, character}) => <li className={s.castList} key={id}>
                <img className={s.castImg} src={profile_path ? poster + profile_path : defaultPoster} alt={name} />
                    <p className={s.actorName}>{name}</p>
                    <p>Character: {character ? character : 'Without character'}</p>
            </li>) : <p>No information found</p>}
            
        </ul>}
       </div>
    )
}