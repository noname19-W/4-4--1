const MY_PHOTOS = [
    "0.jpg",
    "0.2.jpg",
    "0.3.jpg",
    "0.4.jpg",
    "0.5.jpg",
    "0.6.jpg",
    "back.jpg"
];
        function createHeart(force) {
            if (reduceMotion && force !== true) return;
            
            const img = document.createElement('img');
            img.className = 'bg-heart';
            img.src = MY_PHOTOS[Math.floor(Math.random() * MY_PHOTOS.length)];
            
            img.style.left = Math.random() * 85 + 'vw';
            
            // 🔍 ปรับขนาดรูปให้ใหญ่ขึ้นตรงนี้ (เดิม 45-70px -> ปรับเป็น 80-130px)
            const photoSize = 80 + Math.random() * 50; 
            img.style.width = photoSize + 'px';
            img.style.height = photoSize + 'px';
            
            img.style.borderRadius = '16px'; // ขอบมนเพิ่มตามขนาดรูป
            img.style.objectFit = 'cover';
            img.style.boxShadow = '0 6px 15px rgba(0,0,0,0.2)';
            img.style.animationDuration = (6 + Math.random() * 4) + 's';
            
            document.body.appendChild(img);
            img.addEventListener('animationend', () => img.remove());
        }