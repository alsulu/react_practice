import React, { memo, useEffect } from "react";
import{ observer, inject } from "mobx-react";

import Row from "./Row";
import Title from "./Title";
import Error from "./Error";
import styles from "./assets/styles/table.module.scss";
import AddingWordModal from "./AddingWordModal";
import useReverse from "../hooks/useReverse";
import Loading from "./Loading";

const Table = ({ wordsStore }) => {
  const [adding, reverseAdding] = useReverse(false);
  const [saving, reverseSaving] = useReverse(false);
  
  useEffect(() => wordsStore.getWords(), [])
  
  if (wordsStore.isLoading || !wordsStore.isLoaded)
    return <Loading />

  if (wordsStore.isError)
    return <Error />

  return (
    <div className={styles.table_container}>
      <Title title="Слова" />
      <div className={styles.table_wrapper}>
        <table>
          <tbody>
            <tr>
              <th>Слово</th>
              <th>Транскрипция</th>
              <th>Перевод</th>
              <th />
            </tr>
            {wordsStore.words.map((word) => (
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
      </div>
      <button className={styles.addingBtn} onClick={reverseAdding}>Добавить слово</button>
      {adding && <AddingWordModal close={reverseAdding} />}
    </div>
  );
}

export default inject(["wordsStore"])(observer(Table));
