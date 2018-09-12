//main.js是项目的入口文件

import $ from 'jquery'


$(function(){
    $('li:odd').css('backgroundColor','lightblue');
    $('li:even').css('backgroundColor',function(){
        return '#' + 'D97634'
    });
})