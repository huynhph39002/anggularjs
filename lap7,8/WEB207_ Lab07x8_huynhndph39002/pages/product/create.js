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

       
        

        $scope.onClickCreate = function(){
            console.log('log thu gia tri bien $scope.product', $scope.product);    
            


            

            $http({
                method:'POST',
                url:'http://localhost:3000/product',
                data:$scope.product
            }).then(function(response){

                alert('chuc mung ban tao moi thanh cong');
            })
        }
})