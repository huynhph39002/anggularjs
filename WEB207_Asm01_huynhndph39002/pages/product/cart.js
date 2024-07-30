app.controller('cartCtrl', function ($scope, $http) {
    $scope.cart = [];

    $scope.themvaogiohang=function(sp){
        var spInCart={id:sp.id,ten:sp.ten,gia:sp.gia,anh:ap.anh,soluong:1}
        $scope.cart.push(spInCart);
        console.log($scope.cart);
    }
});