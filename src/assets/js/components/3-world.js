const world = (update) => {
    const container = $('<section class="world"></section>'),
        wrap = $('<div class="container"></div>'),
        row = $('<div class="row"></div>'),
        mainTitle = $('<div class="world__main-title><h2>MUNDO</h2></div>'),
        box_1 = $('<div class="col-md-2"></div>'),
        box_2 = $('<div class="col-md-8"></div>'),
        box_2_1 = $('<div class="col-md-4"></div>'),
        box_2_2 = $('<div class="col-md-4"></div>'),
        box_2_3 = $('<div class="col-md-12"></div>'),
        box_2_4 = $('<div class="col-md-12"></div>'),
        box_3 = $('<div class="col-md-2"></div>'),
        innerbox_1 = $('<div class="world__inner"></div>'),
        innerbox_2_1 = $('<div class="world__inner col-md-4"></div>'),
        innerbox_2_2 = $('<div class="world__inner col-md-4"></div>'),
        innerbox_2_3 = $('<div class="world__inner col-md-12"></div>'),
        innerbox_2_4 = $('<div class="world__inner col-md-12"></div>'),
        innerbox_3 = $('<div class="world__inner"></div>'),
        news1 = $('<img class="img-responsive" src="assets/img/news-4.png" alt="news-2">'),
        news2 = $('<img class="img-responsive" src="assets/img/news-5.png" alt="news-5">'),
        news3 = $('<img class="img-responsive" src="assets/img/news-6.png" alt="news-6">'),
        news4 = $('<img class="img-responsive" src="assets/img/news-7.png" alt="news-7">'),
        news5 = $('<img class="img-responsive" src="assets/img/news-8.png" alt="news-8">'),
        news6 = $('<img class="img-responsive" src="assets/img/news-9.png" alt="news-9">'),
        title1 = $('<p class="primary-color">Titulo noticia</p><p>laboratoria</p>'),
        title2 = $('<p class="primary-color">Titulo noticia</p><p>laboratoria</p>'),
        title3 = $('<p>Titulo noticia</p><p>laboratoria</p>'),
        title4 = $('<p>Titulo noticia laboratoria</p><p>newspaper</p>'),
        title5 = $('<p><span class="primary-color">Titulo</span> noticia laboratoria</p><p>newspaper</p>'),
        title6 = $('<p>Titulo noticia</p><p>laboratoria</p>'),
        label1 = $('<div class="label">HOY</div>'),
        label2 = $('<div class="label">HOY</div>');

    container.append(wrap);
    wrap.append(mainTitle);
    wrap.append(row);
    box_1.append(innerbox_1, label1);
    box_2_1.append(innerbox_2_1);
    box_2_2.append(innerbox_2_2);
    box_2_3.append(innerbox_2_3);
    box_2_4.append(innerbox_2_4);
    box_2.append(box_2_1, box_2_2, box_2_3, box_2_4);
    box_3.append(innerbox_3);
    innerbox_1.append(news1, title1);
    box_2_1.append(news2);
    box_2_2.append(news3);
    box_2_3.append(news4);
    box_2_4.append(news5);
    innerbox_3.append(news3, title6);
    row.append(box_1, box_2, box_3);

    $(_ => {
        $('.sec-news').click(_ => {
            settings.id = 2;
            update();
        });
    });

    return container;
};