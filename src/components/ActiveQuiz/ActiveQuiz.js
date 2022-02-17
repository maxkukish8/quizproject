import React from "react";
import classes from "./ActiveQuiz.scss"
import AnswersList from "./AnswersList/AnswersList";

const ActiveQuiz = props => (
    <div className={classes.ActiveQuiz}>
        <p>
            <span>
                <strong>2.</strong>&nbsp;
                How you doing?
            </span>

            <small>4 from 12</small>
        </p>

        <AnswersList
            answers={props.answers}
        />
    </div>
)

export default ActiveQuiz;
