import React from "react";

import './Checkbox.scss';

const Checkbox = ({ id, label}) => {
    return (
        <div className="checkbox-wrapper">
            <div className="horizontal-line"></div>
            <input type="checkbox" id={id} />
            <span className="checkmark"></span>
            <label className="tab-label" for={id}>{label}</label>
        </div>
    );
};

export default Checkbox;