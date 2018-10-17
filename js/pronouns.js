"use strict";

var place_pronoun_items = document.getElementById("place_pronoun_items");

var html = "";

pronouns.forEach(function (pronoun){
    html +=
        '<div class="row">'+
            '<div class="col-md">'+
                pronoun.person+
                ' — '+
                '<strong>'+pronoun.subject_pronoun+'</strong>'+
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

var place_parametr_items = document.getElementById("place_parametr_items");

html = "";

parameters.forEach(function (parameter) {
    html +=
        '<div class="row">'+
            '<div class="col-md">'+
                '<strong>'+parameter.pronoun+'</strong>'+
                '<span class="text-muted"> (about '+
                parameter.scope_of_use+
                ')</span> — '+
                parameter.translate+
            '</div>'+
        '</div>'
    ;
});

place_parametr_items.innerHTML = html;