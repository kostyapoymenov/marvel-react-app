import ErrorMessage from "../ErrorMessage/ErrorMessage";
import {Link} from "react-router-dom"; 
import Helmet from 'react-helmet';


const Page404 = () => {
    return (
        <div style={{display: 'flex', alignItems: 'center', flexDirection: 'column'}}>
            <Helmet>
                <meta
                name="description"
                content="Not found page"
                />
                <title>Not found page</title>
            </Helmet>
            <ErrorMessage/>
            <p style={{marginBottom: '20px'}}>Page doesn't exist</p>
            <Link to='/'>Back to main page</Link>
        </div>
    )
}

export default Page404;