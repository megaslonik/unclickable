$(document).ready(function() 
{
    $("#buttonStart").click(function()
    {
        $("#buttonStart").css("display", "none");
        $(".endgame").css("display", "none");
        $("#ball").css("display", "block");

        let X = $("#canvas").width() - $("#ball").width() - 4;
        let Y = $("#canvas").height() - $("#ball").height() - 4;
        let score = 0;
        $("#counter").html(score);
        let seconds = 3;
        $("#timercounter").html('00:0' + seconds);

        let timer = setInterval(function(){
            if (seconds == -1)
            {
                clearInterval(timer);
                let stopgame = Stop();
            }
            else
            {
                $("#timercounter").html('00:0' + seconds);
                seconds--;
            }
        }, 1000);

        $("#ball").mouseover(function()
        {
            let offsetX = Math.floor(Math.random() * X);
            let offsetY = Math.floor(Math.random() * Y);
            score++;
            $("#counter").html(score);
            $("#ball").css("left", offsetX + "px");
            $("#ball").css("top", offsetY + "px");
            /*if (seconds == -1)
            {
                Stop(function(){
                    $(".endgame").css("display", "block");
                });
            }*/
        });

        function Stop() {
            $("#ball").css("display", "none");
            $(".endgame").css("display", "block");
            if (score < 20)
                $("#gameoverPopup").html('You lose!');
            else
                $("#gameoverPopup").html('You win!');
            $("#buttonStart").css("display", "block");
            $("#buttonStart").html('Restart');
        };
    });


});