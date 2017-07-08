const mainNews = (update) => {
    const container = $('<section class="main-news"></section>'),
        wrap = $('<div class="container"></div>'),
        nav = $('<nav class="main-news__navbar row hidden-xs hidden-sm"></nav>'),
        latest = $('<h2></h2>'),
        list = $('<ul class="text-center"><li><a href="#">Lo último</a></li><li><a href="#">Opinión</a></li><li><a href="#">Cultura</a></li><li><a href="#">Perú</a></li><li><a href="#">Tecnología</a></li><li><a href="#">Mundo</a></li><li><a href="#">Economía</a></li><li><a href="#">Lifestyle</a></li><li><a href="#">Deporte</a></li></ul>'),
        news = $('<img class="img-responsive" src="assets/img/news-0.png" alt="news-1">'),
        box = $('<div class="info-box"></div>'),
        title = $('<h3>MIT BUSCA ESTUDIANTES DE TODO EL MUNDO QUE QUIERAN ESTUDIAR GRATIS</h3>'),
        info = $('<p class="hidden-xs hidden-sm">Ya no será necesario ir hasta el campus de MIT para estudiar allá, por medio de su curso gratuito en línea cualquiera podrá hacerlo.</p>');

    container.append(wrap);
    wrap.append(box);
    box.append(title, info);

    $(_ => {
        $('.main-news').click(_ => {

            const user = {
                "author": {
                    name: settings.author.name,
                    picture: settings.author.picture,
                    user: settings.author.user
                },
                "body": settings.body,
                "brief": settings.brief,
                "categories": [settings.categories],
                "img": settings.img,
                "published-date": settings["published-date"],
                "title": settings.title,
                "type": settings.type
            };
            news1(user);
            settings.id = 0;
            update();
        });
    });

    wrap.append(nav);
    wrap.append(news);
    nav.append(list);

    return container;
};

const noticia1 = (titulo, update) => {
    const container = $('<section class="news"></section>'),
        wrap = $('<div class="container"></div>'),
        title = $('<div class="news__article"><h1>EDUCACIÓN</h1></div>'),
        article = $('<article class="article"></article>'),
        head = $('<h2>' + settings.title + '</h2>');

    container.append(wrap);
    wrap.append(title, article);
    article.append(head);
    return container;
};

const news1 = (news) => {
    $.get('api/news/', news, (res, req) => {
        settings.author.name = res[0].author.name;
        settings.author.picture = res[0].author.picture;
        settings.author.user = res[0].author.user;
        settings.body = res[0].body;
        settings.brief = res[0].brief;
        settings.categories = res[0].categories;
        settings.img = res[0].img;
        settings["published-date"] = res[0]["published-date"];
        settings.title = res[0].title;
        settings.type = res[0].type;
    });
};