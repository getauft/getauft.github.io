"use strict";

var showRule = false;
var answer = "";
var yandex_key = "trnsl.1.1.20181026T095610Z.0f9e5b3c50d78498.83dff75a74e7d95e0712640c87b207295ef8842a";
var yandex_url = "https://translate.yandex.net/api/v1.5/tr.json/translate?lang=en-ru&format=plain&key=";

function getRandomInRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function showRulePlace() {
    document.getElementById("place_rule").style.visibility = "visible";
    document.getElementById("button_show_rule").style.visibility = "hidden";
}

function showAnswerPlace() {
    document.getElementById("place_answer").style.visibility = "visible";
    document.getElementById("button_show_answer").style.visibility = "hidden";
}

function speak() {
    if ('speechSynthesis' in window) {
        var voices = window.speechSynthesis.getVoices();
        var utterance = new SpeechSynthesisUtterance(answer);
        utterance.lang = "en-US";
        window.speechSynthesis.speak(utterance);
    }
}


function getExercise() {
    document.getElementById("content").style.display = "none";
    document.getElementById("waiting").style.display = "table-cell";
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
                    answer = "will " + pronoun_item.subject_pronoun + " " + verb_item.base_form + "?";
                }
                    break;
                case 1: {
                    time_item = times.future.statement;
                    answer = pronoun_item.subject_pronoun + " will " + verb_item.base_form + ".";
                }
                    break;
                case 2: {
                    time_item = times.future.negation;
                    answer = pronoun_item.subject_pronoun + " will not " + verb_item.base_form + ".";
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
                    if (pronoun_item.subject_pronoun !== 'he' || pronoun_item.subject_pronoun !== 'she'){
                        answer = "do " + pronoun_item.subject_pronoun + " " + verb_item.base_form + "?";
                    } else {
                        answer = "does " + pronoun_item.subject_pronoun + " " + verb_item.base_form + "?";
                    }
                }
                    break;
                case 1: {
                    time_item = times.present.statement;
                    if (pronoun_item.subject_pronoun === "he" || pronoun_item.subject_pronoun === "she"){
                        //y
                        var ending = "s";
                        if(verb_item.base_form[verb_item.base_form.length-1] === "y"){
                            ending = "ies";
                            answer = pronoun_item.subject_pronoun + " " + verb_item.base_form.substring(0,verb_item.base_form.length-1) + ending +".";
                        }
                        //ss, ch, x, tch, sh, zz
                        if(
                            verb_item.base_form[verb_item.base_form.length-2] + verb_item.base_form[verb_item.base_form.length-1] === "ss" ||
                            verb_item.base_form[verb_item.base_form.length-2] + verb_item.base_form[verb_item.base_form.length-1] === "ch" ||
                            verb_item.base_form[verb_item.base_form.length-2] + verb_item.base_form[verb_item.base_form.length-1] === "sh" ||
                            verb_item.base_form[verb_item.base_form.length-2] + verb_item.base_form[verb_item.base_form.length-1] === "zz" ||
                            verb_item.base_form[verb_item.base_form.length-1] === "x" ||
                            verb_item.base_form[verb_item.base_form.length-3] + verb_item.base_form[verb_item.base_form.length-2] + verb_item.base_form[verb_item.base_form.length-1] === "tch"
                        ){
                            ending = "es";
                            answer = pronoun_item.subject_pronoun + " " + verb_item.base_form + ending +".";
                        }

                    } else {
                        answer = pronoun_item.subject_pronoun + " " + verb_item.base_form + ".";
                    }
                }
                    break;
                case 2: {
                    time_item = times.present.negation;
                    if (pronoun_item.subject_pronoun !== 'he' || pronoun_item.subject_pronoun !== 'she'){
                        answer = pronoun_item.subject_pronoun + " don't " + verb_item.base_form + ".";
                    } else {
                        answer = pronoun_item.subject_pronoun + " doesn't " + verb_item.base_form + ".";
                    }
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
                    answer = "did " + pronoun_item.subject_pronoun + " " + verb_item.base_form + "?";
                }
                    break;
                case 1: {
                    time_item = times.past.statement;
                    answer = pronoun_item.subject_pronoun + " " + verb_item.past_participle + ".";
                }
                    break;
                case 2: {
                    time_item = times.past.negation;
                    answer = pronoun_item.subject_pronoun + " did not " + verb_item.base_form + ".";
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

    answer = answer[0].toUpperCase() + answer.substring(1);

    var xhr = new XMLHttpRequest();
    var body = 'text=' + encodeURIComponent(answer);
    xhr.open("POST", yandex_url+yandex_key, false);
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhr.send(body);
    if(xhr.status === 200) {
        var res = JSON.parse(xhr.response);
        document.getElementById("place_yandex_translate").innerText = res.text[0];
        document.getElementById("content").style.display = "block";
        document.getElementById("waiting").style.display = "none";
    }

    document.getElementById("place_answer").style.visibility = "hidden";
    document.getElementById("place_answer").innerHTML =
        '<div class="row">' +
        '<div class="col-md-10"><div class="alert alert-info" role="alert">'+answer+'</div></div>' +
        '<div class="col-md-2"><button type="button" class="btn btn-info btn-block btn-lg" onclick="speak()">&#9835;</button></div>' +
        '</div>'
    ;

    document.getElementById("button_show_rule").style.visibility = "visible";
    document.getElementById("button_show_answer").style.visibility = "visible";

}

getExercise();