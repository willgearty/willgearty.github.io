$(document).ready(function() {
    $('a.abstract').click(function() {
        $(this).closest("table").find(".abstract.hidden").toggleClass('open');
    });
    $('a.bibtex').click(function() {
        $(this).parent().parent().find(".bibtex.hidden").toggleClass('open');
    });
});
