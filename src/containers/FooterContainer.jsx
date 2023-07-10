import React from 'react';
import styles from './FooterContainer.module.scss';

export default function footer() {
  return (
    <div className={styles.footerDiv}>
      © 2023 <span style={{ color: 'red' }}>♥</span> eLeet Coding
    </div>
  );
}
