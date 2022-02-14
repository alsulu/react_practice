import React, { memo } from "react";
import Row from "./Row";
import Title from "./Title";
import styles from "./assets/styles/table.module.scss";
import { data } from "../data/data";
import AddingWord from "./AddingWord";
import useReverse from "../hooks/useReverse";

const Table = memo(() => {
  const [adding, reverseAdding] = useReverse(false);

  //const [dataWords, setDataWords] = useState(data);
  //const { wordRef, transcriptionRef, translationRef } = useRef();
  /*const handleAdd = (e, values) => {
    setDataWords({
      ...dataWords,
        english: values.word,
        transcription: values.transcription,
        russian: values.translation
    })
  }*/

  //const ref = useRef();

    if (!localStorage.getItem("words")) { 
      const words = [];
      const transcriptions = [];
      const translations = [];
      Object.keys(data).map((key) => {
        words.push(data[key].english);
        transcriptions.push(data[key].transcription);
        translations.push(data[key].russian);
      })
      localStorage.setItem("words", words.join(","));
      localStorage.setItem("transcriptions", transcriptions.join(","));
      localStorage.setItem("translations", translations.join(","))}

  /*useEffect(() => {
    words = localStorage.getItem("words").split(",");
    transcriptions = localStorage.getItem("transcriptions").split(",");
    translations = localStorage.getItem("translations").split(",");
  }, [localStorage.getItem("words") || localStorage.getItem("transcriptions") || localStorage.getItem("translations")])
*/
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
          {localStorage.getItem("words").split(",").map((word, i) => (
            <Row
              key={`${word}-${i}`}
              id={i}
              word={localStorage.getItem("transcriptions").split(",")[i]}
              transcription={localStorage.getItem("transcriptions").split(",")[i]}
              translation={localStorage.getItem("translations").split(",")[i]}
              //ref={ref}
            />
          ))}
        </tbody>
      </table>
      <button className={styles.addingBtn} onClick={reverseAdding}>Добавить слово</button>
      {adding && <AddingWord close={reverseAdding} />}
    </div>
  );
})

export default Table;
