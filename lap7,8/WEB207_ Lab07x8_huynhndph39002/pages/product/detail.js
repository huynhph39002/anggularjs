console.log('log de kiem tra: da nhung file pages/product/create.js thanh cong');

// khai bao controller createProductCtrl
app.controller('createProductCtrl',function($scope,$http){
    console.log('log de kiem tra: khai bao createProductCtrl thanh cong');

    //1, khai bao cac bien chinhs can thiet
    //Bien luu thong tin product
    $scope.product={
        id:'',
        hoten:'',
        namsinh:'',
        chuyennganh:''
        };

       
        



            

            $http({
                method:'GET',
                url:'http://localhost:3000/product/'+$routeParams.id,
                
            }).then(function(response){
                $scope.product=response.data;
                alert('chuc mung ban tao moi thanh cong');
            })
        
})