console.log('Log để kiểm tra: Đã nhúng file pages/product/quanao.js thành công');

// // 5.1. Khai báo controller quanaoProductCtrl
app.controller('allProductCtrl', function ($scope, $http) {
    console.log('Log để kiểm tra: Khai báo quanaoProductCtrl thành công');

    // 1. Khai báo biến cần thiết
    $scope.allProduct = [];
    


    // 2. Call api lấy danh sách sản phẩm
    $http({
        method: 'GET',
        url: 'http://localhost:3000/allsanpham'
    }).then(function(response) {
        // Gán giá trị sau khi call api thành công
        $scope.allProduct = response.data
        console.log("Log thử giá trị biến quanaoProduct", $scope.allProduct);
        
    })
    

})