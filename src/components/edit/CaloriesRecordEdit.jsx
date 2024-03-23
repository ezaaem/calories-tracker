import { useState, useEffect } from "react";
import styles from "./CaloriesRecordForm.module.css";



const CalorieRecordEdit = (props) => {
  const [mealRecord, setMealRecord] = useState({
    date: "",
    meal: "breakfast",
    content: "",
    calories: "",
  });
  const DEFAULT_VALUE = {
    date: "",
    meal: "breakfast",
    content: "",
    calories: 0,
  };
  const [isFormValid, setFormValid] = useState(false);

useEffect(() => {
  setFormValid(mealRecord.date && mealRecord.content);
}, [mealRecord.date,mealRecord.content]);

  const onDateChangeHandeller = (event) => {
    setMealRecord({
      ...mealRecord,
      date: event.target.value,
    });
  };
  const onMealChangeHandeller = (event) => {
    setMealRecord({
      ...mealRecord,
      meal: event.target.value,
    });
  };
  const onContentChangeHandeller = (event) => {
    setMealRecord({
      ...mealRecord,
      content: event.target.value,
    });
  };
  const onCaloriesChangeHandeller = (event) => {
    setMealRecord({
      ...mealRecord,
      calories: Number(event.target.value),
    });
  };
  const onSubmitHandler = (event) => {
    event.preventDefault();
    props.onFormSubmit(mealRecord);
    setMealRecord({
      DEFAULT_VALUE,
    });
  };

  const onCancelHandler = () => {
    setMealRecord(DEFAULT_VALUE);
    props.onCancel();
  };

  return (
    <form caloriesCount={mealRecord.calories} onSubmit={onSubmitHandler}>
      <label htmlFor="date">Date:</label>
      <input
        id="date"
        type="date"
        value={mealRecord.date}
        name="date"
        onChange={onDateChangeHandeller}
      />
      <label htmlFor="meal">Meal:</label>
      <select
        name="meal"
        value={mealRecord.meal}
        id="meal"
        onChange={onMealChangeHandeller}
      >
        <option value="breakfast">breakfast</option>
        <option value="luanch">luanch</option>
        <option value="dinner">dinner</option>
        <option value="snack">snack</option>
      </select>
      <label htmlFor="content">Content:</label>
      <input
        type="text"
        name="content"
        value={mealRecord.content}
        id="content"
        onChange={onContentChangeHandeller}
      />

      <label htmlFor="calories">Calories:</label>
      <input
        type="number"
        name="calories"
        value={mealRecord.calories}
        id="calories"
        onChange={onCaloriesChangeHandeller}
        min={0}
      />
      <div  className={styles.footer}>
        <button disabled={!isFormValid}>Add Record</button>
        <button
          className={styles.sacondary}
          type="button"
          onClick={onCancelHandler}
        >
          cancel
        </button>
      </div>
    </form>
  );
};

export default CalorieRecordEdit;
