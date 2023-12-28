function isMobileDevice() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

if (isMobileDevice()) {
    let phone = document.createElement('link');
    phone.rel = 'stylesheet';
    phone.href = '../static/css/sass/phone/main.css';
    document.head.appendChild(phone);
}
else {
    let laptop = document.createElement('link');
    laptop.rel = 'stylesheet';
    laptop.href = '../static/css/sass/laptop/main.css';
    document.head.appendChild(laptop);
}