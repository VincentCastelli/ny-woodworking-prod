import React from 'react';

const Order = () => {
  return (
    <div>
      <section className="billboard">
        <h2>Place an order</h2>
        <p>Fill out the information below:</p>
        <div className="booking-form-container">
          <form className="booking-form">
            <p>
              <label>
                <input type="text" name="firstname" placeholder=" " />
                <span className="required">First Name</span>
              </label>
            </p>
            <p>
              <label>
                <input type="text" name="lastname" placeholder=" " />
                <span className="required">Last Name</span>
              </label>
            </p>
            <p>
              <label>
                <input type="email" name="email" placeholder=" " />
                <span className="required">Email Address</span>
              </label>
            </p>
            <p>
              <label>
                <input type="text" name="phone" placeholder=" " />
                <span className="required">Phone Number</span>
              </label>
            </p>
            <p className="full-width">
              <label htmlFor="textarea" className="message-label">
                Leave us a message
                <textarea id="textarea" type="text" name="message" />
              </label>
            </p>
            <p className="full-width">
              <button type="submit">Submit</button>
            </p>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Order;
