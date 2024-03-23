import styles from "./RecordList.module.css";
import CalorieRecord from "./CalorieRecord";
import { useEffect, useState } from "react";

function RecordList(props) {
  const [totalCalories, setTotalCalories] = useState(0);
  useEffect(() => {
   setTotalCalories(props.records.reduce((agg, cur) => {
      return agg + cur.calories;
    }, 0)) 
  },[props.records]);

  const resultElement = props.records.length ? (
    <ul className={styles["record-list"]}>
      {props.records.map((record) => (
        <li key={record.id}>
          <CalorieRecord
            date={record.date}
            meal={record.meal}
            content={record.content}
            calories={record.calories}
            addCalories={setTotalCalories}
          />
        </li>
      ))}
    </ul>
  ) : (
    <div className={styles.placeholder}> No records found for this date</div>
  );
  return (
    <>
      {resultElement}
      <label htmlFor="">Total calories:{totalCalories}</label>
    </>
  );
}

export default RecordList;
