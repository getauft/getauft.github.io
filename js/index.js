"use strict";

var showRule = false;

function getRandomInRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function showRulePlace() {
    document.getElementById("place_rule").style.visibility = "visible";
    document.getElementById("button_show_rule").style.visibility = "hidden";
}

function getExercise() {
    var time_item;
    var verb_item = verbs[getRandomInRange(0,verbs.length-1)];
    var pronoun_item = pronouns[getRandomInRange(0,pronouns.length-1)];
    var isQuestion = false;
    switch (getRandomInRange(0,2)) {
        case 0: {
            switch (getRandomInRange(0,2)) {
                case 0: {
                    time_item = times.future.question;
                    isQuestion = true;
                }
                    break;
                case 1: {
                    time_item = times.future.statement;
                }
                    break;
                case 2: {
                    time_item = times.future.negation;
                }
                    break;
            }
        }
            break;
        case 1: {
            switch (getRandomInRange(0,2)) {
                case 0: {
                    time_item = times.present.question;
                    isQuestion = true;
                }
                    break;
                case 1: {
                    time_item = times.present.statement;
                }
                    break;
                case 2: {
                    time_item = times.present.negation;
                }
                    break;
            }
        }
            break;
        case 2: {
            switch (getRandomInRange(0,2)) {
                case 0: {
                    time_item = times.past.question;
                    isQuestion = true;
                }
                    break;
                case 1: {
                    time_item = times.past.statement;
                }
                    break;
                case 2: {
                    time_item = times.past.negation;
                }
                    break;
            }
        }
            break;
    }

    document.getElementById("place_time_about_type").innerText = time_item.about_type;
    document.getElementById("place_time_about_time").innerText = time_item.about_time;

    document.getElementById("place_pronoun_subject").innerText = pronoun_item.subject_pronoun;

    if(verb_item.base_form === "be") {
        document.getElementById("place_verb_base_form").innerHTML = '<span class="text-danger font-weight-bold">'+verb_item.base_form+'</span>';
    } else {
        document.getElementById("place_verb_base_form").innerText = verb_item.base_form;
    }
    document.getElementById("place_verb_past_participle").innerText = verb_item.past_participle;
    document.getElementById("place_verb_translate").innerText = verb_item.translate;

    if(verb_item.base_form === "be"){
        document.getElementById("place_rule").innerHTML = '<div class="alert alert-danger" role="alert">'+time_item.rule_to_be+'</div>';
    } else {
        document.getElementById("place_rule").innerHTML = '<div class="alert alert-warning" role="alert">'+time_item.rule+'</div>';
    }

    if (!showRule){
        document.getElementById("place_rule").style.visibility = "hidden";
    } else {
        document.getElementById("place_rule").style.visibility = "visible";
    }

    document.getElementById("button_show_rule").style.visibility = "visible";

}

getExercise();