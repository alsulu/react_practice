import React from 'react';
import './cards.css';

function Card(props) {
    return (
        <div className="card" id="card">
            <p className="word">{props.word}</p>
            <p>[{props.transcription}]</p>
            <p>{props.translation}</p>
        </div>
    );
}

export default Card;
