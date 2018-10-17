"use strict";

var place_verb_items = document.getElementById("place_verb_items");

var html = "";

verbs.forEach(function (verb){
    html +=
        '<tr>'+
            '<td>'+verb.base_form+'</td>'+
            '<td>'+verb.simple_past+'</td>'+
            '<td>'+verb.past_participle+'</td>'+
            '<td>'+verb.translate+'</td>'+
        '</tr>'
    ;
});
place_verb_items.innerHTML = html;