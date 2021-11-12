import React from "react";
import styles from "./CustomCard.module.css";

interface Props{
  style? : object
}

const CustomCard : React.FC<Props> = ({ children, ...restProps }) => {
  return ( 
    <div className={styles.root} {...restProps}>
      <div className={styles.body} >{children}</div>
    </div>
  );
};

export default CustomCard;
