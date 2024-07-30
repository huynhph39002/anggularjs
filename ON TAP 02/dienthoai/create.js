console.log('file tao moi');
app.controller('createCtrl',function($scope,$http){
    console.log('khai bao contro create thanh cong ');
    $scope.dt={
        id:'',
        name:'',
        hang:'',
        gia:''
    }

    $scope.onClickCreate=function(){
        $http({
        method:'POST',
        url:'http://localhost:3000/dt',
        data:$scope.dt
    }).then(function(response){
        alert('tao moi thanh cong');
        window.location.href='#!list'
    })
    }
    
})