// Demonstrate how to register services
// In this case it is a simple value service.
var services = angular.module('myApp.services', []);

services.value('version', '0.1');

services.factory('pouchdb', function() {
  Pouch.enableAllDbs = true;
  return new Pouch('myDB');
});

// services.factory('pp', function($q, pouchdb, $rootScope) {
//   return {
//     add: function(playerId) {
//       var deferred = $q.defer();
//       var doc = {
//         type: 'goal',
//         playerId: playerId
//       };
//       pouchdb.post(doc, function(err, res) {
//         $rootScope.$apply(function() {
//           if (err) {
//             deferred.reject(err)
//           } else {
//             deferred.resolve(res)
//           }
//         });
//       });
//       return deferred.promise;
//     },
//     getScore: function(playerId) {
//       var deferred = $q.defer();
//       var map = function(doc) {
//         if (doc.type === 'goal') {
//           emit(doc.playerId, null)
//         }
//       };
//       pouchdb.query({map: map, reduce: '_count'}, {key: playerId}, function(err, res) {
//         $rootScope.$apply(function() {
//           if (err) {
//             deferred.reject(err);
//           } else {
//             if (!res.rows.length) {
//               deferred.resolve(0);
//             } else {
//               deferred.resolve(res.rows[0].value);
//             }
//           }
//         });
//       });
//       return deferred.promise;
//     }
//   }

// });

services.service('pouchService', function($q, pouchdb, $rootScope) {

    this.saveDoc = (doc) => {
        var deferred = $q.defer();
        pouchdb.post(doc, (err, res) => {
            $rootScope.$apply(() => {
                if (err) {
                    deferred.reject(err)
                } else {
                    deferred.resolve(doc)
                }
            });
        });
        return deferred.promise;
    }

    this.fetchDoc = () => {
        var deferred = $q.defer();
        pouchdb.allDocs({ include_docs: true, descending: true }, (err, doc) => {
            $rootScope.$apply(() => {
                if (err) {
                    deferred.reject(err)
                } else {
                    deferred.resolve(doc)
                }
            });
        });
        return deferred.promise;
    }

    this.test = async () => {
        var deferred = $q.defer();
        pouchdb.allDocs({ include_docs: true, descending: true },function(err,doc) {
            $rootScope.$apply(() => {
                if (err) {
                    deferred.reject(err)
                } else {
                    deferred.resolve(doc)
                }
            });
        })
        return deferred.promise;
    }

})