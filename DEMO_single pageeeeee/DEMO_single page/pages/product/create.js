console.log('log de kiem tra: da nhung file pages/product/create.js thanh cong');

// khai bao controller createProductCtrl
app.controller('createProductCtrl',function($scope,$http){
    console.log('log de kiem tra: khai bao createProductCtrl thanh cong');

    //1, khai bao cac bien chinhs can thiet
    //Bien luu thong tin product
    $scope.product={
        id:'',
        name:'',
        price:'',
        category:''
        };

        // bien su ly validate
        $scope.formMessage='';
        $scope.formStatus=true;// true la form hop le false la form ko hop le


    //2, lien ket bien voi html
    //mo file html len de lien ket




    //3, bat su kien click va bat su ly logic
        // khai bao function 
        // lien ket function voi html bang ng-click
        $scope.onClickCreate = function(){
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
                method:'POST',
                url:'http://localhost:3000/product',
                data:$scope.product
            }).then(function(response){
                alert('chuc mung ban tao moi thanh cong');
            })
        }
})