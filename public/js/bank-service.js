var app = angular.module('LoanCalculator');

app.service('bankService', function($http, $q) {

   this.getInterestRate = function() {
   		var dfd = $q.defer();

   		$http({
   			method: 'GET',
   			url: '/api/interest_rate' 
   		})
   		.then(function(res){
   		 // return res.data;
   		
   		dfd.resolve(res.data);
   		},
   		function(err){
   			console.log('err', err);
   		})
   		return dfd.promise;
   	}
	
});