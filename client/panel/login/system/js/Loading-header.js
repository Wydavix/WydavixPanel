$(window).ready(function(){
    $("#loadingLogo").hide(0);
    $(".wrappper_form").hide(0);
    setTimeout(() => {       
        $(".loader-wrapper").fadeOut("slow");
        setTimeout(() => {
            $("#loadingLogo").fadeIn("slow");
            setTimeout(() => {
                $("#loadingLogo").fadeOut("slow");
                setTimeout(() => {
                    $(".wrappper_form").fadeIn("slow");
                }, 500);
            }, 1500);
        }, 500);
    }, 5000);
});