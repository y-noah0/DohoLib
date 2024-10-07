import propTypes from 'prop-types'
function Button(props) {
    return <button>{props.name}</button>;
  }
  Button.propTypes = {
    name: propTypes.string.isRequired,
  };    
  export default Button;
  