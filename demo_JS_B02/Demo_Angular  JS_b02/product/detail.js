console.log('Log de kiem tra: da nhung file pages/product/detail.js thanh cong');
// khai bao controller detailProductCtrl
// Luu y: khai bao "$routeParams" de co the lay gia tri id truyen vaoo url
app.controller('detailProductCtrl',function($scope,$http,$routeParams){
    console.log('Log de kiem tra: khai bao detailProductCtrl thanh cong');
    console.log('Log de in thu gia tri params tu Url', $routeParams);

    // 1. khai bao bien can thiet
    //mo file create.js copy phan khai bao bien $scope.product
    $scope.product={
        id:'',
        img:'',
        name:'',
        price:'',
        category:''
        }

        // call api lay thong tin 
        $http({
            method:'GET',
            url:'http://localhost:3000/product/'+$routeParams.id
        }).then(function(response){
            $scope.product=response.data;
            console.log(" ",$scope.product);
        })
});
