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
            window.location.href = "orderList.html";
            break;
            case 3: 
            window.location.href = "login.html";
            break;
        }
    })
    $(".business li").on('click',function(){
        // 获取对应数组id,请求数据，跳转带有信息id的页面
        window.location.href = "businessInfo.html";
        // 商品选择累加
    })
})();
// 商家信息页
(function(){
    if($("body").data("page") === "info"){
        info();
    }
    function info(){
        // 判断是否包邮，默认隐藏
        $(".cart-right-item-noable").hide();
        if(parseInt($("span").text()) === 0){
            $('.icon-minus-circle').hide();
        }
        // 商品个数加减

        $(".food li .icon-minus-circle").on('click',function(){
            if($(this).parent().next().find("span").text() === '1'){
                $(this).hide();
            }
            $(this).parent().next().find("span").text($(this).parent().next().find("span").text() - 1);
        })
        $(".food li .icon-plus-circle").on('click',function(){
            if($(this).parent().next().find("span").text() !== '1'){
                $(this).parent().siblings().find(".icon-minus-circle").show();
            }
            $(this).parent().prev().find("span").text($(this).parent().prev().find("span").text() - 0 + 1);
        })

        // 结算跳转
        $(".J-account").on('click',function(){
            window.location.href = "order.html";
        })
    }
})();
// 确定订单
(function(){
    if($("body").data("page") === "order"){
        order();
    }
    function order(){
        $(".J-pay").on('click',function(){
            window.location.href = "payment.html"
        })
    }
}());
// 支付页面
