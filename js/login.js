
function togglePassword() {
    const passwordInput = document.getElementById('password');
    const toggleIcon = event.target;
    
    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        toggleIcon.classList.remove('fa-eye');
        toggleIcon.classList.add('fa-eye-slash');
    } else {
        passwordInput.type = 'password';
        toggleIcon.classList.remove('fa-eye-slash');
        toggleIcon.classList.add('fa-eye');
    }
}

document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    
    console.log('Đăng nhập:', { email, password });
    alert('✅ Đăng nhập thành công!');
    
    setTimeout(() => {
        location.href = '../index.html';
    }, 1000);
});

function loginGoogle() {
    alert('🔗 Đăng nhập với Google');
}

function loginFacebook() {
    alert('🔗 Đăng nhập với Facebook');
}