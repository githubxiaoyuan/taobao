//放大镜功能
(function() {
    var box = document.querySelector('.goods-pre-img');
    var mask = box.querySelector('.mask');
    var previewBox = box.querySelector('.preview-box');
    var bigImgBox = box.querySelector('.bigImg-box');
    var bigImg = box.querySelector('.bigImg-wrap');

    // 设置遮罩层的大小
    var w = previewBox.clientWidth * bigImgBox.clientWidth / bigImg.clientWidth;
    mask.style.width = w + 'px';
    mask.style.height = w + 'px';

    bigImgBox.style.display = 'none';

    // 鼠标移动遮罩层

    previewBox.onmouseenter = function() {
        mask.style.display = 'block';
        bigImgBox.style.display = 'block';
    };
    previewBox.onmouseleave = function() {
        mask.style.display = 'none';
        bigImgBox.style.display = 'none';
    };

    previewBox.onmousemove = function(e) {
        if (e.pageX - box.offsetLeft - box.clientLeft > mask.offsetWidth / 2) {
            mask.style.left = e.pageX - box.offsetLeft - box.clientLeft - mask.offsetWidth / 2 + 'px';
        } else {
            mask.style.left = '0px';
        }
        if (e.pageY - box.offsetTop - box.clientTop > mask.offsetHeight / 2) {
            mask.style.top = e.pageY - box.offsetTop - box.clientTop - mask.offsetHeight / 2 + 'px';
        } else {
            mask.style.top = '0px';
        }
        if ((box.clientWidth - (e.pageX - box.offsetLeft)) <= mask.offsetWidth / 2) {
            mask.style.left = (box.offsetWidth - Math.ceil(parseFloat(mask.style.width))) + 'px';
        }
        if ((box.clientHeight - (e.pageY - box.offsetTop)) <= mask.offsetHeight / 2) {
            mask.style.top = (box.offsetHeight - Math.ceil(parseFloat(mask.style.height))) + 'px';
        }
        bigImg.style.transform = 'translate(' + (-parseFloat(mask.style.left) * bigImg.offsetWidth / previewBox.clientWidth) + 'px,' + (-parseFloat(mask.style.top) * bigImg.offsetHeight / previewBox.clientHeight) + 'px)';
    };
})();