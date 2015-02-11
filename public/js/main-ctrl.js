var app = angular.module('LoanCalculator');

app.controller('MainCtrl', function($scope, bankService){

	bankService.getInterestRate().then(function(res){
		$scope.interest_rate = res;
	})
	$scope.calculatePayment = function(){
		$scope.totalOwed =
		Number($scope.principal) +
		(4 * (Number($scope.interest_rate) / 100) * 
			Number($scope.principal));
		$scope.monthly_payment = $scope.totalOwed /48;
	}

})