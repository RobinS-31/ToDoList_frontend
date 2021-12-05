// == Import : package
import { useContext, useEffect, useState } from "react";
import axios from "axios";

// == Import : components
import GoalItem from "./GoalItem/goalItem";
import SpinnerLoader from "../SpinnerLoader/spinnerLoader";

// == Import : local
import { GoalsDataContext } from "../../context/goalsDataContext";

// == Import : style
import "./home.scss";

/**
 * Displays the list of goals.
 * @returns {JSX.Element}
 */
const Home = () => {
    const { goalsData, setGoalsData } = useContext(GoalsDataContext);
    const [displaySpinnerLoader, setDisplaySpinnerLoader] = useState(true);
    const [goalsToDisplay, setGoalsToDisplay] = useState([]);

    useEffect(() => {
        if (goalsData.length > 0) {
            const goalsActiveSortByNewest = goalsData.filter(goal => goal.active).sort((a, b) => b.id - a.id);
            const goalsInactiveSortByNewest = goalsData.filter(goal => !goal.active).sort((a, b) => b.id - a.id);
            setGoalsToDisplay([...goalsActiveSortByNewest, ...goalsInactiveSortByNewest]);
            setDisplaySpinnerLoader(false);
        }
    }, [goalsData]);

    const handleOnChangeInputCheckbox = async (id, active) => {
        const response = await axios.put(
            `${process.env.REACT_APP_API_URL}api/goals/updategoal`,
            { id, active },
            {
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json",
                }
            }
        );
        if (response.status === 200) {
            const { goalsList } = response.data;
            setGoalsData(goalsList);
        }
    };

    return (
        <div className="home">
            <div className="home_header">
                <h2 className="home_header_title">Mes Objectifs</h2>
            </div>
            {displaySpinnerLoader && <SpinnerLoader classWidthAndHeight={"home_spinner-loader"} />}
            {!displaySpinnerLoader && <ul className="home_body">
                {goalsToDisplay.map(goal => <GoalItem
                    key={goal.id}
                    goalData={goal}
                    handleOnChangeInputCheckbox={handleOnChangeInputCheckbox}
                />)}
            </ul>}
        </div>
    );
};

export default Home;
