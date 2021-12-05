// == Import : package
import { useContext, useEffect, useState } from "react";

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
    const { goalsData } = useContext(GoalsDataContext);
    const [displaySpinnerLoader, setDisplaySpinnerLoader] = useState(true);

    useEffect(() => {
        if (goalsData.length > 0) {
            setDisplaySpinnerLoader(false);
        }
    }, [goalsData]);

    return (
        <div className="home">
            <div className="home_header">
                <h2 className="home_header_title">Mes Objectifs</h2>
            </div>
            {displaySpinnerLoader && <SpinnerLoader classWidthAndHeight={"home_spinner-loader"} />}
            {!displaySpinnerLoader && <ul className="home_body">
                {goalsData.map(goal => <GoalItem
                    key={goal.id}
                    goalData={goal}
                />)}
            </ul>}
        </div>
    );
};

export default Home;
