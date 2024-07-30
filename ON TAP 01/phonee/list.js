console.log("nhung file list thanh cong ");

//khai báo controller
app.controller('danhsachCtrl',function($scope,$http){
    console.log(" khai bao danhsachCtrl thanh cong")

//khai bao bien can thiet
    $scope.danhSachSanPham=[];

    // call api lay danh sahc san pham
    $http({
        method:'GET',
        url:'http://localhost:3000/phone'
    }).then(function(response){
        $scope.danhSachSanPham=response.data
    })

    $scope.onXOA=function(id){
        let confi=confirm("ban chac chan muon xoa khong?")
       if(confi){
         $http({
            method:'DELETE',
            url:'http://localhost:3000/phone/'+ id
            
        }).then(function(response){
            alert('xoa thanh cong');
        })
    }
       }
})