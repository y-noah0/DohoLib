import Button from "../Buttons/Button";
import propTypes from 'prop-types'

function Titlebar(props) {
    return(
        <div className="titlebar">
            <h1>{props.title}</h1>
            <Button name={props.buttonName} />
        </div>
    )
    
}

Titlebar.propTypes = {
    title: propTypes.string.isRequired,
    buttonName: propTypes.string.isRequired,
}

export default Titlebar;