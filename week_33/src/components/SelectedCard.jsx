import CardCont from './CardCont';
import Card from './Card';
import { data } from '../data/data';
import React, { useCallback, useEffect, useState, memo } from 'react';
import styled, { keyframes } from 'styled-components';
import { rotateInDownLeft } from 'react-animations';
import { rotateInDownRight } from 'react-animations';

const RotateInDownLeft = styled.div`animation: 1s ${keyframes`${rotateInDownLeft}`}`;
const RotateInDownRight = styled.div`animation: 1s ${keyframes`${rotateInDownRight}`}`;
let currentCard = 0;
//let localData = data;

const SelectedCard = memo(() => {
    
    if (!localStorage.getItem("words")) { 
        const words = [];
        const transcriptions = [];
        const translations = [];
        Object.keys(data).map((key) => {
            words.push(data[key].english);
            transcriptions.push(data[key].transcription);
            translations.push(data[key].russian);
        })
        localStorage.setItem("words", words.join(","));
        localStorage.setItem("transcriptions", transcriptions.join(","));
        localStorage.setItem("translations", translations.join(","))
    }
    
    const localData = localStorage.getItem("words").split(",");


    /*useEffect(() => {
        const words = [];
        const transcriptions = [];
        const translations = [];
        Object.keys(data).map((key) => {
            words.push(data[key].english);
            transcriptions.push(data[key].transcription);
            translations.push(data[key].russian);
        })
        localStorage.setItem("words", words.join(","));
        localStorage.setItem("transcriptions", transcriptions.join(","));
        localStorage.setItem("translations", translations.join(","))
        }, [])*/
        //useEffect(() => localData = localStorage.getItem("words").split(",") || data, []);

    const [selectedCardIndex, setSelectedCardIndex] = useState(0);
    const [updatedCard, setUpdatedCard] = useState(1);
    const [count, setCount] = useState(0);

    const handleClickNext = () => {
        currentCard = (currentCard + 1) % localData.length;
        setSelectedCardIndex(currentCard);
        setUpdatedCard(1);
    }
    const handleClickPrev = () => {
        currentCard = (currentCard - 1 + localData.length) % localData.length;
        setSelectedCardIndex(currentCard);
        setUpdatedCard(2);
    }
    const Wrapper = ({ condition1, condition2, wrapNext, wrapPrev, noWrap, children }) => (
        condition1 ? wrapNext(children) : condition2 ? wrapPrev(children) : noWrap(children)
    )

    //const wordsRef = useRef();
    //useEffect(() => wordsRef.current.handleClick(), [k])

    const wordsCount = useCallback((e) => {
        //if (!localStorage.getItem(`${e.target.dataset.id}`)) {
        setCount(count+1);
        localStorage.setItem("count", count+1)
        localStorage.setItem(`${e.target.dataset.id}`, true)
        setUpdatedCard(0);
    }, [count])

    const wordCancel = useCallback((e) => {
        //if (localStorage.getItem(`${e.target.dataset.id}`)) {
        setCount(count-1);
        localStorage.setItem("count", count-1)
        localStorage.removeItem(`${e.target.dataset.id}`)
        setUpdatedCard(0);
    }, [count])

    useEffect(() => {
        localStorage.getItem("count") &&
            setCount(Number(localStorage.getItem("count")))
    }, [])

    return (
        <CardCont onClickNext={handleClickNext} onClickPrev={handleClickPrev} how={selectedCardIndex + 1} many={localData.length} count={count}>
            <Wrapper condition1={updatedCard === 1} condition2={updatedCard === 2} wrapNext={children => (<RotateInDownLeft>{children}</RotateInDownLeft>)} wrapPrev={children => (<RotateInDownRight>{children}</RotateInDownRight>)} noWrap={children => (<React.Fragment>{children}</React.Fragment>)}>
                <Card 
                    key={localData[selectedCardIndex]-selectedCardIndex} 
                    id={selectedCardIndex} 
                    word={localData[selectedCardIndex]} 
                    transcription={localStorage.getItem("transcriptions").split(",")[selectedCardIndex]} 
                    translation={localStorage.getItem("translations").split(",")[selectedCardIndex]} 
                    wordsCount={wordsCount} 
                    wordCancel={wordCancel} 
                    isLearned={localStorage.getItem(`${selectedCardIndex}`)} 
                />
            </Wrapper>
        </CardCont>
    );
})

export default SelectedCard;
