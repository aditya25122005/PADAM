 let arr = ['Banner.jpg', 'banner_img1.PNG','Banner_img2.PNG'];
    let i = 0;
    let img = document.querySelector('.background img');  // Select the <img> inside .background

    setInterval(function () {
        img.setAttribute('src', arr[i]);
        i = (i + 1) % arr.length;
    }, 3000);