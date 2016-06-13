// JavaScript Document

$(document).ready(function(){
						   
	if($(window).width() < 1025)
	{
		$(".sharediv").css({right:"125px"});
		$(".oLinks").css({"paddingRight":"124px"});
		
	}
	$(".allcon").css({overflow:"hidden"});
	$(".allcon1").css({overflow:"hidden"});	
	$(".allcon2").css({overflow:"hidden"});	
	$(".allcon3").css({overflow:"hidden"});	

    $("ul.menu li").each(function()         
          {
        $(this).mouseenter(function(){
			if(!$(".nav").is(":visible"))
			{
            	$(".nav").slideDown("slow");
			}

});


});

$(".topNavigation").mouseleave(function(){
if($(".nav").is(":visible"))
{
$(".nav").slideUp("slow");
}
});

	$(".allcon").mouseenter(function(){
		$(this).css({overflow:"auto"});
		$(this).children("div.member1").children(".memberhover").show();
		$(this).stop().animate({height:"178px", width:"304px"},200);
		$(this).children("a").hide();
		return false;
	})
	
	
	$(".allcon").mouseleave(function(){
		$(this).css({overflow:"hidden"});					
		$(this).stop().animate({height:"78px", width:"304px" },200);
		$(this).children("a").show();
		$(this).children("div.member1").children(".memberhover").hide();
		return false;
	})
	
	
	
	
	$(".allcon1").mouseenter(function(){
		$(this).css({overflow:"auto"});
		$(this).children("div.member2").children(".eventhover").show();
		$(this).stop().animate({height:"178px", width:"304px"},200);
		$(this).children("a").hide();
		return false;
	})
	
	
	$(".allcon1").mouseleave(function(){
		$(this).css({overflow:"hidden"});					
		$(this).stop().animate({height:"78px", width:"304px" },200);
		$(this).children("a").show();
		$(this).children("div.member2").children(".eventhover").hide();
		return false;
	})
	
	$(".allcon2").mouseenter(function(){
		$(this).css({overflow:"auto"});
		$(this).children("div.member3").children(".chamberhover").show();
		$(this).stop().animate({height:"178px", width:"304px"},200);
		$(this).children("a").hide();
		return false;
	})
	
	
	$(".allcon2").mouseleave(function(){
		$(this).css({overflow:"hidden"});					
		$(this).stop().animate({height:"78px", width:"304px" },200);
		$(this).children("a").show();
		$(this).children("div.member3").children(".chamberhover").hide();
		return false;
	})

	
	
	
	$(".allcon3").mouseenter(function(){
		$(this).css({overflow:"hidden", left:"739px", width:"304px"});
		$(".member4").css({background:'url("assets/js/email_right_shadow.png") repeat-y scroll left top transparent'})
		$(this).children("div.member4").children(".emailshover").show();
		$(this).stop().animate({height:"330px"},200);
		$(this).children("a").hide();
		return false;
	})
	
	
	$(".allcon3").mouseleave(function(){
		$(this).css({overflow:"hidden", left:"750px", width:"304px" });	
		$(".member4").css({background:"#fff"})
		$(this).stop().animate({height:"78px"},300);
		$(this).children("a").show();
		$(this).children("div.member4").children(".emailshover").hide();
		return false;
	})
	
	
	
	
	



/*
$(".allcon").hover(
  function () {
closeOther("allcon");
  if($(this).height() == 82){
    $(this).animate({height:"162px"},500);
     $(this).children("a").hide();
      $(this).children("div.member1").show();
  
    
    
    }
  }, 
  function () {
  if($(this).height() == 162){
    $(this).animate({height:"82px"},500);
    $(this).children("a").show();
    $(this).children("div.member1").hide();
    
    
    }
  }
);


$(".allcon1").hover(
  function () {
closeOther("allcon1");
  if($(this).height() == 82){
    $(this).animate({height:"162px"},500);
    $(this).children("a").hide();
   $(this).children("div.member2").show();
    
    
    }
  }, 
  function () {
  if($(this).height() == 162){
    $(this).animate({height:"82px"},500);
        $(this).children("a").show();
    $(this).children("div.member2").hide();
    }
  }
);

$(".allcon2").hover(
  function () {
closeOther("allcon2");
  if($(this).height() == 82){
    $(this).animate({height:"162px"},500);
     $(this).children("a").hide();
   $(this).children("div.member3").show();
    
    
    }
  }, 
  function () {
  if($(this).height() == 162){
    $(this).animate({height:"82px"},500);
         $(this).children("a").show();
    $(this).children("div.member3").hide();
    }
  }
);

$(".allcon3").hover(
  function () {
closeOther("allcon3");
  if($(this).height() == 82){
  $(".allcon3").css('bottom', '25px').css('left', '752px'); 
    $(this).animate({height:"298"},500);
   $(this).children("a").hide();
      $(this).children("div.member4").show();
      
     //$(".allcon3").css({"width" : "250px;", "left" : "752px;"});

    
    }
  }, 
  function () {
  if($(this).height() == 298){
  $(".allcon3").css('bottom', '25px').css('left', '764px');
    $(this).animate({height:"82px"},500);
        $(this).children("a").show();
    $(this).children("div.member4").hide();
    
    }
  }
);

function closeOther(claName)
{
  if(claName != "allcon")
  {
    $(".allcon").animate({height:"82px"},500);
    $(".allcon").children("a").show();
      $(this).children("div.member1").hide();
  } 

if(claName != "allcon1")
{
  $(".allcon1").animate({height:"82px"},500);
  $(".allcon1").children("a").show();
  $(".allcon1").children("div.member2").hide();
} 

if(claName != "allcon2")
{
  $(".allcon2").animate({height:"82px"},500);
  $(".allcon2").children("a").show();
  $(".allcon2").children("div.member3").hide();
}

if(claName != "allcon3")
{
  $(".allcon3").animate({height:"82px"},500);
  $(".allcon3").children("a").show();
  $(".allcon3").children("div.member4").hide();
} 
      
}*/



//$(".slideMenu ul li").mouseenter(function() {


//  $(".slideMenu ul li").animate({height:"200px"},500);
  //$(this).find("div.memberDetails").animate({height:"200px"},2000);
//}); 

//$(".slideMenu ul li").mouseleave(function() {
// $(".slideMenu ul li").animate({height:"82px"},500);

  //$(this).find("div.memberDetails").animate({height:"0"},2000);;
//});

$('.wrapper').click(function(event){
    event.stopPropagation();
 });

	$(".header").each(function(){
	
		$(this).click(function(){
			
			var isOpen = $(this).hasClass("active");
			if(isOpen)
			{
			    $(".haccordion").animate({"width":"50px"}, 500)
				$(".calendar").animate({"width":"38px"}, 500)
				$(".content", this).animate({"width":"38px"}, 500)
				$(this).removeClass("active");
				
			}
			else
			
			{
			
			
			    $(".haccordion").animate({"width":"198px"}, 500)
				$(".calendar").animate({"width":"198px"}, 500)
				$(".content", ".active").animate({"width":"38px"}, 500)
				$(".active").removeClass("active");
				$(".content", this).animate({"width":"198px"}, 500)
				$(this).addClass("active");
				
			}
		
		})
		
	})

});
