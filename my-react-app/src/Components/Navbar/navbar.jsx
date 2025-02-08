import './navbar.css';

const Navbar = () => {
    return (
<nav class="navbar">
    <div class="logo">
        <img src ='src/assets/3.png'></img>
    </div>
    <ul>
        <li><a href="#">features</a></li>
        <li><a href="#">timeline</a></li>
        <li><a href="#">about</a></li>
    </ul>
    <div class = "contact-button">
    <a href="#">contact</a>
    </div>
</nav>

        );

}

export default Navbar;