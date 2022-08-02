
// estancia o jquery e evita conflitos
// jQuery( function ($){

$(document).ready(function(){
    $('.owl-carousel').owlCarousel();

   let titulos = $('h4') // seletor com tag

  let items =  $('.featured-item') // seletor com classe

    let destaques = $('#produto') // seletor com id

    console.log(titulos.first());

    $('.featured-item a').addClass('btn-dark');

    // $('.featured-item:first h4').start('<span class="badge bg-secondary">Novo</span>')
    // $('.featured-item:first h4').html('<span class="badge bg-secondary">Novo</span>')
    // $('.featured-item:first h4').addClass('active')
    // $('.featured-item:first h4').revoveClass("active")
    // $('.featured-item:first h4').toggleClass('active')
   // $('.featured-item:first h4').hide() para esconder o elemento
    // $('.featured-item:first h4').show() para mostrar o elemento
     // $('.featured-item:first h4').fadeIn(2000) passando um parametro 
      // $('.featured-item:first h4').fadeOut(2000) passando um parametro
       // $('.featured-item:first h4').css('color','#ff0000')passando os atributos dentro de strings
         $('.featured-item h4').dblclick( function(){
         $(this).css({
            'color': '#ff0000', 'background': '#ffaa00','font-size': '1rem'

         });

         $(this).fadeOut(6000)

         $(this).fadeIn(5000)

        })

        })

      /*   .css({
          'color': '#ff0000', 'background': '#ffaa00','font-size': '1rem'
})passando as classes dentro de um objeto consigo alterar mais de um componente css dessa forma*/


//manipulção de eventos

$('.featured-item a').on('click',function(event){

  event.preventDefault()

  alert('produto esgotado')
})

/*

*chamadas callback


*/

$('.featured-item:nth(1)').hide(2000,function(){
  console.log($(this).find('h4').text() + ' esgotado')

})

  .show(2000,function(){
    console.log($(this).find('').text() + ' em estoque')
 
  

  })

/*
*Animaçoes
*/

const duracao = 1000 // equivalente a 1 seg
  $('.featured-item:nth(0)')
  .hide()
  .show()
  .fadeOut(duracao)
  .fadeIn(duracao)
  .toggle(duracao)
  .toggle(duracao)

  $('#submit-bt').on('click',function(e){
    e.preventDefault()


    if($('#email').val()  != '' ){

      $('#email').animate({
        opacity:'hide',
        top:"-50"
        

      },duracao,function(){
        console.log($(this).val())
      })
    }
    
  });

  /* 

    * Ouvinte de eventos   para class .nav-modal-open

  */

  $('.nav-modal-open').on('click', function(e){
    e.preventDefault();

    let element = $(this).attr("rel")

    $('.modal-body').html($("#" + element).html())
    $('.modal-header h5.modal-title').html($(this).text())

    let myModal = new bootstrap.Modal($("#modelId"))

    myModal.show()


  })


  function validate (elem){

    if(elem.val() == ''){

      elem.parent().find('.text-muted').show()

      elem.addClass('invalid')

      return false


    } else{

      elem.parent().find('.text-muted').hide()

      elem.removeClass('invalid')

      return true

    }
  }

  $('body').on('submit', '.modal-body .form',  function(e){

    e.preventDefault()

  
      const inputEmail = $('#email-1')
      const inputName = $('#nome')

      validate(inputEmail)
      validate(inputName)
  
      if(inputEmail.hasClass('invalid') || inputName.hasClass('invalid')){
  
       
  
        return false
      } else{

      $(this).submit()

      }

    })

    
  $('body').on('blur', "#nome", function (){

   validate($(this))


  })



  $('body').on('blur',  "#email-1" ,function(){

   validate($(this))


  })

  $('body').on('focus', '#date',function(){

    $(this).datepicker()
  })

  $('body').on('blur',  "#date", function(e){

     $(this).mask('00/00/0000')

      validate($(this))

  })


  $('body').on('blur', '#hora', function(e){

    validate($(this))

     $(this).mask('00:00') 

  })



  $('body').on('blur', '#cep', function(e){

      validate($(this))

      $(this).mask('000-00-000') 

  })


 

  $('body').on('blur', '#celular', function(e){

    validate($(this))

     $('#celular').mask('00 00000-0000')

  })

  $('body').on('blur', '#cpf', function(){

    validate($(this))

    $(this).mask('000.000.000-00') 

  })




  

 
 
  
  
 
  





  

  


  

  

    






    
