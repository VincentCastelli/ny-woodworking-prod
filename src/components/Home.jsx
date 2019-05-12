import React from 'react';
import { NavLink } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <section className="showcase">
        <h1>High quality woodworking</h1>
        <NavLink activeClassName="credentials" exact to="/order">
          <button type="button">Place An Order</button>
        </NavLink>
      </section>
      <section className="billboard">
        <h2>The Next Big Thing</h2>
        <p>This site is under construction by Vincent Castelli</p>
      </section>
      <section className="core-assist-container">
        <div className="box">
          <i className="far fa-heart" />
          <h3>Made With Passion</h3>
          <p>Each piece is hand crafted with percision to ensure the highest quality product.</p>
        </div>
        <div className="box">
          <i className="fas fa-envelope" />
          <h3>Custom Orders</h3>
          <p>If it isn&apos;t in our product list email us the details. We will work with you! </p>
        </div>
        <div className="box">
          <i className="fas fa-truck" />
          <h3>Order Online</h3>
          <p>See some thing you like? Ordering is easier than ever before.</p>
        </div>
      </section>
    </div>
  );
};

export default Home;
