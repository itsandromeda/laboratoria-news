const secNews = (update) => {
    const container = $('<section class="sec-news"></section>'),
        wrap = $('<div class="container"></div>'),
        row = $('<div class="sec-news__info row"></div>'),
        box_1 = $('<div class="col-md-6"></div>'),
        box_2 = $('<div class="col-md-3"></div>'),
        box_3 = $('<div class="col-md-3"></div>'),
        news1 = $('<img class="img-responsive" src="assets/img/news-1.png" alt="news-2">'),
        news2 = $('<img class="img-responsive" src="assets/img/news-2.png" alt="news-3">'),
        news3 = $('<img class="img-responsive" src="assets/img/news-3.png" alt="news-4">'),
        title1 = $('<h3>1.	El método de la <span class="primary-color">Universidad de Stanford</span> para mejorar las calificaciones</h3>'),
        title2 = $('<h3>Estas son las mejores <span class="primary-color">tech startups</span> del mundo</h3>'),
        title3 = $('<h3>3.	Voluntarios por la <span class="primary-color">educación</span>, la combinación perfecta</h3>'),
        info = $('<p class="hidden-xs hidden-sm">Ya no será necesario ir hasta el campus de MIT para estudiar allá, por medio de su curso gratuito en línea cualquiera podrá hacerlo.</p>');

    container.append(wrap);
    wrap.append(box_1, box_2, box_3);
    box_1.append(news1);
    box_2.append(news2);
    box_3.append(news3);

    $(_ => {
        $('.sec-news').click(_ => {

            settings.id = 1;
            update();
        });
    });

    return container;
};