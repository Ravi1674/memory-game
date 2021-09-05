import React from "react";
import "./style.css";
import { Container } from "react-bootstrap";

const Header = ({ moves, bestScore, handleRestart }) => {
    return (
        <div>
            <h1>Memory Game</h1>
            <Container>
                <div className="sub-header">
                    <div className="moves">
                        <span className="bold">Moves:</span>
                        {moves}
                    </div>
                    <div className="reshuffle">
                        <button onClick={handleRestart}>
                            Reset
                        </button>
                    </div>
                    {localStorage.getItem("bestScore") && (
                        <div className="high-score">
                            <span>Best Score:</span>
                            {bestScore}
                        </div>
                    )}
                </div>
            </Container>
        </div>
    );
};

export default Header;