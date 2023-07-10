import React from 'react';
import styles from './ScheduleContainer.module.scss';
import { Dropdown } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { setInstructor } from '../store/slices/appSlice';

export default function ScheduleContainer() {
  const instructor = useSelector((state) => state.appSlice.instructor);
  const dispatch = useDispatch();

  // TODO turn this into a fetch request to a database instead of hard writing each item and use state
  return (
    <div className={styles.scheduleDiv}>
      <div className={styles.scheduleHeader}>
        <h1>Upcoming Sessions!</h1>
        <p>All times are in EST</p>
      </div>
      <p className={styles.dropdown}>Filter by instructor: </p>{' '}
      <Dropdown className={styles.dropdown}>
        <Dropdown.Toggle variant='success' id='dropdown-basic'>
          {instructor}
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item onClick={() => dispatch(setInstructor('Mahir'))}>Mahir</Dropdown.Item>
          <Dropdown.Item onClick={() => dispatch(setInstructor('Jimmy'))}>Jimmy</Dropdown.Item>
          <Dropdown.Item onClick={() => dispatch(setInstructor('Kevin'))}>Kevin</Dropdown.Item>
          <Dropdown.Item onClick={() => dispatch(setInstructor('Joseph'))}>Joseph</Dropdown.Item>
          <Dropdown.Item onClick={() => dispatch(setInstructor('Praise'))}>Praise</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      <div className={styles.event}>
        <h3>Arrays and Strings w/ Joseph</h3>
        <p>Monday July 10, 2023 @ 1pm-3pm</p>
      </div>
      <div className={styles.event}>
        <h3>1D Dynamic Programming w/ Jimmy</h3>
        <p>Tuesday July 11, 2023 @ 9pm-11pm</p>
      </div>
      <div className={styles.event}>
        <h3>Two Pointer w/ Mahir</h3>
        <p>Wednesday July 12, 2023 @ 1pm-3pm</p>
      </div>
      <div className={styles.event}>
        <h3>2D Dynamic Programming w/ Jimmy</h3>
        <p>Thursday July 13, 2023 @ 9pm-11pm</p>
      </div>
      <div className={styles.event}>
        <h3>Sliding Window w/ Mahir</h3>
        <p>Monday July 17, 2023 @ 1pm-3pm</p>
      </div>
      <div className={styles.event}>
        <h3>Binary Trees w/ Praise</h3>
        <p>Tuesday July 18, 2023 @ 9pm-11pm</p>
      </div>
      <div className={styles.event}>
        <h3>Graphs w/ Kevin</h3>
        <p>Wednesday July 19, 2023 @ 1pm-3pm</p>
      </div>
      <div className={styles.event}>
        <h3>Linked Lists w/ Kevin</h3>
        <p>Thursday July 20, 2023 @ 9pm-11pm</p>
      </div>
    </div>
  );
}
