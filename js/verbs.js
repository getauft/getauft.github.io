"use strict";

var place_verb_items = document.getElementById("place_verb_items");

var html;

verbs.forEach(function (verb){
    html +=
        '<div class="row">'+
            '<div class="col-md mb-1">'+verb.base_form+'</div>'+
            '<div class="col-md mb-1">'+verb.simple_past+'</div>'+
            '<div class="col-md mb-1">'+verb.past_participle+'</div>'+
            '<div class="col-md mb-1">'+verb.translate+'</div>'+
        '</div>'
    ;
});
place_verb_items.innerHTML = html;