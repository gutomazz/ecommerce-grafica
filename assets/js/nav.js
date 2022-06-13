const createNav = () => {
    let nav = document.querySelector('.navbar');

    nav.innerHTML = `
        <div class="nav">
            <img src="/assets/img/dark-logo.png" class="brand-logo" alt="">
            <div class="nav-items">
                <div class="search">
                    <input type="text" class="search-box" placeholder="pesquisar produtos">
                    <button class="search-btn">pesquisar</button>
                    <a href="#"><img src="/assets/img/user.png" alt=""></a>
                    <a href="#"><img src="/assets/img/cart.png" alt=""></a>
                </div>
            </div>
        </div>
        <ul class="links-container">
            <li class="links-item"><a href="#" class="link">Serviços</a></li>
            <li class="links-item"><a href="#" class="link">Sobre nos</a></li>
            <li class="links-item"><a href="#" class="link">Fale conosco</a></li>
            <li class="links-item"><a href="#" class="link">Portifolio</a></li>
            <li class="links-item"><a href="#" class="link">Localizacao</a></li>
        </ul>
        `;
}

createNav();