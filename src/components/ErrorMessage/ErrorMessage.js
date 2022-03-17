import img from "./error.gif";

const ErrorMessage = () => {
  return (
    <img src={img} alt="Error" style={{height: '200px', display: 'inline-block', margin: '0 auto'}}/>
  ) 
}

export default ErrorMessage;