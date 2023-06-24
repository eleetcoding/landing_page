import React from 'react';
import styles from './MainContainer.module.scss';

export default function main() {
  window.addEventListener(
    'scroll',
    () => {
      document.body.style.setProperty(
        '--scroll',
        window.scrollY / (document.body.offsetHeight - window.innerHeight)
      );
    },
    false
  );

  return (
    <div className={styles.bigDiv}>
      <p className={styles.mainLogo}>eLEET</p>
      <div className={styles.opaqueDiv}></div>
    </div>
  );
}
