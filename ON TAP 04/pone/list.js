app.controller('listCtrl',function($scope,$http){
    $scope.DS=[];
    $http({
        method:'GET',
        url:'http://localhost:3000/phone'
    }).then(function(response){
        $scope.DS=response.data
    })

    $scope.xoa=function(id){
        let conf=confirm('ban chac chan muon xoa ko');
        if(conf){
            $http({
                method:'DELETE',
                url:'http://localhost:3000/phone/'+id
            }).then(function(response){
                alert('xoa thanh cong');
            })
        }
    }
})