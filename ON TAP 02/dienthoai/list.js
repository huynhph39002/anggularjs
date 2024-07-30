console.log("file list");
app.controller('listCtrl',function($scope,$http){
    console.log("khai bao listCtrl thanh cong ");
    $scope.danhsachsanpham=[];

    $http({
        method:'GET',
        url:'http://localhost:3000/dt'
    }).then(function(response){
        $scope.danhsachsanpham=response.data
    })


    $scope.Xoa=function(id){
        let conf=confirm('ban co chac chan muon xoa ko?');
        if(conf){
            $http({
                method:'DELETE',
                url:'http://localhost:3000/dt/' + id
            }).then(function(response){
                alert('xoa thanh cong');
            })
        }
    }
})