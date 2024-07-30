app.controller('createCtrl',function($scope,$http){
    $scope.phone={
        id:'',
        ten:'',
        hang:'',
        gia:''
    }

    $scope.taomoi=function(){
        $http({
            method:'POST',
            url:'http://localhost:3000/phone',
            data:$scope.phone
        }).then(function(response){
            alert('tao moi thanh cong');
        })
    }
})