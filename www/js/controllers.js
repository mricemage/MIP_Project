	angular.module('app.controllers', [])
  
	.controller('cameraCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
      
	.controller('homeCtrl', ['$scope', '$stateParams',// The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {

	var user = [
			{
				"name": "Cirilla",
				"userprofileimage": "img/ciriwitcher3.png",
				"userimage": "img/ciri_image.jpg",
				"like": 230
			},
			{
				"name": "Geralt",
				"userprofileimage": "img/geraltwitcher3.png",
				"userimage": "img/geralt_image.jpg",
				"like": 278
			},
			{
				"name": "bichphuongsinger",
				"userprofileimage": "img/bichphuong.jpg",
				"userimage": "img/bichphuong_image.jpg",
				"like": 285
			}
	]

	$scope.user = user;

	var hasLiked = false;

	$scope.likeClick = function() {
		if (!hasLiked) {
			hasLiked = true;
			
			$scope.likeCount += 1;
			console.log(user[0].like);
		} else {
			hasLiked = false;
			
			$scope.likeCount -= 1;
		}
	};


}])
   
.controller('searchCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {

$scope.userList = 
[
{'id': 1,
 'name': 'Pham Huong',
 'picture': 'img/img1.jpg'},
 {'id': 2,
 'name': 'Boe Pham',
 'picture': 'img/img2.jpg'},
 {'id': 3,
 'name': 'Smith Wesley',
 'picture': 'img/img3.jpg'},
 {'id': 3,
 'name': 'Jane Ionic',
 'picture': 'img/img4.jpg'},
 {'id': 3,
 'name': 'Lasse Khoai',
 'picture': 'img/img5.jpg'},
 {'id': 3,
 'name': 'Thang Minh',
 'picture': 'img/img1.jpg'}

];

}])
   
	.controller('searchCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
	.controller('pageCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
 