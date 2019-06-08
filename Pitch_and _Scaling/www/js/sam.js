var p1;
var p2;
var startingX;
var a1;
var a2;

$( document ).ready(function() {
    
        p1 = document.getElementById("page1");
		p2 = document.getElementById("page2");
        a1 =document.getElementById('player1');
        a2 =document.getElementById('player2');
  });
      
		

		
		function p1handleTouchStart(evt){
			startingX = evt.touches[0].clientX;
		}
		
		function p1handleTouchMove(evt){
			var touch = evt.touches[0];
			var change = startingX - touch.clientX;
			
			if(change < 0){
				return;
			}
			
			p1.style.left = "-" +change+ "px";
			p2.style.display = "block";
			p2.style.left = (screen.width - change) + "px";
			evt.preventDefault();
            
		}
		
		function p1handleTouchEnd(evt){
			var change = startingX - evt.changedTouches[0].clientX;
			var thresold = screen.width / 6;
			if(change < thresold){
				p1.style.left = 0;
//				p2.style.display = "100%";
				
			}else{
				p1.style.transition = "all .1s";
				p2.style.transition = "all .1s";
				p1.style.left = "-100%";
				p2.style.left = "0";
                p1.style.display = "none";
				p2.style.display = "block";
				
                
                a2.play();
                a1.pause();
                a1.currentTime = 0;
               
			}
		}
		
		function p2handleTouchStart(evt){
			startingX = evt.touches[0].clientX;
			p1.style.transition = "";
			p2.style.transition = "";
//			p1.style.display = "none";
		}
		
		function p2handleTouchMove(evt){
			var touch = evt.touches[0];
			var change = touch.clientX - startingX;
			
			if(change < 0){
				return;
			}
			
			p1.style.display = "block";
			p1.style.left = (change - screen.width) + "px";
			p2.style.left = change + "px";
			evt.preventDefault();
           
		}
		
		function p2handleTouchEnd(evt){
			var change = evt.changedTouches[0].clientX - startingX;
			var thresold = screen.width / 6;
			if(change < thresold){
				p2.style.left = 0;
//				<!-- p1.style.display = "none"; -->
//				<!-- p1.style.display = "-100%"; -->
//				<!-- p1.style.display = "none"; -->
//				<!-- p1.style.left = "-100%"; -->
                
			}else{
//				p1.style.transition = "all .1s";
//                p2.style.transition = "all .1s";
                p1.style.left = 0;
                p2.style.display = "block";
				p2.style.left = "100%";
                a1.play();
                a2.pause();
                a2.currentTime = 0;
               
				
//				<!-- p2.style.display = "none"; -->
			}
            
            
		}
