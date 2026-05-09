$("document").ready(function(){
    $("#backButton").on("click", function(){
        var clickReturn = new Audio("../sounds/clickreturn.mp3");
        clickReturn.play();
        setTimeout (function(){
            window.location.href = "../index.html";
        }, 1000);
    });
});

$(document).ready(function() {
    newWord();
    const keys = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
    const $keyboard = $("#keyboard");

    isFullScreen = false;
    var elem = document.documentElement;

    var secretWord = "";
    var tip = "";
    var correctLetters = [];
    var errors = 0;
    var errorLimit = 6;

    var soundWin = new Audio("../sounds/youwin.mp3");
    var soundLose = new Audio("../sounds/youlose.mp3");
    var soundReset = new Audio("../sounds/reset.mp3");
    var characterDefeat = new Audio("../sounds/bombermands.mp3");
    var characterWin = new Audio("../sounds/bomberfly.mp3");
    var bombExplosion = new Audio("../sounds/bombexplosion.mp3");
    var bombDefeat = new Audio("../sounds/bombdefeat.mp3");

    var soundRKey = new Audio("../sounds/rightanswer.mp3");
    var soundEKey = new Audio("../sounds/wronganswer.mp3");

    function newWord() {
        $.getJSON("words_br.json", function(data){
            var randomIndex = Math.floor(Math.random() * data.length);
            var sortWord = data[randomIndex];

            secretWord = sortWord.word.toUpperCase();
            tip = sortWord.tip;
            configScreen();
            updateWordDisplay()
        });
    }

    function configScreen (){
        $("#tip-display").text("DICA: "+tip);
        $("#word-display").empty();
    
        secretWord.split('').forEach(() => {
            $("#word-display").append('<span class="letter-slot">_</span>');
        });
    }

    function updateWordDisplay() {
        $("h2").text("ERROS: " + errors + "/6");
        var show = "";
        for (var letter of secretWord) {
            if (correctLetters.includes(letter)) {
                show += letter + " ";
            } else {
                show += "_ ";
            }
        }

        $("#word-display").text(show.trim());

        if (!show.includes("_")) {
            $("#keyboard").addClass("keyboard-locked");
            gameActive = false;
            bombDefeat.play();
            $("p").text("BOMBERMAN FOI SALVO!!!!");
            $("#word-display").text(secretWord).css("color", "#F7FF00");
            setTimeout(function(){
                $("#word-display").css("color", "");
            }, 3000)
            $("#bomb").attr("src", "../images/bombdefeat.gif").css({"width": "50px", "height": "50px"});
            setTimeout(function(){
                characterWin.play();
                $("#mainCharacter").attr("src", "../images/win.gif").css({"width": "150px", "height": "150px"});
            },2000);
            setTimeout(function(){
                soundWin.volume = 0.3;
                soundWin.play();
                $("h1").text("VOCÊ VENCEU!!").fadeOut(200).fadeIn(200).fadeOut(200).fadeIn(200).fadeOut(200).fadeIn(200);
                setTimeout(function(){
                        $("h1").text("CLIQUE NO BOTÃO REINICIAR PARA JOGAR NOVAMENTE").fadeOut(200).fadeIn(200).css("color","white");
                    }, 2000);
            },3000);
        }
    }

    function checkUserAnswer(letter) {
        const $keyElement = $(`.key[data-key="${letter}"]`);
        if ($keyElement.hasClass("locked")) return;
        $keyElement.addClass("locked");

        if (secretWord.includes(letter)) {
            correctLetters.push(letter);
            $keyElement.css("background-color", "#8fce00");
            soundRKey.play();
            updateWordDisplay();
        }else {
            errors++;
            $keyElement.css("background-color", "#f44336");
            soundEKey.play();
            $("h2").text("ERROS: " + errors + "/6");
        }
        if (errors >= errorLimit) {
            $("#word-display").text(secretWord).css("color", "red");
            setTimeout(function(){
                $("#word-display").css("color", "");
            }, 2900);
            $("#keyboard").addClass("keyboard-locked");
            bombExplosion.play();
            $("#bomb").attr("src", "../images/bombexplosion.gif").css({"position":"relative", "z-index":"1"});
            setTimeout(function(){
                $("#mainCharacter").attr("src", "../images/bombermandefeat.gif");
                $("p").text("BOMBERMAN FOI DERROTADO :(");
                characterDefeat.play();
                setTimeout(function(){
                    $("h1").text("VOCÊ PERDEU!").fadeOut(200).fadeIn(200).fadeOut(200).fadeIn(200).fadeOut(200).fadeIn(200);
                    soundLose.volume = 0.3;
                    soundLose.play();
                    setTimeout(function(){
                        $("h1").text("CLIQUE NO BOTÃO REINICIAR PARA JOGAR NOVAMENTE").fadeOut(200).fadeIn(200).css("color","white");
                    }, 2000);
                }, 2500);
            }, 350);
        }
    }

    function resetGame() {
        setTimeout(function(){
            errors = 0;
            correctLetters = [];

            $("p").text("ACERTE A PALAVRA PARA SALVAR O BOMBERMAN!");
            $("h2").text("ERROS: 0/6");
            
            $("#bomb").attr("src", "../images/bomb.gif").css({"width": "", "height": "", "position": "", "z-index": ""});
            $("#mainCharacter").attr("src", "../images/Bomberman.gif").css({"width": "", "height": ""});
            
            $("#keyboard").removeClass("keyboard-locked");
            $(".key").removeClass("locked").css("background-color", "");

            newWord();
        }, 1000);
    }

    $("#resetButton").on("click", function(){
        soundReset.play();
        resetGame();
    });

    keys.forEach(letter => {
        $keyboard.append(`<div class="key" data-key="${letter}">${letter}</div>`);
    });

    function handleInput(key) {
        const upperKey = key.toUpperCase();
        const $keyElement = $(`.key[data-key="${upperKey}"]`);

        if ($keyElement.length) {
            $keyElement.addClass("active");
            setTimeout(() => $keyElement.removeClass("active"), 150);
            checkUserAnswer(upperKey);
        }
    }

    var keySound = new Audio ("../sounds/click.mp3");

    $(".key").on("click", function() {
        const selectedKey = $(this).data("key");
        keySound.play();
        handleInput(selectedKey);
    });

    function ActivateDisableFS() {
            soundReset.play();
            if (document.exitFullscreen) {
                document.exitFullscreen();
                isFullScreen = false;
            } else if (document.mozCancelFullScreen) {
                document.mozCancelFullScreen();
                isFullScreen = false;
            } else if (document.webkitExitFullscreen) {
                document.webkitExitFullscreen();
            } else if (document.msExitFullscreen) {
                document.msExitFullscreen();
                isFullScreen = false;
            }

            if (elem.requestFullscreen) {
                elem.requestFullscreen();
                isFullScreen = true;
            } else if (elem.mozRequestFullScreen) {
                elem.mozRequestFullScreen();
                isFullScreen = true;
            } else if (elem.webkitRequestFullscreen) {
                elem.webkitRequestFullscreen();
                isFullScreen = true;
            } else if (elem.msRequestFullscreen) {
                elem.msRequestFullscreen();
                isFullScreen = true;
            }
        }

    $("#fullScreenButton").on("click", function() {
        ActivateDisableFS();
    });

    $(document).on('fullscreenchange webkitfullscreenchange mozfullscreenchange MSFullscreenChange', function() {
        if (document.fullscreenElement || document.webkitFullscreenElement || document.mozFullScreenElement || document.msFullscreenElement) {
            $("#fullScreenButton").fadeOut(200); 
        } else {
            $("#fullScreenButton").fadeIn(200);
        }
    });
});