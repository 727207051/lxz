var Adapt={
	imgNode:$("#Js-header img"),
	sliderNode:$(".slider .slider-ppt img"),
	picwidth:null,
	picheight:null,
	adapt:function(){
		var _this=this;		
		var screenheight=$(window).height();
		var screenwidth=$(window).width();
		var proportionP=parseInt(_this.picwidth)/parseInt(_this.picheight);
		var proportionS=screenwidth/screenheight;
		//console.log(proportionP,proportionS)
		//console.log(screenheight,screenwidth)
		if(proportionP>proportionS){
			//console.log(123)
			_this.imgNode.css({
				"height":screenheight,
				"width":"auto",
				"margin-left":(screenwidth-(parseInt(proportionP*screenheight)))/2+"px",
				"margin-top":0,
			})
			_this.sliderNode.css({
				"height":screenheight,
				"width":"auto",
				"margin-left":(screenwidth-(parseInt(proportionP*screenheight)))/2+"px",
				"margin-top":0,
			})
		}
		else{
			//console.log(123)
			_this.imgNode.css({
				"height":"auto",
				"width":screenwidth,
				"margin-top":(screenheight-(parseInt(screenwidth/proportionP)))/2+"px",
				"margin-left":0,
			})
			_this.sliderNode.css({
				"height":"auto",
				"width":screenwidth,
				"margin-top":(screenheight-(parseInt(screenwidth/proportionP)))/2+"px",
				"margin-left":0,
			})
		}
		/*_this.imgNode.css({
			"height":screenheight,
			"width":screenwidth,
		})*/
	},
	init:function(){
		var _this=this;
		//_this.picwidth=1920+"px";
		//_this.picheight=930+"px";
		_this.picwidth=$("#Js-header img").width();
		_this.picheight=$("#Js-header img").height();
		//console.log(_this.picwidth,_this.picheight);
		/*var screenheight=$(window).height();
		var screenwidth=$(window).width();*/
		//console.log(screenheight,screenwidth);
		_this.adapt();
		$(window).resize(function(){
			//console.log(123)
			
			_this.adapt();
		});
	},
}

Adapt.init();


var Slider={
	move:function(){
		var _this=this;
		var oldpos,newpos;
		oldpos=$(".slider-ppt .current").index();
		newpos=oldpos+1;
		//console.log($(".slider-ppt li").length-1,newpos)
		
		if(newpos==$(".slider-ppt li").length){
			newpos=0;
		}
		//console.log(newpos);		
		$(".slider-ppt").find("li").eq(newpos).fadeIn('2000').addClass("current");
		$(".slider-ppt").find("li").eq(oldpos).fadeOut('2000').removeClass("current");
	},
	init:function(){
		var _this=this;
		
		
		_this.timeout=setInterval(function(){
			_this.move();
		},3000)
		
	}
}
Slider.init();

var Above={
	navNodeBtn:$("#Js-above .nav-btn"),
	/*goback:function(){
		var _this=this;
	},*/
	bool:true,
	moveback:function(){
		var _this=this;
			$("#Js-above .nav").show().stop(false,true).animate({"right":-707+"px"},500,"linear",function(){				
		});
	},
	init:function(){
		var _this=this;
		_this.navNodeBtn.click(function(){
			if(_this.bool){
				$("#Js-above .nav").show().stop(false,true).animate({"right":90+"px"},500,"linear",function(){
					_this.bool=true;
				});
				_this.bool=false;
			}
			else{
				//console.log(123)
				$("#Js-above .nav").show().stop(false,true).animate({"right":-707+"px"},500,"linear",function(){	
					_this.bool=true;
				});
			}
		});
		$("#Js-above .nav,.nav-btn").mouseleave(function(){
			setTimeout(function(){
				_this.moveback();
			},10000)	
			_this.bool=true;
		})

		$("#search-btn").click(function(){
			$("#search-text").show().animate({"left":0},500,"linear",function(){				
			});
		})
		
		$(".search").submit(function(){
			return false;
		})
		//console.log($(window).height());
		$("#Js-above").css({height:$(window).height()});
		$(window).resize(function(){
			$("#Js-above").css({height:$(window).height()});
		})
	}
}
Above.init();


var Mid={
	ulNode:$("#mid-content"),
	bigger:function(obj){
		var _this=this;
		obj.find("img").stop().animate({
			"width":120+"%",
			"height":120+"%",
			"margin-left":-12+"%",
			"margin-right":-10+"%",
		})
		obj.find("h5").stop().animate({
			"margin-top":29+"px",
		})
		obj.find("p").fadeIn();
		obj.find(".group").css({
			"background":"rgba(0,0,0,0.3)",
		})
	},
	smaller:function(obj){
		var _this=this;
		obj.find("img").stop().animate({
			"width":100+"%",
			"height":100+"%",
			"margin-left":0+"%",
			"margin-right":0+"%",
		})
		obj.find("h5").stop().animate({
			"margin-top":69+"px",
		})
		obj.find("p").fadeOut();
		obj.find(".group").css({
			"background":"rgba(0,0,0,0)",
		})
	},
	init:function(){
		var _this=this;
		_this.ulNode.on("mouseenter","li",function(){
			_this.bigger($(this));
		})
		_this.ulNode.on("mouseleave","li",function(){
			_this.smaller($(this));
		})
		
		//var oldwidth=parseInt($(".mid").css("width"));
		var atop=$(window).height();
		
		$(window).resize(function(){
			atop=$(window).height();
			//console.log(atop);
			//console.log(screenheight,screenwidth)
			//var newwidth=parseInt($(".mid").css("width"));
			//console.log(top,oldwidth,newwidth);
			$(".mid").css({
				"margin":atop+"px 0",
			})
		});
		
	},
}
Mid.init();


var Scoll={
	headerNode:$("#Js-header"),
	height:null,
	Scroll:function(){
		var _this=this;
		var scrollTop=$("body").scrollTop()+$("html").scrollTop();
		var height=_this.height-scrollTop;
		//console.log(scrollTop);
		//console.log($("body").scrollTop()+$("html").scrollTop());
		//console.log(height,_this.height)
		_this.headerNode.css({
			"height":height+"px",
		})
	},
	init:function(){
		var _this=this;
		_this.height=_this.headerNode.height();
		$(window).resize(function(){
			var height1=$(window).height();
			//console.log(height1);
			_this.headerNode.css({"height":height1});
			_this.height=_this.headerNode.height();
			
			//console.log(_this.height);
		})
		
			//console.log(_this.height)
		$(window).scroll(function(){			
			_this.Scroll();
		})
	}
}
Scoll.init();


var Flip={
    liNode:$(".Aboutus-mian li"),
    flipgo:function(obj){
    	var _this=this;
    	//console.log(123)
    	obj.find("img").addClass("imgflip");
    },
    flipback:function(obj){
    	var _this=this;
    	//console.log(123)
    	obj.find("img").removeClass("imgflip");
    },
    init:function(){
        var _this=this;
        _this.liNode.mouseenter(function(){
        	//console.log(123)
        	_this.flipgo($(this));
        })
        _this.liNode.mouseleave(function(){
        	//console.log(123)
        	_this.flipback($(this));
        })
    }
}
Flip.init();


var slideraboutus={
	Jsslideraboutus:$("#Js-slider-aboutus"),
	Aboutusmian:$(".Aboutus-mian"),
	leftmove:function(){
		var _this=this;
		var oldpos,newpos;
		oldpos=_this.Jsslideraboutus.children(".current").index();
		//console.log(oldpos);
		newpos=oldpos-1;
		if(newpos<0){
			newpos=_this.Jsslideraboutus.children("li").length-1;
		}
		//console.log(oldpos,newpos);
		_this.Jsslideraboutus.children("li").eq(newpos).stop().fadeIn("slow").addClass("current");
		_this.Jsslideraboutus.children("li").eq(oldpos).stop().fadeOut("slow").removeClass("current");
	},
	rightmove:function(){
		var _this=this;
		var oldpos,newpos;
		oldpos=_this.Jsslideraboutus.children(".current").index();
		//console.log(oldpos);
		newpos=oldpos+1;
		if(newpos==_this.Jsslideraboutus.children("li").length){
			newpos=0;
		}
		//console.log(oldpos,newpos);
		_this.Jsslideraboutus.children("li").eq(newpos).stop().fadeIn("slow").addClass("current");
		_this.Jsslideraboutus.children("li").eq(oldpos).stop().fadeOut("slow").removeClass("current");
	},
	init:function(){
		var _this=this;
		_this.Jsslideraboutus.siblings(".btn-left").click(function(){
			_this.leftmove();
		})		
		_this.Jsslideraboutus.siblings(".btn-right").click(function(){
			_this.rightmove();
		})		
		_this.Jsslideraboutus.siblings(".close-pop").click(function(){
			_this.Jsslideraboutus.parent().fadeOut();
		})
		_this.Aboutusmian.children("li").eq(1).click(function(){
			_this.Jsslideraboutus.parent().fadeIn();
		})
	}
}
slideraboutus.init();

var sliderabout={
	Jsslideraboutus:$("#Js-slider-about"),
	Aboutusmian:$(".Aboutus-mian"),
	titNode:$("#Js-slider-about-tit"),
	leftmove:function(){
		var _this=this;
		var oldpos,newpos;
		oldpos=_this.Jsslideraboutus.children(".current").index();
		//console.log(oldpos);
		newpos=oldpos-1;
		if(newpos<0){
			newpos=_this.Jsslideraboutus.children("li").length-1;
		}
		//console.log(oldpos,newpos);
		_this.Jsslideraboutus.children("li").eq(newpos).stop().fadeIn("slow").addClass("current");
		_this.Jsslideraboutus.children("li").eq(oldpos).stop().fadeOut("slow").removeClass("current");
	},
	rightmove:function(){
		var _this=this;
		var oldpos,newpos;
		oldpos=_this.Jsslideraboutus.children(".current").index();
		//console.log(oldpos);
		newpos=oldpos+1;
		if(newpos==_this.Jsslideraboutus.children("li").length){
			newpos=0;
		}
		//console.log(oldpos,newpos);
		_this.Jsslideraboutus.children("li").eq(newpos).stop().fadeIn("slow").addClass("current");
		_this.Jsslideraboutus.children("li").eq(oldpos).stop().fadeOut("slow").removeClass("current");
	},
	selectcontent:function(obj){
		var _this=this;	
		obj.addClass("checked").siblings("h5").removeClass("checked");
		var newpos=obj.index();
		$("#Js-slider-about-con p").eq(newpos).css({
			"display":"block"
		})
		$("#Js-slider-about-con p").eq(newpos).siblings("p").css({
			"display":"none"
		})
	},
	init:function(){
		var _this=this;
		_this.Jsslideraboutus.siblings(".btn-left").click(function(){
			_this.leftmove();
		})		
		_this.Jsslideraboutus.siblings(".btn-right").click(function(){
			_this.rightmove();
		})		
		_this.Jsslideraboutus.siblings(".close-pop").click(function(){
			_this.Jsslideraboutus.parent().fadeOut();
		})
		_this.Aboutusmian.children("li").eq(0).click(function(){
			_this.Jsslideraboutus.parent().fadeIn();
		})
		_this.titNode.on("click","h5",function(){
			_this.selectcontent($(this));
		})
	}
}
sliderabout.init();

var isoTope={
	init:function(){
		var _this=this;
		$('.brand-main ul').isotope({
			itemSelector: '.brand-main ul li'
		});
		$('.brand-main-nav li').click(function(){
			$(this).addClass('checked').siblings('li').removeClass('checked');
			var dataValue=$(this).attr('data');
			$('.brand-main ul').isotope({
				itemSelector: '.brand-main ul li',
				filter:dataValue
			});
		});	
		
		
	}
}

isoTope.init();

var imgBig={
	imgBigger:function(obj){
		var _this=this;
		obj.children("img").css({
			"width":270+"px",
			"height":169+"px",
			"margin-left":-18+"px",
			"margin-top":-10+"px",
			"box-shadow":"0px 0px 15px #000",
		});
		
		obj.addClass("z-index50");
		
		obj.children("p").css({
			"display":"block",
		})
	},
	imgsmaller:function(obj){
		var _this=this;
		obj.children("img").css({
			"width":235+"px",
			"height":146+"px",
			"margin-left":0+"px",
			"margin-top":0+"px",
			"box-shadow":"null",
		});
		
		obj.removeClass("z-index50");
		
		obj.children("p").css({
			"display":"none",
		})
	},
	init:function(){
		var _this=this;
		$("#Js-brand-main").on("mouseenter","li",function(){
			_this.imgBigger($(this));
		})
		$("#Js-brand-main").on("mouseleave","li",function(){
			_this.imgsmaller($(this));
		})
	}
}
imgBig.init();


var imgMove={
	btnsNode:$(".brand-move-btn"),
	ulNode:$("#Js-brand-main"),
	divNode:$(".brand-main"),
	liheight:152,
	toprevious:function(){
		var _this=this;
		var mt;//当前ul的margintop值
		mt=parseInt(_this.ulNode.css("margin-top"));
		var	ulheight=_this.ulNode.height();
		//console.log(123)
		if(mt>=0){
			return;
		}
		mt=mt+_this.liheight;
		_this.ulNode.stop().animate({
			"margin-top":mt+"px"
			},500);
	},
	tolater:function(){
		var _this=this;
		var _this=this;
		var mt;//当前ul的margintop值
		mt=parseInt(_this.ulNode.css("margin-top"));
	    var	ulheight=_this.ulNode.height();
	    var divheight=parseInt(_this.divNode.height());
		if(mt<=-(ulheight-divheight)){
			return;
		}
		mt=mt-_this.liheight;
		_this.ulNode.stop().animate({
			"margin-top":mt+"px"
			},500);
	},
	init:function(){
		var _this=this;
		_this.btnsNode.children("span").eq(0).click(function(){
			_this.toprevious();
		})
		_this.btnsNode.children("span").eq(1).click(function(){
			_this.tolater();
		})
	}
}
imgMove.init();


var brandSlideup={
	init:function(){
		_this=this;
		$("#Js-brand-main").on("click","li",function(){
			$(".brand-slide-up").animate({"top":"0"},500)
		})

		$(".brand-slide-up").on("click",".sliderdown",function(){
			$(".brand-slide-up").animate({"top":"100%"},500)
		})
	}
}
brandSlideup.init();


var contactusselect={
	contactusmain:$("#Js-contactus-main"),
	selected:function(obj){
		var _this=this;
		var oldpos=_this.contactusmain.find(".tab .selected").index();
		var newpos=obj.index();
		if(oldpos==newpos){
			return;
		}
		_this.contactusmain.find(".tab li").eq(newpos).addClass("selected");
		_this.contactusmain.find(".tab li").eq(oldpos).removeClass("selected");
		
		_this.contactusmain.find(".contactus-content").children("div").eq(newpos).show();
		_this.contactusmain.find(".contactus-content").children("div").eq(oldpos).hide();
	},
	init:function(){
		var _this=this;
		
		_this.contactusmain.find(".tab").on("click","li",function(){

			_this.selected($(this));
		})
	}
	
}
contactusselect.init();

var joinusslider={
	joinusslider:$("#Js-joinus-slider"),
	rightmove:function(){
		var _this=this;
		oldpos=_this.joinusslider.children(".selected").index();
		newpos=oldpos+1;
		if(newpos>=_this.joinusslider.find("li").length){
			newpos=0;
		}
		_this.joinusslider.children("li").eq(newpos).addClass("selected").stop().fadeIn("slow");
		_this.joinusslider.children("li").eq(oldpos).removeClass("selected").stop().fadeOut("slow");
	},
	leftmove:function(){
		var _this=this;
		oldpos=_this.joinusslider.children(".selected").index();
		newpos=oldpos-1;
		if(newpos<0){
			//console.log(_this.joinusslider.find("li").length-1)
			newpos=_this.joinusslider.find("li").length-1;
		}
		_this.joinusslider.children("li").eq(newpos).addClass("selected").stop().fadeIn("slow");
		_this.joinusslider.children("li").eq(oldpos).removeClass("selected").stop().fadeOut("slow");
	},
	init:function(){
		var _this=this;
		_this.joinusslider.siblings(".joinus-right-btn").click(function(){
			_this.rightmove();
		})
		_this.joinusslider.siblings(".joinus-left-btn").click(function(){
			_this.leftmove();
		})
	}
}
joinusslider.init();
