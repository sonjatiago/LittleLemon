// Testimonials.js
import React from 'react';
import { motion } from 'framer-motion';
import { FaStar, FaQuoteLeft } from 'react-icons/fa';
import './Testimonials.css';

const testimonialsData = [
    {
        name: "John Doe",
        feedback: "The food was absolutely amazing! The best dining experience I've had in years.",
        rating: 5,
        role: "Regular Customer",
        date: "March 2024"
    },
    {
        name: "Jane Smith",
        feedback: "Such a cozy atmosphere and the staff were so friendly. Highly recommend!",
        rating: 4,
        role: "Food Enthusiast",
        date: "February 2024"
    },
    {
        name: "Michael Lee",
        feedback: "Delicious meals and excellent service. Little Lemon is my new favorite spot!",
        rating: 5,
        role: "Local Resident",
        date: "March 2024"
    }
];

const StarRating = ({ rating }) => {
    return (
        <div className="star-rating">
            {[...Array(5)].map((_, index) => (
                <FaStar
                    key={index}
                    className={`star ${index < rating ? 'filled' : 'empty'}`}
                    aria-hidden="true"
                />
            ))}
            <span className="sr-only">{rating} out of 5 stars</span>
        </div>
    );
};

const Testimonials = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const cardVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                type: "spring",
                stiffness: 100
            }
        }
    };

    return (
        <section className="testimonials-section">
            <div className="testimonials-container">
                <div className="testimonials-header">
                    <h2 className="testimonials-title">What Our Customers Say</h2>
                    <p className="testimonials-subtitle">
                        Discover why our guests love dining at Little Lemon
                    </p>
                </div>

                <motion.div 
                    className="testimonials-grid"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    {testimonialsData.map((testimonial, index) => (
                        <motion.div 
                            key={index}
                            className="testimonial-card"
                            variants={cardVariants}
                        >
                            <div className="quote-icon">
                                <FaQuoteLeft />
                            </div>
                            
                            <div className="testimonial-content">
                                <StarRating rating={testimonial.rating} />
                                <p className="testimonial-text">
                                    {testimonial.feedback}
                                </p>
                            </div>

                            <div className="testimonial-footer">
                                <div className="testimonial-author">
                                    <div className="author-avatar">
                                        {testimonial.name.charAt(0)}
                                    </div>
                                    <div className="author-info">
                                        <h3 className="author-name">{testimonial.name}</h3>
                                        <p className="author-role">{testimonial.role}</p>
                                        <p className="review-date">{testimonial.date}</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Testimonials;