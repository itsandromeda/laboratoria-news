const render = (root) => {
    root.empty();
    const wrapper = $('<div class="wrapper"></div>');
    root.append(wrapper);

    wrapper.append(nav());
    wrapper.append(header());

    if (settings.id === null) {

        wrapper.append(mainNews(_ => {
            render(root);
        }));
    } else if (settings.id === 0) {
        wrapper.append(noticia1(_ => {
            render(root);
        }));
    }
};

const settings = {
    "id": null,
    "author": {
        name: null,
        picture: null,
        user: null
    },
    "body": null,
    "brief": null,
    "categories": [0, 0],
    "img": null,
    "published-date": null,
    "title": null,
    "type": null
};

$(_ => {
    const root = $('#root');
    render(root);
    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        autoplay: false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });
});