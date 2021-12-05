// == Import : npm
import React from "react";

// == Import : local
import './goalItem.scss';

/**
 * Displays the details of a goal.
 * @param goalData - An object containing information about the goal.
 * @returns {JSX.Element}
 */
const GoalItem = ({ goalData }) => (
    <li className={'goalItem'}>
        <div className={"goalItem_titleContainer"}>
            <p className={'goalItem_titleContainer_title'}>{goalData.title}</p>
        </div>
    </li>
);

export default React.memo(GoalItem);
