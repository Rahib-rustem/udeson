



 $(' .signinButtona').click(function() {
    $('.signin-register').show();
    $('.signin-register .forma.signin').show();
    $('.signin-register .forma.register').hide();
    $('body').css('overflow', 'hidden');
  
    $('#popups').css({'z-index':'9999'})
    
  });
 



   $(' .signupButtona').click(function() {
    $('.signin-register').show();
    $('.signin-register .forma.register').show();
    $('.signin-register .forma.signin').hide();
    $('body').css('overflow', 'hidden');
    $('#popups').css({'z-index':'9999'})
  });

  // Function to Hide Popup

  $('.signin-register .closea').click(function() {
    $('.signin-register').hide();
    $('.reset-passworda').hide();
    $('body').css('overflow', 'visible');
   
    
  
  });

  // Hide popup when click outside

  var popups = document.getElementById('popups');
  var popupReset = document.getElementById('popupReset');

  window.onclick = function(event) {
    if (event.target == popups) {
        popups.style.display = 'none';
        popupReset.style.display = 'none';
    }
  };

// Main Page Js Finish


// Sign in-Register Js Start

  // Click Tab

  $('.tab.second').click(function() {
    $('.forma.register').hide();
    $('.forma.signin').show();
  });

  $('.tab.first').click(function() {
    $('.forma.signin').hide();
    $('.forma.register').show();
  });

  // Show Password or Hide Password (Sign in)

  $(".toggle-password").click(function() {

    $(this).attr('src', 'assets/image/svg/hidden-eye.svg');
    var input = $($(this).attr("toggle"));
    if (input.attr("type") == "password") {
      input.attr("type", "text");
    } else {
      $(this).attr('src', 'assets/image/svg/visible-eye.svg');
      input.attr("type", "password");
    }
  });

  // Show Password or Hide Password (Register)

  $(".toggle-password2").click(function() {

    $(this).attr('src', 'assets/image/svg/hidden-eye2.svg');
    var input = $($(this).attr("toggle"));
    if (input.attr("type") == "password") {
      input.attr("type", "text");
    } else {
      $(this).attr('src', 'assets/image/svg/visible-eye2.svg');
      input.attr("type", "password");
    }
  });

  // Click Account

  $('#pAccount').click(function() {
    $('.register-businessa').hide();
    $('.register-personala').show();
  });

  $('#bAccount').click(function() {
    $('.register-personala').hide();
    $('.register-businessa').show();
  });

  // Forgot your password?

  $('.signin .forgota').click(function() {
    $('.forma.signin').hide();
    $('.forma.register').hide();
    $('.reset-passworda').show();
  });

  // Register Popup 

  $('.reset-passworda .popup-registra').click(function() {
    $(".forma.register").show();
    $('.reset-passworda').hide();
  });

// Sign in-Register Js Finish


// My Profile Js Start

// Create a photo with user's name and surname (first letters)

  $(document).ready(function(){
    var firstName = $('#firstName').text();
    var lastName = $('#lastName').text();
    var intials = $('#firstName').text().charAt(0) + $('#lastName').text().charAt(0);
    var profileImage = $('#profileImage').text(intials);
  });

// Click profile

  $('.profilea').click( function(event){
    event.stopPropagation();
    $('.profile-looka').toggle();
  });

// Hide User Box when click outside 

  $(document).click( function(){
    $('.profile-looka').hide();
  
  });

// My Profile Js Finish











//  sidebar position 
$('sidebar-wrapper').css({'background': '#DCDCDC'})

$('.sidebar-menu').height($(window).height()-$('header').height()-45);
$(window).scroll(function() {
    if ($(window).scrollTop() > 80 ) {
        $(".sidebar-menu").css({
            'position':'fixed',
            'top':'0',
            'height':'100%'
        })
    }
    if ($(window).scrollTop() < 80 ) {
        $(".sidebar-menu").css({'position':'relative'})
        $('.sidebar-menu').height($(window).height()-$('header').height()-45);
    }
  
});


if($(window).width() < 767){
    $('.sidebar-menu').height($(window).height()-$('header').height()-55);
if ($(window).scrollTop() > 120 ) {
    $(".sidebar-menu").css({
        'position':'fixed',
        'top':'0',
        'width':'100%'
    })
  
}
if ($(window).scrollTop() < 120 ) {
    $(".sidebar-menu").css({'position':'relative'})
    $('.sidebar-menu').height($(window).height());
    $('.sidebar-menu').height($(window).height()-$('header').height()-55);
}
} 


//// sidebar position end









//user setting


$(".icon-check").click(function(){
    $(this).css({'opacity':'1'})
    $(this).siblings().click()
    $(this).parent().siblings().children('.icon-check').css({'opacity':'0'})
 
});



$(window).resize(function(){
    userSettingsHeight();

})

        function userSettingsHeight(){
            let userSettingsMainHeight = $('#user-settings-main .main-content').height()
            $('#sidebar-wrapper').height(userSettingsMainHeight) 
        }

        userSettingsHeight();


          
    $('#user-settings-main .active').click(function(){
       
        $(this).children('.pull-right').toggleClass('user-settings-right-arrow-rotate')
      
       })
      


//user setting end 












//test-quetions


$(document).ready(function () {

    $(window).resize(function(){
        testQuetionHeight();
    
    })

            function testQuetionHeight(){
                let testQuetionsMainHeight = $('#test-quetions-main').height()
                $('#sidebar-wrapper').height(testQuetionsMainHeight-100) 
            }
   
            testQuetionHeight();

    
    
    $('#test-quetions-main .active').click(function(){
       
        $(this).children('#test-quetions-main .pull-right').toggleClass('right-arrow-rotate-quetions')
      
       })
      
     
    
    
    
 
$('.plus').click(function(){
  
    $(this).parent().next('.form-group').css({'display':'block'})
    $(this).siblings('.min').css({'display':'none'})
    $(this).css({'display':'none'})
    testQuetionHeight();
    
})

$('.min').click(function(){
    $(this).parent().prev().children().css({'display':'initial'})
    $(this).parent().css({'display':'none'})
    testQuetionHeight();
})

$('#test-quetions-main .question-content .form-group').last().children('.min').css({'right':'-2%'})

   

$('.quetion').click(function(){

    $(this).siblings('.rows').addClass('circle')

    $(this).parent().siblings().children().removeClass('circle')

})


let count = $('.next-count');
let counter = 1;



$('.add-quetion').click(function(){
    counter ++
  
  
    $('.question-content').append(


        '<div class="form-group quetions-margin-top">'+
        '<label for="subject">Mövzunu Seçin</label>'+
        '<select id="subject" class="select">'+
            '<option>Lorem ipsun dolor</option>'+
        '</select>'+
'</div>'+

'<div class="form-group">'+
        '<label for="subject">Test Yarat</label>'+
        '<input placeholder="Testin adını daxil edin" class="create-test" type="text">'+
'</div>'+

'<div class="form-group">'+
        ' <div  class="quetion quetions-count"><span>'+ counter +'.' +'</span></div>'+
'</div>'+

'<div class="option-content">'+
        '<div class="form-group option-a">'+
                '<a class="rows">A</a>'+
                '<input class="quetion" type="text">'+
                '<a class="plus">+</a>'+
        '</div>'+

        '<div class="form-group option-b">'+
                '<a class="rows">B</a>'+
                '<input class="quetion" type="text">'+
                '<a class="plus">+</a><a class="min">-</a>'+
        '</div>'+

         
        '<div class="form-group option-c">'+
                '<a class="rows">C</a>'+
                '<input class="quetion" type="text">'+
                '<a class="plus">+</a><a class="min">-</a>'+
        '</div>'+
          
        '<div class="form-group option-d">'+
                '<a class="rows">D</a>'+
                '<input class="quetion" type="text">'+
                '<a class="plus">+</a><a class="min">-</a>'+
        '</div>'+

        '<div class="form-group option-e">'+
                '<a class="rows">E</a>'+
                '<input class="quetion" type="text">'+
                '<a class="plus">+</a><a class="min">-</a>'+
        '</div>'+
          
        '<div class="form-group option-f">'+
                '<a class="rows">F</a>'+
                '<input class="quetion" type="text">'+
                '<a class="min">-</a>'+
        '</div>'+
'</div>'


    )

   
$('.plus').click(function(){
  
    $(this).parent().next('.form-group').css({'display':'block'})
    $(this).siblings('.min').css({'display':'none'})
    $(this).css({'display':'none'})
    testQuetionHeight();
    
})

$('.min').click(function(){
    $(this).parent().prev().children().css({'display':'initial'})
    $(this).parent().css({'display':'none'})
    testQuetionHeight();
})

$('#test-quetions-main .question-content .form-group').last().children('.min').css({'right':'-2%'})


$('.quetion').click(function(){

    $(this).siblings('.rows').addClass('circle')
    $(this).parent().siblings().children().removeClass('circle')

})

$('.rows').click(function(){

    $(this).addClass('circle')
    $(this).parent().siblings().children().removeClass('circle') 
    $(this).siblings('input').focus();       
})


testQuetionHeight();


})


$('.rows').click(function(){

    $(this).addClass('circle')
    $(this).parent().siblings().children().removeClass('circle')
    $(this).siblings('input').focus();  
})


});


//test-quetions end





//teather -panel


$(document).ready(function () {

    $(window).resize(function(){
        teacherMainHeight();
    
    })

        function teacherMainHeight(){
            let teacherPanelMainHeight = $('#teacher-main .main-content').height();
            $('#sidebar-wrapper').height(teacherPanelMainHeight);
            $('	#teacher-main .main-content .sidebar-menu').height($(window).height()-$('footer').height()+52);
        }

        teacherMainHeight();

    
    $('.active').click(function(){
    
        $(this).children('.pull-right').toggleClass('right-arrow-rotate-teacher')
      
       })
    
    
    });


//teacher - panel end








// steps 



$( document ).ready(function() {

    $(window).resize(function(){
        stepsHeight();
    
    })
    
    function stepsHeight(){
        let stepsMainHeight = $('#steps-main .main-content').height()
        $('#steps-main #sidebar-wrapper').height(stepsMainHeight)
        
    }

    
   stepsHeight();
   




    $('.next-step-btn-content .step1').click(function() {

       $(this).parent().parent().remove();
        $('.form-controll-2').css({'display':'block'});
        $('.steps .step1').removeClass("active");
        $('.steps .step2').addClass("active");
        stepsHeight();

    })
    $('.next-step-btn-content .step2').click(function() {
        $(this).parent().parent().remove();
        $('.form-controll-3').css({'display':'block'});
        $('.steps .step2').removeClass("active");
        $('.steps .step3').addClass("active");
        stepsHeight();

    })  // steps 





    let addingInput = $('.adding-input')
    $( ".add-description-input" ).click(function() {
        stepsHeight();
       $(this).parent().clone().appendTo(addingInput)
       $(this).parent().clone().hide().$(this);

      
    });

    $( ".description-lang .language" ).before().click(function() {
      
        $(this).remove();
     
     });
    

        $('.active').click(function(){
      
            $(this).children('.pull-right').toggleClass('right-arrow-rotate-steps')
          
           })
          

        

}); // document ready

//steps end












// online courses 


$(".accordion-wrapper-r.showcontent").on('click', '.accordion-category-head-r', function (e) {
       
    $(this).children().toggleClass("active");
 
    $(this).parent().children(".accordion-category-content-r").slideToggle();
}); // accordion content



$( ".more-head-r" ).click(function() {
    $(this).children().children().toggleClass("hide-more");
  });





$(".accordion-wrapper-in.showcontent-in").on('click', '.accordion-category-head-in', function (e) {
       
    $(this).children().toggleClass("active");
 
    $(this).parent().children(".accordion-category-content-in").slideToggle();
});  // accordion content in





// online courses end










// online-resurses


$(document).ready(function() {


    $(".regular").slick({
        dots: false,
        infinite: false,
        slidesToShow: 5,
        slidesToScroll: 5,
        arrows: true,
        speed: 600,
        autoplay:false,
       
        
        responsive: [
          {
            breakpoint: 1200,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 3,
              infinite: true,
              dots: false
            }
          },
          {
            breakpoint: 991,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 2
            }
          },
          {
            breakpoint: 767,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 500,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
          
        ]
      
    
      
      })//slider 1 




      $(".regular2").slick({
        dots: false,
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        arrows: false,
        autoplay:true,
        autoplaySpeed:1400,
        responsive: [
          {
            breakpoint: 1200,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 3,
              infinite: true,
              dots: false,
              speed: 650,
              autoplaySpeed:1600,
            }
          },
          {
            breakpoint: 991,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 2,
              speed: 650,
              autoplaySpeed:1600
            }
          },
          {
            breakpoint: 767,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 500,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
          
        ]
      }); //slider 2
    
    

      $(".partner-slider").slick({
        dots: false,
        speed: 950,
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        arrows: false,
        autoplay:true,
        autoplaySpeed:1700,
        responsive: [
          {
            breakpoint: 1200,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 3,
              infinite: true,
              dots: false
            }
          },
          {
            breakpoint: 991,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 2
            }
          },
          {
            breakpoint: 767,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 500,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
          
        ]
      }); //partner-slider 
    

      })
      

// online-resurses end







//myCourses

$(document).ready(function () {

    $(window).resize(function(){
        myCoursesHeight();
    
    })
    
        function myCoursesHeight(){
            let innerMainHeight = $('#main').height()
            $('#sidebar-wrapper').height(innerMainHeight-$('footer').height())
            
        }

        myCoursesHeight();
       
    
    $('.active').click(function(){
    
        $(this).children('.pull-right').toggleClass('right-arrow-rotate')
      
       })
      
     
    
    
    });
//myCourses end








//exam


$(document).ready(function () {

    $(window).resize(function(){
   
        examHeight();
    })

        function examHeight(){
            let examMainHeight = $('#exam-main').height()
            $('#sidebar-wrapper').height(examMainHeight-100) 
        }
   
   
        examHeight();
   
   
    
    
    $('.active').click(function(){
      
        $(this).children('.pull-right').toggleClass('exam-right-arrow-rotate')
      
       })
      
     

    
    
 

$('.quetion').click(function(){

    $(this).siblings('.rows').addClass('circle')

    $(this).parent().siblings().children().removeClass('circle')

})


let count = $('.next-count');
let counter = 1;



$('.add-quetion').click(function(){
    counter ++
  


   
  


$('.quetion').click(function(){

    $(this).siblings('.rows').addClass('circle')

    $(this).parent().siblings().children().removeClass('circle')

})

$('.rows').click(function(){

    $(this).addClass('circle')
    $(this).parent().siblings().children().removeClass('circle') 
    $(this).siblings('input').focus();       
})


mainContentHeight()



})


$('.rows').click(function(){

    $(this).addClass('circle')
    $(this).parent().siblings().children().removeClass('circle')
    $(this).siblings('input').focus();  
})


});


// exam end









// course- single




$(document).ready(function() {


        
    $( "#main-course-single .element" ).click(function() {
          
        $(this).css({

            'background':'#002147',
            'color':'white'
        })
           
    
        $(this).siblings().css({

            'background':'#F5F5F5',
            'color': 'black'
        })
           
           
       

      });  

      
      $( '#main-course-single .description' ).click(function() {
          
        $('.description-content').css({'display':'block'})      
        $('.description-content').siblings().css({'display':'none'})         

      });


      $( "#main-course-single .Instructor" ).click(function() {
      
        $('.instructor-content').css({'display':'block'})      
        $('.instructor-content').siblings().css({'display':'none'})         

      });
      $( "#main-course-single .reviews" ).click(function() {
      
        $('.reviews-contents').css({'display':'block'})      
        $('.reviews-contents').siblings().css({'display':'none'})         

      });

     



	let showChar = 450;   // text initial view
	let ellipsestext = "...";
	let moretext = "Wiew more";
	let lesstext = "less";
	$('.more').each(function() {
		var content = $(this).html();

		if(content.length > showChar) {

			var c = content.substr(0, showChar);
			var h = content.substr(showChar-1, content.length - showChar);

			var html = c + '<span class="moreellipses">' + ellipsestext+ '&nbsp;</span><span class="morecontent"><span>' + h + '</span>&nbsp;&nbsp;<a href="" class="morelink">' + moretext + '</a></span>';

			$(this).html(html);
		}

	});

	$(".morelink").click(function(){
		if($(this).hasClass("less")) {
			$(this).removeClass("less");
			$(this).html(moretext);
		} else {
			$(this).addClass("less");
			$(this).html(lesstext);
		}
		$(this).parent().prev().toggle();
		$(this).prev().toggle();
		return false;
    });
    
// text Show more






$("#main-course-single .accordion-wrapper.showcontent").on('click', ' .accordion-category-head-small', function (e) {
       
    $(this).children().toggleClass("active");
 
    $(this).parent().children("#main-course-single .accordion-category-content-small").slideToggle();
}); // accordion menu








    function isVisible(elment) {
        var wh = $(window).height(), 
            wst = $(window).scrollTop(), 
            y = $(elment).offset().top+150;
    
        return y <= (wh + wst);
    }
    
    function autoChangePosition(){
        $(window).scroll(function() {
            if (isVisible($('#footer'))) {
               
                $('.fix-content').css('position','absolute');
                $('.fix-content').css('top',($('#footer').offset().top-400) - ($('.fix-content').outerHeight()));
            } 
        });  
    } // auto change position

    







   


    $(window).scroll(function(){

        if ($(window).width()  > 767) {
            if ($(window).scrollTop() > 410){
                $('.fix-content').css({ 
                    'position': 'fixed',
                    'top': '10px',
                    'padding': '7px',
                    'width': '100%'
                   
                
                });
               
                
            }
            if ($(window).scrollTop() < 410){
                $('.fix-content').css({ 
                    'position': 'relative',
                    'top': 'auto'
                  
                
                });
                
            }
        }
    
         



         if ($(window).width()  < 767) {

            if ($(window).scrollTop() > 540){
                $('.fix-content').css({ 
                    'position': 'static'
                    // 'top': '10px',
                    // 'padding': '7px',
                    // 'width': '100%'
                   
                
                });
               
                
            }
            // if ($(window).scrollTop() < 540){
            //     $('.fix-content').css({ 
            //         'position': 'relative',
            //         'top': 'auto'
                  
                
            //     });
                
            // }
    
         }

      })  //  fixed box

  
 $(window).on("load scroll resize",function(e){
    if($(window).width() > 767){
        autoChangePosition();
    }

 })
    
    $(".course-single-slider").slick({
        dots: false,
        infinite: false,
        slidesToShow: 4,
        slidesToScroll: 3,
        arrows: true,
        speed: 600,
        autoplay:false,
       
        
        responsive: [
          {
            breakpoint: 1200,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: false,
              dots: false
            }
          },
          {
            breakpoint: 991,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2
            }
          },
          {
            breakpoint: 767,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 500,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
          
        ]
      
    
      
      })//slider 



});



// course single end













// online live courses

$(".online-live-courses-slider").slick({
    dots: false,
    infinite: false,
    slidesToShow: 5,
    slidesToScroll: 5,
    arrows: true,
    speed: 600,
    autoplay:false,
   
    
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: false,
          dots: false
        }
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      
    ]
  

  
  })//slider
// online live courses end









//sidebar slider





     
  


$(document).ready(function () {
 

   

   

    $("#menu-toggle").click(function () {

        $("#sidebar-wrapper").toggleClass("slidebar-active");
        $(".sidebar-menu").toggleClass("sidebar-position");
       
        $('.slider-elements')[0].slick.refresh()
    });







})

$(document).ready(function () {


    function sidebarSliderMainHeight(){
        let sidebarSliderMainHeight = $('#sidebar-slider-main').height()
        
        $('#sidebar-wrapper').height(sidebarSliderMainHeight);
        $('.sidebar-menu').height($(window).height()-$('footer').height()) 

    }
  
    sidebarSliderMainHeight();



    $(window).resize(function(){
        sidebarSliderMainHeight();
    
    })
    
    
    $('#sidebar-slider-main .active').click(function(){
        $(this).children('#sidebar-slider-main .pull-right').toggleClass('sidebar-slider-right-arrow-rotate')
       })
      
    })



 
 


    $("#sidebar-slider-main .slider-elements ").slick({
        dots: false,
        infinite: false,
        slidesToShow: 4,
        slidesToScroll: 4,
        arrows: true,
        speed: 600,
        autoplay: false,


        responsive: [{
                breakpoint: 1200,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 1090,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 900,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 660,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }

        ]



    }) //slider 

    
//sidebar slider end






















