// == Import : npm
import React from "react";

// == Import : local
import './goalItem.scss';

/**
 * Displays the details of a goal.
 * @param goalData - An object containing information about the goal.
 * @param handleOnChangeInputCheckbox - A function that handle the "onChange" event on input checkbox
 * @returns {JSX.Element}
 */
const GoalItem = ({ goalData, handleOnChangeInputCheckbox }) => (
    <li className={`goalItem ${!goalData.active ? 'done' : ''}`}>
        <div className={'goalItem_inputContainer'}>
            <input
                className={'goalItem_inputContainer_checkbox'}
                type={"checkbox"}
                checked={!goalData.active}
                onChange={() => handleOnChangeInputCheckbox(goalData.id, !goalData.active)}
            />
        </div>
        <div className={"goalItem_titleContainer"}>
            <p className={'goalItem_titleContainer_title'}>{goalData.title}</p>
        </div>
    </li>
);

export default React.memo(GoalItem);
