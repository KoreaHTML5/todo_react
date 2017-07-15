import React, {Component} from "react";

import PropTypes from "prop-types";

const TodoLi = ({handleRemovedData, todo}) => {
    const onClickRemoveButton = () => {
        handleRemovedData(todo);
    };

    return (
        <li>
            <span>{todo}</span>
            <span className="btn-container">
                <a href="#" onClick={onClickRemoveButton}>
                    삭제
                </a>
            </span>
        </li>
    );
};

TodoLi.propTypes = {
    handleRemovedData: React.PropTypes.func.isRequired,
    todo: React.PropTypes.string.isRequired
};

export default TodoLi;
