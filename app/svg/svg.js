'use strict';

angular.module('svgModule', [])
    .controller('SvgCtrl', ['$scope', function ($scope) {

        $scope.newPerson = {};
        $scope.view = {title: 'SVG rules the nation !'};

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

