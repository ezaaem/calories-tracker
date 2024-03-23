 import styles from'./styledRecordCell.module.css';
 

function StyledRecordCell(props)
{
    return <div className={styles["record-cell"]}>{props.children}</div>

}
export default StyledRecordCell;