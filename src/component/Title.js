import React, {Component} from "react";
import PropTypes from "prop-types";

const Title = ({text}) => {
    return (
        <div className="page-header">
            <h1>{text}</h1>
        </div>
    );
};

Title.propTypes = {
    text: PropTypes.string
};

export default Title;
