
//
//$('#header').mouseenter(function(){
//$('#header .nav1').css("display","block");
//
//});
//$('.nav').mouseleave(function(){
//$('#header .nav1').css("display","none");
//
//});
var fadeObj={
	flashNode:$('#center01'),
	lisNode:$("#center01 li"),
	spansNode:$("#center01 .flash_btn span"),
	leftNode:$('#flash_left'),
	rightNode:$('#flash_right'),
	spanCurString:'#center01 .flash_btn .current',
	spanCurName:"current",
	fadeInOut:function(oldPos,curPos){
		fadeObj.spansNode.eq(oldPos).removeClass();
		fadeObj.spansNode.eq(curPos).addClass(fadeObj.spanCurName);
		
		fadeObj.lisNode.eq(oldPos).stop(false,true).fadeOut();
		fadeObj.lisNode.eq(curPos).stop(false,true).fadeIn();
	},
	autoDo:null
};
fadeObj.flashNode.hover(
	function(){//移入
		fadeObj.leftNode.show();
		fadeObj.rightNode.show();
		window.clearInterval(fadeObj.autoDo);
	},
	function(){//移出
		fadeObj.leftNode.hide();
		fadeObj.rightNode.hide();
		fadeObj.autoDo=window.setInterval(function(){
			fadeObj.rightNode.click();
		},3000);
	}
);

fadeObj.spansNode.mouseenter(function(){
	if($(this).is("."+fadeObj.spanCurName))
	{
		return;
	}
	
	var oldPos=$(fadeObj.spanCurString).index();
	var curPos=$(this).index();
	
	fadeObj.fadeInOut(oldPos,curPos);
});

fadeObj.rightNode.click(function(){
	var oldPos=$(fadeObj.spanCurString).index();
	var lastPos=fadeObj.spansNode.length-1;
	var curPos=oldPos==lastPos?0:oldPos+1;
	
	fadeObj.fadeInOut(oldPos,curPos);
});
fadeObj.leftNode.click(function(){
	var oldPos=$(fadeObj.spanCurString).index();
	var lastPos=fadeObj.spansNode.length-1;
	var curPos=oldPos==0?lastPos:oldPos-1;
	
	fadeObj.fadeInOut(oldPos,curPos);
});
if(fadeObj.length!=0){
fadeObj.autoDo=window.setInterval(function(){
	fadeObj.rightNode.click();
},5000);
}

//产品页

$('.cp-2-left dd:eq(0)').click(function(){
	$(this).addClass('cp-2-current').siblings('dd').removeClass('cp-2-current');
	$('#otabs ul:eq(0) li:eq(0)').removeClass('hide').siblings('li').addClass('hide');
});

$('.cp-2-left dd:eq(1)').click(function(){
	$(this).addClass('cp-2-current').siblings('dd').removeClass('cp-2-current');
	$('#otabs ul:eq(0) li:eq(1)').removeClass('hide').siblings('li').addClass('hide');
});

$('.cp-2-left dd:eq(2)').click(function(){
	$(this).addClass('cp-2-current').siblings('dd').removeClass('cp-2-current');
	$('#bb').removeClass('hide').siblings('li').addClass('hide');
});


/*关于未来页*/
$('.about-left dd:eq(0)').click(function(){
	$(this).addClass('cp-2-current').siblings('dd').removeClass('cp-2-current');
	$('#about ul:eq(0) li:eq(0)').removeClass('hide').siblings('li').addClass('hide');
});

$('.about-left dd:eq(1)').click(function(){
	$(this).addClass('cp-2-current').siblings('dd').removeClass('cp-2-current');
	$('#about ul:eq(0) li:eq(1)').removeClass('hide').siblings('li').addClass('hide');
});

$('.about-left dd:eq(2)').click(function(){
	$(this).addClass('cp-2-current').siblings('dd').removeClass('cp-2-current');
	$('#cc').removeClass('hide').siblings('li').addClass('hide');
});

$('.about-left dd:eq(3)').click(function(){
	$(this).addClass('cp-2-current').siblings('dd').removeClass('cp-2-current');
	$('#ee').removeClass('hide').siblings('li').addClass('hide');
});


$('.about-right-02-ul li').mouseenter(function(){
	$(this).css({'background-color':'#49D99C','cursor': 'pointer'});
	$(this).children('span').css('color','#fff');
	$(this).children('img').css({'border-radius':'50%','transition':'0.5s linear'});
})

$('.about-right-02-ul li').mouseleave(function(){
	$(this).css({'background-color':'','cursor': 'pointer'});
	$(this).children('span').css('color','');
	$(this).children('img').css('border-radius','');
})

$('.about-right-04-mc').mouseenter(function(){
	$(this).css({'background':'rgba(0,0,0,0.7)','cursor': 'pointer'});
	$(this).children('span').css({'margin':'30px 0 0 0px','transition':'0.5s linear'})
})
$('.about-right-04-mc').mouseleave(function(){
	$(this).css({'background':'rgba(0,0,0,0.3)','cursor': ''});
	$(this).children('span').css({'margin':'','transition':'0.5s linear'})
})


/*解决方案页*/

$('.jjfa-content-left dd:eq(0)').click(function(){
	$(this).addClass('cp-2-current').siblings('dd').removeClass('cp-2-current');
	$('#JJFA ul:eq(0) li:eq(0)').removeClass('hide').siblings('li').addClass('hide');
	$('#jjfa-right-01').removeClass('hide').siblings('li').addClass('hide');
});

$('.jjfa-content-left dd:eq(1)').click(function(){
	$(this).addClass('cp-2-current').siblings('dd').removeClass('cp-2-current');
	$('#JJFA ul:eq(0) li:eq(1)').removeClass('hide').siblings('li').addClass('hide');
	$('#jjfa-right-02').removeClass('hide').siblings('li').addClass('hide');
});

$('.jjfa-content-left dd:eq(2)').click(function(){
	$(this).addClass('cp-2-current').siblings('dd').removeClass('cp-2-current');
	$('#JJFA ul:eq(0) li:eq(2)').removeClass('hide').siblings('li').addClass('hide');
	$('#jjfa-right-03').removeClass('hide').siblings('li').addClass('hide');
});

$('.jjfa-content-left dd:eq(3)').click(function(){
	$(this).addClass('cp-2-current').siblings('dd').removeClass('cp-2-current');
	$('#JJFA ul:eq(0) li:eq(3)').removeClass('hide').siblings('li').addClass('hide');
	$('#jjfa-right-04').removeClass('hide').siblings('li').addClass('hide');
});



$('.jjfa-content-right-01 ul:eq(0) li').mouseenter(function(){
	$(this).css({'background':'rgba(0,0,0,0.5)','cursor':'pointer','color':'#fff'});
	$(this).children('span').css('border','dashed 5px #007AFF');
	$(this).children('span').children('img').css({'border-radius':'50%','-webkit-transform':'rotate(360deg)','transition':'0.5s linear'});
})
$('.jjfa-content-right-01 ul:eq(0) li').mouseleave(function(){
	$(this).css({'background':'','cursor':'','color':''});
	$(this).children('span').css('border','');
	$(this).children('span').children('img').css({'border-radius':'','-webkit-transform':'','transition':'0.5s linear'});
})


$('.jjfa-content-right-01 ul:eq(1) li').mouseenter(function(){
	$(this).css({'background':'#49d99c','cursor':'pointer','color':'#fff'});
	$(this).children('img').css({'width':'110%','height':'260px','margin':'-15px 0 0 -20px','transition':'0.5s linear'});
	$(this).children('span').css({'border':'dashed 2px #007AFF','background':'#ffffff','color':'#49d99c','-webkit-transform':'rotate(360deg)','transition':'0.5s linear'});
	
})
$('.jjfa-content-right-01 ul:eq(1) li').mouseleave(function(){
	$(this).css({'background':'','cursor':'','color':''});
	$(this).children('img').css({'width':'','height':'','margin':'','transition':''});
	$(this).children('span').css({'border':'','background':'','color':'','-webkit-transform':'','transition':'0.5s linear'});
	
})



$('.jjfa-content-right-02 ul:eq(0) li').mouseenter(function(){
	$(this).css({'background':'rgba(0,0,0,0.5)','cursor':'pointer','color':'#fff'});
	$(this).children('span').css('border','dashed 5px #007AFF');
	$(this).children('span').children('img').css({'border-radius':'50%','-webkit-transform':'rotate(360deg)','transition':'0.5s linear'});
})
$('.jjfa-content-right-02 ul:eq(0) li').mouseleave(function(){
	$(this).css({'background':'','cursor':'','color':''});
	$(this).children('span').css('border','');
	$(this).children('span').children('img').css({'border-radius':'','-webkit-transform':''});
})


$('.jjfa-content-right-02 ul:eq(1) li').mouseenter(function(){
	$(this).css({'background':'#49d99c','cursor':'pointer','color':'#fff'});
	$(this).children('img').css({'width':'110%','height':'260px','margin':'-15px 0 0 -20px','transition':'0.5s linear'});
	$(this).children('span').css({'border':'dashed 2px #007AFF','background':'#ffffff','color':'#49d99c','-webkit-transform':'rotate(360deg)','transition':'0.5s linear'});
	
})
$('.jjfa-content-right-02 ul:eq(1) li').mouseleave(function(){
	$(this).css({'background':'','cursor':'','color':''});
	$(this).children('img').css({'width':'','height':'','margin':'','transition':''});
	$(this).children('span').css({'border':'','background':'','color':'','-webkit-transform':'','transition':'0.5s linear'});
	
})



$('.jjfa-content-right-03 ul:eq(0) li').mouseenter(function(){
	$(this).css({'background':'rgba(0,0,0,0.5)','cursor':'pointer','color':'#fff'});
	$(this).children('span').css('border','dashed 5px #007AFF');
	$(this).children('span').children('img').css({'border-radius':'50%','-webkit-transform':'rotate(360deg)','transition':'0.5s linear'});
})
$('.jjfa-content-right-03 ul:eq(0) li').mouseleave(function(){
	$(this).css({'background':'','cursor':'','color':''});
	$(this).children('span').css('border','');
	$(this).children('span').children('img').css({'border-radius':'','-webkit-transform':''});
})


$('.jjfa-content-right-03 ul:eq(1) li').mouseenter(function(){
	$(this).css({'background':'#49d99c','cursor':'pointer','color':'#fff'});
	$(this).children('img').css({'width':'110%','height':'260px','margin':'-15px 0 0 -20px','transition':'0.5s linear'});
	$(this).children('span').css({'border':'dashed 2px #007AFF','background':'#ffffff','color':'#49d99c','-webkit-transform':'rotate(360deg)','transition':'0.5s linear'});
	
})
$('.jjfa-content-right-03 ul:eq(1) li').mouseleave(function(){
	$(this).css({'background':'','cursor':'','color':''});
	$(this).children('img').css({'width':'','height':'','margin':'','transition':''});
	$(this).children('span').css({'border':'','background':'','color':'','-webkit-transform':'','transition':'0.5s linear'});
	
})






$('.jjfa-content-right-04 ul:eq(0) li').mouseenter(function(){
	$(this).css({'background':'rgba(0,0,0,0.5)','cursor':'pointer','color':'#fff'});
	$(this).children('span').css('border','dashed 5px #007AFF');
	$(this).children('span').children('img').css({'border-radius':'50%','-webkit-transform':'rotate(360deg)','transition':'0.5s linear'});
})
$('.jjfa-content-right-04 ul:eq(0) li').mouseleave(function(){
	$(this).css({'background':'','cursor':'','color':''});
	$(this).children('span').css('border','');
	$(this).children('span').children('img').css({'border-radius':'','-webkit-transform':''});
})

$('.jjfa-content-right-04 ul:eq(1) li').mouseenter(function(){
	$(this).css({'background':'#49d99c','cursor':'pointer','color':'#fff'});
	$(this).children('img').css({'width':'110%','height':'260px','margin':'-15px 0 0 -20px','transition':'0.5s linear'});
	$(this).children('span').css({'border':'dashed 2px #007AFF','background':'#ffffff','color':'#49d99c','-webkit-transform':'rotate(360deg)','transition':'0.5s linear'});
	
})
$('.jjfa-content-right-04 ul:eq(1) li').mouseleave(function(){
	$(this).css({'background':'','cursor':'','color':''});
	$(this).children('img').css({'width':'','height':'','margin':'','transition':''});
	$(this).children('span').css({'border':'','background':'','color':'','-webkit-transform':'','transition':'0.5s linear'});
	
})





/*新闻动态页*/

 $('.news-left dd:eq(0)').click(function(){
	$(this).addClass('cp-2-current').siblings('dd').removeClass('cp-2-current');
	
	 $(".news-right-ul li").css("display",'block');
 });


 $('.news-left dd:eq(1)').click(function(){
	$(this).addClass('cp-2-current').siblings('dd').removeClass('cp-2-current');
	
	 $(".news-right-ul li").each(function(){
      if($(this).attr('id') == 'aaaa'){
      	$(this).css('display','block');
      }
      else{
      	$(this).css('display','none');
      }
  });
 });

 $('.news-left dd:eq(2)').click(function(){
	$(this).addClass('cp-2-current').siblings('dd').removeClass('cp-2-current');
	
	 $(".news-right-ul li").each(function(){
      if($(this).attr('id') == 'bbbb'){
      	$(this).css('display','block');
      }
      else{
      	$(this).css('display','none');
      }
  });
 });

 $('.news-left dd:eq(3)').click(function(){
	$(this).addClass('cp-2-current').siblings('dd').removeClass('cp-2-current');
	
	 $(".news-right-ul li").each(function(){
      if($(this).attr('id') == 'cccc'){
      	$(this).css('display','block');
      }
      else{
      	$(this).css('display','none');
      }
  });
 });

 $('.news-left dd:eq(4)').click(function(){
	$(this).addClass('cp-2-current').siblings('dd').removeClass('cp-2-current');
	
	 $(".news-right-ul li").each(function(){
      if($(this).attr('id') == 'dddd'){
      	$(this).css('display','block');
      }
      else{
      	$(this).css('display','none');
      }
  });
 });




/*产品服务页*/

$('.cp2-2-left dd:eq(0)').click(function(){
	$(this).addClass('cp-2-current').siblings('dd').removeClass('cp-2-current');
	$('#cpfu01').removeClass('hide').siblings('li').addClass('hide');
});

$('.cp2-2-left dd:eq(1)').click(function(){
	$(this).addClass('cp-2-current').siblings('dd').removeClass('cp-2-current');
	$('#cpfu02').removeClass('hide').siblings('li').addClass('hide');
});

$('.cp2-2-left dd:eq(2)').click(function(){
	$(this).addClass('cp-2-current').siblings('dd').removeClass('cp-2-current');
	$('#cpfu03').removeClass('hide').siblings('li').addClass('hide');
});

$('.cp2-2-left dd:eq(3)').click(function(){
	$(this).addClass('cp-2-current').siblings('dd').removeClass('cp-2-current');
	$('#cpfu04').removeClass('hide').siblings('li').addClass('hide');
});

$('.cp2-2-left dd:eq(4)').click(function(){
	$(this).addClass('cp-2-current').siblings('dd').removeClass('cp-2-current');
	$('#cpfu05').removeClass('hide').siblings('li').addClass('hide');
});

$('.cp2-2-left dd:eq(5)').click(function(){
	$(this).addClass('cp-2-current').siblings('dd').removeClass('cp-2-current');
	$('#cpfu06').removeClass('hide').siblings('li').addClass('hide');
});

$('.cp2-2-left dd:eq(6)').click(function(){
	$(this).addClass('cp-2-current').siblings('dd').removeClass('cp-2-current');
	$('#cpfu07').removeClass('hide').siblings('li').addClass('hide');
});

$('.cp2-2-left dd:eq(7)').click(function(){
	$(this).addClass('cp-2-current').siblings('dd').removeClass('cp-2-current');
	$('#cpfu08').removeClass('hide').siblings('li').addClass('hide');
});

$('.cp2-2-left dd:eq(8)').click(function(){
	$(this).addClass('cp-2-current').siblings('dd').removeClass('cp-2-current');
	$('#cpfu09').removeClass('hide').siblings('li').addClass('hide');
});

$('.cp2-2-left dd:eq(9)').click(function(){
	$(this).addClass('cp-2-current').siblings('dd').removeClass('cp-2-current');
	$('#cpfu10').removeClass('hide').siblings('li').addClass('hide');
});

$('.cp2-2-left dd:eq(10)').click(function(){
	$(this).addClass('cp-2-current').siblings('dd').removeClass('cp-2-current');
	$('#cpfu11').removeClass('hide').siblings('li').addClass('hide');
});

$('.cp2-2-left dd:eq(11)').click(function(){
	$(this).addClass('cp-2-current').siblings('dd').removeClass('cp-2-current');
	$('#cpfu12').removeClass('hide').siblings('li').addClass('hide');
});

$('.cp2-2-left dd:eq(12)').click(function(){
	$(this).addClass('cp-2-current').siblings('dd').removeClass('cp-2-current');
	$('#cpfu13').removeClass('hide').siblings('li').addClass('hide');
});



$('.cp2-2-right-01-mc').mouseenter(function(){
	$(this).css({'background':'rgba(0,0,0,0.7)','cursor': 'pointer'});
	$(this).children('span').css({'margin':'30px 0 0 0px','transition':'0.5s linear'})
})
$('.cp2-2-right-01-mc').mouseleave(function(){
	$(this).css({'background':'rgba(0,0,0,0.3)','cursor': ''});
	$(this).children('span').css({'margin':'','transition':'0.5s linear'})
})









































