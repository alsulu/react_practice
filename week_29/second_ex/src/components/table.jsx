import React from 'react';
import Row from './row';
import Title from './title';
import styles from './assets/styles/table.module.scss';
import { data } from '../data/data';

const Table = () => {
    return (
        <div className={styles.table} id="list">
            <Title title="Слова" />
            <table>
                <tbody>
                    <tr>
                        <th>Слово</th>
                        <th>Транскрипция</th>
                        <th>Перевод</th>
                        <th />
                    </tr>
                    {data.map(word =>
                        <Row key={word.id} word={word.english} transcription={word.transcription} translation={word.russian} />
                    )}
                </tbody>
            </table>
        </div>
    );
}

export default Table;
