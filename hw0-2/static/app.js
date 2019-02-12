'use strict';

function main() {
    console.log("tet");
    // language=JQuery-CSS
    $(".tabs a span").toArray().forEach(function (element) {
        var $element = $(element);

        $element.on("click", function () {
            let $content,
                i;

            // language=JQuery-CSS
            $(".tabs a span").removeClass("selectTab");
            $element.addClass("selectTab");
            // language=JQuery-CSS
            $("main .content").empty();

            if ($element.parent().is(":nth-child(1)")) {
                $content = $("<ul>");
                for (i = 0; i < 4; i++) {
                    console.log("success");
                    $content.append($("<li>").text("tet"));
                }
            }
        })
    })
}

$(document).ready(main);