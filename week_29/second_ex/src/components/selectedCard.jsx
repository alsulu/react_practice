import CardCont from './card_cont';
import Card from './card';
import { data } from '../data/data';
import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import { rotateInDownLeft } from 'react-animations';
import { rotateInDownRight } from 'react-animations';

const SelectedCard = () => {
    const [selectedCardIndex, setSelectedCardIndex] = useState(0);
    const [nextCard, setNextCard] = useState(true);
    const [prevCard, setPrevCard] = useState(false);

    const handleClickPrev = () => {
        const otherCard = selectedCardIndex - 1;
        (otherCard >= 0 ? setSelectedCardIndex(otherCard) : setSelectedCardIndex(data.length - 1))
        setPrevCard(true);
        setTimeout(() => setPrevCard(false), 1000)
    }

    const handleClickNext = () => {
        const otherCard = selectedCardIndex + 1;
        (otherCard < data.length ? setSelectedCardIndex(otherCard) : setSelectedCardIndex(0))
        setNextCard(true);
        setTimeout(() => setNextCard(false), 1000)
    }

    const Wrapper = ({ conditionNext, conditionPrev, wrapNext, wrapPrev, children }) => (
        conditionNext ? wrapNext(children) : conditionPrev ? wrapPrev(children) : children
    )

    const RotateInDownLeft = styled.div`animation: 1s ${keyframes`${rotateInDownLeft}`} infinite`;
    const RotateInDownRight = styled.div`animation: 1s ${keyframes`${rotateInDownRight}`} infinite`;

    useEffect(() => setTimeout(() => setNextCard(false), 1000), [])

    return (
        <CardCont onClickPrev={handleClickPrev} onClickNext={handleClickNext} how={selectedCardIndex + 1} many={data.length}>
            <Wrapper conditionNext={nextCard} conditionPrev={prevCard} wrapNext={children => (<RotateInDownLeft>{children}</RotateInDownLeft>)} wrapPrev={children => (<RotateInDownRight>{children}</RotateInDownRight>)}>
                <Card key={data[selectedCardIndex].id} word={data[selectedCardIndex].english} transcription={data[selectedCardIndex].transcription} translation={data[selectedCardIndex].russian} />
            </Wrapper>
        </CardCont>
    );
}

export default SelectedCard;
