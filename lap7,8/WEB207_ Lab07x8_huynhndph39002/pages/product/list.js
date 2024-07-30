console.log('Log de kiem tra: Da nhumg file page/product/list.js thanh cong')
// khai bao controller listProductCtrl
app.controller('listProductCtrl', function($scope,$http){
    console.log('Log de kiem tra : khai bao listProductCtrl thanh cong');

    $scope.listProduct=[];

    $http({
        method:'GET',
        url:'http://localhost:3000/product'
    }).then(function(response){
        $scope.listProduct=response.data
        
    })
})
