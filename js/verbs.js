"use strict";

var place_verb_items = document.getElementById("place_verb_items");

var html = "";

verbs.forEach(function (verb){
    html +=
        '<tr>'+
            '<th>'+verb.base_form+'</th>'+
            '<th>'+verb.simple_past+'</th>'+
            '<th>'+verb.past_participle+'</th>'+
            '<th>'+verb.translate+'</th>'+
        '</tr>'
    ;
});
place_verb_items.innerHTML = html;