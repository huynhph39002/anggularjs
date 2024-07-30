console.log('file edit thah cong');

app.controller('editCtrl',function($scope,$http,$routeParams){
console.log('khai bao editCtrl thanh cong');

$scope.DT={
    id:'',
    ten:'',
    hang:'',
    gia:''
}
$http({
    method:'GET',
    url:'http://localhost:3000/DT/'+$routeParams.id
}).then(function(response){
    $scope.DT=response.data
})

$scope.SUA=function(){
    $http({
        method:'PUT',
        url:'http://localhost:3000/DT/'+$routeParams.id,
        data:$scope.DT
    }).then(function(response){
        alert('sua thanh cong');
    })
}
})