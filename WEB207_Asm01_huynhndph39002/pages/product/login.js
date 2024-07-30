
console.log('Log để kiểm tra: Đã nhúng file pages/product/create.js thành công');

// Khai báo controller createProductCtrl
app.controller('loginProductCtrl', function ($scope, $http, $location) {
    console.log('Log để kiểm tra: Khai báo createProductCtrl thành công');

    $scope.registeredUsers = [];
    $scope.users = {
        Ho: '',
        Ten: '',
        Email: '',
        Matkhau:''
    }
   
    $scope.formStatus = true; // true = Form hợp lệ, false = Form không hợp lệ
    $scope.formMessage = '';


    $scope.onClickDangky = function () {
        console.log('Log thử giá trị biến $scope.product', $scope.users);


        $scope.formStatus = true;
        $scope.formMessage = '';

        // Validate id: Bắt buộc
        if ($scope.users.Ho === '') {
            $scope.formStatus = false;
            $scope.formMessage = 'chua nhap ';

            return; // Kết thúc hàm luôn.
        }

        // Validate name: Bắt buộc
        if ($scope.users.Ten === '') {
            $scope.formStatus = false;
            $scope.formMessage = 'chua nhap ten';

            return; // Kết thúc hàm luôn.
        }

        if ($scope.users.Email === '') {
            $scope.formStatus = false;
            $scope.formMessage = 'chua nhap email';

            return; // Kết thúc hàm luôn.
        }

        if ($scope.users.Matkhau === '' || isNaN($scope.users.Matkhau) || $scope.users.Matkhau.length <= 7) {
            $scope.formStatus = false;
            $scope.formMessage = 'Mật khẩu phải là số và dài hơn 8 ký tự.';
            return;
        }
        
        // Các trường hợp, input còn lại thì các bạn tự xử lý nhé


        // Nếu code chạy được đến đây. Nghĩa là form đã hợp lệ
        console.log('Form hợp lệ');


        // 3.2. Call api để lưu dữ liệu vào db
        $http({
            method: 'POST',
            url: 'http://localhost:3000/users',
            data: $scope.users
        }).then(function (response) {
           
            alert('Chúc mừng bạn đã Đăng ký thành công')

        })


    }


    // Sau khi đăng ký thành công
    
    // Sau đó bạn có thể sử dụng:
    $scope.onClickDangnhap = function () {
        $http({
            method: 'GET',
            url: 'http://localhost:3000/users',
        }).then(function (response) {
            $scope.registeredUsers = response.data;
            var foundUser = $scope.registeredUsers.find(function (user) {
                return user.Ten === $scope.users.Ten && user.Matkhau === $scope.users.Matkhau;
            });
            if (foundUser) {
                alert('Đăng nhập thành công');
                // Redirect hoặc thực hiện các hành động khác sau khi đăng nhập thành công
                $location.path('index.html');//     /taikhoan-product
            } else {
                alert('Đăng nhập thất bại');
            }
        }).catch(function (error) {
            console.error('Lỗi khi lấy dữ liệu người dùng:', error);
            alert('Đã xảy ra lỗi. Vui lòng thử lại sau.');
        });
    };
    


})




// app.controller('loginProductCtrl', function ($scope, $http, $location) {
//     $scope.productCredentials = {
//         username: '',
//         password: ''
//     };

//     $scope.loginProduct = function () {
//         $http.post('http://localhost:3000/users', $scope.productCredentials)
//             .then(
//                 function (response) {
//                     // Đăng nhập sản phẩm thành công
//                     console.log('Đăng nhập sản phẩm thành công');
                    
//                     // Chuyển hướng đến trang sản phẩm sau khi đăng nhập
//                     $location.path('/product');
//                 },
//                 function (error) {
//                     // Đăng nhập sản phẩm không thành công
//                     console.error('Lỗi đăng nhập sản phẩm:', error.data.message);
//                 }
//             );
//     };
// });