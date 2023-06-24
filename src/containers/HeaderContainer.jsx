import React from 'react';
import NavBar from '../components/headerComponents/NavBar';
import { Container, Navbar } from 'react-bootstrap';
import styles from './HeaderContainer.module.scss';

export default function header() {
  return (
    <Navbar className={styles.navbar} expand='lg'>
      <Container fluid>
        <Navbar.Brand className={styles.logo} href='/'>
          eLeet
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className='justify-content-end'>
          <NavBar />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
