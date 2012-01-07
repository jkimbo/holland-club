/*
 * Author: J.Kim
 */
$(document).ready(function() {
    var name;
    var email = {};
    email.body = $('#emailcontent').html();
    email.to = 'example@imperial.ac.uk';
    email.subject = 'Holland Park';

    $('header h1').fitText(1.2, { minFontSize: '30px' });

    var mailLink = $('#mailLink');
    mailLink.fitText(0.6, {}, function() {
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

    var textarea = $('#text #body');
    var subjectfield = $('#subjectcont #subject');
    var emailfield = $('#sendtocont #to');

    $.each([textarea, subjectfield, emailfield], function(index, value) {
        value.click(function() {
            this.select();
        });

        value.keyup(function() {
            email[$(this).attr('id')] = $(this).val();
            setMailTo();
        });
    });

    function showTemplate(name) {
        if(!name) name = 'YOURNAME';
        email.body += name;
        setTemplate();
        setMailTo();
        $('#setName').fadeOut('500', function() {
            $('#template').fadeIn('1000');
            $('html, body').animate({
                    scrollTop: $("#template").offset().top
            }, 1000);
        });
    }

    function setTemplate() {
        textarea.val(email.body);
        subjectfield.val(email.subject);
        emailfield.val(email.to);
    }

    function setMailTo() {
        $('#mailto').attr('href', 'mailto:'+email.to+'?subject='+email.subject+'&body='+escape(email.body));
    }
});

