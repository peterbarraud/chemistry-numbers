$( document ).ready(function() {
    var chemistrydata = null;
    var cursor_pos = 0;
    $.getJSON('data.json', function(data) {
        chemistrydata = data;
        $( '.wait' ).hide();
        // https://stackoverflow.com/a/31997858
        $( "#cursor_position" ).val(cursor_pos).trigger("change");
        $( '.done-waiting' ).show();
        showversion();
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
        $( '#symbol').text("Symbol: " + chemistrydata[cursor_pos].symbol);
        $( '#valency').text('Valency: ' + chemistrydata[cursor_pos].valency);
        $( '#atomicnumber').text('Atomic number: ' + chemistrydata[cursor_pos].atomicnumber);
        // some easy formatting
        if (cursor_pos === 0){
            $( '#first, #prev' ).prop('disabled', true).removeClass('enable-button').addClass('disable-button');
            $( '#last, #next' ).prop('disabled', false).removeClass('disable-button').addClass('enable-button');
        } else if (cursor_pos === chemistrydata.length - 1){
            $( '#first, #prev' ).prop('disabled', false).removeClass('disable-button').addClass('enable-button');
            $( '#last, #next' ).prop('disabled', true).removeClass('enable-button').addClass('disable-button');

        } else {
            $( '#first, #prev, #last, #next' ).prop('disabled', false).removeClass('disable-button').addClass('enable-button');

        }
      });

});

showversion = () => {
    if (window.location.href.split("?")[1]){
        queryparts = window.location.href.split("?")[1].split('&');
        $.each(queryparts, function(_, querypart){
            if (querypart === 'showversion'){
                $( '#version' ).text($('meta[name=version]').attr("content"));
            }
        })
    }
}