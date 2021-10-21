setInterval(function () {
    var ad_el_1 = document.querySelector("._3j0kQ-8WsgCmUba-Z5kG0y");
    var ad_el_2 = document.querySelector("._1fdJgE9col8hzvfrzqK_ig");
    var ad_el_3 = document.querySelectorAll(".slider-top_content__3OP_k");
    
    if (ad_el_1) ad_el_1.remove();
    if (ad_el_2) ad_el_2.remove();
    if (ad_el_3) {
        ad_el_3.forEach(element => {
            element.style.setProperty('left', '-9999px', 'important');
        });
    }
 }, 60);