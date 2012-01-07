/*
 * Author: J.Kim
 */
$(document).ready(function() {
    var name;
    var email = $('#emailcontent').html();

    $('header h1').fitText(1.2, { minFontSize: '30px' });

    var mailLink = $('#mailLink');
    mailLink.fitText(0.6, {}, function() {
        console.log(mailLink.height());
        //$('#name').height(mailLink.height());
    });
    $('#name').fitText(0.8);

    mailLink.click(function() {
        name = $('#name').val();
        showTemplate(name);
        return false;
    });

    $('#showTemplate').click(function() {
        showTemplate();
        return false;
    });

    function showTemplate(name) {
        if(!name) name = 'YOURNAME';
        email += name;
        $('#template textarea').val(email);
        $('#setName').fadeOut('500', function() {
            $('#template').fadeIn('1000');
            $('html, body').animate({
                    scrollTop: $("#template").offset().top
            }, 1000);
        });
    }
});

