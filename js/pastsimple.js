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
    var second_pronoun_item = pronouns[getRandomInRange(0,pronouns.length-1)];
    if (pronoun_item.object_pronoun === second_pronoun_item.object_pronoun) {
        second_pronoun_item = pronouns[getRandomInRange(0,pronouns.length-1)];
    };
    var interrogative_item = interrogative[getRandomInRange(0,interrogative.length-1)];
    var parameter_item = parameters[getRandomInRange(0,parameters.length-1)];
    var prepositions_item = prepositions[getRandomInRange(0,prepositions.length-1)];
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

    if(verb_item.base_form === "be") {
        document.getElementById("place_pronoun_subject").innerHTML = '<span class="text-danger font-weight-bold">'+pronoun_item.subject_pronoun+'</span>';
    } else {
        document.getElementById("place_pronoun_subject").innerText = pronoun_item.subject_pronoun;
    }
    document.getElementById("place_pronoun_object").innerText = second_pronoun_item.object_pronoun;

    document.getElementById("place_verb_base_form").innerText = verb_item.base_form;
    document.getElementById("place_verb_past_participle").innerText = verb_item.past_participle;
    document.getElementById("place_verb_translate").innerText = verb_item.translate;

    document.getElementById("place_parameter_pronoun").innerText = parameter_item.pronoun;
    document.getElementById("place_parameter_scope_of_use").innerText = parameter_item.scope_of_use;
    document.getElementById("place_parameter_translate").innerText = parameter_item.translate;

    document.getElementById("place_preposition_pretext").innerText = prepositions_item.pretext;
    document.getElementById("place_preposition_translate").innerText = prepositions_item.translate;

    if (!isQuestion){
        document.getElementById("place_interrogative").style.display = "none";
    } else {
        document.getElementById("place_interrogative").style.display = "flex";
        document.getElementById("place_interrogative_word").innerText = interrogative_item.word;
        document.getElementById("place_interrogative_translate").innerText = interrogative_item.translate;
    }

    if(verb_item.base_form === "be"){
        document.getElementById("place_rule").innerHTML = time_item.rule_to_be;
    } else {
        document.getElementById("place_rule").innerHTML = time_item.rule;
    }

    if (!showRule){
        document.getElementById("place_rule").style.visibility = "hidden";
    } else {
        document.getElementById("place_rule").style.visibility = "visible";
    }

    document.getElementById("button_show_rule").style.visibility = "visible";

}

getExercise();