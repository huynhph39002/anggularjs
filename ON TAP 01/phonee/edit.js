console.log("nhung file edit thanh cong");

//khai baos controller 
//luu y: khai bao $routeParams  de co the lay gia tri id truyen vao url
app.controller('chinhsuaCtrl',function($http,$scope,$routeParams){
    console.log("khai bao chinhsuaCtrl thanh cong");



    $scope.phone={
        id:'',
        name:'',
        hang:'',
        gia:''
    }

    $http({
        method:'GET',
        url:'http://localhost:3000/phone/'+$routeParams.id,

    }).then(function(response){
        $scope.phone=response.data;
    })

    $scope.onSUA=function(){
        $http({
            method:'PUT',
            url:'http://localhost:3000/phone/'+$routeParams.id,
            data:$scope.phone
        }).then(function(response){
            alert('Chinh sua  thanh cong ');
        })
    }





})