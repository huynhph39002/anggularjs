console.log('Log để kiểm tra: Đã nhúng file pages/product/tui.js thành công');

// // 5.1. Khai báo controller tuiProductCtrl
app.controller('tuiProductCtrl', function ($scope, $http) {
    console.log('Log để kiểm tra: Khai báo tuiProductCtrl thành công');

    // 1. Khai báo biến cần thiết
    $scope.tuiProduct = [];
    
    // 2. Call api lấy danh sách sản phẩm
    $http({
        method: 'GET',
        url: 'http://localhost:3000/tui'
    }).then(function(response) {
        // Gán giá trị sau khi call api thành công
        $scope.tuiProduct = response.data
        console.log("Log thử giá trị biến tuiProduct", $scope.tuiProduct);
        
    })
    

})