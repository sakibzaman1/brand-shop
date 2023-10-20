import { Link } from 'react-router-dom';
import errorImg from '../../assets/Others/error404.png'

const ErrorPage = () => {
    return (
        <div className='flex items-center justify-around my-20'>
            <img src={errorImg} alt="" />
            <Link to="/">
                <button className="h-14 hover:scale-110 transition-transform font-semibold w-48 bg-gradient-to-l from-amber-600 to-amber-950 text-white">Go back to Home</button>
            </Link>
        </div>
    );
};

export default ErrorPage;