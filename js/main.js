(function () {
    $(".footer li").on('click',function () {
        // $(this).addClass("active").siblings().removeClass("active");
        switch($(this).index()){
            case 0: 
            window.location.href = "index.html";
            break;
            case 1: 
            window.location.href = "businessList.html";
            break;
            case 2: 
            window.location.href = "order.html";
            break;
            case 3: 
            window.location.href = "me.html";
            break;
        }
    })
})();