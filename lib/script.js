$(document).ready(function(){

    $('.contato-wpp').click('submit', function(){
        const nomeCurso = $(this).closest('.card').find('h5').text();
        $('#cursoEscolhido').text(`Olá! Estou interessado no curso de ${nomeCurso}.`);
    });

    var digitos =  {
        onChange: function(tel){
           var masks = ['(00) 0000-0000  0', '(00) 00000-0000'];
           var mask = (tel.length>14) ? masks[1] : masks[0];
         
           $('#telefone-modal').mask(mask, digitos);  
       }
    };

    $('#contato-via-wpp').validate({
        rules: {
            telefone: {required: true, minlength: 14},
            email: {required: true, email: true}
        },
        messages: {
            telefone: 'Por favor, digite seu telefone',
            email: 'Por favor, digite seu e-mail'
        }

    });


});