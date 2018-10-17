"use strict";

var pronouns = [
    {person: '1st', plural: false, subject_pronoun: 'I', object_pronoun: 'me', possessive_adjective: 'my', possessive_pronoun: 'mine', reflexive_or_intensive_pronoun: 'myself'},
    {person: '2nd', plural: false, subject_pronoun: 'you', object_pronoun: 'you', possessive_adjective: 'your', possessive_pronoun: 'yours', reflexive_or_intensive_pronoun: 'yourself'},
    {person: '3rd', plural: false, subject_pronoun: 'he', object_pronoun: 'him', possessive_adjective: 'his', possessive_pronoun: 'his', reflexive_or_intensive_pronoun: 'himself'},
    {person: '3rd', plural: false, subject_pronoun: 'she', object_pronoun: 'her', possessive_adjective: 'her', possessive_pronoun: 'hers', reflexive_or_intensive_pronoun: 'herself'},
    {person: '1st', plural: true, subject_pronoun: 'we', object_pronoun: 'us', possessive_adjective: 'our', possessive_pronoun: 'ours', reflexive_or_intensive_pronoun: 'ourselves'},
    {person: '2nd', plural: true, subject_pronoun: 'you', object_pronoun: 'you', possessive_adjective: 'your', possessive_pronoun: 'yours', reflexive_or_intensive_pronoun: 'yourselves'},
    {person: '3rd', plural: true, subject_pronoun: 'they', object_pronoun: 'them', possessive_adjective: 'their', possessive_pronoun: 'theirs', reflexive_or_intensive_pronoun: 'themselves'}
];

var verbs = [
    {base_form: 'be', simple_past: 'were', past_participle: 'been', translate: 'быть'},
    {base_form: 'have', simple_past: 'had', past_participle: 'had', translate: 'иметь'},
    {base_form: 'do', simple_past: 'did', past_participle: 'done', translate: 'делать'},
    {base_form: 'say', simple_past: 'said', past_participle: 'said', translate: 'говорить'},
    {base_form: 'go', simple_past: 'went', past_participle: 'gone', translate: 'идти'},
    {base_form: 'get', simple_past: 'got', past_participle: 'got / gotten', translate: 'получать'},
    {base_form: 'make', simple_past: 'made', past_participle: 'made', translate: 'делать'},
    {base_form: 'know', simple_past: 'knew', past_participle: 'known', translate: 'знать'},
    {base_form: 'think', simple_past: 'thought', past_participle: 'thought', translate: 'думать'},
    {base_form: 'take', simple_past: 'took', past_participle: 'taken', translate: 'брать'},
    {base_form: 'see', simple_past: 'saw', past_participle: 'seen', translate: 'видеть'},
    {base_form: 'come', simple_past: 'came', past_participle: 'come', translate: 'приходить'},
    {base_form: 'want', simple_past: 'wanted', past_participle: 'wanted', translate: 'хотеть'},
    {base_form: 'use', simple_past: 'used', past_participle: 'used', translate: 'использовать'},
    {base_form: 'find', simple_past: 'found', past_participle: 'found', translate: 'находить'},
    {base_form: 'give', simple_past: 'gave', past_participle: 'given', translate: 'давать'},
    {base_form: 'tell', simple_past: 'told', past_participle: 'told', translate: 'рассказывать'},
    {base_form: 'work', simple_past: 'worked', past_participle: 'worked', translate: 'работать'},
    {base_form: 'call', simple_past: 'called', past_participle: 'called', translate: 'звать; звонить'},
    {base_form: 'try', simple_past: 'tried', past_participle: 'tried', translate: 'пытаться'},
    {base_form: 'ask', simple_past: 'asked', past_participle: 'asked', translate: 'просить; спрашивать'},
    {base_form: 'need', simple_past: 'needed', past_participle: 'needed', translate: 'нуждаться'},
    {base_form: 'feel', simple_past: 'felt', past_participle: 'felt', translate: 'чувствовать'},
    {base_form: 'become', simple_past: 'became', past_participle: 'become', translate: 'становиться'},
    {base_form: 'leave', simple_past: 'left', past_participle: 'left', translate: 'оставлять'},
    {base_form: 'put', simple_past: 'put', past_participle: 'put', translate: 'класть; ставить'},
    {base_form: 'mean', simple_past: 'meant', past_participle: 'meant', translate: 'значить'},
    {base_form: 'keep', simple_past: 'kept', past_participle: 'kept', translate: 'хранить'},
    {base_form: 'let', simple_past: 'let', past_participle: 'let', translate: 'позволять'},
    {base_form: 'begin', simple_past: 'began', past_participle: 'begun', translate: 'начинать'},
    {base_form: 'seem', simple_past: 'seemed', past_participle: 'seemed', translate: 'казаться'},
    {base_form: 'help', simple_past: 'helped', past_participle: 'helped', translate: 'помогать'},
    {base_form: 'show', simple_past: 'showed', past_participle: 'shown', translate: 'показывать'},
    {base_form: 'hear', simple_past: 'heard', past_participle: 'heard', translate: 'слышать'},
    {base_form: 'play', simple_past: 'played', past_participle: 'played', translate: 'играть'},
    {base_form: 'run', simple_past: 'ran', past_participle: 'run', translate: 'бежать'},
    {base_form: 'move', simple_past: 'moved', past_participle: 'moved', translate: 'двигаться'},
    {base_form: 'live', simple_past: 'lived', past_participle: 'lived', translate: 'жить'},
    {base_form: 'believe', simple_past: 'believed', past_participle: 'believed', translate: 'верить'},
    {base_form: 'bring', simple_past: 'brought', past_participle: 'brought', translate: 'приносить'},
    {base_form: 'happen', simple_past: 'happened', past_participle: 'happened', translate: 'случаться'},
    {base_form: 'write', simple_past: 'wrote', past_participle: 'written', translate: 'писать'},
    {base_form: 'sit', simple_past: 'sat', past_participle: 'sat', translate: 'сидеть'},
    {base_form: 'stand', simple_past: 'stood', past_participle: 'stood', translate: 'стоять'},
    {base_form: 'lose', simple_past: 'lost', past_participle: 'lost', translate: 'терять'},
    {base_form: 'pay', simple_past: 'paid', past_participle: 'paid', translate: 'платить'},
    {base_form: 'meet', simple_past: 'met', past_participle: 'met', translate: 'встречать'},
    {base_form: 'include', simple_past: 'included', past_participle: 'included', translate: 'включать'},
    {base_form: 'continue', simple_past: 'continued', past_participle: 'continued', translate: 'продолжать'},
    {base_form: 'set', simple_past: 'set', past_participle: 'set', translate: 'устанавливать'},
    {base_form: 'learn', simple_past: 'learnt / learned', past_participle: 'learnt / learned', translate: 'учить'},
    {base_form: 'change', simple_past: 'changed', past_participle: 'changed', translate: 'менять'},
    {base_form: 'lead', simple_past: 'led', past_participle: 'led', translate: 'вести'},
    {base_form: 'understand', simple_past: 'understood', past_participle: 'understood', translate: 'понимать'},
    {base_form: 'watch', simple_past: 'watched', past_participle: 'watched', translate: 'смотреть / наблюдать'},
    {base_form: 'follow', simple_past: 'followed', past_participle: 'followed', translate: 'следовать'},
    {base_form: 'stop', simple_past: 'stopped', past_participle: 'stopped', translate: 'останавливать'},
    {base_form: 'create', simple_past: 'created', past_participle: 'created', translate: 'создавать'},
    {base_form: 'speak', simple_past: 'spoke', past_participle: 'spoken', translate: 'говорить'},
    {base_form: 'read', simple_past: 'read', past_participle: 'read', translate: 'читать'},
    {base_form: 'spend', simple_past: 'spent', past_participle: 'spent', translate: 'тратить'},
    {base_form: 'grow', simple_past: 'grew', past_participle: 'grown', translate: 'расти'},
    {base_form: 'open', simple_past: 'opened', past_participle: 'opened', translate: 'открывать'},
    {base_form: 'walk', simple_past: 'walked', past_participle: 'walked', translate: 'идти'},
    {base_form: 'win', simple_past: 'won', past_participle: 'won', translate: 'побеждать'},
    {base_form: 'teach', simple_past: 'taught', past_participle: 'taught', translate: 'учить'},
    {base_form: 'offer', simple_past: 'offered', past_participle: 'offered', translate: 'предлагать'},
    {base_form: 'remember', simple_past: 'remembered', past_participle: 'remembered', translate: 'помнить'},
    {base_form: 'consider', simple_past: 'considered', past_participle: 'considered', translate: 'считать'},
    {base_form: 'appear', simple_past: 'appeared', past_participle: 'appeared', translate: 'появляться'},
    {base_form: 'buy', simple_past: 'bought', past_participle: 'bought', translate: 'покупать'},
    {base_form: 'serve', simple_past: 'served', past_participle: 'served', translate: 'служить'},
    {base_form: 'die', simple_past: 'died', past_participle: 'died', translate: 'умирать'},
    {base_form: 'send', simple_past: 'sent', past_participle: 'sent', translate: 'посылать'},
    {base_form: 'build', simple_past: 'built', past_participle: 'built', translate: 'строить'},
    {base_form: 'stay', simple_past: 'stayed', past_participle: 'stayed', translate: 'оставаться'},
    {base_form: 'fall', simple_past: 'fell', past_participle: 'fallen', translate: 'падать'},
    {base_form: 'cut', simple_past: 'cut', past_participle: 'cut', translate: 'резать'},
    {base_form: 'reach', simple_past: 'reached', past_participle: 'reached', translate: 'достигать'},
    {base_form: 'kill', simple_past: 'killed', past_participle: 'killed', translate: 'убивать'},
    {base_form: 'raise', simple_past: 'raised', past_participle: 'raised', translate: 'поднимать'},
    {base_form: 'pass', simple_past: 'passed', past_participle: 'passed', translate: 'миновать'},
    {base_form: 'sell', simple_past: 'sold', past_participle: 'sold', translate: 'продавать'},
    {base_form: 'decide', simple_past: 'decided', past_participle: 'decided', translate: 'решать'},
    {base_form: 'return', simple_past: 'returned', past_participle: 'returned', translate: 'возвращаться'},
    {base_form: 'explain', simple_past: 'explained', past_participle: 'explained', translate: 'объяснять'},
    {base_form: 'hope', simple_past: 'hoped', past_participle: 'hoped', translate: 'надеяться'},
    {base_form: 'develop', simple_past: 'developed', past_participle: 'developed', translate: 'развивать'},
    {base_form: 'carry', simple_past: 'carried', past_participle: 'carried', translate: 'везти / нести'},
    {base_form: 'break ', simple_past: 'broke', past_participle: 'broken', translate: 'ломать'},
    {base_form: 'receive', simple_past: 'received', past_participle: 'received', translate: 'получать'},
    {base_form: 'agree', simple_past: 'agreed', past_participle: 'agreed', translate: 'соглашаться'},
    {base_form: 'support', simple_past: 'supported', past_participle: 'supported', translate: 'поддерживать'},
    {base_form: 'hit', simple_past: 'hit', past_participle: 'hit', translate: 'ударять'},
    {base_form: 'produce', simple_past: 'produced', past_participle: 'produced', translate: 'производить'},
    {base_form: 'eat', simple_past: 'ate', past_participle: 'eaten', translate: 'есть'},
    {base_form: 'cover', simple_past: 'covered', past_participle: 'covered', translate: 'покрывать'},
    {base_form: 'catch', simple_past: 'caught', past_participle: 'caught', translate: 'ловить'},
    {base_form: 'draw', simple_past: 'drew', past_participle: 'drawn', translate: 'рисовать'},
    {base_form: 'choose', simple_past: 'chose', past_participle: 'chosen', translate: 'выбирать'}
];

var parameters = [
    {pronoun: 'everybody', translate: 'все / всякий / каждый', scope_of_use: 'people'},
    {pronoun: 'somebody', translate: 'кто-то / кое-кто / кто-нибудь', scope_of_use: 'people'},
    {pronoun: 'nobody', translate: 'никто', scope_of_use: 'people'},
    {pronoun: 'everything', translate: 'все / всякий / каждый', scope_of_use: 'things'},
    {pronoun: 'something', translate: 'что-то / кое-что / что-нибудь', scope_of_use: 'things'},
    {pronoun: 'nothing', translate: 'ничего', scope_of_use: 'things'},
    {pronoun: 'everywhere', translate: 'везде / всюду', scope_of_use: 'place'},
    {pronoun: 'somewhere', translate: 'где-то / куда-то / где-нибудь', scope_of_use: 'place'},
    {pronoun: 'nowhere', translate: 'нигде / никуда', scope_of_use: 'place'},
    {pronoun: 'always', translate: 'всегда', scope_of_use: 'time'},
    {pronoun: 'sometimes', translate: 'иногда', scope_of_use: 'time'},
    {pronoun: 'never', translate: 'никогда', scope_of_use: 'time'},

];

var interrogative = [
    {word: 'what', translate: 'что / какой'},
    {word: 'who', translate: 'кто'},
    {word: 'where', translate: 'где / куда'},
    {word: 'when', translate: 'когда'},
    {word: 'why', translate: 'почему / зачем'},
    {word: 'how', translate: 'как'}
];

var prepositions = [
    {pretext: 'to', translate: 'в / к / до (приближение)'},
    {pretext: 'in', translate: 'в (внутри)'},
    {pretext: 'from', translate: 'от / из (удаление)'},
    {pretext: 'over', translate: 'над'},
    {pretext: 'on', translate: 'на'},
    {pretext: 'under', translate: 'под'},
    {pretext: 'between', translate: 'между'},
    {pretext: 'with', translate: 'с'},
    {pretext: 'without', translate: 'без'},
    {pretext: 'for', translate: 'для'},
    {pretext: 'about', translate: 'о / около'},
    {pretext: 'at', translate: 'в (нахождение в окружении или обстановке)'}
];

var  times = {
    future: {
        question: {
            about_type: 'вопрос',
            about_time: 'будущее время',
            rule: 'will [I, you, we, they he, she] {verd}?'
        },
        statement: {
            about_type: 'утверждение',
            about_time: 'будущее время',
            rule: '[I, you, we, they he, she] will {verd}'
        },
        negation: {
            about_type: 'отрицание',
            about_time: 'будущее время',
            rule: '[I, you, we, they he, she] will not {verd}'
        }
    },
    present: {
        question: {
            about_type: 'вопрос',
            about_time: 'настоящее время',
            rule: 'do [I, you, we, they] {verb}? </br> does [he, she] {verb}?'
        },
        statement: {
            about_type: 'утверждение',
            about_time: 'настоящее время',
            rule: '[I, you, we, they] {verb}? </br> [he, she] {verb}-s?'
        },
        negation: {
            about_type: 'отрицание',
            about_time: 'настоящее время',
            rule: '[I, you, we, they] do not {verb}? </br> [he, she] does not {verb}?'
        }
    },
    past: {
        question: {
            about_type: 'вопрос',
            about_time: 'прошедшее время',
            rule: 'did [I, you, we, they he, she] {verd}?'
        },
        statement: {
            about_type: 'утверждение',
            about_time: 'прошедшее время',
            rule: '[I, you, we, they he, she] {verd}-d / {verb simplepast form}'
        },
        negation: {
            about_type: 'отрицание',
            about_time: 'прошедшее время',
            rule: '[I, you, we, they he, she] did not {verd}'
        }
    }
};

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
    if (pronoun_item.object_pronoun == second_pronoun_item.object_pronoun) {
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

    document.getElementById("place_pronoun_subject").innerText = pronoun_item.subject_pronoun;
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

    document.getElementById("place_rule").innerHTML = time_item.rule;
    if (!showRule){
        document.getElementById("place_rule").style.visibility = "hidden";
    } else {
        document.getElementById("place_rule").style.visibility = "visible";
    }

    document.getElementById("button_show_rule").style.visibility = "visible";

}

getExercise();