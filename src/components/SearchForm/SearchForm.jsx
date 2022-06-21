import { useState } from "react";
import {PropTypes} from 'prop-types';
import toast from "react-hot-toast";
import s from './SearchForm.module.css';


export default function SearchForm({onSubmit}) {
    const [movieName, setMovieName] = useState('');

        const handleChange = evt => {
        setMovieName(evt.currentTarget.value.toLowerCase());
    }

        const handleSubmit = evt => {
        evt.preventDefault();
            if (movieName.trim() === '') {
                return toast.error('Enter your request');
            }
            onSubmit(movieName);
            setMovieName('');
    }

    return (
         <div>
            <form onSubmit={handleSubmit}>
                <input className={s.input}
                    type="text"
                    name="query"
      autoComplete="off"
      autoFocus
            placeholder="Enter movie name"
            value={movieName}
            onChange={handleChange}/>
            <button type="submit">Search</button>
            </form>
        </div>
    )
}

SearchForm.propTypes = {
onSubmit: PropTypes.func.isRequired
}