import './Overlay.css'
import React from 'react';
import ReactDOM from 'react-dom';

const Overlay = (props) => {
    return <React.Fragment>
        {ReactDOM.createPortal(<div className={`overlay ${props.visibility}`}>
            {props.children}
        </div>,document.getElementById('overlays'))}
    </React.Fragment>
};

ReactDOM.createPortal(<div></div>,document.getElementById('overlays'))

export default Overlay;