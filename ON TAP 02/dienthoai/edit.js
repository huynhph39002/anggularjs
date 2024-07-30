console.log("file edit");
app.controller('editCtrl',function($http,$scope,$routeParams){
console.log("khai bao editCtrl thanh cong");

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

$scope.onClick=function(){
    $http({
        method:'PUT',
        url:'http://localhost:3000/dt/' +$routeParams.id,
        data:$scope.dt
    }).then(function(response){
        alert('sua thanh cong');
        window.location.href='#!list'
    })
}

})