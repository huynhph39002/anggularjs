console.log("nhung file create thanh cong ");

//khai báo controller
app.controller('taomoiCtrl',function($scope,$http){
    console.log(" khai bao taomoiCtrl thanh cong")

    $scope.phone={
        id:'',
        name:'',
        hang:'',
        gia:''
    }

    $scope.onclickCreate=function(){
        $http({
            method:'POST',
            url:'http://localhost:3000/phone',
            data:$scope.phone
        }).then(function(response){
            alert('tao moi thanh cong ');
        })
    }
})