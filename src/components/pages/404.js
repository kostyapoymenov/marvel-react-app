import ErrorMessage from "../ErrorMessage/ErrorMessage";
import {Link} from "react-router-dom"; 


const Page404 = () => {
    return (
        <div style={{display: 'flex', alignItems: 'center', flexDirection: 'column'}}>
            <ErrorMessage/>
            <p style={{marginBottom: '20px'}}>Page doesn't exist</p>
            <Link to='/'>Back to main page</Link>
        </div>
    )
}

export default Page404;