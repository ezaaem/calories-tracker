import RecordList from "./RecordList";
import styles from "./ListingSection.module.css";
import { useState } from "react";

const ListingSection = (props) => {
  const { allRecords } = props;
  const [currentDate, setCurrentDate] = useState(new Date());

  const dateChangeHandler = (event) => {
    setCurrentDate(new Date(event.target.value));
  };

  const dateFilter = (record) => {
    return (
      record.date.getDate() === currentDate.getDate() &&
      record.date.getMonth() === currentDate.getMonth() &&
      record.date.getFullYear() === currentDate.getFullYear()
    );
  };

  return (
    <>
      <label className={styles["listing-picker-label"]} htmlFor="listingDate">
        select date
      </label>
      <input
        id="listingDate"
        type="date"
        className={styles["listing-picker-input"]}
        value={currentDate.toISOString().split("T")[0]}
        onChange={dateChangeHandler}
      />
      <RecordList records={allRecords.filter(dateFilter)} />
    </>
  );
};

export default ListingSection;
