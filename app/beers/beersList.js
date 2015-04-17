'use strict';

angular.module('beers.list', [])
    .controller('BeersListCtrl', ['$scope', function ($scope) {

        $scope.newPerson = {};
        $scope.view = {title: 'Mon super Titre !'};

        $scope.persons = [
            {name: 'Maxime', surname: 'Patrick', favorite:'blondes'},
            {name: 'Jean', surname: 'Jean', favorite:'brunes'}];


        $scope.addPerson = function () {
            if($scope.personForm.$invalid)
                alert("Veuillez renseigner tous les champs");
            else {
                $scope.persons.push($scope.newPerson);
                $scope.newPerson = {};
            }
        };

    }]);

