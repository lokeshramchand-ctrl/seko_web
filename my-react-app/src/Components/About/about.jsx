import './about.css';

const About = () => {
    return (
        <div className="about">
            <h1>About Us</h1>
            <p>
                At SEKO, we believe in creating a world where fresh, high-quality produce reaches your hands directly from the farmers who grow it. By eliminating middlemen, we ensure fair pricing for farmers and fresher, healthier products for you.

                Our mission is simple yet impactful:

                Empowering Farmers: Giving them a fair platform to showcase their hard work and earn what they truly deserve.
                Delivering Freshness: Providing consumers with produce that is fresher, healthier, and sustainably sourced.
                Building Trust: Fostering a transparent and direct connection between producers and consumers.
                Through SEKO, we’re not just delivering products – we’re cultivating relationships, supporting local communities, and redefining the way you experience food.
            </p>
            <div className="about-border">
                <div className="about-image">
                    <img src="src/assets/6.jpg" alt="About Us" />
                </div>
            </div>
        </div>
    );
};

export default About;
