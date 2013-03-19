
var index = {
    initialize: function () {

        $("#container").isotope({
            layoutMode: "masonry",
            columnWidthInteger: 220,
            itemSelector: '.element',

        }, function ($items) {
            var id = this.attr('id'),
                len = $items.length;
            console.log('Isotope has filtered for ' + len + ' items in #' + id);
        });

    }
}



$(function () {
    var stepHeight = -1;

    $(".element").each(function () {
        if (stepHeight < 0) stepHeight = $(this).outerHeight();
        $(this).height(function (i, h) {
            return (stepHeight * Math.ceil($(this).outerHeight() / stepHeight));
            //return Math.ceil(($(this).outerHeight() * 100) / 100);
        }, $(this).outerHeight());

    });

    index.initialize();


});