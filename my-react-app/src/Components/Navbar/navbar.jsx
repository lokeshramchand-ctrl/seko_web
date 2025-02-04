import './navbar.css';

const Navbar = () => {
    return (
<nav class="navbar">
    <div class="logo">MyLogo</div>
    <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Services</a></li>
    </ul>
    <div class = "contact-button">
    <a href="#">Contact</a>
    </div>
</nav>

        );

}

export default Navbar;