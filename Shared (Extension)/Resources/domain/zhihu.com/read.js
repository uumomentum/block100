setInterval(function () {
    var cur_artBox = document.querySelector(".RichContent-inner");
    var cur_artBox2 = document.querySelector(".AnswersNavWrapper .RichContent-inner");
    var cur_more = document.querySelector(".ContentItem-expandButton");
    var cur_more2=document.querySelector(".AnswersNavWrapper .ContentItem-expandButton");
    if (cur_artBox) {
        cur_artBox.style.setProperty('max-height', 'none', 'important');
        cur_artBox.style.setProperty('-webkit-mask-image', 'none', 'important');
    }
    if (cur_artBox2) {
        cur_artBox2.style.setProperty('max-height', 'none', 'important');
        cur_artBox2.style.setProperty('-webkit-mask-image', 'none', 'important');
    }
    if (cur_more) {
        cur_more.style.opacity="0";
    }
    if (cur_more2) {
        cur_more2.style.opacity="0";
    }
}, 30);