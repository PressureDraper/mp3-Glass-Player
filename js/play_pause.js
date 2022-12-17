(() => {
    $(".playpause").click(function(){
        if ($(".play-track").css("display") == "block") {
            $(".play-track").css("display", "none");
            $(".pause-track").css("display", "block");
        } else {
            $(".play-track").css("display", "block");
            $(".pause-track").css("display", "none");
        }
    });
})();