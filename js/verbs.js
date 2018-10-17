"use strict";

var place_verb_items = document.getElementById("place_verb_items");

var html = "";

verbs.forEach(function (verb){
    html +=
        '<div class="row">'+
            '<div class="col-md">'+
                verb.base_form+' — '+verb.simple_past+' — '+verb.past_participle+' — '+verb.translate+
            '</div>'+
        '</div>'
    ;
});
place_verb_items.innerHTML = html;