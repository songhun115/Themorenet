$(function(){
    $('.tabcontent > div').hide();
    $('.tabnav a').click(function () {
      $('.tabcontent > div').hide().filter(this.hash).fadeIn();
      $('.tabnav a').removeClass('active');
      $(this).addClass('active');
      return false;
    }).filter(':eq(0)').click();

    $('.tabcontent2 > div').hide();
    $('.tabnav2 a').click(function () {
      $('.tabcontent2 > div').hide().filter(this.hash).fadeIn();
      $('.tabnav2 a').removeClass('active');
      $(this).addClass('active');
      return false;
    }).filter(':eq(0)').click();

    $('.tabcontent3 > div').hide();
    $('.tabnav3 a').click(function () {
      $('.tabcontent3 > div').hide().filter(this.hash).fadeIn();
      $('.tabnav3 a').removeClass('active');
      $(this).addClass('active');
      return false;
    }).filter(':eq(0)').click();

    $('.tabcontent4 > div').hide();
    $('.tabnav4 a').click(function () {
      $('.tabcontent4 > div').hide().filter(this.hash).fadeIn();
      $('.tabnav4 a').removeClass('active');
      $(this).addClass('active');
      return false;
    }).filter(':eq(0)').click();
    $('.tabcontent5 > div').hide();
    $('.tabnav5 a').click(function () {
      $('.tabcontent5 > div').hide().filter(this.hash).fadeIn();
      $('.tabnav5 a').removeClass('active');
      $(this).addClass('active');
      return false;
    }).filter(':eq(0)').click();


    $('.logind').click(function(){
      $('.login-pup').addClass('show');
      $('.popup-bg').addClass('show');
    })
    $('.close-x').click(function(){
      $('.popup').removeClass('show');
      $('.popup-bg').removeClass('show');
    })
    $('.login-pop-btn').click(function(){
      $('.login-confirm-pup').addClass('show');
      $('.login-pup').removeClass('show');
    })
    $('.login-btn').click(function(){
      $('.login-pup').addClass('show');
      $('.popup-bg').addClass('show');
    })
    
    $('.confrim-btn').click(function(){
      $('.popup').removeClass('show');
      $('.popup-bg').removeClass('show');
      
        location.href = 'index-logind.html';
     
    })
    $('.charging-item').click(function(){
      $('.charging-pup').addClass('show');
      $('.popup-bg').addClass('show');
    })
    $('.tab-item').click(function(){
      $('.tab-item-pup').addClass('show');
      $('.popup-bg').addClass('show');
    })
    $('.pup-tab-item').click(function(){
      $('.tab-item-pup-detail').addClass('show');
      $('.tab-item-pup').removeClass('show');
    })
    $('.left-back-mian').click(function(){
      $('.tab-item-pup').removeClass('show');
      $('.popup-bg').removeClass('show');
    })
    $('.history-back').click(function(){
      $('.tab-item-pup-detail').removeClass('show');
      $('.tab-item-pup').addClass('show');
    })
    $('.mycash-item ').click(function(){
      $('.mycash-item-pop').addClass('show');
      $('.popup-bg').addClass('show');
    })
    $('.transfer').click(function(){
      $('.cash-transfer').addClass('show');
      $('.popup-bg').addClass('show');
      $('.mycash-item-pop').removeClass('show');
    })
    $('.brend-item').click(function(){
      location.href = 'product-detail.html';
   });

   $('.search-input-img').click(function(){
    $('.cash-transfer').removeClass('show');
    $('.search-popup').addClass('show');
    $('.popup-bg').addClass('show');
  })
  $('.confrim-btns > div > .yes').click(function(){
    $('.search-popup').removeClass('show');    
    $('.popup-bg').removeClass('show');
  })
  $('.confrim-btns > div > .no').click(function(){
    $('.search-popup').removeClass('show');    
    $('.popup-bg').removeClass('show');
  })
  $('.bonus-item ').click(function(){
    $('.bonus-item-pop').addClass('show');
    $('.popup-bg').addClass('show');
  })
  $('.cash-transform ').click(function(){
    $('.bonus-item-pop').removeClass('show');
    $('.ecosystem-points-pup').addClass('show');
  })

  // if($(window).width() < 768) {
  //   console.log('500미만')
  //   $('.mb-ac').addClass('active');
  // }
  
  
   
});