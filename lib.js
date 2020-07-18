$( document ).ready(function() {
    $.getJSON('data.json', function(data) {
        $( '.wait' ).hide();
        $( '.done-waiting' ).show();
        console.log(data);
    });
});