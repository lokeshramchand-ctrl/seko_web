import './footer.css';

const Footer = () => {
    return (
        <div class = "footer-container">
            <div class = "footer-logo">
                <img src = 'src/assets/3.png'></img>
                </div>
                <div class = "footer-merge">

            <div class = "footer-email">
                <h1>Request Early Access</h1>
                <form>
                    <input type = "email" placeholder = "Email Address"></input>
                </form>
        </div>
        <div class = "footer-pages">
            <h1>Quick Links</h1>
            <a href = "#">About Us</a>
            <a href = "#">Contact Us</a>
            <a href = "#">Blog</a>
            <a href = "#">Privacy Policy</a>
            <a href = "#">Terms</a>
        </div>
        <div class = "footer-connect">
            <h1>Connect</h1>
            <a href = "#">Facebook</a>
            <a href = "#">Twitter</a>
            <a href = "#">Instagram</a>
            <a href = "#">LinkedIn</a>
        </div>
        </div>
        </div>
        );
}

export default Footer;