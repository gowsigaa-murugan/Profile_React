import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
const Profile = () => {
  return (
    <div style={styles.container}>
      
      <header style={styles.header}>
        <h1 style={styles.logo}>Gowsigaa</h1>
        <nav>
          <ul style={styles.navList}>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>

      
      <main style={styles.main}>
        <img
          src="download.png"
          alt="Profile"
          style={styles.image}
        />
        <div style={styles.infoCard}>
          <h2>Gowsigaa B</h2>
          <p>Full Stack Developer</p>
          <p>BE Computer Science and Engineering</p>
          <p>Contact: +91 6380597006</p>
          <p>Email: gowsigaa2002@gmail.com</p>
        </div>
      </main>

      {/* Footer Section */}
      <footer style={styles.footer}>
        <p>&copy;  All Rights Reserved.</p>
      </footer>
    </div>
  );
};

// Inline CSS styles
const styles = {
  container: {
    width: '100vw',
    height: '100vh',
    margin: '0',
    padding: '0',
    display: 'flex',
    flexDirection: 'column',
    overflow: '', // Prevent scrolling
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'white',
    color: 'black',
    padding: '10px 10px',
  },
  logo: {
    margin: '0',
    fontSize: '35px',
  },
  navList: {
    listStyleType: 'none',
    display: 'flex',
    gap: '17px',
  },
  main: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center', // Center content vertically and horizontally
    padding: '10px',
    flex: '-1', // Ensures main content takes the available space
  },
  image: {
    width: '150px',
    height: '150px',
    borderRadius: '50%',
    marginBottom: '20px',
    parseFloat:"right",
  },
  infoCard: {
    backgroundColor: 'white',
    padding: '20px',
    color: 'black',
    borderRadius: '10px',
    textAlign: 'center',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', // Optional shadow for better visuals
  },
  footer: {
    backgroundColor: 'white',
    color: 'black',
    textAlign: 'center',
    padding: '10px',
  
  },
};





export default Profile

















