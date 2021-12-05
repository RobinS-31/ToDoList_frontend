// == Import : package
import React, { useEffect, useContext, useCallback } from "react";
import { Switch, Route } from "react-router-dom";
import axios from "axios";

// == Import : components
import Header from "../Header/header";
import Home from "../Home/home";

// == Import : local
import { GoalsDataContext } from "../../context/goalsDataContext";

// == Import : style
import "./app.scss";

const App = () => {
    const { setGoalsData } = useContext(GoalsDataContext);

    const getGoalsList = useCallback(async () => {
        try {
            const response = await axios.get(`${process.env.REACT_APP_API_URL}api/goals/getgoals`);
            if (response.status === 200) {
                const { goalsList } = response.data;
                setGoalsData(goalsList);
            }
        } catch (err) {
            console.log(err);
        }
    }, [setGoalsData]);

    useEffect(() => {
        getGoalsList();
    }, [getGoalsList]);

    return (
        <div className="app">
            <Header />
            <main>
                <Switch>
                    <Route path={"/"} component={Home} exact />
                </Switch>
            </main>
        </div>
    );
};

export default App;
