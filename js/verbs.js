"use strict";

var place_verb_items = document.getElementById("place_verb_items");

var html;

verbs.forEach(function (verb){
    html +=
        '<tr>'+
            '<th scope="row">'+verb.base_form+'</th>'+
            '<td>'+verb.simple_past+'</td>'+
            '<td>'+verb.past_participle+'</td>'+
            '<td>'+verb.translate+'</td>'+
        '</tr>'
    ;
});
place_verb_items.innerHTML = html;