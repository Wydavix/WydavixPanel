$(window).ready(function(){
    $(".wrapper-botpanel").hide(0);
    $(".wrapper-discord").hide(0);
    $(".wrapper-docs").hide(0);
    setTimeout(() => {
        $(".wrapper-discord").fadeIn("slow");
            setTimeout(() => {
                $(".wrapper-botpanel").fadeIn("slow");
                $(".wrapper-docs").fadeIn("slow");
            }, 500);
    }, 150);
});