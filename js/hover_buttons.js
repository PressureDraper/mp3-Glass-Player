//hover ~ unhover anumation
(() => {
    $(".previous").hover(
        function(){
            $(".previous-track").css("opacity", "0.7");
    },
        function(){
            $(".previous-track").css("opacity", "0.5");
    });

    $(".playpause").hover(
        function(){
            $(".play-track").css("opacity", "0.7");
            $(".pause-track").css("opacity", "0.7");
    },
        function(){
            $(".play-track").css("opacity", "0.5");
            $(".pause-track").css("opacity", "0.5");
    });

    $(".next").hover(
        function(){
            $(".next-track").css("opacity", "0.7");
    },
        function(){
            $(".next-track").css("opacity", "0.5");
    });
})();