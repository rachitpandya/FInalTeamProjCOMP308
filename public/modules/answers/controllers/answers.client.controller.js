'use strict';

// Answers controller
angular.module('answers').controller('AnswersController', ['$scope', '$stateParams', '$location', 'Authentication', 'Answers',
	function($scope, $stateParams, $location, Authentication, Answers) {
		$scope.authentication = Authentication;

        //Retrive survey id
        var surveyID=$location.path();
        surveyID=surveyID.substring(9,surveyID.length);


		// Create new Answer
		$scope.create = function() {
			// Create new Answer object
			var answer = new Answers ({
                answer1: this.answer1,
                answer2: this.answer2,
                answer3: this.answer3,
                surveyid: surveyID
			});

			// Redirect after save
			answer.$save(function(response) {
				$location.path('answers/' + response._id);

				// Clear form fields
				$scope.name = '';
			}, function(errorResponse) {
				$scope.error = errorResponse.data.message;
			});
		};

		// Remove existing Answer
		$scope.remove = function(answer) {
			if ( answer ) {
				answer.$remove();

				for (var i in $scope.answers) {
					if ($scope.answers [i] === answer) {
						$scope.answers.splice(i, 1);
					}
				}
			} else {
				$scope.answer.$remove(function() {
					$location.path('answers');
				});
			}
		};

		// Update existing Answer
		$scope.update = function() {
			var answer = $scope.answer;

			answer.$update(function() {
				$location.path('answers/' + answer._id);
			}, function(errorResponse) {
				$scope.error = errorResponse.data.message;
			});
		};

		// Find a list of Answers
		$scope.find = function() {
			$scope.answers = Answers.query();
		};

		// Find existing Answer
		$scope.findOne = function() {
			$scope.answer = Answers.get({
				answerId: $stateParams.answerId
			});
		};


        // Stats
        $scope.findStats = function () {
            var surveyId = $stateParams.surveyId;
            $http.get('/surveyanswers/' + surveyId).then(function (result) {
                console.log(result.data);
                $scope.stats = result.data;
            });
        };

	}
]);
