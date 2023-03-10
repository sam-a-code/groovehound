import React from "react";
import { Link } from "react-router-dom";

const Home = ({ user }) => {
  return (
    <div>
      <h1 className='page-header'>GROOVEHOUND</h1>
      <h3>All of your concerts in one place</h3>
      <div className='homepage-flex'>
      <div className='homepage-card'>
        <img src="https://images.unsplash.com/photo-1620577610365-86c411bad78d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="explore bands"/>
        <br></br>
        <br></br>
        <Link to="/bands">
          <button className="button-54">Explore bands</button>
        </Link>
      </div>

        <div className="homepage-card">
          <img
            src="https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGNvbmNlcnR8ZW58MHx8MHx8&auto=format&fit=crop&w=870&q=80"
            alt="explore concerts"
          />
          <br></br>
          <br></br>
          <Link to="/concerts">
            <button className="button-54">Explore concerts</button>
          </Link>
        </div>

        <div className="homepage-card">
          <img
            src="https://images.unsplash.com/photo-1538905386057-4a5a580c45a6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            alt="explore bands"
          />
          <br></br>
          <br></br>
          {user ? (
            <Link to="/profile">
              <button className="button-54">See your tickets</button>
            </Link>
          ) : (
            <Link to="/login">
              <button className="button-54">See your tickets</button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
