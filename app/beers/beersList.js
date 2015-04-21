'use strict';

angular.module('beers.list', [])
    .controller('BeersListCtrl', ['$scope', function ($scope) {

        $scope.newPerson = {};
        $scope.view = {title: 'Liste des ivrognes !'};

        $scope.persons = [
            {name: 'Maxime', surname: 'Patrick', favorite: 'blondes'},
            {name: 'Jean', surname: 'Dupont', favorite: 'brunes'},
            {name: 'Pierre', surname: 'Dupond', favorite: 'blanches'},
            {name: 'Paul', surname: 'Dance', favorite: 'fraiches'},
            {name: 'Jacques', surname: 'Langue', favorite: 'aromatisées'},
            {name: 'Pierre-Paul', surname: 'Jacques', favorite: 'fortes'},
            {name: 'Pierre-Paul', surname: 'Jacques', favorite: 'fines'},
            {name: 'Pierre-Paul', surname: 'Jacques', favorite: 'fat-free'}
        ];

        $scope.addPerson = function () {
            if ($scope.personForm.$invalid)
                return;
            $scope.persons.push($scope.newPerson);
            $scope.newPerson = {};
            $scope.personForm.$setPristine();
        };

        $scope.removePerson = function (person) {
            $scope.persons.splice( $scope.persons.indexOf(person), 1 );
        }

    }]);

