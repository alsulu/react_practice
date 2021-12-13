import Title from './title';
import Card from './cards';
import styles from './assets/styles/card_cont.module.scss';
import { data } from '../data/data';

const CardCont = () => {
    return (
        <div className={styles.cards_container} id="cards">
            <Title title="Карточки" />
            <div className={styles.cards}>
                {data.map(word =>
                    <Card key={word.id} word={word.english} transcription={word.transcription} translation={word.russian} />
                )}
            </div>
        </div>
    );
}

export default CardCont;
