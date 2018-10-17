"use strict";

var place_verb_items = document.getElementById("place_verb_items");

var html = "";
var i = 1;

verbs.forEach(function (verb){
    html +=
        '<div class="row">'+
            '<div class="col-md">'+
                i+'. <strong>'+verb.base_form+'</strong> ( '+verb.simple_past+') ['+verb.past_participle+'] — '+verb.translate+
            '</div>'+
        '</div>'
    ;
    i++;
});
place_verb_items.innerHTML = html;