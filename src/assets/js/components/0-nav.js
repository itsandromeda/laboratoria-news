const nav = () => {
    const container = $('<nav class="nav"></nav>'),
        wrap = $('<div class="container"></div>'),
        sectionsDiv = $('<div class="nav__action row"></div>'),
        right_block = $('<div class="col-xs-2 col-md-6"></div>'),
        left_block = $('<div class="col-xs-10 col-md-6"></div>'),
        menu_small = $('<a href="#"><i class="fa fa-bars hidden-md hidden-lg"></i>'),
        menu = $('<a class="hidden-xs" href="#"><i class="fa fa-bars"></i><span>SECTIONS</span><a/>'),
        search = $('<a class="hidden-xs" href="#"><i class="fa fa-search"></i><span>SEARCH</span></a>'),
        fb = $('<a class="hidden-xs" href="#"><i class="fa fa-facebook"></i><a>'),
        twitter = $('<a class="hidden-xs" href="#"><i class="fa fa-twitter"></i><a>'),
        linkedin = $('<a class="hidden-xs" href="#"><i class="fa fa-linkedin"></i><a>'),
        logo = $('<img class="img-responsive hidden-md hidden-lg" src="assets/img/logoicon.png" alt="logo">');

    container.append(wrap);
    wrap.append(sectionsDiv);
    sectionsDiv.append(left_block, right_block);
    sectionsDiv.append(logo);
    left_block.append(menu, search);
    right_block.append(fb, twitter, linkedin);
    right_block.append(menu_small);

    return container;
};

const header = () => {
    const container = $('<header class="header hidden-xs hidden-sm"></header>'),
        wrap = $('<div class="container"></div>'),
        title = $('<div class="row header__title text-center"></div>'),
        logo = $('<img class="img-responsive center-block hidden-sx hidden-sm" src="assets/img/logoicon.png" alt="logo">'),
        weather_text = $('<p>Lunes, Junio 12 de 2017 | <img src="assets/img/cloud.png"> 22º</p>');

    container.append(wrap);
    wrap.append(title);
    title.append(logo, weather_text);

    return container;
};