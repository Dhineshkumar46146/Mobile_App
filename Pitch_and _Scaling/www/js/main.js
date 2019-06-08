var tl1;
var currentPage = 0;
var flashFlag = false;
var totalpage;
var audioTrack;
var audioTrack1;
var navFlag = true;
var validateFlag = false;

$(document).ready(function () {

    $('.slider.touch').pagesSliderTouch();
    $('.slider.not-touch').pagesSlider();

    totalpage = $(".content > .page").length;
    
    currentPage = 1;
    animation();
    navFlag = false;

});


function animation() {

    if (currentPage == 1) {
        try {
            audioTrack1.pause();
            audioTrack1.currentTime = 0;
            audioTrack.pause();
            audioTrack.currentTime = 0;
        } catch (err) {
        }

        if (tl1) {
            tl1.totalProgress(1).kill();
        }
        tl1 = new TimelineLite({
            onComplete: function () { }
        });
        tl1.add(animateOutDisplayNone_layout($(".page1_bg_layout")).play(), 0.0);
        tl1.add(animateOutDisplayBlock_layout($(".page2_bg_layout")).play(), 0.0);

        tl1.add(animateAddAipha($(".slide1bg1"), 0, 1).play(), 0.1);
        tl1.add(animateAddAipha($(".slide1bg2"), 0, 1).play(), 0.3);
        tl1.add(animateAddAipha($(".slide1bg3"), 0, 1).play(), 0.5);
        tl1.add(animateAddAipha($(".slide1bg4"), 0, 1).play(), 0.7);
        tl1.add(animateAddAipha($(".slide1bg5"), 0, 1).play(), 0.9);
        tl1.add(animateAddAipha($(".slide1bg6"), 0, 1).play(), 1.1);
        tl1.add(animateAddAipha($(".slide1bg7"), 0, 1).play(), 1.3);
        tl1.add(animateAddAipha($(".slide1bg8"), 0, 1).play(), 1.5);
        tl1.add(animateAddAipha($(".slide1bg9"), 0, 1).play(), 1.7);
        tl1.add(animateAddAipha($(".slide1bg10"), 0, 1).play(), 1.9);
        tl1.add(animateAddAipha($(".slide1bg11"), 0, 1).play(), 2.1);
        tl1.add(animateAddAipha($(".slide1bg12"), 0, 1).play(), 2.3);
        tl1.add(animateAddAipha($(".slide1bg13"), 0, 1).play(), 2.5);

    }
    else if (currentPage == 2) {

        try {
            audioTrack.pause();
            audioTrack.currentTime = 0;
            audioTrack1.pause();
            audioTrack1.currentTime = 0;
        } catch (err) {
        }

        audioTrack = document.getElementById('audio2');
        audioTrack1 = document.getElementById('audio2_1');
        audioTrack.play();
        audioTrack1.pause();
        audioTrack.addEventListener('ended', function () {
            setTimeout(() => {
                audioTrack1.pause();
                audioTrack1.currentTime = 0;
                audioTrack1.play();
            }, 1000)
        });



        if (tl1) {
            tl1.totalProgress(1).kill();
        }

        tl1 = new TimelineLite({
            onComplete: function () { }
        });
        $(".s2_1boardtxt").css("left", "29%");
        tl1.add(animateOutDisplayBlock_layout($(".page1_bg_layout")).play(), 0.0);
        tl1.add(animateOutDisplayNone_layout($(".page2_bg_layout")).play(), 0.0);
        tl1.add(animateOutDisplayBlock_layout($(".page3_bg_layout")).play(), 0.0);
        tl1.add(animateIn($(".Screen2Head")).play(), 0.0);
        tl1.add(animateScale($(".circle"), 1).play(), 1.0);
        tl1.add(animateInLeft_slow($(".screen2handimg1"), 0).play(), 3.5);
        tl1.add(animateInLeft_slow($(".screen2handimg2"), 200).play(), 4.0);
        tl1.add(animateIn($(".Screen2txt1"), 0).play(), 4.5);
        tl1.add(animateIn($(".s2moneyimg1"), 0).play(), 5.5);
        tl1.add(animateIn($(".s2moneyimg2"), 0).play(), 5.5);
        tl1.add(animateScaledecrees($(".circle"), 1).play(), 8.5);
        tl1.add(animateOut($(".s2moneyimg1")).play(), 12.0);
        tl1.add(animateOut($(".s2moneyimg2")).play(), 12.0);
        tl1.add(animateOut($(".screen2handimg1")).play(), 12.0);
        tl1.add(animateOut($(".screen2handimg2")).play(), 12.0);
        tl1.add(animateOut($(".Screen2txt1")).play(), 12.0);
        tl1.add(animateOut($(".Screen2Head")).play(), 12.0);
        tl1.add(animateDown($(".Screen2_1Head"), -100).play(), 12.5);
        tl1.add(animateOutLeft($(".s2_1boardimgdiv"), 250).play(), 16.0);
        tl1.add(animateIn($(".s2_1boardtxt"), 0).play(), 16.0);
        tl1.add(animateOutLeft123($(".s2_1boardimgdiv"), 0).play(), 17.5);
        tl1.add(animateOutLeft123($(".s2_1boardtxt"), 0).play(), 17.5);
        tl1.add(animateInLeft_slow($(".screen2handimg1"), 0).play(), 18.0);
        tl1.add(animateInLeft_slow($(".screen2handimg2"), 200).play(), 18.0);
        tl1.add(animateIn($(".s2_1txt2"), 0).play(), 19.0);
    }

    else if (currentPage == 3) {

        try {
            audioTrack.pause();
            audioTrack.currentTime = 0;
            audioTrack1.pause();
            audioTrack1.currentTime = 0;
        } catch (err) {
        }
     

        audioTrack = document.getElementById('audio3');
        audioTrack.play();
        $(".s3btn1div,.s3btn2div,.s3btn3div,.s3btn4div,.s3btn5div,.s3btn6div,.s3btn7div,.s3btn8div").removeClass("flash2");
        if (tl1) {
            tl1.totalProgress(1).kill();
        }
        tl1 = new TimelineLite({
            onComplete: function () { 
           setTimeout(function(){ $(".s3btn1div,.s3btn2div,.s3btn3div,.s3btn4div,.s3btn5div,.s3btn6div,.s3btn7div,.s3btn8div").addClass("flash2"); }, 500); 
            }
        });
        $(".Screen3Head").css("marginTop", "35px");
        $(".s3_1img").css("top", "-50%");

        resetQus();

        $(".s3btngrp").css("display", "block");
        $(".s3btngrpa").css("display", "none");
        $(".btnrow5a").css("display", "none");
        $(".btnrow5ashow").css("display", "none");


        tl1.add(animateOutDisplayNone_layout($(".page3_bg_layout")).play(), 0.0);
        tl1.add(animateOutDisplayBlock_layout($(".page2_bg_layout")).play(), 0.0);
        tl1.add(animateOutDisplayBlock_layout($(".page4_bg_layout")).play(), 0.0);
        
        tl1.add(animateDown1($(".Screen3Head"), 0).play(), 0.5);
        tl1.add(animateInRight($(".s3_1boardimg"), 300).play(), 1.0);
        tl1.add(animateInLeft($(".s3_1manimg"), 400).play(), 1.0);
        tl1.add(animateOutRight($(".s3_1boardimg"), 0).play(), 5.0);
        tl1.add(animateOutRight($(".s3_1manimg"), 100).play(), 5.0);
        tl1.add(animateDown($(".s3_1img"), -100).play(), 6.0);
        $(".Screen3Head").css("marginTop", "-40px");
        tl1.add(animateDown2($(".Screen3Head"), -40).play(), 16.5);
        $(".s3_1img").css("top", "300px");
        tl1.add(animateDown3($(".s3_1img"), 280).play(), 16.5);
        tl1.add(animateOut($(".s3_1img"),0).play(), 17.0);
        tl1.add(animateDown1($(".Screen3_1Head"), 0).play(), 18.0);
        tl1.add(animateIn($(".s3btn1div"), 0).play(), 18.5);
        tl1.add(animateIn($(".s3btn2div"), 0).play(), 18.7);
        tl1.add(animateIn($(".s3btn3div"), 0).play(), 18.9);
        tl1.add(animateIn($(".s3btn4div"), 0).play(), 19.1);
        tl1.add(animateIn($(".s3btn5div"), 0).play(), 19.3);
        tl1.add(animateIn($(".s3btn6div"), 0).play(), 19.5);
        tl1.add(animateIn($(".s3btn7div"), 0).play(), 19.7);
        tl1.add(animateIn($(".s3btn8div"), 0).play(), 19.9);
        tl1.add(animateIn($(".btnrow5"), 0).play(), 20.5);


    }

    else if (currentPage == 4) {    
        try {
            audioTrack.pause();
            audioTrack.currentTime = 0;
            audioTrack1.pause();
            audioTrack1.currentTime = 0;
        } catch (err) {
        }
        audioTrack = document.getElementById('audio4');
        audioTrack.play();
         
        if (tl1) {
            tl1.totalProgress(1).kill();
        }
        tl1 = new TimelineLite({
            onComplete: function () {  }
        });
        
        audioTrack.addEventListener('ended', function () {
            $(".s4_dummy_layout").css("display","none");
        });
        // $(".s4click_who_c").css("display","none");
        tl1.add(animateOutDisplayBlock_layout($(".page3_bg_layout")).play(), 0.0);
        tl1.add(animateOutDisplayNone_layout($(".page4_bg_layout")).play(), 0.0);
        tl1.add(animateOutDisplayBlock_layout($(".page5_bg_layout")).play(), 0.0);
        

        
        if (greenFlag == false && blueFlag == false && yellowFlag == false && redFlag == false) {

            $(".s4_dummy_layout").css("display","block"); 
        $(".s4img_green,.s4img_yellow,.s4img_red,.s4img_blue").removeClass("flash2");
            tl1.add(animateIn($(".S4_1Head"), 0).play(), 1.0);
            tl1.add(animateScale($(".s4imgQ"), 1).play(), 2.0);
            tl1.add(animateFlipImage($(".s4imgQ")).play(), 3.5);
            tl1.add(animateIn($(".s4img_green"), 0).play(), 6.5);
            tl1.add(animateFlipImagesqu($(".s4img_green")).play(), 7.0);

            tl1.add(animateIn($(".s4img_blue"), 0).play(), 10.0);
            tl1.add(animateFlipImagesqu($(".s4img_blue")).play(), 11.0);

            tl1.add(animateIn($(".s4img_yellow"), 0).play(), 13.0);
            tl1.add(animateFlipImagesqu($(".s4img_yellow")).play(), 14.0);

            tl1.add(animateIn($(".s4img_red"), 0).play(), 17.0);
            tl1.add(animateFlipImagesqu($(".s4img_red")).play(), 18.0);
            
            setTimeout(function(){ $(".s4img_green,.s4img_yellow,.s4img_red,.s4img_blue").addClass("flash2") }, 19000); 
        }

        if (greenFlag == true) {

            try {
                audioTrack.pause();
                audioTrack.currentTime = 0;
                audioTrack1.pause();
                audioTrack1.currentTime = 0;
            } catch (err) {
            }
    
            audioTrack = document.getElementById('audio4_g');
            audioTrack.play();
            tl1.add(animateIn($(".s4gtxt1"), 0).play(), 1.0);
            tl1.add(animateIn($(".s4gtxt2"), 0).play(), 1.5);
            tl1.add(animateIn($(".s4gtxt3"), 0).play(), 2.0);
            tl1.add(animateIn($(".s4gtxt4_1a"), 0).play(), 2.5);
            tl1.add(animateIn($(".s4gtxt4_1a2"), 0).play(), 2.8);
            tl1.add(animateIn($(".s4gtxt4_12"), 0).play(), 3.2);
            tl1.add(animateIn($(".s4gtxt4_13"), 0).play(), 3.6);
            tl1.add(animateIn($(".s4gtxt4_14"), 0).play(), 4.0);
            tl1.add(animateIn($(".s4gtxt4_15"), 0).play(), 4.4);
        }

        if (blueFlag == true) {

            try {
                audioTrack.pause();
                audioTrack.currentTime = 0;
                audioTrack1.pause();
                audioTrack1.currentTime = 0;
            } catch (err) {
            }
    
            audioTrack = document.getElementById('audio4_b');
            audioTrack.play();
            tl1.add(animateScaleMobiledecrees($(".s4blue_img_grp"), 0).play(), 0);
            tl1.add(animateIn($(".s4btxt1"), 0).play(), 1.0);
            tl1.add(animateIn($(".s4btxt2"), 0).play(), 1.5);
            tl1.add(animateIn($(".s4btxt3"), 0).play(), 2.0);
            tl1.add(animateScale($(".s4blue_img_grp"), 0).play(), 2.5);

            tl1.add(animateOutDisplayBlock($(".s4blue_img3"), 0).play(), 5.5);
            tl1.add(animateOutDisplayNone($(".s4blue_img2"), 0).play(), 5.5);

            tl1.add(animateOutDisplayNone($(".s4blue_img3"), 0).play(), 6.0);
            tl1.add(animateOutDisplayBlock($(".s4blue_img2"), 0).play(), 6.0);

            tl1.add(animateOutDisplayBlock($(".s4blue_img3"), 0).play(), 6.5);
            tl1.add(animateOutDisplayNone($(".s4blue_img2"), 0).play(), 6.5);

            tl1.add(animateOutDisplayNone($(".s4blue_img3"), 0).play(), 7.0);
            tl1.add(animateOutDisplayBlock($(".s4blue_img2"), 0).play(), 7.0);

            tl1.add(animateOutDisplayBlock($(".s4blue_img3"), 0).play(), 7.5);
            tl1.add(animateOutDisplayNone($(".s4blue_img2"), 0).play(), 7.5);

            tl1.add(animateOutDisplayNone($(".s4btxt3"), 0).play(), 7.8);
            tl1.add(animateOutDisplayNone($(".s4blue_img_grp"), 0).play(), 7.8);
            tl1.add(animateIn($(".s4btxt5_1"), 0).play(), 8.0);
            tl1.add(animateIn($(".s4btxt5_2"), 0).play(), 8.5);
            tl1.add(animateIn($(".s4btxt5_3"), 0).play(), 9.0);
            tl1.add(animateIn($(".s4btxt5_4"), 0).play(), 9.5);
            tl1.add(animateIn($(".s4btxt5_5"), 0).play(), 10.0);

        }

        if (yellowFlag == true) {

            try {
                audioTrack.pause();
                audioTrack.currentTime = 0;
                audioTrack1.pause();
                audioTrack1.currentTime = 0;
            } catch (err) {
            }
    
            audioTrack = document.getElementById('audio4_y');
            audioTrack.play();
           tl1.add(animateScaleMobiledecrees($(".s4ytxt5_2"), 0).play(),0);
            tl1.add(animateScaleMobiledecrees($(".s4ytxt5_3"), 0).play(), 0);
            tl1.add(animateIn($(".s4clk1"), 0).play(), 0.1);
            tl1.add(animateIn($(".s4ytxt1"), 0).play(), 1.0);
            tl1.add(animateIn($(".s4ytxt2"), 0).play(), 1.5);

            tl1.add(animateOutDisplayBlock($(".s4clk2"), 0).play(), 2.5);
            tl1.add(animateOutDisplayBlock($(".s4clk3"), 0).play(), 3.5);
            tl1.add(animateOutDisplayBlock($(".s4clk4"), 0).play(), 4.5);
            tl1.add(animateOutDisplayBlock($(".s4clk5"), 0).play(), 5.5);

            tl1.add(animateOutDisplayNone($(".s4clk1"), 0).play(), 5.5);
            tl1.add(animateOutDisplayNone($(".s4clk2"), 0).play(), 5.5);
            tl1.add(animateOutDisplayNone($(".s4clk3"), 0).play(), 5.5);
            tl1.add(animateOutDisplayNone($(".s4clk4"), 0).play(), 5.5);

            tl1.add(animateOutDisplayBlock($(".s4clk6"), 0).play(), 6.5);
            tl1.add(animateOutDisplayNone($(".s4clk5"), 0).play(), 6.5);
            tl1.add(animateScaledecrees($(".s4clk6"), 0).play(), 6.8);
            tl1.add(animateScale($(".s4ytxt5_2"), 0).play(), 7.5);
            tl1.add(animateScale($(".s4ytxt5_3"), 0).play(), 8.0);


        }

        if (redFlag == true) {

            try {
                audioTrack.pause();
                audioTrack.currentTime = 0;
                audioTrack1.pause();
                audioTrack1.currentTime = 0;
            } catch (err) {
            }
    
            audioTrack = document.getElementById('audio4_r');
            audioTrack.play();
            tl1.add(animateIn($(".s4rtxt1"), 0).play(), 1.0);
            tl1.add(animateIn($(".s4rtxt2"), 0).play(), 1.5);
            tl1.add(animateOutLeft($(".s4red_click_board"), -250).play(), 2.5);
            tl1.add(animateOutRight123($(".s4red_click_board"), 0).play(), 3.5);
            tl1.add(animateIn($(".s4rtxt3"), 0).play(), 5.0);
            tl1.add(animateIn($(".s4rtxt5_2"), 0).play(), 6.0);
            tl1.add(animateIn($(".s4rtxt5_3"), 0).play(), 7.0);
            tl1.add(animateIn($(".s4rtxt5_4"), 0).play(), 8.0);
            tl1.add(animateIn($(".s4rtxt5_5"), 0).play(), 9.0);
            tl1.add(animateIn($(".s4rtxt5_6"), 0).play(), 10.0);
            tl1.add(animateIn($(".s4rtxt5_7"), 0).play(), 11.0);
        }


    }
    else if (currentPage == 5) {

        try {
            audioTrack.pause();
            audioTrack.currentTime = 0;
            audioTrack1.pause();
            audioTrack1.currentTime = 0;
        } catch (err) {
        }
        audioTrack = document.getElementById('audio5');
        audioTrack.play();
        if (tl1) {
            tl1.totalProgress(1).kill();
        }
        tl1 = new TimelineLite({
            onComplete: function () { }
        });

        tl1.add(animateOutDisplayBlock_layout($(".page4_bg_layout")).play(), 0.0);
        tl1.add(animateOutDisplayNone_layout($(".page5_bg_layout")).play(), 0.0);
        tl1.add(animateOutDisplayBlock_layout($(".page6_bg_layout")).play(), 0.0);
        tl1.add(animateDown1($(".S5_1Head"), 0).play(), 0.5);
        tl1.add(animateOutLeft($(".s5_img1"), -250).play(), 2.5);
        tl1.add(animateOutLeft($(".s5_img2"), 250).play(), 2.5);
        tl1.add(animateDown1($(".s5_txt1"), 0).play(), 2.5);
        tl1.add(animateOutLeft123($(".s5_img1"), 0).play(), 6.5);
        tl1.add(animateOutLeft124($(".s5_img2"), 0).play(), 6.5);
        tl1.add(animateOut($(".s5_txt1"), 0).play(), 7.0);
        tl1.add(animateOut($(".S5_1Head"), 0).play(), 7.0);



        tl1.add(animateDown1($(".S5_2Head"), 0).play(), 8.5);
        tl1.add(animateDown1($(".s5_txt2"), 0).play(), 11.5);
        tl1.add(animateIn($(".s5_img3"), 0).play(), 12.5);
        $(".s5_img_layout").css("top", "-2000px");
        tl1.add(animateDownArrow($(".s5_img_layout"), 0).play(), 13.0);
        tl1.add(animateDown1($(".s5_txt3"), 0).play(), 19.0);
        tl1.add(animateDown1($(".s5_txt4"), 0).play(), 17.0);
        tl1.add(animateDown1($(".s5_txt5"), 0).play(), 15.0);
    }


    else if (currentPage == 6) {

        try {
            audioTrack.pause();
            audioTrack.currentTime = 0;
            audioTrack1.pause();
            audioTrack1.currentTime = 0;
        } catch (err) {
        }

        audioTrack = document.getElementById('audio6');
        audioTrack.play();

        if (tl1) {
            tl1.totalProgress(1).kill();
        }
        tl1 = new TimelineLite({
            onComplete: function () { }
        });
        tl1.add(animateOutDisplayBlock_layout($(".page5_bg_layout")).play(), 0.0);
        tl1.add(animateOutDisplayNone_layout($(".page6_bg_layout")).play(), 0.0);        
        tl1.add(animateOutDisplayBlock_layout($(".page7_bg_layout")).play(), 0.0);
        tl1.add(animateDown($(".Screen6_1Head"), 400).play(), 1.5);
        tl1.add(animateIn($(".s6_img1"), 0).play(), 3.5);
        tl1.add(animateIn($(".s6_txt1"), 0).play(), 5.5);



    }

    else if (currentPage == 7) {

        try {
            audioTrack.pause();
            audioTrack.currentTime = 0;
            audioTrack1.pause();
            audioTrack1.currentTime = 0;
        } catch (err) {
        }

        audioTrack = document.getElementById('audio7');
        audioTrack.play();

        if (tl1) {
            tl1.totalProgress(1).kill();
        }
        tl1 = new TimelineLite({
            onComplete: function () { }
        });

        tl1.add(animateOutDisplayBlock_layout($(".page6_bg_layout")).play(), 0.0);
        tl1.add(animateOutDisplayNone_layout($(".page7_bg_layout")).play(), 0.0);        
        tl1.add(animateOutDisplayBlock_layout($(".page8_bg_layout")).play(), 0.0);

        $(".s7_img1").css("left", "103px");
        $(".s7_img2").css("left", "21px");
        $(".s7_img2").css("opacity", "0");
        tl1.add(animateScaleMobiledecrees($(".s7_img1"), 0).play(), 0.0);
        tl1.add(animateScaleMobiledecrees($(".s7_img3"), 0).play(), 0.0);
        tl1.add(animateDown1($(".S7_1Head"), 0).play(), 0.5);
        tl1.add(animateScale($(".s7_img1"), 1).play(), 1.0);
        tl1.add(animateFlipImagesqu($(".s7_img1")).play(), 3.0);
        tl1.add(animateOutLeftMobile($(".s7_img1"), 0).play(), 4.5);
        tl1.add(animateOutLeftPlus($(".s7_img2"), 0).play(), 6.0);
        tl1.add(animateScale($(".s7_img3"), 1).play(), 7.5);
        tl1.add(animateFlipImagesqu($(".s7_img3")).play(), 9.5);
    }
    else if (currentPage == 8) {

        try {
            audioTrack.pause();
            audioTrack.currentTime = 0;
            audioTrack1.pause();
            audioTrack1.currentTime = 0;
        } catch (err) {
        }

        audioTrack = document.getElementById('audio8');
        audioTrack.play();
        $(".s8_img1,.s8_img2").removeClass("flash3");

        if (tl1) {
            tl1.totalProgress(1).kill();
        }
        tl1 = new TimelineLite({
            onComplete: function () {
            setTimeout(function(){ $(".s8_img1,.s8_img2").addClass("flash3"); }, 500);
            }
        });


        
        $(".s8_click1").css("display", "none");
        $(".s8_click2").css("display", "none");
        $(".s8_img1").css("display", "inline-block");
        $(".s8_img2").css("display", "inline-block");

        tl1.add(animateOutDisplayBlock_layout($(".page7_bg_layout")).play(), 0.0);
        tl1.add(animateOutDisplayNone_layout($(".page8_bg_layout")).play(), 0.0);        
        tl1.add(animateOutDisplayBlock_layout($(".page9_bg_layout")).play(), 0.0);

        tl1.add(animateDown1($(".Screen8_1Head"), 0).play(), 0.5);
        tl1.add(animateDown1($(".s8_txt1"), 0).play(), 1.5);
        tl1.add(animateDown1($(".s8_img1"), 0).play(), 2.5);
        tl1.add(animateDown1($(".s8_img2"), 0).play(), 3.0);
    }

    else if (currentPage == 9) {

        try {
            audioTrack.pause();
            audioTrack.currentTime = 0;
            audioTrack1.pause();
            audioTrack1.currentTime = 0;
        } catch (err) {
        }

        audioTrack = document.getElementById('audio9');
        audioTrack.play();

        if (tl1) {
            tl1.totalProgress(1).kill();
        }
        tl1 = new TimelineLite({
            onComplete: function () { }
        });

        tl1.add(animateOutDisplayBlock_layout($(".page8_bg_layout")).play(), 0.0);
        tl1.add(animateOutDisplayNone_layout($(".page9_bg_layout")).play(), 0.0);        
        tl1.add(animateOutDisplayBlock_layout($(".page10_bg_layout")).play(), 0.0);

        tl1.add(animateDown1($(".Screen9_1Head"), 0).play(), 0.5);
        tl1.add(animateDown1($(".s9_txt1"), 0).play(), 1.5);
        tl1.add(animateDown1($(".s9_img2"), 0).play(), 2.5);
        tl1.add(animateDown1($(".s9_img7"), 0).play(), 2.8);
        tl1.add(animateDown1($(".s9_img13"), 0).play(), 3.1);
        tl1.add(animateDown1($(".s9_img9"), 0).play(), 3.4);
        tl1.add(animateDown1($(".s9_img11"), 0).play(), 3.7);
        tl1.add(animateDown1($(".s9_img1"), 0).play(), 4.0);
        tl1.add(animateDown1($(".s9_img5"), 0).play(), 4.3);
        tl1.add(animateDown1($(".s9_img16"), 0).play(), 4.6);
        tl1.add(animateDown1($(".s9_img4"), 0).play(), 4.9);
        tl1.add(animateDown1($(".s9_img8"), 0).play(), 5.2);
        tl1.add(animateDown1($(".s9_img14"), 0).play(), 5.5);
        tl1.add(animateDown1($(".s9_img10"), 0).play(), 5.8);
        tl1.add(animateDown1($(".s9_img12"), 0).play(), 6.1);
        tl1.add(animateDown1($(".s9_img3"), 0).play(), 6.4);
        tl1.add(animateDown1($(".s9_img6"), 0).play(), 6.7);
        tl1.add(animateDown1($(".s9_img15"), 0).play(), 7.0);
    }

    else if (currentPage == 10) {

        try {
            audioTrack.pause();
            audioTrack.currentTime = 0;
            audioTrack1.pause();
            audioTrack1.currentTime = 0;
        } catch (err) {
        }

        audioTrack = document.getElementById('audio10');
        audioTrack.play();

        if (tl1) {
            tl1.totalProgress(1).kill();
        }
        tl1 = new TimelineLite({
            onComplete: function () { }
        });

        tl1.add(animateOutDisplayBlock_layout($(".page9_bg_layout")).play(), 0.0);
        tl1.add(animateOutDisplayNone_layout($(".page10_bg_layout")).play(), 0.0);        
        tl1.add(animateOutDisplayBlock_layout($(".page11_bg_layout")).play(), 0.0);

        tl1.add(animateScaleMobiledecrees($(".s10_img1"), 0).play(), 0.0);
        tl1.add(animateScaleMobiledecrees($(".s10_img2"), 0).play(), 0.0);
        tl1.add(animateDown1($(".Screen10_1Head"), 0).play(), 0.5);

        tl1.add(animateScale($(".s10_img1"), 0).play(), 1.0);
        tl1.add(animateScale($(".s10_img2"), 0).play(), 1.0);


        tl1.add(animateFlipImagesqu($(".s10_img1")).play(), 3.0);
        tl1.add(animateFlipImagesqu($(".s10_img2")).play(), 3.0);

        tl1.add(animateFlipreset($(".s10_img1")).play(), 6.0);
        tl1.add(animateFlipreset($(".s10_img2")).play(), 6.0);


        tl1.add(animateFlipImagesqu($(".s10_img1")).play(), 9.0);
        tl1.add(animateFlipImagesqu($(".s10_img2")).play(), 9.0);




    }

    else if (currentPage == 11) {
        try {
            audioTrack.pause();
            audioTrack.currentTime = 0;
            audioTrack1.pause();
            audioTrack1.currentTime = 0;
        } catch (err) {
        }

        audioTrack = document.getElementById('audio11');
        audioTrack.play();
        $(".sld_11_fb1,.sld_11_fb2").css("display", "none");
        $(".qus1,.qus2").removeClass("flash2");
        $(".s11part2").css("display", "table");
        if (tl1) {
            tl1.totalProgress(1).kill();
        }
        tl1 = new TimelineLite({
            onComplete: function () {
                $(".qus1,.qus2").addClass("flash2");
            }
        });


        tl1.add(animateOutDisplayBlock_layout($(".page10_bg_layout")).play(), 0.0);
        tl1.add(animateOutDisplayNone_layout($(".page11_bg_layout")).play(), 0.0);        
        tl1.add(animateOutDisplayBlock_layout($(".page12_bg_layout")).play(), 0.0);

        tl1.add(animateAddAipha($(".sld_11_txt1"), 0, 1).play(), 0.5);
        tl1.add(animateAddAipha($(".sld_11_txt2"), 0, 1).play(), 0.5);
        tl1.add(animateAddAipha($(".sld_11_txt3"), 0, 1).play(), 1.5);
        tl1.add(animateAddAipha($(".qua1_txt"), 0, 1).play(), 2.0);
        tl1.add(animateAddAipha($(".qua2_txt"), 0, 1).play(), 2.5);

    }
    else if (currentPage == 12) {
        try {
            audioTrack.pause();
            audioTrack.currentTime = 0;
            audioTrack1.pause();
            audioTrack1.currentTime = 0;
        } catch (err) {
        }
        $(".sld12_txt1").css("opacity", "0")
        audioTrack = document.getElementById('audio12');
        audioTrack.play();

        if (tl1) {
            tl1.totalProgress(1).kill();
        }
        tl1 = new TimelineLite({
            onComplete: function () {

            }
        });

        tl1.add(animateOutDisplayBlock_layout($(".page11_bg_layout")).play(), 0.0);
        tl1.add(animateOutDisplayNone_layout($(".page12_bg_layout")).play(), 0.0);        
        tl1.add(animateOutDisplayBlock_layout($(".page13_bg_layout")).play(), 0.0);

        tl1.add(animateAddAipha($(".sld12_txt1"), 0, 1).play(), 0.2);
        tl1.add(animateAddAipha($(".sld12_txt2"), 0, 1).play(), 2.5);
        tl1.add(animateAddAipha($(".s12_img2"), 0, 1).play(), 4.0);
        tl1.add(animateFlipImagesqu($(".s12_img2 img")).play(), 4.0);
        tl1.add(animateAddAipha($(".s12_img1"), 0, 1).play(), 5.0);
        tl1.add(animateFlipImagesqu($(".s12_img1 img")).play(), 5.0);
        tl1.add(animateAddAipha($(".s12_img3"), 0, 1).play(), 6.0);
        tl1.add(animateFlipImagesqu($(".s12_img3 img")).play(), 6.0);
    }


    else if (currentPage == 13) {
        try {
            audioTrack.pause();
            audioTrack.currentTime = 0;
            audioTrack1.pause();
            audioTrack1.currentTime = 0;
        } catch (err) {
        }

        audioTrack = document.getElementById('audio13');
        audioTrack.play();

        if (tl1) {
            tl1.totalProgress(1).kill();
        }
        tl1 = new TimelineLite({
            onComplete: function () {

            }
        });

        tl1.add(animateOutDisplayBlock_layout($(".page12_bg_layout")).play(), 0.0);
        tl1.add(animateOutDisplayNone_layout($(".page13_bg_layout")).play(), 0.0);        
        tl1.add(animateOutDisplayBlock_layout($(".page14_bg_layout")).play(), 0.0);

        tl1.add(animateAddAipha($(".sld13_txt1"), 0, 1).play(), 0.2);
        tl1.add(animateAddAipha($(".sld13_txt2"), 0, 1).play(), 0.2);

        tl1.add(animateAddAipha($(".sld13_img1"), 0, 1).play(), 1.5);

        tl1.add(animateAddAipha($(".sld13_img11 img"), 0, 1).play(), 3.0);
        tl1.add(animateInLeft_1($(".sld13_img12 img"), -130).play(), 4.0);
        tl1.add(animateInLeft_1($(".sld13_img13 img"), -130).play(), 5.0);

        tl1.add(animateDown($(".sld13_img21 img"), -70).play(), 9.5);
        tl1.add(animateDown($(".sld13_img22 img"), -70).play(), 10.0);
        tl1.add(animateDown($(".sld13_img23 img"), -70).play(), 10.5);
    }

    else if (currentPage == 14) {
        try {
            audioTrack.pause();
            audioTrack.currentTime = 0;
            audioTrack1.pause();
            audioTrack1.currentTime = 0;
        } catch (err) {
        }

        audioTrack = document.getElementById('audio14');
        audioTrack.play();
        $(".sld_14_fb1,.sld_14_fb2").css("display", "none");
        $(".s14qus1,.s14qus2").removeClass("flash2");
        $(".s14part2").css("display", "table");
        if (tl1) {
            tl1.totalProgress(1).kill();
        }
        tl1 = new TimelineLite({
            onComplete: function () {
                $(".s14qus1,.s14qus2").addClass("flash2");
            }
        });
        tl1.add(animateOutDisplayBlock_layout($(".page13_bg_layout")).play(), 0.0);
        tl1.add(animateOutDisplayNone_layout($(".page14_bg_layout")).play(), 0.0);        
        tl1.add(animateOutDisplayBlock_layout($(".page15_bg_layout")).play(), 0.0);

        tl1.add(animateAddAipha($(".sld_14_txt1"), 0, 1).play(), 0.5);
        tl1.add(animateAddAipha($(".sld_14_txt2"), 0, 1).play(), 0.5);
        tl1.add(animateAddAipha($(".sld_14_txt3"), 0, 1).play(), 1.5);
        tl1.add(animateAddAipha($(".s14qua1_txt"), 0, 1).play(), 2.0);
        tl1.add(animateAddAipha($(".s14qua2_txt"), 0, 1).play(), 2.5);

    }

    else if (currentPage == 15) {

        try {
            audioTrack.pause();
            audioTrack.currentTime = 0;
            audioTrack1.pause();
            audioTrack1.currentTime = 0;
        } catch (err) {
        }

        audioTrack = document.getElementById('audio15');
        audioTrack.play();

        if (tl1) {
            tl1.totalProgress(1).kill();
        }
        tl1 = new TimelineLite({
            onComplete: function () { }
        });

        tl1.add(animateOutDisplayBlock_layout($(".page14_bg_layout")).play(), 0.0);
        tl1.add(animateOutDisplayNone_layout($(".page15_bg_layout")).play(), 0.0);        
        tl1.add(animateOutDisplayBlock_layout($(".page16_bg_layout")).play(), 0.0);


        tl1.add(animateScaleMobiledecrees($(".s15_txt2"), 0).play(), 0.0);
        tl1.add(animateScaleMobiledecrees($(".s15_img1"), 0).play(), 0.0);
        tl1.add(animateScaleMobiledecrees($(".s15_txt4"), 0).play(), 0.0);
        tl1.add(animateScaleMobiledecrees($(".s15_img2"), 0).play(), 0.0);
        tl1.add(animateDown1($(".Screen15_1Head"), 0).play(), 0.5);
        tl1.add(animateDown1($(".s15_txt1"), 0).play(), 3.5);

        tl1.add(animateScaleFA($(".s15_txt2"), 0).play(), 7.0);
        tl1.add(animateScaleFA($(".s15_img1"), 0).play(), 7.0);
        tl1.add(animateDown1($(".s15_txt3"), 0).play(), 7.5);

        tl1.add(animateScaleFA($(".s15_txt4"), 0).play(), 8.5);
        tl1.add(animateScaleFA($(".s15_img2"), 0).play(), 8.5);
        tl1.add(animateDown1($(".s15_txt5"), 0).play(), 9.5);
    }

    else if (currentPage == 16) {

        try {
            audioTrack.pause();
            audioTrack.currentTime = 0;
            audioTrack1.pause();
            audioTrack1.currentTime = 0;
        } catch (err) {
        }

        audioTrack = document.getElementById('audio16');
        audioTrack.play();

        if (tl1) {
            tl1.totalProgress(1).kill();
        }
        tl1 = new TimelineLite({
            onComplete: function () { }
        });

        tl1.add(animateOutDisplayBlock_layout($(".page15_bg_layout")).play(), 0.0);
        tl1.add(animateOutDisplayNone_layout($(".page16_bg_layout")).play(), 0.0);        
        tl1.add(animateOutDisplayBlock_layout($(".page17_bg_layout")).play(), 0.0);


        tl1.add(animateDown1($(".Screen16_1Head"), 0).play(), 0.5);
        tl1.add(animateDown1($(".s16_txt1"), 0).play(), 1.5);

        $(".s16_f_bg").css("top", "69px");
        tl1.add(animateDownTxt($(".s16_f_bg"), 0).play(), 2.0);

        $(".s16_f_abbr").css("left", "-47px");
        $(".s16_f_abbr").css("opacity", "0");
        tl1.add(animateOutLeftWord($(".s16_f_abbr"), 0).play(), 2.5);

        $(".s16_a_bg").css("top", "69px");
        tl1.add(animateDownTxt($(".s16_a_bg"), 0).play(), 3.0);

        $(".s16_a_abbr").css("left", "-47px");
        $(".s16_a_abbr").css("opacity", "0");
        tl1.add(animateOutLeftWord($(".s16_a_abbr"), 0).play(), 3.5);

        $(".s16_b_bg").css("top", "69px");
        tl1.add(animateDownTxt($(".s16_b_bg"), 0).play(), 4.0);

        $(".s16_b_abbr").css("left", "-47px");
        $(".s16_b_abbr").css("opacity", "0");
        tl1.add(animateOutLeftWord($(".s16_b_abbr"), 0).play(), 4.5);
    }

    else if (currentPage == 17) {
        try {
            audioTrack.pause();
            audioTrack.currentTime = 0;
            audioTrack1.pause();
            audioTrack1.currentTime = 0;
        } catch (err) {
        }

        audioTrack = document.getElementById('audio17');
        audioTrack.play();

       
        if (tl1) {
            tl1.totalProgress(1).kill();
        }
        tl1 = new TimelineLite({
            onComplete: function () {

            }
        });


        $("cover1").css("opacity", "1");
        tl1.add(animateOutDisplayBlock_layout($(".page16_bg_layout")).play(), 0.0);
        tl1.add(animateOutDisplayNone_layout($(".page17_bg_layout")).play(), 0.0);        
        tl1.add(animateOutDisplayBlock_layout($(".page18_bg_layout")).play(), 0.0);




        tl1.add(animateAddAipha($(".sld_17_txt1"), 0, 1).play(), 0.5);
        tl1.add(animateAddAipha11($(".sld_17_img11"), 0, 1).play(), 1.2);
        tl1.add(animateDown_fast($(".cover1"), -70).play(), 1.0);
        tl1.add(animateOut($(".cover1")).play(), 2.0);
        tl1.add(animateInLeft_2($(".sld_17_txt2 span"), -50).play(), 2.1);
        tl1.add(animateInLeft_1($(".sld_17_img22"), -200).play(), 5.0);
        tl1.add(animateClockRotation($(".s17img1 img"), -200).play(), 5.0);
        tl1.add(animateAddAipha($(".sld_17_img3"), 0, 1).play(), 17.5);
        tl1.add(animateAddAipha($(".sld_17_img4"), 0, 1).play(), 17.5);
    }

    else if (currentPage == 18) {
        try {
            audioTrack.pause();
            audioTrack.currentTime = 0;
            audioTrack1.pause();
            audioTrack1.currentTime = 0;
        } catch (err) {
        }

        audioTrack = document.getElementById('audio18');
        audioTrack.play();
		
        if (tl1) {
            tl1.totalProgress(1).kill();
        }
        tl1 = new TimelineLite({
            onComplete: function () {

            }
        });
        tl1.add(animateOutDisplayBlock_layout($(".page17_bg_layout")).play(), 0.0);
        tl1.add(animateOutDisplayNone_layout($(".page18_bg_layout")).play(), 0.0);        
        tl1.add(animateOutDisplayBlock_layout($(".page19_bg_layout")).play(), 0.0);


        tl1.add(animateAddAipha($(".Screen18_1Head"), 0, 1).play(), 0.5);
        $(".s18_a_bg").css("top", "-164px");
        tl1.add(animateOutLeftWordTop1($(".s18_a_bg"), 340).play(), 1.5);

        tl1.add(animateAddAipha11($(".sld_18_img11"), 0, 1).play(), 1.2);
        tl1.add(animateDown_fast($(".cover1"), -70).play(), 1.0);
        tl1.add(animateOut($(".cover1")).play(), 2.0);
        tl1.add(animateInLeft_2($(".sld_18_txt2 span"), -50).play(), 2.1);
		$(".ldr2cvr").css("height","1px");
        tl1.add(animateLadder1($(".ldr2cvr"), 216).play(), 2);
		$(".ldr1cvr").css("height","1px");
        tl1.add(animateLadder1($(".ldr1cvr"), 216).play(), 4.5);
		$(".ldr3cvr").css("height","1px");
        tl1.add(animateLadder1($(".ldr3cvr"), 216).play(), 5.5);
		$(".ldr4cvr").css("height","1px");
        tl1.add(animateLadder1($(".ldr4cvr"), 216).play(), 2.5);
		$(".ldr5cvr").css("height","1px");
        tl1.add(animateLadder1($(".ldr5cvr"), 216).play(), 6.5);
		$(".ldr6cvr").css("height","1px");
        tl1.add(animateLadder1($(".ldr6cvr"), 216).play(), 4);
		$(".ldr7cvr").css("height","1px");
        tl1.add(animateLadder1($(".ldr7cvr"), 216).play(), 6);
		$(".ldr8cvr").css("height","1px"); 
        tl1.add(animateLadder1($(".ldr8cvr"), 216).play(), 3.5);
		$(".ldr9cvr").css("height","1px");
        tl1.add(animateLadder1($(".ldr9cvr"), 216).play(), 7);
		$(".ldr10cvr").css("height","1px");
        tl1.add(animateLadder1($(".ldr10cvr"), 216).play(), 5);
		$(".ldr11cvr").css("height","1px");
        tl1.add(animateLadder1($(".ldr11cvr"), 216).play(), 3);
        $(".ldr12cvr").css("height","1px");
        tl1.add(animateLadder1($(".ldr12cvr"), 216).play(), 6.5);
        
		
		$("#s18ldr").css("left","360px");
        tl1.add(animateLadder12($("#s18ldr"), 1).play(), 12);
        tl1.add(animateLadder13($("#s18ldr"), 1).play(), 12);
        
       
      
        tl1.add(animateInLeft_1($(".sld_18_img22"), -200).play(), 12.0);
        tl1.add(animateClockRotation1($(".s18img1 img"), -200).play(), 12.0);
        tl1.add(animateAddAipha($(".sld_18_img3"), 0, 1).play(), 14.3);
	}
    else if (currentPage == 19) {

        try {
            audioTrack.pause();
            audioTrack.currentTime = 0;
            audioTrack1.pause();
            audioTrack1.currentTime = 0;
        } catch (err) {
        }

        audioTrack = document.getElementById('audio19');
        audioTrack.play();

        if (tl1) {
            tl1.totalProgress(1).kill();
        }
        tl1 = new TimelineLite({
            onComplete: function () { }
        });

        tl1.add(animateOutDisplayBlock_layout($(".page18_bg_layout")).play(), 0.0);
        tl1.add(animateOutDisplayNone_layout($(".page19_bg_layout")).play(), 0.0);        
        tl1.add(animateOutDisplayBlock_layout($(".page20_bg_layout")).play(), 0.0);

        tl1.add(animateScaleMobiledecrees($(".s19_15"), 1).play(), 0.0);
        tl1.add(animateDown1($(".Screen19_1Head"), 0).play(), 0.5);
        $(".s19_b_bg").css("top", "0px");
        tl1.add(animateDownTxtB($(".s19_b_bg"), 0).play(), 1.5);

        $(".s19_b_abbr").css("left", "-47px");
        $(".s19_b_abbr").css("opacity", "0");
        tl1.add(animateOutLeftWord($(".s19_b_abbr"), 0).play(), 2.0);

        tl1.add(animateOutDisplayNone($(".s19_b_bg"), 0).play(), 2.5);

        tl1.add(animateIn($(".sld19_img1"), 0).play(), 5.0);

        tl1.add(animateOut($(".sld19_img1"), 0).play(), 10.5);
        tl1.add(animateIn($(".sld19_img2"), 0).play(), 11.0);

        tl1.add(animateOut($(".sld19_img2"), 0).play(), 12.5);
        tl1.add(animateIn($(".sld19_img3"), 0).play(), 13.0);

        $(".s19_txt1").css("left", "12px");
        $(".s19_txt1").css("top", "10px");
        $(".s19_txt1").css("opacity", "0");
        tl1.add(animateOutLeftWord1($(".s19_txt1"), 120).play(), 14.5);
        tl1.add(animateOutLeftWordTop1($(".s19_txt1"), 280).play(), 15.5);

        $(".s19_txt2").css("left", "12px");
        $(".s19_txt2").css("top", "-16px");
        $(".s19_txt2").css("opacity", "0");
        tl1.add(animateOutLeftWord1($(".s19_txt2"), 118).play(), 16.5);
        tl1.add(animateOutLeftWordTop1($(".s19_txt2"), 203).play(), 17.5);

        $(".s19_txt3").css("left", "12px");
        $(".s19_txt3").css("top", "-40px");
        $(".s19_txt3").css("opacity", "0");
        tl1.add(animateOutLeftWord1($(".s19_txt3"), 104).play(), 18.0);
        tl1.add(animateOutLeftWordTop1($(".s19_txt3"), 125).play(), 19.0);


        $(".s19_img_grp").css("top", "-100px");
        tl1.add(animateOutLeftWordTop1($(".s19_img_grp"), -150).play(), 21.5);
        tl1.add(animateOutDisplayNone($(".s19_txt1"), 0).play(), 21.5);
        tl1.add(animateOutDisplayNone($(".s19_txt2"), 0).play(), 21.5);
        tl1.add(animateOutDisplayNone($(".s19_txt3"), 0).play(), 21.5);

        $(".s19_15").css("top", "-90px");
        tl1.add(animateOutLeftWordTop1($(".s19_15"), 80).play(), 24.0);
        tl1.add(animateScale($(".s19_15"), 1).play(), 24.0);
        
    }else if (currentPage == 20){
        try{
            audioTrack.pause();
            audioTrack.currentTime = 0; 
            audioTrack1.pause();
            audioTrack1.currentTime = 0;
          }catch(err){ 
          }
          
          audioTrack = document.getElementById('audio20');
          audioTrack.play();
        
          if (tl1) {
              tl1.totalProgress(1).kill();
          }
          tl1 = new TimelineLite({
              onComplete : function(){
                 
              }
          });
        tl1.add(animateOutDisplayBlock_layout($(".page19_bg_layout")).play(), 0.0);
        tl1.add(animateOutDisplayNone_layout($(".page20_bg_layout")).play(), 0.0);        
        tl1.add(animateOutDisplayBlock_layout($(".page21_bg_layout")).play(), 0.0);


        tl1.add(animateAddAipha($(".sld_20_txt1"),0,1).play(),  0.1);
        tl1.add(animateAddAipha($(".sld_20_txt2"),0,1).play(),  0.5);
        
        tl1.add(animateAddAipha($(".f"),0,1).play(),  0.7);
        tl1.add(animateAddAipha($(".shad1"),0,1).play(),  0.7);
        tl1.add(animateDown_fast($(".wrap1"),-90).play(), 0.7); 
        tl1.add(animateAddAipha($(".a"),0,1).play(),  1.2);
        tl1.add(animateAddAipha($(".shad2"),0,1).play(),  1.2);  
        tl1.add(animateDown_fast($(".wrap2"),-90).play(), 1.2);
        tl1.add(animateAddAipha($(".b"),0,1).play(),  1.7);
        tl1.add(animateAddAipha($(".shad3"),0,1).play(),  1.7);
        tl1.add(animateDown_fast($(".wrap3"),-90 ).play(), 1.7);
        tl1.add(animateAddAipha($(".sld_20_txt4"),0,1).play(),  2.2);
        
        tl1.add(animateOut($(".f")).play(), 5.0);
        tl1.add(animateOut($(".shad1")).play(), 5.0);
        tl1.add(animateOut($(".wrap1")).play(), 5.0);
        tl1.add(animateOut($(".a")).play(), 5.0);
        tl1.add(animateOut($(".shad2")).play(), 5.0);
        tl1.add(animateOut($(".wrap2")).play(),5.0);
        tl1.add(animateOut($(".b")).play(), 5.0);
        tl1.add(animateOut($(".shad3")).play(), 5.0);
        tl1.add(animateOut($(".wrap3")).play(), 5.0);
        tl1.add(animateOut($(".sld_20_txt2")).play(), 5.0);
        tl1.add(animateOut($(".sld_20_txt4")).play(), 5.0);
        
        tl1.add(animateAddAipha($(".initl1"),0,1).play(), 6.0);
        tl1.add(animateAddAipha($(".shad5"),0,1).play(), 6.0);
        tl1.add(animateAddAipha($(".initl2"),0,1).play(), 6.3);
        tl1.add(animateAddAipha($(".shad6"),0,1).play(), 6.3);
        tl1.add(animateAddAipha($(".initl3"),0,1).play(), 6.6);
        tl1.add(animateAddAipha($(".shad7"),0,1).play(), 6.6);
        
        tl1.add(animateInLeft_2($(".expns1"),-50).play(), 7.0);
        tl1.add(animateAddAipha($(".scndhf1"),0,1).play(), 7.2);
        
        tl1.add(animateInLeft_2($(".expns2"),-50).play(), 10.0);
        tl1.add(animateAddAipha($(".scndhf2"),0,1).play(), 10.2);
        
        tl1.add(animateInLeft_2($(".expns3"),-50).play(), 13.0);
        tl1.add(animateAddAipha($(".scndhf3"),0,1).play(), 13.2);
        
        
    }
    else if (currentPage == 21) {

        try {
            audioTrack.pause();
            audioTrack.currentTime = 0;
            audioTrack1.pause();
            audioTrack1.currentTime = 0;
        } catch (err) {
        }

        audioTrack = document.getElementById('audio21');
        audioTrack.play();

        if (tl1) {
            tl1.totalProgress(1).kill();
        }
        tl1 = new TimelineLite({
            onComplete: function () { }
        });

        tl1.add(animateOutDisplayBlock_layout($(".page20_bg_layout")).play(), 0.0);
        tl1.add(animateOutDisplayNone_layout($(".page21_bg_layout")).play(), 0.0);        
        tl1.add(animateOutDisplayBlock_layout($(".page22_bg_layout")).play(), 0.0);


        tl1.add(animateDown1($(".Screen21_1Head"), 0).play(), 0.5);
        tl1.add(animateDown1($(".s21_txt1"), 0).play(), 4.5);

        $(".s21_a_bg").css("top", "69px");
        tl1.add(animateDownAIDA($(".s21_a_bg"), 0).play(), 5.0);

        $(".s21_a_abbr").css("left", "-47px");
        $(".s21_a_abbr").css("opacity", "0");
        tl1.add(animateOutLeftWord($(".s21_a_abbr"), 0).play(), 5.5);

        $(".s21_i_bg").css("top", "69px");
        tl1.add(animateDownAIDA($(".s21_i_bg"), 0).play(), 8.5);

        $(".s21_i_abbr").css("left", "-47px");
        $(".s21_i_abbr").css("opacity", "0");
        tl1.add(animateOutLeftWord($(".s21_i_abbr"), 0).play(), 9.0);

        $(".s21_d_bg").css("top", "69px");
        tl1.add(animateDownAIDA($(".s21_d_bg"), 0).play(), 13.0);

        $(".s21_d_abbr").css("left", "-47px");
        $(".s21_d_abbr").css("opacity", "0");
        tl1.add(animateOutLeftWord($(".s21_d_abbr"), 0).play(), 13.5);

        $(".s21_aa_bg").css("top", "69px");
        tl1.add(animateDownAIDA($(".s21_aa_bg"), 0).play(), 18.0);

        $(".s21_aa_abbr").css("left", "-47px");
        $(".s21_aa_abbr").css("opacity", "0");
        tl1.add(animateOutLeftWord($(".s21_aa_abbr"), 0).play(), 18.5);
    }


    else if (currentPage == 22) {

        try {
            audioTrack.pause();
            audioTrack.currentTime = 0;
            audioTrack1.pause();
            audioTrack1.currentTime = 0;
        } catch (err) {
        }

        audioTrack = document.getElementById('audio22');
        audioTrack.play();
        
        if (tl1) {
            tl1.totalProgress(1).kill();
        }
        tl1 = new TimelineLite({
            onComplete: function () { }
        });

        audioTrack.addEventListener('ended', function () {
            $(".s22_dummy_layout").css("display","none");
        });
        tl1.add(animateOutDisplayBlock_layout($(".page21_bg_layout")).play(), 0.0);
        tl1.add(animateOutDisplayNone_layout($(".page22_bg_layout")).play(), 0.0);        
        tl1.add(animateOutDisplayBlock_layout($(".page23_bg_layout")).play(), 0.0);


        if (AFlag == false && IFlag == false && DFlag == false && AAFlag == false) {
            $(".s22_dummy_layout").css("display","block");
            $(".s22_a_grp,.s22_i_grp,.s22_d_grp,.s22_aa_grp").removeClass("flash3");
            
            $(".s22_a_click").css("display", "none");
            $(".s22_i_click").css("display", "none");
            $(".s22_d_click").css("display", "none");
            $(".s22_aa_click").css("display", "none");
            tl1.add(animateDown1($(".Screen22_1Head"), 0).play(), 0.5);
            tl1.add(animateDown1($(".s22_txt1"), 0).play(), 0.5);

            $(".s22_a_bg").css("top", "69px");
            tl1.add(animateIn($(".s22_a_grp"), 0).play(), 4.0);
            tl1.add(animateIn($(".s22_a_bg"), 0).play(), 4.0);
            tl1.add(animateIn($(".s22_a_txt"), 0).play(), 4.5);
            tl1.add(animateIn($(".s22_a_abbr"), 0).play(), 4.5);


            $(".s22_i_bg").css("top", "69px");
            tl1.add(animateIn($(".s22_i_grp"), 0).play(), 7.0);
            tl1.add(animateIn($(".s22_i_bg"), 0).play(), 7.0);
            tl1.add(animateIn($(".s22_i_txt"), 0).play(), 7.5);
            tl1.add(animateIn($(".s22_i_abbr"), 0).play(), 7.5);
            
           

            $(".s22_d_bg").css("top", "69px");
            tl1.add(animateIn($(".s22_d_grp"), 0).play(), 9.0);
            tl1.add(animateIn($(".s22_d_bg"), 0).play(), 9.0);
            tl1.add(animateIn($(".s22_d_txt"), 0).play(), 9.5);
            tl1.add(animateIn($(".s22_d_abbr"), 0).play(), 9.5);

            $(".s22_aa_bg").css("top", "69px");
            tl1.add(animateIn($(".s22_aa_grp"), 0).play(), 11.0);
            tl1.add(animateIn($(".s22_aa_bg"), 0).play(), 11.0);
            tl1.add(animateIn($(".s22_aa_txt"), 0).play(), 11.5);
            tl1.add(animateIn($(".s22_aa_abbr"), 0).play(), 11.5);
            setTimeout(function(){ $(".s22_a_grp,.s22_i_grp,.s22_d_grp,.s22_aa_grp").addClass("flash3");}, 12000);
            
        }

        if (AFlag == true) {


            
            try {
                audioTrack.pause();
                audioTrack.currentTime = 0;
                audioTrack1.pause();
                audioTrack1.currentTime = 0;
            } catch (err) {
            }
    
            audioTrack = document.getElementById('audio22_a');
            audioTrack.play();
            tl1.add(animateDown_aida($(".s22_a_click"), 0).play(), 0.1);
            tl1.add(animateDown_clkaida($(".click_s22_a_bg"),0).play(), 1.0);
            tl1.add(animateIn($(".click_s22_a_abbr"), 0).play(), 2.0);
            tl1.add(animateIn($(".click_s22_a_txt2"), 0).play(), 3.0);

        }

        if (IFlag == true) {

            try {
                audioTrack.pause();
                audioTrack.currentTime = 0;
                audioTrack1.pause();
                audioTrack1.currentTime = 0;
            } catch (err) {
            }
    
            audioTrack = document.getElementById('audio22_i');
            audioTrack.play();
            
            tl1.add(animateDown_aida($(".s22_i_click"), 0).play(), 0.1);
            tl1.add(animateDown_clkaida($(".click_s22_i_bg"),0).play(), 1.0);
            tl1.add(animateIn($(".click_s22_i_abbr"), 0).play(), 2.0);
            tl1.add(animateIn($(".click_s22_i_txt2"), 0).play(), 3.0);
            

        }

        if (DFlag == true) {


            try {
                audioTrack.pause();
                audioTrack.currentTime = 0;
                audioTrack1.pause();
                audioTrack1.currentTime = 0;
            } catch (err) {
            }
    
            audioTrack = document.getElementById('audio22_d');
            audioTrack.play();
            tl1.add(animateDown_aida($(".s22_d_click"), 0).play(), 0.1);
            tl1.add(animateDown_clkaida($(".click_s22_d_bg"),0).play(), 1.0);
            tl1.add(animateIn($(".click_s22_d_abbr"), 0).play(), 2.0);
            tl1.add(animateIn($(".click_s22_d_txt2"), 0).play(), 3.0);

        }

        if (AAFlag == true) {

           
            try {
                audioTrack.pause();
                audioTrack.currentTime = 0;
                audioTrack1.pause();
                audioTrack1.currentTime = 0;
            } catch (err) {
            }
    
            audioTrack = document.getElementById('audio22_aa');
            audioTrack.play();
            tl1.add(animateDown_aida($(".s22_aa_click"), 0).play(), 0.1);
            tl1.add(animateDown_clkaida($(".click_s22_aa_bg"),0).play(), 1.0);
            tl1.add(animateIn($(".click_s22_aa_abbr"), 0).play(), 2.0);
            tl1.add(animateIn($(".click_s22_aa_txt2"), 0).play(), 3.0);

        }


    }
    else if (currentPage == 23) {

         
        
        try {
            audioTrack.pause();
            audioTrack.currentTime = 0;
            audioTrack1.pause();
            audioTrack1.currentTime = 0;
        } catch (err) {
        }
         
        audioTrack = document.getElementById('audio23');
        audioTrack.play();
        
        navFlag = false;
        tl1.add(animateOutDisplayBlock_layout($(".page22_bg_layout")).play(), 0.0);
        tl1.add(animateOutDisplayNone_layout($(".page23_bg_layout")).play(), 0.0);  
        tl1.add(animateOutDisplayBlock_layout($(".page24_bg_layout")).play(), 0.0);      


         $('.s23_smt').prop('disabled', false);
         $(".s23_smt").css("background-color","#27ae61");
         $('.s23FB1,.s23FB2').css("display", "none");
        if (tl1) {
            tl1.totalProgress(1).kill();
        }

        tl1 = new TimelineLite({
            onComplete: function () {
            }
        });
        
        tl1.add(animateAddAipha($(".sld_23_txt1"), 0, 1).play(), 0.1);
        tl1.add(animateAddAipha($(".sld_23_txt2"), 0, 1).play(), 0.1);
        
        tl1.add(animateAddAipha($(".sld_23_txt3"), 0, 1).play(),1.0);
        
        tl1.add(animateAddAipha($("#3"), 0, 1).play(),1.5);
        tl1.add(animateAddAipha($("#1"), 0, 1).play(),1.7);
        tl1.add(animateAddAipha($("#4"), 0, 1).play(),1.9);
        tl1.add(animateAddAipha($("#2"), 0, 1).play(),2.1);
        tl1.add(animateAddAipha($(".smtbtn"), 0, 1).play(),4.1);
        


    }
    else if (currentPage == 24){
        try{
          audioTrack.pause();
          audioTrack.currentTime = 0; 
          audioTrack1.pause();
          audioTrack1.currentTime = 0;
        }catch(err){ 
        }
       navFlag = false; 
      $('.s24start').prop('disabled', true); $(".sld24_q1,.sld24_q2,.sld24_q3,.sld24_q4,.sld24_q5,.sld24_q5,.sld24_q6,.sld24_q7,.sld24_q8,.sld24_q9,.sld24_q10,.sld24_q11").css("display","none")
        audioTrack = document.getElementById('audio24');
        audioTrack.play();
      
        if (tl1) {
            tl1.totalProgress(1).kill();
        }
        tl1 = new TimelineLite({
            onComplete : function(){
               $('.s24start').prop('disabled', false);
            }
        });

        tl1.add(animateOutDisplayBlock_layout($(".page23_bg_layout")).play(), 0.0);
        tl1.add(animateOutDisplayNone_layout($(".page24_bg_layout")).play(), 0.0);  
        tl1.add(animateOutDisplayBlock_layout($(".page25_bg_layout")).play(), 0.0);  

      tl1.add(animateAddAipha($(".sld_24_txt1"),0,1).play(),  0.5);
      tl1.add(animateAddAipha($(".sld_24_txt2"),0,1).play(),  0.5);
      tl1.add(animateAddAipha($(".t241"),0,1).play(),  1.0);
      tl1.add(animateAddAipha($(".t242"),0,1).play(),  1.5);
      tl1.add(animateAddAipha($(".t243"),0,1).play(),  2.0);
      tl1.add(animateAddAipha($(".sld_24_start"),0,1).play(),  4.0);
  }
  else if (currentPage == 25) {

    try {
        audioTrack.pause();
        audioTrack.currentTime = 0;
        audioTrack1.pause();
        audioTrack1.currentTime = 0;
    } catch (err) {
    }

    audioTrack = document.getElementById('audio25');
    audioTrack.play();

    if (tl1) {
        tl1.totalProgress(1).kill();
    }
    tl1 = new TimelineLite({
        onComplete: function () { }
    });

    tl1.add(animateOutDisplayBlock_layout($(".page24_bg_layout")).play(), 0.0);
    tl1.add(animateOutDisplayNone_layout($(".page25_bg_layout")).play(), 0.0);
    tl1.add(animateAddAipha($(".s25_txt1"),0,1).play(),  1.0);
    tl1.add(animateAddAipha($(".s25_txt2"),0,1).play(),  3.5);
    



    $(".s25_arrow_grp").css("left", "-270px");
    $(".s25_arrow_grp").css("opacity", "0");
    tl1.add(animateOutLeftArrow($(".s25_arrow_grp"), 0).play(), 3.5);

    
    tl1.add(animateOut($(".s25_txt1"),0,1).play(),  5.5);
    tl1.add(animateOut($(".s25_txt2"),0,1).play(),  5.5);

    tl1.add(animateAddAipha($(".s25_ATB"),0,1).play(),  8.0);
    
}

}


/* --- page2 sortable ---- */

function sortableSubmitFn(){
    var sortableNo = 1;
    var sortFlag = true;
    $('#sortable > li').each(function () { 
        if(sortableNo == Number($(this).attr("id"))){}else{
            sortFlag = false;
        }
        sortableNo++;
    });
    if(sortFlag){

        $(".s23FB2").css("display","table");
        $('.s23_smt').prop('disabled', true);
        $(".s23_smt").css("background-color","#82868c");
        navFlag = true;
    }else{

        $(".s23FB1").css("display","table");

    }
}

function s23cls(ev){
$(".s23FB"+ev).css("display","none");
}
function blink(){
 $("#1,#2,#3,#4").removeClass("flash2");
}
/* ----------------------- */
var totalBtn = 8;
var ansArr = [1, 2, 4, 7];

function quiz(no) {
    if (!validateFlag) {
        if ($(".s3btn" + no + "div").hasClass("clicked")) {
            var src = $(".img" + no).attr("src", "assets/Images/screen_3/2.png");
            $(".s3txt" + no).css("color", "#ed841e");
            $(".s3btn" + no + "div").removeClass("clicked");
             $(".s3btn"+no+"div").addClass("flash2");
        }
        else {
            var src = $(".img" + no).attr("src", "assets/Images/screen_3/7.png");
            $(".s3txt" + no).css("color", "#fff");
            $(".s3btn" + no + "div").addClass("clicked");
          
            $(".s3btn"+no+"div").removeClass("flash2");
        }
        checkSubmit();
    }
}
function checkSubmit() {

    var checkFlag = false;

    for (var i = 1; i <= totalBtn; i++) {
        if ($(".s3btn" + i + "div").hasClass('clicked')) {
            checkFlag = true;
            break;
        }
    }

    if (checkFlag) {
        $(".s3txt9").css("opacity", "1");
        $(".btnrow5").css("opacity", "1");
        $(".btnrow5").addClass('active');
    } else {
        $(".s3txt9").css("opacity", "0.4");
        $(".btnrow5").css("opacity", "0.4");
        $(".btnrow5").removeClass('active');
    }
}
function crtanwser() {
    $(".s3btn1div,.s3btn2div,.s3btn3div,.s3btn4div,.s3btn5div,.s3btn6div,.s3btn7div,.s3btn8div").removeClass("flash2");
    if ($(".btnrow5").hasClass("active")) {

        var checkFlag = true;
        validateFlag = true;
        for (var i = 1; i <= totalBtn; i++) {

            if ($(".s3btn" + i + "div").hasClass('clicked')) {

                var checkCorrentOptn = false;
                for (var j = 0; j < ansArr.length; j++) {
                    if (i == ansArr[j]) {
                        checkCorrentOptn = true;
                        break;
                    }
                }
                if (!checkCorrentOptn) {
                    checkFlag = false;
                    break;
                }

            } else {
                for (var j = 0; j < ansArr.length; j++) {
                    if (i == ansArr[j]) {
                        checkFlag = false;
                        break;
                    }
                }
            }
        }

        if (checkFlag) {
            $(".s3btngrp").css("display", "none");
            $(".s3btngrpa").css("display", "block");
            $(".btnrow5a").css("display", "block");
            $(".btnrow5ashow").css("display", "none");
        }
        else {
            $(".Screen3_1Head").css("display", "none");
            $(".btngrp_err").css("display", "block");
            $(".show_tryrow").css("display", "block");
            $(".btnrow5").css("opacity", "0");
        }
    }
}
function showans() {
    for (var i = 1; i <= totalBtn; i++) {
        $(".img" + i).attr("src", "assets/Images/screen_3/2.png");
        $(".s3txt" + i).css("color", "#ed841e");
        $(".s3btn" + i + "div").removeClass("clicked");
    }
    $(".s3btngrp").css("display", "none");
    $(".show_tryrow").css("display", "none");
    $(".s3btngrpa").css("display", "block");
    $(".btnrow5ashow").css("display", "block");
}

function resetQus() {
    for (var i = 1; i <= totalBtn; i++) {
        $(".img" + i).attr("src", "assets/Images/screen_3/2.png");
        $(".s3txt" + i).css("color", "#ed841e");
        $(".s3btn" + i + "div").removeClass("clicked");
    }
    $(".s3txt9").css("opacity", "0.4");
    $(".btnrow5").css("opacity", "0.4");
    $(".Screen3_1Head").css("display", "block");
    $(".show_tryrow").css("display", "none");
    $(".btngrp_err").css("display", "none");
    $(".btnrow5").removeClass('active');
    
    $(".s3btnEle").removeClass("flash2");
    
    setTimeout(function(){
        $(".s3btnEle").addClass("flash2");
    }, 500);

    validateFlag = false;
}

function init(){
       if (tl1) {
            tl1.totalProgress(1).kill();
        }
        tl1 = new TimelineLite({
            onComplete: function () { 
            
                 $(".start_splash").css("display","none"); 
                  animation();                   
                  navFlag = true;
                  
            
            }
        });
   $(".strt_log img").css("top","0");
   $(".stbtn").css("display","none"); 
    tl1.add(animateDown33($(".strt_log img")).play(), 0.1);
}
// -----------page4-----------
var greenFlag = false;
var blueFlag = false;
var yellowFlag = false;
var redFlag = false;

function what_click_c() {
    $(".s4click_what_c").css("display", "block");
    greenFlag = true;
    animation();

    try {
        audioTrack.currentTime = 0;
    } catch (err) {
    }
}
function who_click_c() {
    $(".s4click_who_c").css("display", "block");
    blueFlag = true;
    animation();

    try {
        audioTrack.currentTime = 0;
    } catch (err) {
    }
}
function when_click_c() {
    $(".s4click_when_c").css("display", "block");
    yellowFlag = true;
    animation();

    try {
        audioTrack.currentTime = 0;
    } catch (err) {
    }
}
function how_click_c() {
    $(".s4click_how_c").css("display", "block");
    redFlag = true;
    animation();

    try {
        audioTrack.currentTime = 0;
    } catch (err) {
    }
}


function what_click_quitc() {
    $(".s4click_what_c").css("display", "none");
    greenFlag = false;
    $(".s4img_green").removeClass("flash2");
    try {
        audioTrack.pause();
        audioTrack1.pause();
      
    } catch (err) {
    }
}
function who_click_quitc() {
    $(".s4click_who_c").css("display", "none");
    blueFlag = false;
    $(".s4img_blue").removeClass("flash2");
    try {
        audioTrack.pause();
        audioTrack1.pause();
      
    } catch (err) {
    }
}
function when_click_quitc() {
    $(".s4click_when_c").css("display", "none");
    yellowFlag = false;
    $(".s4img_yellow").removeClass("flash2");
    try {
        audioTrack.pause();
        audioTrack1.pause();
      
    } catch (err) {
    }
}
function how_click_quitc() {
    $(".s4click_how_c").css("display", "none");
    redFlag = false;
    $(".s4img_red").removeClass("flash2");
    try {
        audioTrack.pause();
        audioTrack1.pause();
      
    } catch (err) {
    }
}

// -----------page4-----------

// -----------page4-----------
function s8_click1() {
    $(".s8_click1").css("display", "block");
    $(".s8_img1").css("display", "none");
    $(".s8_img2").css("display", "none");
}
function s8_click2() {
    $(".s8_click2").css("display", "block");
    $(".s8_img1").css("display", "none");
    $(".s8_img2").css("display", "none");
}

// -----------page4-----------
// -----------page11-----------
function sld11Qiz(er) {
    $(".sld_11_fb" + er).css("display", "table");
    $(".s11part2").css("display", "none")
}
// -----------page11-----------
// -----------page14-----------
function sld14Qiz(ev) {
    $(".sld_14_fb" + ev).css("display", "table");
    $(".s14part2").css("display", "none")
}
// -----------page14-----------
// -----------page22--------
var AFlag = false;
var IFlag = false;
var DFlag = false;
var AAFlag = false;

function s22_a_quit() {
    $(".s22_a_click").css("display", "none");
    try {
        audioTrack.pause();
        audioTrack1.pause();
      
    } catch (err) {
    }
    AFlag = false;
}

function s22_i_quit() {
    $(".s22_i_click").css("display", "none");
    try {
        audioTrack.pause();
        audioTrack1.pause();
      
    } catch (err) {
    }
    IFlag = false;
}

function s22_d_quit() {
    $(".s22_d_click").css("display", "none");
    try {
        audioTrack.pause();
        audioTrack1.pause();
      
    } catch (err) {
    }
    DFlag = false;
}

function s22_aa_quit() {
    $(".s22_aa_click").css("display", "none");
    try {
        audioTrack.pause();
        audioTrack1.pause();
      
    } catch (err) {
    }
    AAFlag = false;
}

function s22_a_click() {
    $(".s22_a_click").css("display", "block");
    AFlag = true;
    animation();
    $(".s22_a_grp").removeClass("flash3");
    try {
        audioTrack.currentTime = 0;
    } catch (err) {
    }
}
function s22_i_click() {
    $(".s22_i_click").css("display", "block");
    IFlag = true;
    animation();
     $(".s22_i_grp").removeClass("flash3");
    try {
        audioTrack.currentTime = 0;
    } catch (err) {
    }
}
function s22_d_click() {
    $(".s22_d_click").css("display", "block");
    DFlag = true;
    animation();
    $(".s22_d_grp").removeClass("flash3");
    try {
        audioTrack.currentTime = 0;
    } catch (err) {
    }
}
function s22_aa_click() {
    $(".s22_aa_click").css("display", "block");
    AAFlag = true;
    animation();
     $(".s22_aa_grp").removeClass("flash3");
    try {
        audioTrack.currentTime = 0;
    } catch (err) {
    }
}
// -----------page22--------

// -----------page24--------
function startQz(){
    
    $(".sld24_q1").css("display","table");
    
    $(".t241,.t242,.t243,.sld_24_start").css("opacity","0")
    if (tl1) {
            tl1.totalProgress(1).kill();
        }
        tl1 = new TimelineLite({
            onComplete : function(){
               
            }
        });
    
    tl1.add(animateAddAipha($(".s24_ilstrtimg1"),0,1).play(),  0.5);
    tl1.add(animateAddAipha($(".typq1"),0,1).play(),  1.5);
    
}
function strtInit(ep,re){
    $(".sld24_q"+ep).css("display","none");
    $(".sld24_q"+re).css("display","table");
    
    
    if(re == 10){
        navFlag = true;
    }
    if (tl1) {
            tl1.totalProgress(1).kill();
        }
        tl1 = new TimelineLite({
            onComplete : function(){
               
            }
        });
    tl1.add(animateAddAipha($(".s24_ilstrtimg"+re),0,1).play(),  0.5);
    tl1.add(animateAddAipha($(".typq"+re),0,1).play(),  1.5);
    
}
// -----------page24--------
/*-------------------------------------Animation---------------------------
------------*/


function animateLadder1(el, topPos) {
    TweenLite.set(el, {
        //clearProps: 'opacity'
    });
    var tl = new TimelineLite({
        paused: true
    }).from(el, 1.2, {
        height: "216px"
        //autoAlpha: 0
    }, "feature-=0.25");
    return tl;
}
function animateClockRotation1(el) {
    TweenLite.set(el, {
        clearProps: 'all'
    });
    var tl = new TimelineLite();
    tl.to(el, 2, { rotation: 360, ease: Linear.easeNone, repeat: 0, transformOrigin: "50% 50%" });
    /*tl.to(el, 2, {rotation:360, ease:Linear.easeNone, repeat:-1});*/
    return tl;
}
function animateLadder2(el, topPos) {
    TweenLite.set(el, {
        //clearProps: 'opacity'
    });
    var tl = new TimelineLite({
        paused: true
    }).from(el, 1.2, {
        height: "111px"
        //autoAlpha: 0
    }, "feature-=0.25");
    return tl;
}

function animateLadder3(el, topPos) {
    TweenLite.set(el, {
        //clearProps: 'opacity'
    });
    var tl = new TimelineLite({
        paused: true
    }).from(el, 1.2, {
        height: "147px"
        //autoAlpha: 0
    }, "feature-=0.25");
    return tl;
}

function animateLadder4(el, topPos) {
    TweenLite.set(el, {
        //clearProps: 'opacity'
    });
    var tl = new TimelineLite({
        paused: true
    }).from(el, 1.2, {
        height: "147px"
        //autoAlpha: 0
    }, "feature-=0.25");
    return tl;
}

function animateLadder5(el, topPos) {
    TweenLite.set(el, {
        //clearProps: 'opacity'
    });
    var tl = new TimelineLite({
        paused: true
    }).from(el, 1.2, {
        height: "157px"
        //autoAlpha: 0
    }, "feature-=0.25");
    return tl;
}

function animateLadder6(el, topPos) {
    TweenLite.set(el, {
        //clearProps: 'opacity'
    });
    var tl = new TimelineLite({
        paused: true
    }).from(el, 1.2, {
        height: "112px"
        //autoAlpha: 0
    }, "feature-=0.25");
    return tl;
}

function animateLadder7(el, topPos) {
    TweenLite.set(el, {
        //clearProps: 'opacity'
    });
    var tl = new TimelineLite({
        paused: true
    }).from(el, 1.2, {
        height: "62px"
        //autoAlpha: 0
    }, "feature-=0.25");
    return tl;
}

function animateLadder8(el, topPos) {
    TweenLite.set(el, {
        //clearProps: 'opacity'
    });
    var tl = new TimelineLite({
        paused: true
    }).from(el, 1.2, {
        height: "150px"
        //autoAlpha: 0
    }, "feature-=0.25");
    return tl;
}

function animateLadder9(el, topPos) {
    TweenLite.set(el, {
        //clearProps: 'opacity'
    });
    var tl = new TimelineLite({
        paused: true
    }).from(el, 1.2, {
        height: "197px"
        //autoAlpha: 0
    }, "feature-=0.25");
    return tl;
}

function animateLadder10(el, topPos) {
    TweenLite.set(el, {
        //clearProps: 'opacity'
    });
    var tl = new TimelineLite({
        paused: true
    }).from(el, 1.2, {
        height: "122px"
        //autoAlpha: 0
    }, "feature-=0.25");
    return tl;
}

function animateLadder11(el, topPos) {
    TweenLite.set(el, {
        //clearProps: 'opacity'
    });
    var tl = new TimelineLite({
        paused: true
    }).from(el, 1.2, {
        height: "147px"
        //autoAlpha: 0
    }, "feature-=0.25");
    return tl;
}

function animateLadder12(el, topPos) {
    TweenLite.set(el, {
        //clearProps: 'opacity'
    });
    var tl = new TimelineLite({
        paused: true
    }).from(el, 1.2, {
        left: "0px",
        autoAlpha: 0
    }, "feature-=0.25");
    return tl;
}

function animateLadder13(el, topPos) {
    TweenLite.set(el, {
        clearProps: 'opacity'
    });
    var tl = new TimelineLite({
        paused: true
    }).from(el, 1.2, {
        autoAlpha: 1
    }, "feature-=0.25");
    return tl;
} 



function animateDown(el, topPos) {
    TweenLite.set(el, {
        clearProps: 'opacity'
    });
    var tl = new TimelineLite({
        paused: true
    }).from(el, 1.2, {
        top: topPos,
        autoAlpha: 0
    }, "feature-=0.25");
    return tl;
}
function animateDown_aida(el, topPos) {
    TweenLite.set(el, {
        clearProps: 'opacity'
    });
    var tl = new TimelineLite({
        paused: true
    }).from(el, 0.7, {
        top: topPos,
        autoAlpha: 0
    }, "feature-=0.25");
    return tl;
}

function animateDownArrow(el, topPos) {
    TweenLite.set(el, {
        clearProps: 'opacity'
    });
    var tl = new TimelineLite({
        paused: true
    }).from(el, 10.0, {
        // top: topPos,
        top: "-900px",
        // autoAlpha: 0
    }, "feature-=0.25");
    return tl;
}


function animateDownTxt(el, topPos) {
    TweenLite.set(el, {
        clearProps: 'opacity'
    });
    var tl = new TimelineLite({
        paused: true
    }).from(el, 2.0, {
        // top: topPos,
        top: "-269px",
        // autoAlpha: 0
    }, "feature-=0.25");
    return tl;
}

function animateDownTxtB(el, topPos) {
    TweenLite.set(el, {
        clearProps: 'opacity'
    });
    var tl = new TimelineLite({
        paused: true
    }).from(el, 0.5, {
        // top: topPos,
        top: "-74px",
        // autoAlpha: 0
    }, "feature-=0.25");
    return tl;
}


function animateDownAIDA(el, topPos) {
    TweenLite.set(el, {
        clearProps: 'opacity'
    });
    var tl = new TimelineLite({
        paused: true
    }).from(el, 2.5, {
        // top: topPos,
        top: "-349px",
        // autoAlpha: 0
    }, "feature-=0.25");
    return tl;
}

function animateDownAIDA_E(el, topPos) {
    TweenLite.set(el, {
        clearProps: 'opacity'
    });
    var tl = new TimelineLite({
        paused: true
    }).from(el, 10.0, {
        // top: topPos,
        top: "-449px",
        // autoAlpha: 0
    }, "feature-=0.25");
    return tl;
}
function animateDown_clkaida(el, topPos) {
    TweenLite.set(el, {
        clearProps: 'opacity'
    });
    var tl = new TimelineLite({
        paused: true
    }).from(el, 1.2, {
        // top: topPos,
        top: "-51px",
        // autoAlpha: 0
    }, "feature-=0.25");
    return tl;
}

function animateDown1(el, topPos) {
    TweenLite.set(el, {
        clearProps: 'opacity'
    });
    var tl = new TimelineLite({
        paused: true
    }).from(el, 1.2, {
        marginTop: "0px",
        autoAlpha: 0
    }, "feature-=0.25");
    return tl;
}

function animateDown2(el, topPos) {
    TweenLite.set(el, {
        clearProps: 'opacity'
    });
    var tl = new TimelineLite({
        paused: true
    }).from(el, 1.2, {
        marginTop: "70px",
        autoAlpha: 0
    }, "feature-=0.25");
    return tl;
}


function animateDown3(el, topPos) {
    TweenLite.set(el, {
        clearProps: 'opacity'
    });
    var tl = new TimelineLite({
        paused: true
    }).from(el, 2.2, {
        top: "-320px",
        autoAlpha: 0
    }, "feature-=0.25");
    return tl;
}
function animateDown33  (el, topPos) {
    TweenLite.set(el, {
        clearProps: 'opacity'
    });
    var tl = new TimelineLite({
        paused: true
    }).from(el, 1.2, {
        top: "220px",
        autoAlpha: 0
    }, "feature-=0.25");
    return tl;
}
var tween1;
// function animateScale(el) {
//     if (tween1) {
//         tween1.kill();
//         tween1 = null;
//     }
//     el.show();
//     tween1 = TweenMax.to(el, 0.5, {
//         // /* backgroundColor : "#FFFF00", */
//         scaleX: 1,
//         scaleY: 1,
//         force3D: true,
//         yoyo: true,
//         repeat: 2
//     });

// }

function animateInLeft(el, pos) {
    TweenLite.set(el, {
        clearProps: 'all'
    });
    var tl = new TimelineLite({
        paused: true
    }).from(el, 3, {
        autoAlpha: 0,
        left: pos + "px"
    });
    return tl;

}
function animateInLeft_1(el, pos) {
    TweenLite.set(el, {
        clearProps: 'all'
    });
    var tl = new TimelineLite({
        paused: true
    }).from(el, 1, {
        autoAlpha: 0,
        left: pos + "px"
    });
    return tl;
}
function animateInLeft_2(el, pos) {
    TweenLite.set(el, {
        clearProps: 'all'
    });
    var tl = new TimelineLite({
        paused: true
    }).from(el, 0.1, {
        autoAlpha: 0,
        left: pos + "px"
    });
    return tl;
}

function animateAddAipha11(el, pos, val) {
    TweenLite.set(el, {
        //        clearProps: 'opacity'
    });
    var tl = new TimelineLite({
        paused: true
    }).from(el, val, {
        //        autoAlpha: 0
    });
    return tl;

}

function animateDown_fast(el, topPos) {
    TweenLite.set(el, {
        clearProps: 'opacity'
    });
    var tl = new TimelineLite({
        paused: true
    }).from(el, 0.5, {
        top: topPos,
        //        autoAlpha: 0
    }, "feature-=0.25");
    return tl;
}

function animateClockRotation(el) {
    TweenLite.set(el, {
        clearProps: 'all'
    });
    var tl = new TimelineLite();
    tl.to(el, 2, { rotation: 360, ease: Linear.easeNone, repeat: 5, transformOrigin: "50% 50%" });
    /*tl.to(el, 2, {rotation:360, ease:Linear.easeNone, repeat:-1});*/
    return tl;
}

function animateInRight(el, pos) {
    TweenLite.set(el, {
        clearProps: 'all'
    });
    var tl = new TimelineLite({
        paused: true
    }).from(el, 1.0, {
        autoAlpha: 0,
        right: pos + "px"
    });
    return tl;

}
function animateInLeft_slow(el, pos) {
    TweenLite.set(el, {
        clearProps: 'all'
    });
    var tl = new TimelineLite({
        paused: true
    }).from(el, 0.7, {
        autoAlpha: 0,
        left: pos + "px"
    });
    return tl;

}

function animateInRight_slow(el, pos) {
    TweenLite.set(el, {
        clearProps: 'all'
    });
    var tl = new TimelineLite({
        paused: true
    }).from(el, .7, {
        autoAlpha: 0,
        right: pos + "px"
    });
    return tl;

}
function animateOutLeft(el, pos) {
    TweenLite.set(el, {
        clearProps: 'all'
    });
    var tl = new TimelineLite({
        paused: true
    }).from(el, .2, {
        autoAlpha: 0,
        left: pos + "px"
    });
    return tl;
}
function animateOutLeft123(el, pos) {
    var tl = new TimelineLite({
        paused: true
    }).
        to(el, 0.5, {
            opacity: 0,
            left: "-250px",//pos+"px",
        });
    return tl;
}

function animateOutLeftMobile(el, pos) {
    var tl = new TimelineLite({
        paused: true
    }).
        to(el, 0.5, {
            opacity: 1,
            left: "2px",//pos+"px",
        });
    return tl;
}
function animateOutLeftPlus(el, pos) {
    var tl = new TimelineLite({
        paused: true
    }).
        to(el, 0.5, {
            opacity: 1,
            left: "122px",//pos+"px",
        });
    return tl;
}

function animateOutLeftWord(el, pos) {
    var tl = new TimelineLite({
        paused: true
    }).
        to(el, 0.1, {
            opacity: 1,
            left: "20px",//pos+"px",
        });
    return tl;
}
function animateOutLeftArrow(el, pos) {
    var tl = new TimelineLite({
        paused: true
    }).
        to(el, 1, {
            opacity: 1,
            left: "0px",//pos+"px",
        });
    return tl;
}

function animateOutLeftWord1(el, pos) {
    var tl = new TimelineLite({
        paused: true
    }).
        to(el, 1, {
            opacity: 1,
            left: pos+"px",
        });
    return tl;
}

function animateOutLeftWordTop(el, pos) {
    var tl = new TimelineLite({
        paused: true
    }).
        to(el, 0.1, {
            opacity: 1,
            top: "-195px",//pos+"px",
        });
    return tl;
}

function animateOutLeftWordTop1(el, pos) {
    var tl = new TimelineLite({
        paused: true
    }).
        to(el, 1.5, {
            opacity: 1,
            // top: "-195px",
            top: pos+"px",
            
        });
    return tl;
}
function animateOutLeft124(el, pos) {
    var tl = new TimelineLite({
        paused: true
    }).
        to(el, 0.5, {
            opacity: 0,
            left: "380px",//pos+"px",
        });
    return tl;
}
function animateOutRight123(el, pos) {
    var tl = new TimelineLite({
        paused: true
    }).
        to(el, 1.0, {
            opacity: 1,
            left: "400px",//pos+"px",
        });
    return tl;
}
function animateOutLeft1(el, pos) {
    TweenLite.set(el, {
        clearProps: 'all'
    });
    var tl = new TimelineLite({
        paused: true
    }).from(el, .2, {
        autoAlpha: 0,
        left: "0px"
    });
    return tl;
}

function animateOutRight(el, pos) {
    var tl = new TimelineLite({
        paused: true
    }).
        to(el, 0.5, {
            opacity: 0,
            right: "150px",//pos+"px",
        });
    return tl;
}
function animateAddAipha(el, pos, val) {
    TweenLite.set(el, {
        clearProps: 'opacity'
    });
    var tl = new TimelineLite({
        paused: true
    }).from(el, val, {
        autoAlpha: 0
    });
    return tl;

}

function animateAddAipha1(el, pos, val) {
    TweenLite.set(el, {
        clearProps: 'opacity'
    });
    var tl = new TimelineLite({
        paused: true
    }).from(el, val, {
        autoAlpha: 0
    });
    return tl;

}

function animateLineVSpin(el) {
    TweenLite.set(el, {
        clearProps: 'all'
    });
    var tl = new TimelineLite();
    tl.to(el, 1, {
        rotation: 360,
        ease: Elastic.easeOut
    }, 1);
    return tl;
}
function animateOutDisplayNone(el) {
    var tl = new TimelineLite({
        paused: true
    }).to(el, 0, {
        opacity: 0,
        // display: 'none'
    });
    return tl;
}
function animateOutDisplayNone_layout(el) {
    var tl = new TimelineLite({
        paused: true
    }).to(el, 0, {
        opacity: 0,
        display: 'none'
    });
    return tl;
}
function animateOutDisplayBlock_layout(el) {
    var tl = new TimelineLite({
        paused: true
    }).to(el, 0, {
        opacity: 1,
        display: 'block'
    });
    return tl;
}
function animateOutDisplayBlock(el) {
    var tl = new TimelineLite({
        paused: true
    }).to(el, 0, {
        opacity: 1,
        // display: 'block'
    });
    return tl;
}
function animateOut(el) {
    var tl = new TimelineLite({
        paused: true
    }).to(el, 1, {
        opacity: 0
    });
    return tl;
}
function animateOut2(el) {
    var tl = new TimelineLite({
        paused: true
    }).to(el, 1, {
        opacity: 0.5
    });
    return tl;
}

function animateScale(el) {
    var tl = new TimelineLite({
        paused: true
    }).to(el, 2, {
        scale: 1,
        autoAlpha: 1,
        // ease:Back.easeOut
    });
    return tl;
}
function animateScaleFA(el) {
    var tl = new TimelineLite({
        paused: true
    }).to(el, 0.8, {
        scale: 1,
        autoAlpha: 1,
        // ease:Back.easeOut
    });
    return tl;
}
function animateScaledecrees(el) {
    var tl = new TimelineLite({
        paused: true
    }).to(el, 2, {
        opacity: 0,
        scale: 0.1,
        autoAlpha: 1,
        // ease:Back.easeOut
    });
    return tl;
}
function animateScaleMobiledecrees(el) {
    var tl = new TimelineLite({
        paused: true
    }).to(el, 0.1, {
        opacity: 0,
        scale: 0.0,
        autoAlpha: 1,
        // ease:Back.easeOut
    });
    return tl;
}

function animateInFromLeft(el) {
    TweenLite.set(el, {
        clearProps: 'width'
    });
    var tl = new TimelineLite({
        paused: true
    }).from(el, 1, {
        width: 0
    });
    return tl;
}

function animateFlipImage(el) {
    TweenLite.set(el, {
        clearProps: 'all'
    });
    var tl = new TimelineLite();
    tl.to(el, 2, { rotationY: 360, transformOrigin: "50% 50%" });
    return tl;
}
function animateFlipImagesqu(el) {
    TweenLite.set(el, {
        clearProps: 'opacity'
    });
    var tl = new TimelineLite();
    tl.from(el, 2, { rotationY: 360, transformOrigin: "50% 50%" });
    return tl;
}
function animateFlipreset(el) {
    TweenLite.set(el, {
        clearProps: 'opacity'
    });
    var tl = new TimelineLite();
    tl.from(el, 2, { rotationY: 0, transformOrigin: "50% 50%" });
    return tl;
}