import React from 'react';

const testimonialsData = [
    {
        name: "John Doe",
        feedback: "The food was absolutely amazing! The best dining experience I've had in years.",
        rating: 5,
    },
    {
        name: "Jane Smith",
        feedback: "Such a cozy atmosphere and the staff were so friendly. Highly recommend!",
        rating: 4,
    },
    {
        name: "Michael Lee",
        feedback: "Delicious meals and excellent service. Little Lemon is my new favorite spot!",
        rating: 5,
    },
];

const StarRating = ({ rating }) => {
    return (
        <div className="star-rating">
            {[...Array(5)].map((_, index) => (
                <span key={index} className={index < rating ? "star filled" : "star"}>
                    ★
                </span>
            ))}
        </div>
    );
};

const Testimonials = () => {
    return (
        <section className="testimonials-section">
            <h2>What Our Customers Say</h2>
            <div className="testimonials-container">
                {testimonialsData.map((testimonial, index) => (
                    <div className="testimonial-card" key={index}>
                        <StarRating rating={testimonial.rating} />
                        <p className="feedback">"{testimonial.feedback}"</p>
                        <p className="customer">- {testimonial.name}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Testimonials;