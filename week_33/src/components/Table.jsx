import React, { memo, useContext, useEffect } from "react";
import Row from "./Row";
import Title from "./Title";
import Error from "./Error";
import styles from "./assets/styles/table.module.scss";
import AddingWordModal from "./AddingWordModal";
import useReverse from "../hooks/useReverse";
import { WordsContext } from "../WordsContext";
import Loading from "./Loading";

const Table = memo(() => {
  const { words, isLoading, getWords, error, errorMessage} = useContext(WordsContext);
  const [adding, reverseAdding] = useReverse(false);
  
  useEffect(() => getWords(), [])

  if (isLoading)
    return <Loading />

  if (error)
    return <Error title={errorMessage} />

  return (
    <div className={styles.table_container}>
      <Title title="Слова" />
      <table>
        <tbody>
          <tr>
            <th>Слово</th>
            <th>Транскрипция</th>
            <th>Перевод</th>
            <th />
          </tr>
          {words.map((word) => (
            <Row
              key={word.id}
              id={word.id}
              word={word.english}
              transcription={word.transcription}
              translation={word.russian}
            />
          ))}
        </tbody>
      </table>
      <button className={styles.addingBtn} onClick={reverseAdding}>Добавить слово</button>
      {adding && <AddingWordModal close={reverseAdding} />}
    </div>
  );
})

export default Table;
