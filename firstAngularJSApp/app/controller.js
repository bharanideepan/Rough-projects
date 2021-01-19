var ctrl = angular.module('myApp.controllers', []);

ctrl.controller('MyCtrl', ['$scope', 'pouchService', function($scope, pouchService) {
  
//   $scope.score = {};
//   $q.all([
//     pp.getScore('1'),
//     pp.getScore('2'),
//     pp.getScore('3')
//   ]).then(function(res) {
//       $scope.score['1'] = res[0];
//       $scope.score['2'] = res[1];
//       $scope.score['3'] = res[2]
//     });
//   $scope.incScore = function(id) {
//     pp.add(id)
//       .then(function(res) {
//         return pp.getScore(id);
//       })
//       .then(function(score) {
//         $scope.score[id] = score;
//       })
//   }

    $scope.docs = [];
    $scope.doc = {};
    $scope.saveDoc = () => {
        pouchService.saveDoc($scope.doc).then((res) => {
            $scope.doc = {}
            $scope.fetchDoc()
        });
    }

    $scope.fetchDoc = () => {
        pouchService.fetchDoc().then((result) => {
            $scope.docs = result.rows.map(param => param.doc)
        })
    }

    $scope.fetchDoc()

    $scope.getDocs = () => {
        return $scope.docs
    }
}]);
