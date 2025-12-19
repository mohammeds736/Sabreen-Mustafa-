// تشغيل/إيقاف قائمة الهاتف
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menuToggle');
    const navLinks = document.getElementById('navLinks');

    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', function() {
            navLinks.classList.toggle('active');
        });

        // إغلاق القائمة عند النقر على رابط
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
            });
        });
    }

    // إضافة تأثير بسيط عند التمرير
    window.addEventListener('scroll', function() {
        const header = document.querySelector('header');
        if (window.scrollY > 100) {
            header.style.boxShadow = '0 5px 20px rgba(0, 0, 100, 0.15)';
        } else {
            header.style.boxShadow = '0 2px 15px rgba(0, 0, 100, 0.08)';
        }
    });
});
