import './navbar.css';

const Navbar = () => {
    return (
<nav class="navbar">
    <div class="logo">
        <img src ='src/assets/3.png'></img>
    </div>
    <ul>
        <li><a href="#">Features</a></li>
        <li><a href="#">Timeline</a></li>
        <li><a href="#">About</a></li>
    </ul>
    <div class = "contact-button">
    <a href="#">Contact</a>
    </div>
</nav>

        );

}

export default Navbar;