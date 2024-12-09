import React, { useState } from 'react';
import './BookingSection.css';

const BookingSection = () => {
  const [step, setStep] = useState(1); // Step 1: Booking Form, Step 2: Confirmation
  const [guests, setGuests] = useState(1);
  const [date, setDate] = useState('');
  const [time, setTime] = useState('11:00');
  const [specialOccasion, setSpecialOccasion] = useState('');
  const [specialRequests, setSpecialRequests] = useState('');
  const [userDetails, setUserDetails] = useState({
    name: '',
    email: '',
    phone: '',
  });
  
  const [bookedGuests, setBookedGuests] = useState({
    '11:00': 0,
    '11:30': 0,
    '12:00': 0,
    '12:30': 0,
    '13:00': 0,
    '13:30': 0,
    '14:00': 0,
    '19:00': 0,
    '19:30': 0,
    '20:00': 0,
    '20:30': 0,
    '21:00': 0,
  });

  // Handle change in the number of guests
  const handleGuestsChange = (action) => {
    if (action === 'increment' && guests < 10) {  // Prevent exceeding 10 guests
      setGuests((prev) => prev + 1);
    } else if (action === 'decrement' && guests > 1) {  // Ensure guests are at least 1
      setGuests((prev) => prev - 1);
    }
  };

  const generateTimeOptions = () => {
    const lunchTimes = ['11:00', '11:30', '12:00', '12:30', '13:00', '13:30', '14:00'];
    const dinnerTimes = ['19:00', '19:30', '20:00', '20:30', '21:00'];

    return [...lunchTimes, ...dinnerTimes];
  };

  // Handle time selection and check availability based on guest limits
  const handleTimeChange = (selectedTime) => {
    const totalGuestsForTime = bookedGuests[selectedTime];

    // Check if there are enough available slots for the number of guests
    if (totalGuestsForTime + guests <= 50) {
      setTime(selectedTime);
      setBookedGuests({
        ...bookedGuests,
        [selectedTime]: totalGuestsForTime + guests, // Update the booked guests for that time slot
      });
    } else {
      alert('Sorry, there are not enough available slots for this time. Please select another time.');
    }
  };

  const handleConfirmBooking = () => {
    setStep(3); // Move to "Booking Confirmed" section
  };

  const handleBookingSubmit = (e) => {
    e.preventDefault();
    setStep(2); // Move to Confirmation Summary step
  };

  return (
    <section className="booking-section">
      {step === 1 && (
        <div className="booking-content">
          <h2>Book a Table</h2>
          <p>Reserve your spot and enjoy an exceptional dining experience.</p>
          <form className="booking-form" onSubmit={handleBookingSubmit}>
            {/* Booking Details */}
            <div className="form-group">
              <label htmlFor="special-occasion">Special Occasion (Optional)</label>
              <select
                id="special-occasion"
                value={specialOccasion}
                onChange={(e) => setSpecialOccasion(e.target.value)}
              >
                <option value="">-- Select --</option>
                <option value="birthday">Birthday</option>
                <option value="anniversary">Anniversary</option>
              </select>
            </div>

            {/* Number of Guests */}
            <div className="form-group">
              <label>Select the number of guests</label>
              <div className="guests-btn-container">
                <button
                  type="button"
                  onClick={() => handleGuestsChange('decrement')}
                >
                  -
                </button>
                <input type="number" value={guests} readOnly />
                <button
                  type="button"
                  onClick={() => handleGuestsChange('increment')}
                >
                  +
                </button>
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="date">Select Date</label>
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
              <label htmlFor="time">Select Time</label>
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

            {/* Special Requests */}
            <div className="form-group">
              <label htmlFor="special-requests">Special Requests (Optional)</label>
              <textarea
                id="special-requests"
                placeholder="Any special requests or dietary restrictions?"
                value={specialRequests}
                onChange={(e) => setSpecialRequests(e.target.value)}
              />
            </div>

            {/* User Information */}
            <div className="form-group">
              <label htmlFor="name">Full Name</label>
              <input
                type="text"
                id="name"
                value={userDetails.name}
                onChange={(e) =>
                  setUserDetails({ ...userDetails, name: e.target.value })
                }
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                value={userDetails.email}
                onChange={(e) =>
                  setUserDetails({ ...userDetails, email: e.target.value })
                }
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="phone">Phone Number</label>
              <input
                type="tel"
                id="phone"
                value={userDetails.phone}
                onChange={(e) =>
                  setUserDetails({ ...userDetails, phone: e.target.value })
                }
                required
              />
            </div>

            <button type="submit">Continue</button>
          </form>
        </div>
      )}

      {step === 2 && (
        <div className="confirmation-section">
          <h2>Confirm Your Booking</h2>
          <ul>
            <li><strong>Date:</strong> {date}</li>
            <li><strong>Time:</strong> {time}</li>
            <li><strong>Guests:</strong> {guests}</li>
            {specialOccasion && <li><strong>Occasion:</strong> {specialOccasion}</li>}
            {specialRequests && <li><strong>Special Requests:</strong> {specialRequests}</li>}
          </ul>
          <div className="button-group">
            <button className="edit" onClick={() => setStep(1)}>Edit</button>
            <button className="confirm" onClick={handleConfirmBooking}>
              Confirm Booking
            </button>
          </div>
        </div>
      )}

      {step === 3 && (
        <div className="confirmation-section">
          <h2>Your Booking is Confirmed!</h2>
          <p>Thank you for your reservation. We look forward to welcoming you!</p>
        </div>
      )}
    </section>
  );
};

export default BookingSection;
