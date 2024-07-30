console.log("file detail");
app.controller('detailCtrl',function($http,$scope,$routeParams){
console.log("khai bao detailCtrl thanh cong");
console.log(" thanh cong",$routeParams);

$scope.dt={
    id:'',
    name:'',
    hang:'',
    gia:''
}
$http({
    method:'GET',
    url:'http://localhost:3000/dt/' +$routeParams.id
}).then(function(response){
    $scope.dt=response.data;
})

})