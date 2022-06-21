const createFooter = () => {
    let footer = document.querySelector('footer');
        
    footer.innerHTML = `
        <div class="footer-content">
        <img src="img/white-watch-logo.svg" class="logo" alt="">
        <div class="footer-ul-container">

            <ul class="category">
                <li class="category-title">Watch Categories</li>
                <li><a href="#" class="footer-link">dive</a></li>
                <li><a href="#" class="footer-link">dress</a></li>
                <li><a href="#" class="footer-link">field</a></li>
                <li><a href="#" class="footer-link">pilot</a></li>
                <li><a href="#" class="footer-link">chronograph</a></li>
            </ul>

            <ul class="category">
                <li class="category-title">Watch Accessories</li>
                <li><a href="#" class="footer-link">dive</a></li>
                <li><a href="#" class="footer-link">dress</a></li>
                <li><a href="#" class="footer-link">field</a></li>
                <li><a href="#" class="footer-link">pilot</a></li>
                <li><a href="#" class="footer-link">chronograph</a></li>
            </ul>

        </div>
        
    </div>

    <p class="footer-title">About Company</p>
    <p class="info">This is a website for listing and selling custom watches that I make as a hobby. I hope to add a custom web application on here where you will be able to design your own watch for me to build.</p>
    <div class="footer-social-media">
        <div>
            <a href="#" class="social-link">terms & services</a>
            <a href="#" class="social-link">privacy page</a>
        </div>
        <div>
            <a href="#" class="social-link">instagram</a>
            <a href="#" class="social-link">facebook</a>
            <a href="#" class="social-link">twitter</a>
        </div>
    </div>
    <p class="footer-credit">Beauchemin Watch Company @ 2022</p>
    `;
}

createFooter();