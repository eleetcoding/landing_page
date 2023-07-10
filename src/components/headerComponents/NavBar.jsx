import React from 'react';
import { Nav, NavDropdown } from 'react-bootstrap';
import styles from './Navbar.module.scss';
import { setColorTheme } from '../../store/slices/appSlice';
import { useDispatch, useSelector } from 'react-redux';

export default function NavBar() {
  const dispatch = useDispatch();
  const colorTheme = useSelector((state) => state.appSlice.colorTheme);
  let currTheme;
  let selectedDay;
  let selectedNight;

  if (window.matchMedia('(prefers-color-scheme: dark)').matches && colorTheme === null) {
    dispatch(setColorTheme('dark'));
  }

  document.querySelector('body').setAttribute('theme', colorTheme);

  if (colorTheme === 'dark') {
    currTheme = <i className='fa-solid fa-moon'></i>;
    selectedNight = <i className='fa-solid fa-check'></i>;
  } else {
    currTheme = <i className='fa-solid fa-sun'></i>;
    selectedDay = <i className='fa-solid fa-check'></i>;
  }

  return (
    <>
      {/* <Nav.Link className={styles.navLinks} href='https://meet.google.com/emg-akph-gib'>
        Google Meets Link
      </Nav.Link> */}
      <Nav.Link className={styles.navLinks} href='/schedule'>
        Schedule
      </Nav.Link>
      <Nav.Link className={styles.navLinks} href='/about'>
        About Us
      </Nav.Link>
      <NavDropdown className={styles.navLinks} title='Dark Mode'>
        <NavDropdown.Item onClick={() => dispatch(setColorTheme('light'))}>
          <i className='fa-solid fa-sun'></i>
        </NavDropdown.Item>

        <NavDropdown.Item onClick={() => dispatch(setColorTheme('dark'))}>
          <i className='fa-solid fa-moon'></i>
        </NavDropdown.Item>
      </NavDropdown>
    </>
  );
}
