import { data } from '../data/data';
import Words from './words';
import styles from './assets/styles/table.module.scss';

let Table = (props) => {
    return (
        <div className={styles.table}>
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
