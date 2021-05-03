var $links = $(".itemlinks");

$links.click(function (e) {
    $links.removeclass("active");
    var clickedlink = e.target;
    clickedlink = $(clickedlink);
    var position = clickedlink.attr("data-pos");
    var translatevalue = "translate3d("+ position * 25 +"%, 0px, 0)";
    $("#wrapper").css({
        transform: translatevalue
    });

    clickedlink.addclass("active");

});

$($links[0]).addclass("active");