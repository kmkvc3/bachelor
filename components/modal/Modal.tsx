import styles from "./Modal.module.css";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export default function Modal({ children, opened, setClose, title }) {
  const child = React.cloneElement(children, {setClose: setClose})

  return (
    <>
      {opened ? (
        <div className={styles.wrapper}>
          <div className={styles.modal}>
            <div className={styles.header}>
              <p>{ title }</p>
              <div className={styles.close} onClick={()=>setClose(!opened)}>
                <FontAwesomeIcon icon={faTimes} />
              </div>
            </div>
            <div className={styles.content}>
              {child }
            </div>
          </div>
          <div className={styles.background}></div>
        </div>
      ) : null}
    </>
  );
}
