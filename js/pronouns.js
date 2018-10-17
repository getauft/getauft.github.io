"use strict";

var place_pronoun_items = document.getElementById("place_pronoun_items");

var html = "";

pronouns.forEach(function (pronoun){
    html +=
        '<div class="row">'+
            '<div class="col-md">'+
                '<strong>'+pronoun.subject_pronoun+'</strong>'+
                ' — '+
                pronoun.person+
                ' — '+
                pronoun.object_pronoun+
                ' — '+
                pronoun.possessive_adjective+
                ' — '+
                pronoun.possessive_pronoun+
                ' —'+
                pronoun.reflexive_or_intensive_pronoun+
            '</div>'+
        '</div>'
    ;
});

place_pronoun_items.innerHTML = html;