$(function () {

    /*show pass*/

    var btnShowPass = $('.form__show-pass');

    function showHidePass() {
        btnShowPass.on('click', function(){
            console.log('Відбувся клік');
            var inputBlock = $(this).closest('.form__group').find('.form__input');
            console.log(inputBlock);

            if (inputBlock.attr('type') === 'password') {
                inputBlock.attr('type', 'text');

            } else {
                inputBlock.attr('type', 'password');
               
            }
        });
    }

    showHidePass();




    var btnShowFaq = $('.faq-account__btn');

    btnShowFaq.on('click', function(){
        var parentBlock = $(this).closest('.faq-account__item');

        // Знімаємо клас is-open з усіх інших елементів
        $('.faq-account__item').not(parentBlock).removeClass('is-open');

        parentBlock.toggleClass('is-open');
    });




    /*open account sidebar*/

    $(document).on('click', '.burger__btn--sidebar', function(){
        var sideBar = $('.account__sidebar');
        console.log(sideBar);
        sideBar.toggleClass('is-showed');
    });



});


