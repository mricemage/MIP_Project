angular.module('app.controllers', [])
  
.controller('cameraCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
      
.controller('homeCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('profileCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


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
   
.controller('pageCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
 