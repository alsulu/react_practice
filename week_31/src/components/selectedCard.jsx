import CardCont from './card_cont';
import Card from './card';
import { data } from '../data/data';
import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { rotateInDownLeft } from 'react-animations';
import { rotateInDownRight } from 'react-animations';

const RotateInDownLeft = styled.div`animation: 1s ${keyframes`${rotateInDownLeft}`}`;
const RotateInDownRight = styled.div`animation: 1s ${keyframes`${rotateInDownRight}`}`;
let currentCard = 0;

const SelectedCard = () => {
    const [selectedCardIndex, setSelectedCardIndex] = useState(0);
    const [updatedCard, setUpdatedCard] = useState(true);

    const handleClickNext = () => {
        currentCard = (currentCard + 1) % data.length;
        setSelectedCardIndex(currentCard);
        setUpdatedCard(true);
    }

    const handleClickPrev = () => {
        currentCard = (currentCard - 1 + data.length) % data.length;
        setSelectedCardIndex(currentCard);
        setUpdatedCard(false);
    }

    const Wrapper = ({ condition, wrapNext, wrapPrev, children }) => (
        condition ? wrapNext(children) : wrapPrev(children)
    )

    return (
        <CardCont onClickNext={handleClickNext} onClickPrev={handleClickPrev} how={selectedCardIndex + 1} many={data.length}>
            <Wrapper condition={updatedCard} wrapNext={children => (<RotateInDownLeft>{children}</RotateInDownLeft>)} wrapPrev={children => (<RotateInDownRight>{children}</RotateInDownRight>)}>
                <Card key={data[selectedCardIndex].id} word={data[selectedCardIndex].english} transcription={data[selectedCardIndex].transcription} translation={data[selectedCardIndex].russian} />
            </Wrapper>
        </CardCont>
    );
}

export default SelectedCard;
