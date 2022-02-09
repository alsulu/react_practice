import CardCont from './CardCont';
import Card from './Card';
import { data } from '../data/data';
import React, { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { rotateInDownLeft } from 'react-animations';
import { rotateInDownRight } from 'react-animations';

const RotateInDownLeft = styled.div`animation: 1s ${keyframes`${rotateInDownLeft}`}`;
const RotateInDownRight = styled.div`animation: 1s ${keyframes`${rotateInDownRight}`}`;
let currentCard = 0;

const SelectedCard = () => {
    const [selectedCardIndex, setSelectedCardIndex] = useState(0);
    const [updatedCard, setUpdatedCard] = useState(1);
    const [count, setCount] = useState(0);

    const handleClickNext = () => {
        currentCard = (currentCard + 1) % data.length;
        setSelectedCardIndex(currentCard);
        setUpdatedCard(1);
    }
    const handleClickPrev = () => {
        currentCard = (currentCard - 1 + data.length) % data.length;
        setSelectedCardIndex(currentCard);
        setUpdatedCard(2);
    }
    const Wrapper = ({ condition1, condition2, wrapNext, wrapPrev, noWrap, children }) => (
        condition1 ? wrapNext(children) : condition2 ? wrapPrev(children) : noWrap(children)
    )

    //const wordsRef = useRef();
    //useEffect(() => wordsRef.current.handleClick(), [k])

    const wordsCount = (e) => {
        //if (!localStorage.getItem(`${e.target.dataset.id}`)) {
        setCount(count+1);
        localStorage.setItem("count", count+1)
        localStorage.setItem(`${e.target.dataset.id}`, true)
        setUpdatedCard(0);
    }

    const wordCancel = (e) => {
        //if (localStorage.getItem(`${e.target.dataset.id}`)) {
        setCount(count-1);
        localStorage.setItem("count", count-1)
        localStorage.removeItem(`${e.target.dataset.id}`)
        setUpdatedCard(0);
    }

    useEffect(() => {
        localStorage.getItem("count") &&
            setCount(Number(localStorage.getItem("count")))
    }, [])

    return (
        <CardCont onClickNext={handleClickNext} onClickPrev={handleClickPrev} how={selectedCardIndex + 1} many={data.length} count={count}>
            <Wrapper condition1={updatedCard === 1} condition2={updatedCard === 2} wrapNext={children => (<RotateInDownLeft>{children}</RotateInDownLeft>)} wrapPrev={children => (<RotateInDownRight>{children}</RotateInDownRight>)} noWrap={children => (<React.Fragment>{children}</React.Fragment>)}>
                <Card 
                    key={data[selectedCardIndex].id} 
                    id={data[selectedCardIndex].id} 
                    word={data[selectedCardIndex].english} 
                    transcription={data[selectedCardIndex].transcription} 
                    translation={data[selectedCardIndex].russian} 
                    wordsCount={wordsCount} 
                    wordCancel={wordCancel} 
                    isLearned={localStorage.getItem(`${data[selectedCardIndex].id}`)} 
                />
            </Wrapper>
        </CardCont>
    );
}

export default SelectedCard;
