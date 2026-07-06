import { useState, useEffect, useContext } from "react";
import "./AboutUs.css";
import DefaultContexts from "../utils/custom_contexts/default_contexts";

const AboutUs = () => {

    //below are the state variables created using useState Hook to update the DOM instantly.

    const [selectedDish, setSelectedDish] = useState(null);
    const [scrollPosition, setScrollPosition] = useState(0);
    const {loggedInUser} = useContext(DefaultContexts);

    //This useEffect will execute after the component get rendered.
    useEffect(() => {
        const handleScroll = () => setScrollPosition(window.scrollY);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Sample best dishes data with images
    const bestDishes = [
        {
            id: 1,
            name: "Signature Biryani",
            description: "Aromatic basmati rice with tender meat",
            image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a104?w=400&h=400&fit=crop",
            rating: 4.8,
            price: "₹280"
        },
        {
            id: 2,
            name: "Butter Chicken",
            description: "Creamy tomato-based curry with tender chicken",
            image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=400&fit=crop",
            rating: 4.9,
            price: "₹320"
        },
        {
            id: 3,
            name: "Paneer Tikka",
            description: "Grilled cottage cheese with Indian spices",
            image: "https://images.unsplash.com/photo-1585937421612-2d073537b1d5?w=400&h=400&fit=crop",
            rating: 4.7,
            price: "₹240"
        },
        {
            id: 4,
            name: "Dal Makhani",
            description: "Creamy lentil curry with aromatic spices",
            image: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=400&h=400&fit=crop",
            rating: 4.6,
            price: "₹180"
        },
        {
            id: 5,
            name: "Tandoori Fish",
            description: "Marinated fish grilled to perfection",
            image: "https://images.unsplash.com/photo-1504674900997-671d36df76db?w=400&h=400&fit=crop",
            rating: 4.8,
            price: "₹350"
        },
        {
            id: 6,
            name: "Naan & Curries",
            description: "Freshly baked bread with delicious curries",
            image: "https://images.unsplash.com/photo-1601050690597-df0aaf4d4d28?w=400&h=400&fit=crop",
            rating: 4.7,
            price: "₹120"
        }
    ];

    // Special offers data
    const offers = [
        {
            id: 1,
            title: "Grand Opening Deal",
            discount: "50% OFF",
            description: "On all appetizers this week",
            validity: "Valid till June 30",
            icon: "🎉"
        },
        {
            id: 2,
            title: "Family Combo",
            discount: "30% OFF",
            description: "On orders above ₹500",
            validity: "Valid till June 30",
            icon: "👨‍👩‍👧‍👦"
        },
        {
            id: 3,
            title: "Loyalty Rewards",
            discount: "FREE ITEM",
            description: "On every 5th order",
            validity: "Ongoing",
            icon: "🎁"
        },
        {
            id: 4,
            title: "Weekend Special",
            discount: "Flat ₹100 OFF",
            description: "On minimum ₹400 order",
            validity: "Saturdays & Sundays",
            icon: "🎊"
        }
    ];

    return (
        <div className="about-us-container">
            {/* Premium Hero Section */}
            <section className="about-hero" style={{ transform: `translateY(${scrollPosition * 0.5}px)` }}>
                <div className="hero-background">
                    <div className="hero-shape-1"></div>
                    <div className="hero-shape-2"></div>
                    <div className="hero-shape-3"></div>
                </div>
                <div className="hero-content">
                    <h1 className="about-title">FlavorStory</h1>
                    <p className="about-subtitle">Where Every Bite Tells a Story of Excellence</p>
                    <div className="hero-cta">
                        <button className="hero-btn primary">Explore Menu</button>
                        <button className="hero-btn secondary">Reserve Now</button>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="stats-section">
                <div className="stats-container">
                    <div className="stat-card">
                        <h3 className="stat-number">10K+</h3>
                        <p className="stat-label">Happy Customers</p>
                    </div>
                    <div className="stat-card">
                        <h3 className="stat-number">200+</h3>
                        <p className="stat-label">Signature Dishes</p>
                    </div>
                    <div className="stat-card">
                        <h3 className="stat-number">15</h3>
                        <p className="stat-label">Expert Chefs</p>
                    </div>
                    <div className="stat-card">
                        <h3 className="stat-number">4.8★</h3>
                        <p className="stat-label">Average Rating</p>
                    </div>
                </div>
            </section>

            {/* Welcome Section */}
            <section className="welcome-section">
                <div className="welcome-wrapper">
                    <div className="welcome-content">
                        <h2 className="section-title">Our Story</h2>
                        <p className="welcome-text">
                            FlavorStory isn't just a restaurant—it's a culinary destination where tradition meets innovation. 
                            Since our inception, we've been committed to delivering experiences that transcend ordinary dining, 
                            creating memories through exquisite flavors and impeccable service.
                        </p>
                        <div className="welcome-highlight">
                            <div className="highlight-item">
                                <span className="highlight-icon">✓</span>
                                <span>Farm-to-Table Excellence</span>
                            </div>
                            <div className="highlight-item">
                                <span className="highlight-icon">✓</span>
                                <span>Award-Winning Cuisine</span>
                            </div>
                        </div>
                    </div>
                    <div className="welcome-image">
                        <div className="image-placeholder">🍽️</div>
                    </div>
                </div>
            </section>

            {/* Core Values Section */}
            <section className="values-section">
                <h2 className="section-title">Our Core Values</h2>
                <div className="values-grid">
                    <div className="value-card">
                        <div className="value-icon">🎯</div>
                        <h3>Excellence</h3>
                        <p>We pursue perfection in every aspect, from ingredient selection to plating artistry.</p>
                    </div>
                    <div className="value-card">
                        <div className="value-icon">🌍</div>
                        <h3>Sustainability</h3>
                        <p>Committed to eco-friendly practices and supporting local farmers and suppliers.</p>
                    </div>
                    <div className="value-card">
                        <div className="value-icon">👥</div>
                        <h3>Community</h3>
                        <p>Building connections through shared culinary experiences and meaningful interactions.</p>
                    </div>
                    <div className="value-card">
                        <div className="value-icon">🚀</div>
                        <h3>Innovation</h3>
                        <p>Constantly evolving our menu and techniques to delight and surprise our guests.</p>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="features-section">
                <h2 className="section-title">Why Choose Us</h2>
                <div className="features-grid">
                    <div className="feature-card">
                        <div className="feature-icon">🌿</div>
                        <h3>Fresh Ingredients</h3>
                        <p>Premium, locally-sourced ingredients for maximum freshness and flavor.</p>
                    </div>
                    <div className="feature-card">
                        <div className="feature-icon">👨‍🍳</div>
                        <h3>Expert Chefs</h3>
                        <p>Renowned culinary masters with decades of combined experience.</p>
                    </div>
                    <div className="feature-card">
                        <div className="feature-icon">⚡</div>
                        <h3>Quick Service</h3>
                        <p>Efficient ordering and preparation without compromising quality.</p>
                    </div>
                    <div className="feature-card">
                        <div className="feature-icon">❤️</div>
                        <h3>Customer Care</h3>
                        <p>24/7 support and personalized attention for every guest.</p>
                    </div>
                </div>
            </section>

            {/* Best Dishes Section */}
            <section className="best-dishes-section">
                <div className="section-header">
                    <h2 className="section-title">Culinary Masterpieces</h2>
                    <p className="section-description">Handpicked creations from our award-winning kitchen</p>
                </div>
                <div className="dishes-grid">
                    {bestDishes.map((dish, index) => (
                        <div 
                            key={dish.id} 
                            className="dish-card premium" 
                            style={{ animationDelay: `${index * 0.1}s` }}
                            onClick={() => setSelectedDish(dish)}
                        >
                            <div className="dish-image-container">
                                <img src={dish.image} alt={dish.name} className="dish-image" />
                                <div className="dish-overlay">
                                    <button className="view-btn">View Details</button>
                                </div>
                                <div className="rating-badge premium">⭐ {dish.rating}</div>
                            </div>
                            <div className="dish-content">
                                <h3 className="dish-name">{dish.name}</h3>
                                <p className="dish-description">{dish.description}</p>
                                <div className="dish-footer">
                                    <span className="dish-price">{dish.price}</span>
                                    <button className="add-to-cart-btn">Add</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Offers Section */}
            <section className="offers-section premium">
                <div className="offers-wrapper">
                    <div className="section-header">
                        <h2 className="section-title">Exclusive Offers</h2>
                        <p className="section-description">Unbeatable deals for our valued guests</p>
                    </div>
                    <div className="offers-grid premium">
                        {offers.map((offer, index) => (
                            <div 
                                key={offer.id} 
                                className="offer-card premium" 
                                style={{ animationDelay: `${index * 0.1}s` }}
                            >
                                <div className="offer-badge">Limited Time</div>
                                <div className="offer-icon">{offer.icon}</div>
                                <h3 className="offer-title">{offer.title}</h3>
                                <div className="offer-discount premium">{offer.discount}</div>
                                <p className="offer-description">{offer.description}</p>
                                <p className="offer-validity">{offer.validity}</p>
                                <button className="claim-offer-btn premium">Claim Now</button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="testimonials-section">
                <h2 className="section-title">Guest Testimonials</h2>
                <div className="testimonials-grid">
                    <div className="testimonial-card">
                        <div className="stars">⭐⭐⭐⭐⭐</div>
                        <p className="testimonial-text">"An absolutely phenomenal dining experience. The flavors are exquisite and the service is impeccable!"</p>
                        <p className="testimonial-author">- Sarah Johnson</p>
                    </div>
                    <div className="testimonial-card">
                        <div className="stars">⭐⭐⭐⭐⭐</div>
                        <p className="testimonial-text">"FlavorStory has set a new standard for fine dining. Every visit is a culinary adventure!"</p>
                        <p className="testimonial-author">- Michael Chen</p>
                    </div>
                    <div className="testimonial-card">
                        <div className="stars">⭐⭐⭐⭐⭐</div>
                        <p className="testimonial-text">"The attention to detail and quality of ingredients is truly outstanding. Highly recommended!"</p>
                        <p className="testimonial-author">- Emma Williams</p>
                    </div>
                </div>
            </section>

            {/* Mission Section */}
            <section className="mission-section premium">
                <div className="mission-wrapper">
                    <div className="mission-content">
                        <h2 className="section-title">Our Mission & Vision</h2>
                        <div className="mission-grid">
                            <div className="mission-item">
                                <h3>Mission</h3>
                                <p>To create unforgettable culinary experiences that celebrate artistry, quality, and innovation while fostering genuine connections with our community.</p>
                            </div>
                            <div className="mission-item">
                                <h3>Vision</h3>
                                <p>To become the most respected fine dining destination, recognized for culinary excellence, sustainability, and exceptional customer care.</p>
                            </div>
                        </div>
                        <div className="values-badges">
                            <span className="value-badge">🏆 Quality</span>
                            <span className="value-badge">🌟 Innovation</span>
                            <span className="value-badge">💚 Sustainability</span>
                            <span className="value-badge">🤝 Community</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Call to Action */}
            <section className="cta-section premium">
                <div className="cta-wrapper">
                    <h2>Join the FlavorStory Experience</h2>
                    <p>Make your next meal unforgettable. Reserve your table or explore our menu today.</p>
                    <div className="cta-buttons">
                        <button className="cta-button primary-btn">Reserve Your Table</button>
                        <button className="cta-button secondary-btn">Browse Menu</button>
                    </div>
                </div>
            </section>

            {/* Modal for dish details */}
            {selectedDish && (
                <div className="modal-overlay" onClick={() => setSelectedDish(null)}>
                    <div className="modal-content premium" onClick={(e) => e.stopPropagation()}>
                        <button className="close-btn" onClick={() => setSelectedDish(null)}>✕</button>
                        <img src={selectedDish.image} alt={selectedDish.name} className="modal-image" />
                        <h2>{selectedDish.name}</h2>
                        <p className="modal-rating">⭐ {selectedDish.rating} Rating</p>
                        <p className="modal-description">{selectedDish.description}</p>
                        <div className="modal-price">{selectedDish.price}</div>
                        <button className="modal-btn">Add to Cart</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default AboutUs;