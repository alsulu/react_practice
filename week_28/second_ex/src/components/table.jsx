import React from 'react';
import Rows from './rows';
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
                        <Rows key={word.id} word={word.english} transcription={word.transcription} translation={word.russian} />
                    )}
                </tbody>
            </table>
        </div>
    );
}

export default Table;
