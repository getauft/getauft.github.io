"use strict";

var place_verb_items = document.getElementById("place_verb_items");

var html = "";
var i = 1;

verbs.forEach(function (verb){
    html +=
        '<tr>'+
            '<th>'+i+'.</th>'+
            '<th scope="row">'+verb.base_form+'</th>'+
            '<th>'+verb.simple_past+'</th>'+
            '<th>'+verb.past_participle+'</th>'+
            '<th>'+verb.translate+'</th>'+
        '</tr>'
    ;
    i++;
});
place_verb_items.innerHTML = html;