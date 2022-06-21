import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import toast from 'react-hot-toast';
import { fetchReviewDetails } from '../Services/Services';
import s from './Reviews.module.css';

export default function Cast() {
const { movieId } = useParams();
const [reviews, setReviews] = useState(null);
    
    useEffect(() => {
 async function fetchReviews() {
        try {
            const reviews = await fetchReviewDetails(movieId);
            setReviews(reviews);
        } catch (error) {
            toast.error("Reviews no found");
        }
        }
        fetchReviews();
    }, [movieId])
// console.log(reviews);
    return (
    <div>
            {reviews && <ul className={s.list}>
                {reviews.results.length > 0 ? reviews.results.map(({author, content}) => <li className={s.item} key={author}>
                    <h3 className={s.author}>Author: {author}</h3>
                    <p>{content}</p>
            </li>) : <p>No reviews found</p>}
            
        </ul> }
        </div>
    )
}