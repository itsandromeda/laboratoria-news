const render = (root) => {
    root.empty();
    const wrapper = $('<div class="wrapper"></div>');
    root.append(wrapper);

    wrapper.append(nav());
    wrapper.append(header());
};

const settings = {};

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