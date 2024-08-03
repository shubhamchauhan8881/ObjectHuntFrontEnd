import React from 'react';
import './about.css'; 

export default function AboutPage() {
  return (
    <div className="about-container">
      <h1 className="about-title">About Object Hunt</h1>
      <p className="about-description">
        <strong>Object Hunt</strong> is an engaging and dynamic game designed to challenge your speed and creativity. Whether you're playing solo or with friends, Object Hunt brings an exciting twist to traditional scavenger hunts by asking players to find random objects in real life. The quicker you find the object, the higher your score!
      </p>

      <section className="features-section">
        <h2>Features</h2>
        <ul>
          <li><strong>Single-Player Mode:</strong> Hone your skills by playing alone, trying to beat your personal best and climb the leaderboard.</li>
          <li><strong>Multiplayer Mode:</strong> Compete against friends or other players online to see who can find the objects fastest.</li>
          <li><strong>Randomized Challenges:</strong> With a wide variety of objects to find, each game offers a unique experience.</li>
          <li><strong>Timed Scoring System:</strong> Your score is based on how quickly you can find and present the object, adding a thrilling race-against-the-clock element to the game.</li>
        </ul>
      </section>

      <section className="team-section">
        <h2>Our Team</h2>
        <p>Object Hunt is a final year project developed by a group of passionate Computer Science and Engineering students from Babu Banarasi Das University (BBDU), class of 2021-2025. Our team members include:</p>
        <ul className="team-list">
          <li><strong>Adarsh Kushwaha:</strong></li>
          <li><strong>Mohammad Adnan:</strong></li>
          <li><strong>Shubham Chauhan:</strong></li>
          <li><strong>Prashant Pandey:</strong></li>
          <li><strong>Vinay Kumar:</strong></li>
          <li><strong>Vishnu Rajbhar:</strong></li>
        </ul>
      </section>

      <section className="vision-section">
        <h2>Our Vision</h2>
        <p>
          Our goal with Object Hunt was to create a game that not only entertains but also encourages interaction with the real world. We believe in the power of technology to bring people together, and Object Hunt is a testament to our commitment to innovation, collaboration, and fun.
        </p>
      </section>

      <section className="future-plans-section">
        <h2>Future Plans</h2>
        <p>We are constantly looking for ways to improve Object Hunt and expand its features. Future updates may include:</p>
        <ul>
          <li>More object categories and themes.</li>
          <li>Customizable multiplayer rooms.</li>
          <li>Enhanced social sharing features.</li>
        </ul>
      </section>

      <section className="contact-section">
        <h2>Contact Us</h2>
        <p>We would love to hear your feedback and suggestions! Feel free to reach out to us at <a href="mailto:contact@example.com">mohammadadnan5674@gmail.com</a> or follow us on our social media channels for the latest updates.</p>
      </section>
    </div>
  );
}
