console.log('file detail thah cong');

app.controller('detailCtrl',function($scope,$http,$routeParams){
console.log('khai bao detailCtrl thanh cong');
$scope.DT={
    id:'',
    ten:'',
    hang:'',
    gia:''
}
$http({
    method:'GET',
    url:'http://localhost:3000/DT/'+$routeParams.id ,
    data:$scope.DT
}).then(function(response){
    $scope.DT=response.data
})
})