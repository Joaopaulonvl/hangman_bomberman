$("document").ready(function(){
    var language = new Audio("sounds/change.mp3");
    var clickStart = new Audio("sounds/clickstart.mp3");
    var startCoin = new Audio("sounds/startcoin.mp3");
    isFullScreen = false;
    var elem = document.documentElement;
    $("#startButton").on("click", function(){
        clickStart.play();
        startCoin.play();
        $(this).prop("disabled", true);
        $("h2").fadeOut(300);
        setTimeout(function(){
            $("h1").fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
            $("h1").text("GET READY!");
        }, 500);
        setTimeout (function(){
            window.location.href = "game.html";
        }, 2000);
    });
    $("#changeLanguage").on("click", function(){
        language.play();
        $(this).prop("disabled", true)
        setTimeout (function(){
            window.location.href = "pt-BR/index.html";
        }, 1000);
    });
});

