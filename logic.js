angular.module('Main',['ngMaterial']).controller('Ctrl',['$scope','$interval',function($scope,$interval){
	$scope.Panel = {
			StartDisabled: false,
			StopDisabled: true,
			UpPercentDisabled: false,
			IntervalDisabled: false,
			InitLatticeDisabled: false,
			onlyStopEnabled: function(){
				this.StartDisabled =  true;
				this.StopDisabled = false;
				this.UpPercentDisabled = true;
				this.IntervalDisabled = true;
				this.InitLatticeDisabled = true;
			},
			onlyStopDisabled: function(){
				this.StartDisabled =  false;
				this.StopDisabled = true;
				this.UpPercentDisabled = false;
				this.IntervalDisabled = false;
				this.InitLatticeDisabled = false;
			}
	}
	this.event = {
			start: function(){
				$scope.Panel.onlyStopEnabled(); 
			},
			stop: function(){
				$scope.Panel.onlyStopDisabled(); 
			}
			
	}
				
			
	}]);
