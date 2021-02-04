//API统一根路径
$.ajaxPrefilter(function(option) {
    option.url = 'http://127.0.0.1' + option.url;
})