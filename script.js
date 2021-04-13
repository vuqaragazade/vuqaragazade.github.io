$(document).ready(() => {
    let percentages = {
        html: 95,
        css: 90,
        javascript: 70,
        php: 40,
        python: 40,
        bootstrap: 90,
        materialize: 90,
        jquery: 80,
        ajax: 80,
        nodejs: 40,
        angular: 50,
        git: 80,
        wordpress: 70,
        photoshop: 60,
        msoffice: 60,
        seo: 60,
        turkish: 80,
        english: 60,
        vuejs: 60
    }
    $("#about ul li:nth-child(1)").click( function() {
        $("#content").html(`
        <ul class="list">
            <li>Name: <span>Vüqar Ağazadə</span></li>
            <li>Date of birth: <span>28/06/1996</span></li>
            <li>Phone: <span>+994709440237</span></li>
            <li>Email: <span>agazade.vuqar.1996@gmail.com</span></li>
            <li>Address: <span>Bileceri , 1 may s., Baku</span></li>
            <li>Nationality: <span>Azerbaijan</span></li>
        </ul>
        <button id="download-cv"><a href="cv-file/cv.pdf">Download Cv</a></button>
        `)
    })
    $("#about ul li:nth-child(2)").click( function() {
        $("#content").html(`
        <ul class="list">
            <li>High School: <span>Baku Turkish High School (08/2010 – 08/2014)</span></li>
            <li>University: <span>Azerbaijan Architecture and Construction University: İT engineering (08/2014 – 08/2018)</span></li>
            <li>Course: <span>Step İT Academy: Front-end developer (10/2019 – 11/2020)</span></li>
        </ul>
        `);
    })
    $("#skills .change-menu li:nth-child(1)").click( function() {
        $("#skills-area").html(`
            <ul class="list">
                <li id="html"><b>HTML</b>
                    <div class="rate">
                        <div class="percentage"></div>
                    </div>
                </li>
                <li id="css"><b>CSS</b>
                    <div class="rate">
                        <div class="percentage"></div>
                    </div>
                </li>
                <li id="javascript"><b>Javascript</b>
                    <div class="rate">
                        <div class="percentage"></div>
                    </div>
                </li>
                <li id="php"><b>Php</b>
                    <div class="rate">
                        <div class="percentage"></div>
                    </div>
                </li>
                <li id="python"><b>Python</b>
                    <div class="rate">
                        <div class="percentage"></div>
                    </div>
                </li>
                <li id="nodejs"><b>NodeJs</b>
                    <div class="rate">
                        <div class="percentage"></div>
                    </div>
                </li>
                <li id="angular"><b>Angular</b>
                    <div class="rate">
                        <div class="percentage"></div>
                    </div>
                </li>
            </ul>
            <ul class="list">
                <li id="vuejs"><b>Vue.js</b>
                    <div class="rate">
                        <div class="percentage"></div>
                    </div>
                </li>
                <li id="bootstrap"><b>Bootstrap</b>
                    <div class="rate">
                        <div class="percentage"></div>
                    </div>
                </li>
                <li id="materialize"><b>Materialize</b>
                    <div class="rate">
                        <div class="percentage"></div>
                    </div>
                </li>
                <li id="jquery"><b>jQuery</b>
                    <div class="rate">
                        <div class="percentage"></div>
                    </div>
                </li>
                <li id="ajax"><b>Ajax</b>
                    <div class="rate">
                        <div class="percentage"></div>
                    </div>
                </li>
                <li id="git"><b>Git</b>
                    <div class="rate">
                        <div class="percentage"></div>
                    </div>
                </li>
                <li id="wordpress"><b>Wordpress</b>
                    <div class="rate">
                        <div class="percentage"></div>
                    </div>
                </li>
            </ul>
        `)
        loadPercent();
    })
    $("#skills .change-menu li:nth-child(2)").click( function() {
        $("#skills-area").html(`
            <ul class="list">
                <li id="turkish"><b>Turkish</b>
                    <div class="rate">
                        <div class="percentage"></div>
                    </div>
                </li>
                <li id="english"><b>English</b>
                    <div class="rate">
                        <div class="percentage"></div>
                    </div>
                </li>
            </ul>
        `)
        loadPercent();
    })
    $("#skills .change-menu li:nth-child(3)").click( function() {
        $("#skills-area").html(`
            <ul class="list">
                <li id="photoshop"><b>Adobe Photoshop</b>
                    <div class="rate">
                        <div class="percentage"></div>
                    </div>
                </li>
                <li id="msoffice"><b>MS Office</b>
                    <div class="rate">
                        <div class="percentage"></div>
                    </div>
                </li>
                <li id="seo"><b>SEO</b>
                    <div class="rate">
                        <div class="percentage"></div>
                    </div>
                </li>
            </ul>
        `)
        loadPercent();
    })
    function loadPercent() {
        $("#html .percentage").css({
            "width": $(".rate").width()*percentages.html/100,
            "left": -$(".rate").width()*percentages.html/100
        })
        .animate({left: 0}, 2000, 'linear');
        $("#css .percentage").css({
            "width": $(".rate").width()*percentages.css/100,
            "left": -$(".rate").width()*percentages.css/100
        })
        .animate({left: 0}, 2000, 'linear');
        $("#javascript .percentage").css({
            "width": $(".rate").width()*percentages.javascript/100,
            "left": -$(".rate").width()*percentages.javascript/100
        })
        .animate({left: 0}, 2000, 'linear');
        $("#php .percentage").css({
            "width": $(".rate").width()*percentages.php/100,
            "left": -$(".rate").width()*percentages.php/100
        })
        .animate({left: 0}, 2000, 'linear');
        $("#python .percentage").css({
            "width": $(".rate").width()*percentages.python/100,
            "left": -$(".rate").width()*percentages.python/100
        })
        .animate({left: 0}, 2000, 'linear');
        $("#bootstrap .percentage").css({
            "width": $(".rate").width()*percentages.bootstrap/100,
            "left": -$(".rate").width()*percentages.bootstrap/100
        })
        .animate({left: 0}, 2000, 'linear');
        $("#materialize .percentage").css({
            "width": $(".rate").width()*percentages.materialize/100,
            "left": -$(".rate").width()*percentages.materialize/100
        })
        .animate({left: 0}, 2000, 'linear');
        $("#jquery .percentage").css({
            "width": $(".rate").width()*percentages.jquery/100,
            "left": -$(".rate").width()*percentages.jquery/100
        })
        .animate({left: 0}, 2000, 'linear');
        $("#ajax .percentage").css({
            "width": $(".rate").width()*percentages.ajax/100,
            "left": -$(".rate").width()*percentages.ajax/100
        })
        .animate({left: 0}, 2000, 'linear');
        $("#nodejs .percentage").css({
            "width": $(".rate").width()*percentages.nodejs/100,
            "left": -$(".rate").width()*percentages.nodejs/100
        })
        .animate({left: 0}, 2000, 'linear');
        $("#git .percentage").css({
            "width": $(".rate").width()*percentages.git/100,
            "left": -$(".rate").width()*percentages.git/100
        })
        .animate({left: 0}, 2000, 'linear');
        $("#wordpress .percentage").css({
            "width": $(".rate").width()*percentages.wordpress/100,
            "left": -$(".rate").width()*percentages.wordpress/100
        })
        .animate({left: 0}, 2000, 'linear');
        $("#photoshop .percentage").css({
            "width": $(".rate").width()*percentages.photoshop/100,
            "left": -$(".rate").width()*percentages.photoshop/100
        })
        .animate({left: 0}, 2000, 'linear');
        $("#seo .percentage").css({
            "width": $(".rate").width()*percentages.seo/100,
            "left": -$(".rate").width()*percentages.seo/100
        })
        .animate({left: 0}, 2000, 'linear');
        $("#msoffice .percentage").css({
            "width": $(".rate").width()*percentages.msoffice/100,
            "left": -$(".rate").width()*percentages.msoffice/100
        })
        .animate({left: 0}, 2000, 'linear');
        $("#turkish .percentage").css({
            "width": $(".rate").width()*percentages.turkish/100,
            "left": -$(".rate").width()*percentages.turkish/100
        })
        .animate({left: 0}, 2000, 'linear');
        $("#english .percentage").css({
            "width": $(".rate").width()*percentages.english/100,
            "left": -$(".rate").width()*percentages.english/100
        })
        .animate({left: 0}, 2000, 'linear');
        $("#angular .percentage").css({
            "width": $(".rate").width()*percentages.angular/100,
            "left": -$(".rate").width()*percentages.angular/100
        })
        .animate({left: 0}, 2000, 'linear');
        $("#vuejs .percentage").css({
            "width": $(".rate").width()*percentages.angular/100,
            "left": -$(".rate").width()*percentages.angular/100
        })
        .animate({left: 0}, 2000, 'linear');
    }
    function control() {
            var top_of_element = $("#skills-area").offset().top;
            var bottom_of_element = $("#skills-area").offset().top + $("#skills-area").outerHeight();
            var bottom_of_screen = $(window).scrollTop() + $(window).innerHeight();
            var top_of_screen = $(window).scrollTop();

            if ((bottom_of_screen > top_of_element) && (top_of_screen < bottom_of_element)){
                loadPercent();
                stop();
            }
    }
    let t;
    function start(){
        t = setInterval(control,1000)
    }
    start()
    function stop(){
        clearInterval(t);
    }
    /*
    let x = 0;
    let y = 0;
    function animationOnHeader() {
        $("#wallpaper").html("<div id='animation'></div>")
        $("#animation").css({
            "height": "10px",
            "background-color": "blue",
            "position": "absolute",
            "z-index": "2",
            "top": "10px",
            "left": "0",
            "width": "10px"
        })
    }
    animationOnHeader();
    let dx = 1;
    let dy = 1;
    function gc(){
        c = (Math.random()>=0.5)? 1 : 0;
    }
    setInterval(gc,2000);
    function astart(){
        if(c==1) {
            let aleft = $("#animation").css("left");
            if((Number(aleft.replace("px", ""))+5)> $("#wallpaper").width()) {dx=-1;}
            x++;
            $("#animation").animate({left: x*dx,}, 1, 'linear');
        }
        if(c==0) {
            let atop = $("#animation").css("top");
            if((Number(atop.replace("px", ""))+5)> $("#wallpaper").height()) {dy=-1;}
            y++;
            $("#animation").animate({top: y*dy}, 1, 'linear');
        }
    }
    setInterval(astart,50);
    */
})