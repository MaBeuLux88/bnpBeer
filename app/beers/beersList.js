'use strict';

angular.module('beers.list', [])
    .controller('BeersListCtrl', ['$scope', function ($scope) {

        $scope.newPerson = {};
        $scope.view = {title: 'Mon super Titre !'};

        $scope.persons = [
            {name: 'Maxime', surname: 'Patrick', favorite: 'blondes'},
            {name: 'Jean', surname: 'Jean', favorite: 'brunes'}];


        $scope.addPerson = function () {
            if ($scope.personForm.$invalid)
                return;
            $scope.persons.push($scope.newPerson);
            $scope.newPerson = {};
            $scope.personForm.$setPristine();
        };

        $scope.remaining = function () {
            var count = 0;
            angular.forEach($scope.todos, function (todo) {
                count += todo.done ? 0 : 1;
            });
            return count;
        };

        $scope.archive = function () {
            var oldTodos = $scope.todos;
            $scope.todos = [];
            angular.forEach(oldTodos, function (todo) {
                if (!todo.done) $scope.todos.push(todo);
            });
        };
    }]);

