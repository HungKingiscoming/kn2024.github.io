
// menu
const menu=document.querySelector(".navbar__links")
const menuButton = document.querySelector(".navbar__icons")

menuButton.addEventListener('click', ()=>{
    menu.classList.toggle("navbar__open")
    menuButton.classList.toggle('open')
})




document.addEventListener('DOMContentLoaded', function () {
    const modal = document.getElementById('loginModal');
    const closeButton = document.querySelector('.close-button');
    const loginButtons = document.querySelectorAll('.login-button'); // Sử dụng lớp 'login-button'
  
    // Hàm mở modal
    function openModal() {
      modal.style.display = 'block';
    }
  
    // Hàm đóng modal
    function closeModal() {
      modal.style.display = 'none';
    }
  
    // Thêm sự kiện cho tất cả các nút "Click me"
    loginButtons.forEach(function(button) {
      button.addEventListener('click', function(e) {
        e.preventDefault(); // Ngăn chặn hành vi mặc định của nút
        openModal();
      });
    });
  
    // Thêm sự kiện cho nút đóng modal
    closeButton.addEventListener('click', function() {
      closeModal();
    });
  
    // Đóng modal khi người dùng nhấn ngoài nội dung modal
    window.addEventListener('click', function(event) {
      if (event.target == modal) {
        closeModal();
      }
    });
  
    // Xử lý khi người dùng gửi biểu mẫu đăng nhập
    const form = modal.querySelector('form');
    form.addEventListener('submit', function(e) {
      e.preventDefault(); // Ngăn chặn gửi biểu mẫu mặc định
      const username = document.getElementById('username').value;
      const password = document.getElementById('password').value;
      // Thêm logic đăng nhập của bạn ở đây, ví dụ gửi dữ liệu đến server
      console.log('Tên tài khoản:', username);
      console.log('Mật khẩu:', password);
      // Đóng modal sau khi đăng nhập
      closeModal();
    });
  });
  