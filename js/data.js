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
    {base_form: 'buy', simple_past: 'bought', past_participle: 'bought', translate: 'покупать'}

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
            rule: 'Will [I, you, we, they he, she] {verd}?',
            rule_to_be: 'Will [I, you, we, they he, she] be?'
        },
        statement: {
            about_type: 'утверждение',
            about_time: 'будущее время',
            rule: '[I, you, we, they he, she] will {verd}.',
            rule_to_be: '[I, you, we, they he, she] will be.'
        },
        negation: {
            about_type: 'отрицание',
            about_time: 'будущее время',
            rule: '[I, you, we, they he, she] will not {verd}.',
            rule_to_be: '[I, you, we, they he, she] will not be.'
        }
    },
    present: {
        question: {
            about_type: 'вопрос',
            about_time: 'настоящее время',
            rule: 'Do [I, you, we, they] {verb}? </br> Does [he, she] {verb}?',
            rule_to_be: 'Am [I]?</br>Is [he, she, it]?</br>Are [you, we, they]?'
        },
        statement: {
            about_type: 'утверждение',
            about_time: 'настоящее время',
            rule: '[I, you, we, they] {verb}. </br>[He, she] {verb}-s.',
            rule_to_be: '[I] am</br>[He, she, it] is.</br>[You, we, they] are.'
        },
        negation: {
            about_type: 'отрицание',
            about_time: 'настоящее время',
            rule: '[I, you, we, they] do not {verb}. </br> [He, she] does not {verb}.',
            rule_to_be: '[I, you, we, they he, she] not.'
        }
    },
    past: {
        question: {
            about_type: 'вопрос',
            about_time: 'прошедшее время',
            rule: 'Did [I, you, we, they he, she] {verd}?',
            rule_to_be: 'Was [I, he, she, it]?</br>Where [you, we, they]?'
        },
        statement: {
            about_type: 'утверждение',
            about_time: 'прошедшее время',
            rule: '[I, you, we, they he, she] {verd-d / verb simple past form}.',
            rule_to_be: '[I, he, she, it] was.</br>[You, we, they] where.'
        },
        negation: {
            about_type: 'отрицание',
            about_time: 'прошедшее время',
            rule: '[I, you, we, they he, she] did not {verd}.',
            rule_to_be: '[I, you, we, they he, she] not.'
        }
    }
};