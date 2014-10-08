'use strict';

angular.module('famousAngularStarter')
  .controller('MainCtrl', function ($scope, $famous, $http) {
    // Imports
    var Transitionable = $famous['famous/transitions/Transitionable'];
    var Timer = $famous['famous/utilities/Timer'];
    var EventHandler = $famous['famous/core/EventHandler'];

    var arr = [];
    var duration = 500;

    // Data
    $scope.cards = [
        {
            id: 1,
            title: 'Suresh Raina',
            img: 'suresh_raina.jpg',
            detailImg: 'dhoni_d.jpg',
            summery: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
            content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
        },
        {
            id: 2,
            title: 'MS Dhoni',
            img: 'dhoni.jpg',
            detailImg: 'dhoni_d.jpg',
            summery: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
            content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
        },
        {
            id: 3,
            title: 'Suresh Raina',
            img: 'suresh_raina.jpg',
            detailImg: 'dhoni_d.jpg',
            summery: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
            content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
        },
        {
            id: 4,
            title: 'MS Dhoni',
            img: 'dhoni.jpg',
            detailImg: 'dhoni_d.jpg',
            summery: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
            content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
        },
        {
            id: 5,
            title: 'Suresh Raina',
            img: 'suresh_raina.jpg',
            detailImg: 'dhoni_d.jpg',
            summery: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
            content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
        },
        {
            id: 6,
            title: 'MS Dhoni',
            img: 'dhoni.jpg',
            detailImg: 'dhoni_d.jpg',
            summery: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
            content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
        },
        {
            id: 7,
            title: 'Suresh Raina',
            img: 'suresh_raina.jpg',
            detailImg: 'dhoni_d.jpg',
            summery: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
            content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
        },
        {
            id: 8,
            title: 'MS Dhoni',
            img: 'dhoni.jpg',
            detailImg: 'dhoni_d.jpg',
            summery: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
            content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
        },
        {
            id: 9,
            title: 'Suresh Raina',
            img: 'suresh_raina.jpg',
            detailImg: 'dhoni_d.jpg',
            summery: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
            content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
        },
        {
            id: 10,
            title: 'MS Dhoni',
            img: 'dhoni.jpg',
            detailImg: 'dhoni_d.jpg',
            summery: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
            content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
        },
        {
            id: 11,
            title: 'Suresh Raina',
            img: 'suresh_raina.jpg',
            detailImg: 'dhoni_d.jpg',
            summery: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
            content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
        },
        {
            id: 12,
            title: 'MS Dhoni',
            img: 'dhoni.jpg',
            detailImg: 'dhoni_d.jpg',
            summery: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
            content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
        }
    ];


    $scope.wrap = window.innerWidth - 14;
    $scope.cardHeight = window.innerHeight - 14;
    $scope.myEventHandler = new EventHandler();

    // Card initial state
    $scope.cardsScale = new Transitionable([1, 1, 1]);
    $scope.cardsOpacity = new Transitionable(1);

    $scope.cardSummeryscale = new Transitionable([0.001, 0.001, 0.001]);
    $scope.cardSummeryOpacity = new Transitionable(0);

    $scope.cardScale = new Transitionable([.001, .001,.001]);
    $scope.cardOpacity = new Transitionable(0);

    $scope.cardSummeryEnter = function(cardSummery, done) {
        $scope.cardSummeryscale.set([1, 1, 1], {duration: duration, curve: 'linear'}, done);
        $scope.cardSummeryOpacity.set([1], {duration: duration, curve: 'linear'}, done);
    };

    $scope.cardSummeryLeave = function(cardSummery, done) {
        $scope.cardSummeryscale.set([.001, .001, .001], {duration: duration, curve: 'linear'}, done);
        $scope.cardSummeryOpacity.set([0], {duration: duration, curve: 'linear'}, done);
    };

    $scope.goToCard = function($event) {
        var cardSummeryClass = $event.origin._currTarget.className.match('card-summery-[0-9]');
        $scope.cardSummeryIndex = cardSummeryClass[0].slice('card-summery-'.length);

        $scope.cardsOut();
        $scope.cardIn();
    };

    $scope.goToCards = function($event) {
        $scope.cardOut();
        $scope.cardsIn();
    };


    $scope.cardsOut = function(done) {
        $scope.cardsScale.set([.001, .001, .001], {duration: duration, curve: 'linear'}, done);
        $scope.cardsOpacity.set([0], {duration: duration, curve: 'linear'}, done);
    };

    $scope.cardsIn = function(done) {
        $scope.cardsScale.set([1, 1, 1], {duration: duration, curve: 'linear'}, done);
        $scope.cardsOpacity.set([1], {duration: duration, curve: 'linear'}, done);
    };

    $scope.cardOut = function(done) {
        $scope.cardScale.set([.001, .001, .001], {duration: duration, curve: 'linear'}, done);
        $scope.cardOpacity.set([0], {duration: duration, curve: 'linear'}, done);
    };

    $scope.cardIn = function(done) {
        $scope.cardScale.set([1, 1, 1], {duration: duration, curve: 'linear'}, done);
        $scope.cardOpacity.set([1], {duration: duration, curve: 'linear'}, done);
    };

});
