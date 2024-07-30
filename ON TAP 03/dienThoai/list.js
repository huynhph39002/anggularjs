console.log('file list thah cong');

app.controller('listCtrl',function($scope,$http){
console.log('khai bao listCtrl thanh cong');

$scope.danhsachDT=[];

$http({
    method:'GET',
    url:'http://localhost:3000/DT'
}).then(function(response){
    $scope.danhsachDT=response.data
})

$scope.XOA=function(id){
    let conf=confirm('ban co chac chan muon xoa khong');
    if(conf){
        $http({
        method:'DELETE',
        url:'http://localhost:3000/DT/'+id,
        data:$scope.DT
    }).then(function(response){
        alert('xoa thanh cong');
    })}
    
}
})