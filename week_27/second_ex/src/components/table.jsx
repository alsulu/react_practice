import Words from './words';
import Title from './title';
import styles from './assets/styles/table.module.scss';
import { data } from '../data/data';

let Table = () => {
    return (
        <div className={styles.table} id="list">
            <Title title="Слова" />
            <table>
                <tr>
                    <th>Слово</th>
                    <th>Транскрипция</th>
                    <th>Перевод</th>
                    <th />
                </tr>
                {data.map(word =>
                    <Words key={word.id} word={word.english} transcription={word.transcription} translation={word.russian} edit={word.edit} />
                )}
            </table>
        </div>
    );
}

export default Table;
