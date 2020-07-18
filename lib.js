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
    // f (first)
    $( '#first' ).click(function(){
        $( "#cursor_position" ).val(0).trigger("change");
    });
    // n (next)
    $( '#next' ).click(function(){
        cursor_pos += 1;
        $( "#cursor_position" ).val(cursor_pos).trigger("change");
    });
    // l (last)
    $( '#last' ).click(function(){
        cursor_pos = chemistrydata.length - 1;
        $( "#cursor_position" ).val(cursor_pos).trigger("change");
    });
    // p (previous)
    $( '#prev' ).click(function(){
        cursor_pos -= 1;
        $( "#cursor_position" ).val(cursor_pos).trigger("change");
    });



    $( "#cursor_position" ).change(function() {
        cursor_pos = parseInt($( "#cursor_position" ).val());
        $( '#name').text(chemistrydata[cursor_pos].name);
        $( '#symbol').text(chemistrydata[cursor_pos].symbol);
        $( '#valency').text('Valency: ' + chemistrydata[cursor_pos].valency);
        $( '#atomicnumber').text('Atomic number: ' + chemistrydata[cursor_pos].atomicnumber);
        // some easy formatting
        $( '#first, #prev' ).prop('disabled', cursor_pos === 0);
        $( '#next, #last' ).prop('disabled', cursor_pos === chemistrydata.length - 1);
      });

});