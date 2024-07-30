console.log('log de kiem tra: da nhung file pages/product/list.js thanh cong');

// khai bao controller listProductCtrl
app.controller('listProductCtrl',function($scope,$http){
    console.log('log de kiem tra: khai bao listProductCtrl thanh cong');

    // 1. khai bao bien can thiet
    $scope.listProduct=[];

    //2, call api lay danh sach san pham
    $http({
        method:'GET',
        url:'http://localhost:3000/product'
    }).then(function(response){
        $scope.listProduct=response.data
        console.log("log thu gia tri bien lisstProduct",response.data);
    })

    //BAt su kien delete
    $scope.onClickDelete=function(id){
       console.log(' id muon xoa',id); 
   
    //call api 
    $http({
        method:'DELETE',
        url:'http://localhost:3000/product/'+ id
    }).then(function(response){
        alert("xoa thanh cong");
    })
     }
})