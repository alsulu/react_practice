import React, { useCallback, useEffect, useState } from 'react';
import{ observer, inject } from "mobx-react";

import CardCont from './CardCont';
import Card from './Card';
import Error from './Error';
import Loading from './Loading';
import styled, { keyframes } from 'styled-components';
import { rotateInDownLeft } from 'react-animations';
import { rotateInDownRight } from 'react-animations';

const RotateInDownLeft = styled.div`animation: 1s ${keyframes`${rotateInDownLeft}`}`;
const RotateInDownRight = styled.div`animation: 1s ${keyframes`${rotateInDownRight}`}`;
let currentCard = 0;

const SelectedCard = ({ wordsStore }) => {
    const [selectedCardIndex, setSelectedCardIndex] = useState(0);
    const [updatedCard, setUpdatedCard] = useState(1);
    const [count, setCount] = useState(0);

    useEffect(() => {
        wordsStore.getWords();
        localStorage.getItem("count") &&
            setCount(Number(localStorage.getItem("count")));
    }, [])

    const word = wordsStore.words[selectedCardIndex];

    const handleClickNext = () => {
        currentCard = (currentCard + 1) % wordsStore.words.length;
        setSelectedCardIndex(currentCard);
        setUpdatedCard(1);
    }
    const handleClickPrev = () => {
        currentCard = (currentCard - 1 + wordsStore.words.length) % wordsStore.words.length;
        setSelectedCardIndex(currentCard);
        setUpdatedCard(2);
    }
    const Wrapper = ({ condition1, condition2, wrapNext, wrapPrev, noWrap, children }) => (
        condition1 ? wrapNext(children) : condition2 ? wrapPrev(children) : noWrap(children)
    )

    const wordsCount = useCallback((e) => {
        setCount(count+1);
        localStorage.setItem("count", count+1);

        let learnedCards = localStorage.getItem("learnedCards") ? localStorage.getItem("learnedCards").split(",") : [];
        learnedCards.push(e.target.dataset.id);
        localStorage.setItem("learnedCards", learnedCards.join(","));

        setUpdatedCard(0);
    }, [count])

    const wordCancel = useCallback((e) => {
        setCount(count-1);
        localStorage.setItem("count", count-1);

        let learnedCards = localStorage.getItem("learnedCards").split(",");
        const index = learnedCards.indexOf(e.target.dataset.id);
        learnedCards.splice(index, 1);
        localStorage.setItem("learnedCards", learnedCards.join(","));

        setUpdatedCard(0);
    }, [count])


    if (wordsStore.isLoading || !wordsStore.isLoaded)
        return <Loading />

    if (wordsStore.isError)
        return <Error />
    
    return (
        <CardCont onClickNext={handleClickNext} onClickPrev={handleClickPrev} how={selectedCardIndex + 1} many={wordsStore.words.length} count={count}>
            <Wrapper condition1={updatedCard === 1} condition2={updatedCard === 2} wrapNext={children => (<RotateInDownLeft>{children}</RotateInDownLeft>)} wrapPrev={children => (<RotateInDownRight>{children}</RotateInDownRight>)} noWrap={children => (<React.Fragment>{children}</React.Fragment>)}>
                <Card
                    key={word.id}
                    id={word.id}
                    word={word.english}
                    transcription={word.transcription}
                    translation={word.russian}
                    wordsCount={wordsCount}
                    wordCancel={wordCancel}
                    isLearned={localStorage.getItem("learnedCards") && localStorage.getItem("learnedCards").includes(word.id)}
                />
            </Wrapper>
        </CardCont>
    );
}

export default inject(["wordsStore"])(observer(SelectedCard));
