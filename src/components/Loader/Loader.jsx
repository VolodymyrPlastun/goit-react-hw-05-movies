import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import s from './Loader.module.css';
import { Audio } from 'react-loader-spinner';

export default function Loader() {
    return (
    <div className={s.container}>
    <Audio
    height="100"
    width="100"
    color='#303f9f'
    ariaLabel='loading'
        />
        </div>
)
} 