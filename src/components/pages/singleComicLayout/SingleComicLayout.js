import Helmet from 'react-helmet';
import { Link } from 'react-router-dom';
import './SingleComicLayout.scss';

const SingleComicLayout = ({data}) => {
    
    const {title, description, pageCount, thumbnail, lenguage, price} = data;

    return (
        <div className="single-comic">
            <Helmet>
                <meta
                    name="description"
                    content="Page single comic"
                />
                <title>Page single comic</title>
            </Helmet>
            <img src={thumbnail} alt={title} className="single-comic__img"/>
            <div className="single-comic__info">
                <h2 className="single-comic__name">{title}</h2>
                <p className="single-comic__descr">{description}</p>
                <p className="single-comic__descr">{pageCount}</p>
                <p className="single-comic__descr">Language: {lenguage}</p>
                <div className="single-comic__price">{price}</div>
            </div>
            <Link to="/comics" className="single-comic__back">Back to all comics</Link>
        </div>
    )
}

export default SingleComicLayout;