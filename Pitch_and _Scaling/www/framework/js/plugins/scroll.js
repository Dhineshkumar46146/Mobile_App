//added a .tick span to object 
function applyTick(obj){var aButton = obj;$(aButton).append('<span class="tick"/>')	}
//var intro = false;

(function($){
$.fn.fadeNext = function(options) {
		var defaults = {
			initDelay:0,
			speed:740,
			delay:0,
			first:true,
			animate:{opacity:1},
			callback:false
			
		};			
	var options = $.extend(defaults, options); 
	var jq = this;
	var _delay;		
	if(options.first){
		_delay = options.initDelay
	}else{
		_delay = options.delay	
	}

	jq.eq(0).delay(_delay).animate(options.animate,options.speed, function(){
		
		jq = jq.slice(1);		
        if(jq.length){
			defaults.first = false
			$(jq).fadeNext(defaults);
		}
		else{
			if(options.callback){
				options.callback()
			}
			
		}
    });
		
    return this;
};
 
})(jQuery);



function m_events(e){
	var aButton = this
	
	if(aButton.mouseEnable){	
	
		if(e.type == 'mouseover' ||e.type == 'focusin' ||e.type == 'mouseenter' ){
			

			$(aButton).css({backgroundPosition:aButton.state_1})	
			
		}
		if(e.type == 'mouseout' || e.type == 'focusout' ||e.type == 'mouseleave' ){
		
			$(aButton).css({backgroundPosition:aButton.state_0})	
			
		}
	}
}


(function($){
$.fn.setupButtonOver = function(options){
	
		var defaults = {
		repeat:false,		
		topPos:false,		
		show:true,			
		states:1,			
		mouseEnable:true,	
		randomWidth:false,	
		help:false};
			
		var options = $.extend(defaults, options); 	
		var lastBtn = false;
		var randomLeft = 0;
			
		return this.each(function(index) {	
	
			var aButton = this
			aButton.mouseEnable = options.mouseEnable
			if(options.topPos){
				aButton.topPos = options.topPos
			}
			else{
				aButton.topPos = 100;
			}
			if(!aButton.href){
				$(aButton).attr('href','javascript:void(0)');
			}	
			
			
			if(options.repeat){
				aButton.leftPos = 0
			}else{
				
				
			aButton.leftPos = (index*$(this).outerWidth()*-1);
							
			if(options.randomWidth){							
					if(lastBtn){
						randomLeft+=lastBtn.offsetWidth*-1																		
						aButton.leftPos = randomLeft
						lastBtn = aButton						
					}	
					lastBtn = aButton				
				}
			}				
			console.log(aButton.leftPos)			
			if(options.show){
				$(aButton).show()				
			}						
			
			
			var _height = $(aButton).outerHeight()
			//_height = $(aButton).getComputedStyle('height')
			
			
			
			if(options.states){	
						
				for(var i=0;i<options.states;i++){				
					_pos = (i*-1)*_height+'px';							
					eval('aButton.state_'+i+' = "'+aButton.leftPos+'px ' +_pos+'"')
				}
			}			
			else{
				_tstates = 1
				
				for(var i=0;i<_tstates;i++){				
					_pos = (i*-1)*_height+'px';							
					eval('aButton.state_'+i+' = "'+aButton.leftPos+'px ' +_pos+'"')
				}
				//alert(aButton.state_2)
			}
			
			$(this).css({backgroundPosition:this.state_0})		

					
		})
}
})(jQuery);


//button this code sets button events and does the default actions (e.g. show feedback and tick)
var curButton

(function($){
	$.fn.buttonThis = function(options) {
	
		var jqgroup = this
	
		var defaults = {
		_addTick:false,					//add a tick inside the <a>
		_hide:false,					//initially hide the <a>
		_eventFunc:aButtonEventFunc,	//event function for click/focusin/focusout ...
		_feedbackClass:'.feedback',		//feedback class to show when click
		mouseEnable:true,				//enable button once setup
		_extraFunc:false,				//fire this function once EACH button is setup
		_title:false,					//set title = 'Icon'  = 'Icon 1', 'Icon 2' ...
		_ordered:false,					//orders 1st button active, 1+# buttons disabled
		myDoneClass:'aButtonDone',		//adds this class once clicked - '.aButtonDone' is use for checking all buttons are clicked
		help:false};
		
		var options = $.extend(defaults, options); 
		 		
		if(options.help){alert(" _addTick :: _eventFunc :: _hide :: _addHref :: _feedbackClass :: _extraFunc ::  help")
			return;
		}  
		var lastBtn = false
		var aButton
		
		this.each(function(index) {	
			
			if(lastBtn){	aButton.myNextBtn = this;	}
			aButton = this
			
			if(lastBtn){	aButton.myPrevBtn = lastBtn		}	
										
			aButton.idx = Number(index+1);			
			aButton.$myGroup = jqgroup;
			aButton.myDoneClass= options.myDoneClass
			aButton.mouseEnable = options.mouseEnable
			aButton.myTitle = aButton.title				
			aButton.disableThis = aButtonDisableThis
			aButton.disableAll = aButtonDisableAll		
			aButton.checkClick = aButtonCheckClicked
			aButton.isClicked = false
			aButton.originalClass = aButton.className
					
			aButton.myFeedbackClass = options._feedbackClass
			aButton.myFeedback = $(options._feedbackClass).eq(aButton.idx-1)[0]
			if(!aButton.href){
				$(aButton).attr({href:'javascript:void(0)'
				})
			}
			aButton.myEventFunc = options._eventFunc;
			
			$(aButton).bind({
					click:options._eventFunc,
					mouseenter:options._eventFunc,
					mouseleave:options._eventFunc,
					focusin:options._eventFunc,
					focusout:options._eventFunc																		
				})

			if(options._addTick){
				applyTick(this);
				aButton.myTick = $('span',aButton)
			}									
			if(options._extraFunc){
				try{
					options._extraFunc(aButton)
				}catch(e){
					//alert('could not find extra bind function: '+options._extraFunc)
				}
			}
			if(options._ordered && lastBtn){	aButton.disableThis(true)}

			if(options._title){	aButton.myTitle = aButton.title = options._title+' '+aButton.idx;}
			
			if(options._hide){	$(aButton).hide()}
			
			lastBtn = aButton;
		})
		
		return this;				

	}
})(jQuery);


function aButtonCheckClicked(){
	
	var aButton = this
	$(aButton).addClass(aButton.myDoneClass)
	aButton.isClicked = true
	var allDone = false		
	if(aButton.$myGroup.size() == aButton.$myGroup.filter('.'+aButton.myDoneClass).size()){
			allDone = true
	}	
	return 	allDone
}



function showFeedback(aButton,hideall,showFinal,slide,dontShowTick){

	if(!aButton.myFeedback){
		if($(aButton).parent()[0].myFeedback){
			aButton = $(aButton).parent()[0]
		}
	}
	if(aButton.myFeedback){
		

		curButton = aButton
		hideall?$(aButton.myFeedbackClass).hide():null
		if(slide){
			if(slide == 'fade'){
				$(aButton.myFeedback).fadeIn()	
			}else{
				
			$(aButton.myFeedback).slideDown()	
			}
		}
		else{
			$(aButton.myFeedback).show()	
		}
		if(!dontShowTick){
			$(aButton.myTick).show()	
		}
		$(aButton.myFeedback).focus()	
		
		if(aButton.checkClick() && showFinal){
			
			
			setTimeout(function(){$('#final').show();	},1000)
			$(gNext).show()
			return true;
		}
		else{
			return false;
		}
	}	
}

function aButtonDisableThis(bool){
	
	var aButton = this
	if(bool){		
		aButton.tempHref = aButton.href;
		aButton.href = ''
		aButton.mouseEnable = false
		if(!aButton.myTitle){
			aButton.myTitle = aButton.title
		}
		//aButton.title = aButton.myTitle + ' disabled' 
		$(aButton).off('click mouseout mouseover focusin focusout',aButton.myEventFunc);
		$(aButton).addClass('aButtonDisabled');
		$(aButton).removeAttr('href')
	}
	else{		
		aButton.title= aButton.myTitle
		$(aButton).attr('href',aButton.tempHref);
		aButton.mouseEnable = true
		$(aButton).on('click mouseout mouseover  focusin focusout',this,this.myEventFunc);
		$(aButton).removeClass('aButtonDisabled');
	}
}

//disable all aButtons which are in the same class group 
function aButtonDisableAll(bool){
	var btnGroup = this.$myGroup	
	if(bool){
		btnGroup.each(function(){
			this.disableThis(true)
		})
	}
	else{
		btnGroup.each(function(){			
			this.disableThis(false)		
		})
	}
}

function aButtonEventFunc(e){
	var aButton = this
	//alert('Button: '+aButton.idx +'\n\nEvent: '+ e.type)
}




// CUSTOME CODE FOR VC CTM 

var gCurrentSection;
var gDistanceY = 0
function scrolling(parentXD) {
	
	var distanceY	
	if(typeof(parentXD) != 'object'){	

		distanceY = parentXD
	}
	else{		
		distanceY = window.pageYOffset || document.documentElement.scrollTop
	}
	

		
	//$('h1').text(window.pageYOffset + '  ---  ' + document.documentElement.scrollTop)	
	var onSection = Math.floor(distanceY / 660)		
	var percentageDown = (distanceY / 660).toFixed(1).split('.')[1]
	var goingUp = false
	var shrinkOn = 100	
	
	
	var remainVal = distanceY % 660;		
	console.log(remainVal+" <<< --- >>> "+distanceY);
	
		if(distanceY > 800){
			$('.titleText1').css('display','none');
			$('.titleText1bg').css('display','none');
			/* $('.titleText2').css('display','none'); */
		}else{
			$('.titleText1').css('display','block');
			$('.titleText1bg').css('display','block');
			/* $('.titleText2').css('display','block'); */
		}
		
		if(distanceY < 660){
			//iconsDeactivateFun();
			$(".pageNoText").text("1 | "+totalPage);
		}
		if(distanceY > 730){
			$('.titleText2').css('display','none');
		}
		
	
	if(remainVal > 330){
		viewingNextPages(onSection+1);
		console.log(" <<< - "+(onSection+1)+" - >>> ");
	}
	
	if(gDistanceY > distanceY){goingUp = true}
	
	if(goingUp){
		console.log(" >>> - "+(onSection)+" - <<< ");
		if(remainVal < 330){
			viewingNextPages(onSection);
		}
	}
	
	/*
	var header = document.querySelector("header");
	if (distanceY > shrinkOn) {			

		$('header').addClass('smaller')
		$('nav').addClass('higher')
		if(typeof(parentXD) != 'object'){			
			setTimeout(function(){		
			$('.nav_wrapper').css({position:'absolute'})
			$('nav').css({top:parentXD +100},120)
			$('header').css({top:parentXD },200)
			},100)
		}
	} else {			
		$('header').removeClass('smaller')	 
$('header').css({top:0},200); // hardcoded to zero
		$('nav').removeClass('higher')
	}

	if(intro ){return;}
	*/
	
	gDistanceY = distanceY
	
	if(goingUp){	
		if(percentageDown >6|| percentageDown < 2){
			return;
		}
	}
	
	if(onSection == 1){
		/* alert(onSection); */
	}
	
	/*	
	
	if(num >2){
		$('.nav_button').slice( 0, num - 3).css({opacity:0})
	}
	
		$('.nav_button').slice( num + 8, 16).css({opacity:0})
	
	*/
	//viewingSection(onSection)	
	
}


function viewingSection(num){
	
	if($('nav').hasClass('higher')){
		
		$('nav').css({
			//	top:230 - (num*36)
			})
	}
	
	var currentPage = $('section').eq(num)		
	
	if(currentPage.hasClass('viewing')){
		return false;
	}
	$('section').removeClass('viewing')	
	currentPage.addClass('viewing')
	
	if(ie9 && currentPage.hasClass('active')){
		ie9viewing(currentPage)
	}
	
	if(currentPage.hasClass('active') && !currentPage.hasClass('completed ')){
		
		animateActive(currentPage)
	}
if(intro){return;	}
	
	if(!gCurrentSection.hasClass('hasActivity') && gCurrentSection.hasClass('active')){
		completeSections(gCurrentSection)
	}
	
	var navcur = $('.nav_button').eq(num)		
	$('.nav_button').css({opacity:1})
	$('.nav_button').removeClass('current')	
	$('.nav_button').eq(num).addClass('current')
/*	
	
	if(num >2){
		$('.nav_button').slice( 0, num - 3).css({opacity:0})
	}
	
		$('.nav_button').slice( num + 8, 16).css({opacity:0})
	
	*/

	
}


function completeSections(sec){
	

	//trace(sec)
	if(sec.hasClass('completed')){
						
		return;
	}

	gCurrentSection.addClass('completed')
	
	
	$('section').each(function(index, element) {
		if($(this).hasClass('completed')){	
		
			if($(this).next()){
				$(this).next().addClass('active')
				
				if(ie9){
					ie9Trans($(this).next())	
				}
			
				if(!$(this).next().hasClass('completed')){
					gCurrentSection = $(this).next()
				}
			}
			
			
			if($(this).hasClass('last')){
				
				parent.gTopicDetails[0].status = 'c'
				//parent.setLessonStatus()
				//alert('all done')
			}
			
		}
        
    });
}




function swapAudio(file) {	

if(!parent.menu_audio_played){return;}
	ddplayer.pause();
	ddplayer.setSrc('../../assets/audio/'+file+'.mp3');
	setTimeout(function (){
		ddplayer.play()
	},20);
	
}


function resizeSetup(){	
	$('.nav_wrapper').css({	
		left:$('#wrapper').offset().left+$('#wrapper').outerWidth()-2
	})
}


var refWin
function launchPopup(popup){
	if(refWin  && !refWin.closed){
		refWin.focus()
	}else{
		refWin = window.open('../sundries/'+popup+'.html','Help','width=1000,height=630');			
		refWin.focus()
	}
}



$.fn.sliderThis = function(options) {

		var defaults = {
			override: false,
			customeEv:false
		};  
	  
		var options = $.extend(defaults, options);
		
		selection = this		
		return this.each(function(index, asection) {
			bnclick = function (){	
				p = $(this).parent()	
				if(this.next){
					p.removeClass('slideIn')
					p.addClass('slideOut')
					p.next().addClass('slideIn')
					try{
						sliderNextClick(p)
					}catch(e){}
					
					$('.aButton',p.next()).css({display:'block'})	
					
					if(!p.next().next().size()){
						//trace('last')
						try{
							lastSection(p.next())
						}catch(e){}							
					}		
				}
				else{
					p.removeClass('slideIn')
					p.prev().removeClass('slideOut')
					p.prev().addClass('slideIn')	
					try{
						sliderBackClick(p)
					}catch(e){}
				}								
			}
			
			
			var nb = $('<a></a>')
				.addClass('moArrows nb')
				.prop({
					id:'nextb_'+Number(index+1),
					next:true,
					href:'javascript:void(0)'
					})
				if(options.customeEv){
					nb.on({click:options.customeEv})
				}
				else{
					nb.on({click:bnclick})
				}
			
			var bb = $('<a> </a>')
				.addClass('moArrows bb')
				.prop({
					id:'backb_'+Number(index+1),					
					next:false,
					href:'javascript:void(0)'
					})	
				
				if(options.customeEv){
					bb.on({click:options.customeEv})
				}
				else{
					bb.on({click:bnclick})
				}
					
			
			if(!$(asection).prev().size()){				
				$(asection).append(nb)				
			}
			if($(asection).prev().size() && $(asection).next().size()){
				$(asection).append(nb)
				$(asection).append(bb)
			}
			if(!$(asection).next().size()){

				$(asection).append(bb)
			}			
		});	//end return

};




function setupQuestions(){
	
	$('.questionActivity').each(function(index, context) {
		$('.aQuestion',context).each(function(index, aQuest) {
			
			$('input', aQuest).on({
				change:function(){
					$(aQuest).addClass('checked')
					
								
					if($('.aQuestion.checked',context).size()== $('.aQuestion',context).size()){
					//trace($('.submitBtn',context)[0])
					
						$('.submitBtn',context).removeClass('disabled')					
					}								
				}		
			})        
		});
		
		$('.submitBtn',context).on({
			click:function(){
				
				if($(this).hasClass('disabled')){	return;			}
				
				context.selectedInputs = [];
				
				$('.aQuestion',context).each(function(index, aQuest) {
					
					var allInputs = $('input',aQuest);					
					allInputs.each(function(index,inputEle){										
						inputEle.checked ? context.selectedInputs.push('val'+Number(index+1)): false ;
					})					
				})
				
				var  count = {}; 
				context.selectedInputs.forEach(function(i) { 
					count[i] = (count[i]||0)+1; 					
				});
				$('.caption',context).removeClass('slideFromLeft')
	
				if(count.val1 != 'undefined' && count.val1 >= 2){
					$('.caption',context).eq(0).addClass('slideFromLeft')	
				}
				if(count.val2 != 'undefined' && count.val2 >= 2){
					$('.caption',context).eq(1).addClass('slideFromLeft')									
				}
				if(count.val3 != 'undefined' && count.val3 >= 2){
					$('.caption',context).eq(2).addClass('slideFromLeft')					
				}			
				if(count.val1 && count.val2 && count.val3 ){
					$('.caption',context).eq(2).addClass('slideFromLeft')					
				}
				completeSections($(context))
			}
		})
		
	});
}
