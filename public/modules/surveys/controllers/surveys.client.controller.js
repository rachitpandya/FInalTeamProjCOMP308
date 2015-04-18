'use strict';
// Surveys controller
angular.module('surveys').controller('SurveysController', ['$scope', '$stateParams', '$location', 'Authentication', 'Surveys',
	function($scope, $stateParams, $location, Authentication, Surveys) {
		$scope.authentication = Authentication;


		// Create new Survey
		$scope.create = function() {
			// Create new Survey object
			var survey = new Surveys ({
				name: this.name,
                question1: this.question1,
                ans1Option1: this.ans1Option1,
                ans1Option2: this.ans1Option2,
                ans1Option3: this.ans1Option3,
                question2: this.question2,
                ans2Option1: this.ans2Option1,
                ans2Option2: this.ans2Option2,
                ans2Option3: this.ans2Option3,
                question3: this.question3,
                ans3Option1: this.ans3Option1,
                ans3Option2: this.ans3Option2,
                ans3Option3: this.ans3Option3
			});

			// Redirect after save
			survey.$save(function(response) {
				$location.path('surveys/' + response._id);
				// Clear form fields
				$scope.name = '';
                $scope.question1='';
                $scope.ans1Option1='';
                $scope.ans1Option2='';
                $scope.ans1Option3='';
                $scope.question2='';
                $scope.ans2Option1='';
                $scope.ans2Option2='';
                $scope.ans2Option3='';
                $scope.question3='';
                $scope.ans3Option1='';
                $scope.ans3Option2='';
                $scope.ans3Option3='';

			}, function(errorResponse) {
				$scope.error = errorResponse.data.message;
			});
		};

		// Remove existing Survey
		$scope.remove = function(survey) {
			if ( survey ) {
				survey.$remove();

				for (var i in $scope.surveys) {
					if ($scope.surveys [i] === survey) {
						$scope.surveys.splice(i, 1);
					}
				}
			} else {
				$scope.survey.$remove(function() {
					$location.path('surveys');
				});
			}
		};

		// Update existing Survey
		$scope.update = function() {
			var survey = $scope.survey;

			survey.$update(function() {
				$location.path('surveys/' + survey._id);
			}, function(errorResponse) {
				$scope.error = errorResponse.data.message;
			});
		};

		// Find a list of Surveys
		$scope.find = function() {
			$scope.surveys = Surveys.query();
		};



		// Find existing Survey
		$scope.findOne = function() {
			$scope.survey = Surveys.get({
				surveyId: $stateParams.surveyId
			});
		};
	}
]);
