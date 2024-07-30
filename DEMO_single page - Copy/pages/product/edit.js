console.log('Log de kiem tra: da nhung file pages/product/edit.js thanh cong');
// khai bao controller editProductCtrl
// Luu y: khai bao "$routeParams" de co the lay gia tri id truyen vaoo url
app.controller('editProductCtrl',function($scope,$http,$routeParams){
    console.log('Log de kiem tra: khai bao editProductCtrl thanh cong');
    console.log('Log de in thu gia tri params tu Url', $routeParams);

    //1. khai bao bien can thiet
    // mo file create.js copy bien luu thong tin product
    $scope.product={
        id:'',
        img:'',
        name:'',
        price:'',
        category:''
        };
        // bien su ly validate
        $scope.formMessage='';
        $scope.formStatus=true;// true la form hop le false la form ko hop le

        //2. lien ket bien va html
        // vi copy html nen da lien ket luon roi

        //3. call api 
        // mo file detail.js copy
        $http({
            method:'GET',
            url:'http://localhost:3000/product/'+$routeParams.id
        }).then(function(response){
            $scope.product=response.data;
            console.log(" ",$scope.product);
        })

        // 4. bat su kien button edit va su ly logic
        // mo file create.js len va copy
        // luu y: nho sua ten ham
        // luu y: sua method cua tao moi thanh chinh sua (POST===>PUT)
        // luu y: Sua url tao moi thanh url chinh sua

        $scope.onClickEdit = function(){
            console.log('log thu gia tri bien $scope.product', $scope.product);

            //3.1 validate du lieu dau vao
            // thiet ke html 
            // khai bao bien can thiet cho validate
            // lien ket biens vao html

            /// reset validate
            $scope.formStatus=true;
            $scope.formMessage='';

            //validate id: bat buoc
            if($scope.product.id === ''){
                $scope.formStatus=false;
                $scope.formMessage='moi ban nhap id';
                return; //de ket thuc function
            }

            //validate id: bat buoc
            if($scope.product.name == ''){
                $scope.formStatus=false;
                $scope.formMessage='moi ban nhap name';
                return; //de ket thuc function
            }

            // validate price: bat buoc phai la so. khong duoc nho hon 1,000,000vnd
            if($scope.product.price ===''|| isNaN($scope.product.price) || Number(($scope.product.price)<1000000)){
                $scope.formStatus=false;
                $scope.formMessage='moi ban nhap gia la so lon hon 1,000,000';
                return; //de ket thuc function
            }


            //3.2 call api de luu du lieu vao db

            $http({
                method:'Put',
                url:'http://localhost:3000/product/' + $scope.product.id,// co the dung $routeParams.id
                data:$scope.product
            }).then(function(response){

                alert('chuc mung ban chinh sua thanh cong');
            })
        }

});
