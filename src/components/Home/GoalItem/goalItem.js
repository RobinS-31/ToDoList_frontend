// == Import : npm
import React from "react";
import { Link } from "react-router-dom";

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
        <Link
            to={{
                pathname: `/${goalData.title.replaceAll(" ", "-").normalize("NFD").replace(/\p{Diacritic}/gu, "").toLowerCase()}`,
                state: { goalData }
            }}
            className={"goalItem_titleContainer"}
        >
            <p className={'goalItem_titleContainer_title'}>{goalData.title}</p>
        </Link>
    </li>
);

export default React.memo(GoalItem);
