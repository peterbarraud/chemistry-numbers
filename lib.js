$( document ).ready(function() {
    var chemistrydata = null;
    var cursor_pos = 0;
    $.getJSON('data.json', function(data) {
        chemistrydata = data;
        $( '.wait' ).hide();
        // https://stackoverflow.com/a/31997858
        $( "#cursor_position" ).val(cursor_pos).trigger("change");
        $( '.done-waiting' ).show();
    });



    $( "#cursor_position" ).change(function() {
        $( '#name').text(chemistrydata[cursor_pos].name);
        $( '#symbol').text(chemistrydata[cursor_pos].symbol);
        $( '#valency').text('Valency: ' + chemistrydata[cursor_pos].valency);
        $( '#atomicnumber').text('Atomic number: ' + chemistrydata[cursor_pos].atomicnumber);
      });

});