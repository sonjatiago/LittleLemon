// BookingSection.js
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaCalendarAlt, FaClock, FaUsers, FaGift, FaUtensils } from 'react-icons/fa';
import './BookingSection.css';

const BookingSection = () => {
  const [step, setStep] = useState(1);
  const [guests, setGuests] = useState(2);
  const [date, setDate] = useState('');
  const [time, setTime] = useState('19:00');
  const [specialOccasion, setSpecialOccasion] = useState('');
  const [specialRequests, setSpecialRequests] = useState('');
  const [userDetails, setUserDetails] = useState({
    name: '',
    email: '',
    phone: '',
  });

  const [bookedGuests, setBookedGuests] = useState({
    '11:00': 0, '11:30': 0, '12:00': 0, '12:30': 0,
    '13:00': 0, '13:30': 0, '14:00': 0,
    '19:00': 0, '19:30': 0, '20:00': 0, '20:30': 0, '21:00': 0,
  });

  const handleGuestsChange = (action) => {
    if (action === 'increment' && guests < 10) {
      setGuests(prev => prev + 1);
    } else if (action === 'decrement' && guests > 1) {
      setGuests(prev => prev - 1);
    }
  };

  const generateTimeOptions = () => {
    const lunchTimes = ['11:00', '11:30', '12:00', '12:30', '13:00', '13:30', '14:00'];
    const dinnerTimes = ['19:00', '19:30', '20:00', '20:30', '21:00'];
    return [...lunchTimes, ...dinnerTimes];
  };

  const handleTimeChange = (selectedTime) => {
    const totalGuestsForTime = bookedGuests[selectedTime];
    if (totalGuestsForTime + guests <= 50) {
      setTime(selectedTime);
      setBookedGuests({
        ...bookedGuests,
        [selectedTime]: totalGuestsForTime + guests,
      });
    } else {
      alert('Sorry, this time slot is fully booked. Please select another time.');
    }
  };

  const handleConfirmBooking = () => {
    setStep(3);
  };

  const handleBookingSubmit = (e) => {
    e.preventDefault();
    setStep(2);
  };

  const pageVariants = {
    initial: { opacity: 0, x: -20 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: 20 }
  };

  const renderBookingForm = () => (
    <motion.div 
      className="booking-content"
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <div className="form-header">
        <h2>Book a Table</h2>
        <p>Reserve your spot for an exceptional dining experience</p>
      </div>

      <form className="booking-form" onSubmit={handleBookingSubmit}>
        <div className="form-grid">
          <div className="form-group">
            <label htmlFor="date">
              <FaCalendarAlt /> Select Date
            </label>
            <input
              type="date"
              id="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              required
              min={new Date().toISOString().split('T')[0]}
            />
          </div>

          <div className="form-group">
            <label htmlFor="time">
              <FaClock /> Select Time
            </label>
            <select
              id="time"
              value={time}
              onChange={(e) => handleTimeChange(e.target.value)}
              required
            >
              {generateTimeOptions().map((timeOption) => (
                <option key={timeOption} value={timeOption}>
                  {timeOption}
                </option>
              ))}
            </select>
          </div>

          <div className="form-group">
            <label>
              <FaUsers /> Number of Guests
            </label>
            <div className="guests-btn-container">
              <button type="button" onClick={() => handleGuestsChange('decrement')}>
                -
              </button>
              <input type="number" value={guests} readOnly />
              <button type="button" onClick={() => handleGuestsChange('increment')}>
                +
              </button>
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="special-occasion">
              <FaGift /> Special Occasion
            </label>
            <select
              id="special-occasion"
              value={specialOccasion}
              onChange={(e) => setSpecialOccasion(e.target.value)}
            >
              <option value="">Select an occasion</option>
              <option value="birthday">Birthday</option>
              <option value="anniversary">Anniversary</option>
              <option value="celebration">Celebration</option>
              <option value="date">Date Night</option>
              <option value="business">Business Meal</option>
            </select>
          </div>
        </div>

        <div className="form-group full-width">
          <label htmlFor="special-requests">
            <FaUtensils /> Special Requests
          </label>
          <textarea
            id="special-requests"
            placeholder="Any dietary restrictions or special arrangements?"
            value={specialRequests}
            onChange={(e) => setSpecialRequests(e.target.value)}
          />
        </div>

        <div className="personal-details">
          <h3>Personal Details</h3>
          <div className="form-grid">
            <div className="form-group">
              <label htmlFor="name">Full Name</label>
              <input
                type="text"
                id="name"
                value={userDetails.name}
                onChange={(e) => setUserDetails({ ...userDetails, name: e.target.value })}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                value={userDetails.email}
                onChange={(e) => setUserDetails({ ...userDetails, email: e.target.value })}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="phone">Phone Number</label>
              <input
                type="tel"
                id="phone"
                value={userDetails.phone}
                onChange={(e) => setUserDetails({ ...userDetails, phone: e.target.value })}
                required
              />
            </div>
          </div>
        </div>

        <button type="submit" className="submit-button">
          Continue to Confirmation
        </button>
      </form>
    </motion.div>
  );

  const renderConfirmation = () => (
    <motion.div 
      className="confirmation-section"
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <h2>Confirm Your Booking</h2>
      <div className="confirmation-details">
        <ul>
          <li><FaCalendarAlt /> <strong>Date:</strong> {date}</li>
          <li><FaClock /> <strong>Time:</strong> {time}</li>
          <li><FaUsers /> <strong>Guests:</strong> {guests}</li>
          {specialOccasion && <li><FaGift /> <strong>Occasion:</strong> {specialOccasion}</li>}
          {specialRequests && (
            <li>
              <FaUtensils /> <strong>Special Requests:</strong> {specialRequests}
            </li>
          )}
        </ul>
      </div>
      <div className="button-group">
        <button className="edit-button" onClick={() => setStep(1)}>
          Edit Details
        </button>
        <button className="confirm-button" onClick={handleConfirmBooking}>
          Confirm Booking
        </button>
      </div>
    </motion.div>
  );

  const renderSuccess = () => (
    <motion.div 
      className="success-section"
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <div className="success-content">
        <div className="success-icon">✓</div>
        <h2>Booking Confirmed!</h2>
        <p>Thank you for choosing Little Lemon Restaurant.</p>
        <div className="booking-details">
          <p>A confirmation email has been sent to {userDetails.email}</p>
          <p>Reservation Details:</p>
          <ul>
            <li>{date} at {time}</li>
            <li>{guests} {guests === 1 ? 'guest' : 'guests'}</li>
          </ul>
        </div>
      </div>
    </motion.div>
  );

  return (
    <section className="booking-section">
      <AnimatePresence mode='wait'>
        {step === 1 && renderBookingForm()}
        {step === 2 && renderConfirmation()}
        {step === 3 && renderSuccess()}
      </AnimatePresence>
    </section>
  );
};

export default BookingSection;