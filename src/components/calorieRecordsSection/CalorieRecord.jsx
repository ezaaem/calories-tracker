import styles from "./CalorieRecord.module.css";
import CalorieRecordDate from "./CalorieRecordDate";
import StyledRecordCell from "../common/styledRecordCell";
import { useEffect, useState } from "react";
 
function CalorieRecord(props) {
  const[currentCalories,setcurrentCalories]=useState(props.calories);
  const caloriesClick=()=>{
     
    setcurrentCalories( currentCalories + 10);
  }
  useEffect(()=>{
    props.addCalories((prevTotal)=>prevTotal+props.calories);
return()=>{
  props.addCalories((prevTotal)=>prevTotal-props.calories)
}
  },[props.calories]);


return (
    <ul className={styles.record}>
      <li>
        <CalorieRecordDate date={props.date}></CalorieRecordDate>
      </li>
      <li>{props.meal}</li>
      <li>{props.content}</li>
      <li
        className={styles["record-calories"]} onClick={caloriesClick}
      >
        <StyledRecordCell> {currentCalories}</StyledRecordCell>
      </li>
    </ul>
    
  );
}

export default CalorieRecord;
