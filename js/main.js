// Start Mood Button
const themeSwitch = document.querySelector('.switch .input');
const body = document.body;

themeSwitch.addEventListener('click', () => {
    body.classList.toggle('dark-mood-setting');

    if(body.classList.contains('dark-mood-setting')) {
        body.style.backgroundColor = '#222';
        localStorage.setItem('mood', 'dark')
    }
    else {
        body.style.backgroundColor = '#fff';
        localStorage.setItem('mood', 'light')
    }
});

// Save Mood Button On Local Storage
if(localStorage.getItem('mood') === 'dark') {
    themeSwitch.checked = true;
    body.classList.add('dark-mood-setting');
    body.style.backgroundColor = '#222';
}

// End Mood Button


// Start Burger Menu Setting
const burgerMenu = document.querySelector('.burger-menu');
const navLinks = document.querySelector('.nav-links');

burgerMenu.addEventListener('click', () => {
    navLinks.classList.toggle('show-nav');
});

navLinks.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove('show-nav');
    });
});
// End Burger Menu Setting


// Start Fixed Navbar
const navbar = document.querySelector('.navbar .navbar-content');
const root = document.documentElement;

window.addEventListener('scroll', () => {
    if(window.scrollY >= 770) {
        navbar.classList.add('fixed-nav');
        root.style.setProperty('--nav-links-color', '#111');
    }
    else {
        navbar.classList.remove('fixed-nav');
        root.style.setProperty('--nav-links-color', '#fff');
    }
});
// End Fixed Navbar


// Start Slide Buttons Setting
const slideRight = document.getElementById('slide-right');
const slideLeft = document.getElementById('slide-left');
const header = document.getElementById('header');
const changeTitle = document.getElementById('change-title');
const img1 = 'url("imgs/carousel-1.jpg")';
const img2 = 'url("imgs/carousel-2.jpg")';

let isFirst = true;

slideRight.addEventListener('click', () => {
    if(isFirst) {
        header.style.backgroundImage = img2;
        changeTitle.innerHTML = 'Get Body In Shape';
        slideLeft.classList.remove('show');
        slideRight.classList.add('show');
    }
    else {
        header.style.backgroundImage = img1;
        changeTitle.innerHTML = 'Best Gym In Town';
    }
    isFirst = !isFirst;
});

slideLeft.addEventListener('click', () => {
    if(isFirst) {
        header.style.backgroundImage = img1;
        changeTitle.innerHTML = 'Best Gym In Town';
        slideRight.classList.remove('show');
        slideLeft.classList.add('show');
    }
    else {
        header.style.backgroundImage = img2;
        changeTitle.innerHTML = 'Get Body In Shape';
    }
    isFirst = !isFirst;
});

// Change Background Hero Auto
let imagesArray = [img1, img2];

let index = 0;

setInterval(() => {
    header.style.backgroundImage = imagesArray[index];
    index = (index + 1) % imagesArray.length; // يرجع لأول صورة بعد آخر صورة
}, 10000);

// End Slide Buttons Setting


// Start Timetable Setting
const classLinks = document.querySelectorAll('.timetable-classes li a');
const timeTable = document.getElementById('time-table');

classLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault(); // يمنع الصفحة من إعادة التحميل

        classLinks.forEach(a => a.classList.remove("active-class"));

        link.classList.add('active-class');

        const cardioCells = document.querySelectorAll('#cardio-cell');
        const crossfitCells = document.querySelectorAll('#crossfit-cell');
        const powerliftingCells = document.querySelectorAll('#powerlifting-cell');

        if(link.id === 'cardio') {
            document.querySelectorAll('#time-table td').forEach(anyCell => {
                anyCell.classList.remove('highlight');
            });
            cardioCells.forEach(cell => {
                cell.classList.add('highlight');
            });
        }
        else if(link.id === 'crossfit') {
            document.querySelectorAll('#time-table td').forEach(anyCell => {
                anyCell.classList.remove('highlight');
            });
            crossfitCells.forEach(cell => {
                cell.classList.add('highlight');
            });
        }
        else if(link.id === 'powerlifting') {
            document.querySelectorAll('#time-table td').forEach(anyCell => {
                anyCell.classList.remove('highlight');
            });
            powerliftingCells.forEach(cell => {
                cell.classList.add('highlight');
            });
        }
        else {
            document.querySelectorAll('#time-table td').forEach(anyCell => {
                anyCell.classList.remove('highlight');
            });
        }
    });
});
// End Timetable Setting


// Start Testimonial Setting
const testimonialList = document.querySelectorAll('.testimonial-change li');
const clientImage = document.querySelector('.client-image');
const clientName = document.querySelector('.testimonial .text h3');
const clientProfession = document.querySelector('.testimonial .text p');
const clientParagraph = document.querySelector('.testimonial .paragraph p');

// الـ Data كلها في object
const testimonials = {
    "client-1": {
        image: "imgs/testimonial-1.jpg",
        name: "Client One",
        profession: "Designer",
        text: "Sed ea amet kasd elitr stet nonumy, stet rebum et ipsum est duo elitr eirmod clita lorem."
    },
    "client-2": {
        image: "imgs/testimonial-2.jpg",
        name: "Client Two",
        profession: "Developer",
        text: "Dolores tempor voluptua ipsum sanctus clita. Dolores tempor voluptua ipsum sanctus clita."
    },
    "client-3": {
        image: "imgs/testimonial-3.jpg",
        name: "Client Three",
        profession: "Trainer",
        text: "Vero elitr lorem magna justo magna justo at justo est ipsum sed clita lorem dolor ipsum sed."
    }
};

// function لتحديث الـ testimonial مع slide
function updateTestimonial(data) {
    // إضافة كلاس slide للخروج
    clientImage.classList.add("slide-out");
    clientName.classList.add("slide-out");
    clientProfession.classList.add("slide-out");
    clientParagraph.classList.add("slide-out");

    setTimeout(() => {
        // نغير الداتا بعد ما يخلص الـ slide-out
        clientImage.src = data.image;
        clientName.textContent = data.name;
        clientProfession.textContent = data.profession;
        clientParagraph.textContent = data.text;

        // نشيل كلاس الـ slide-out ونضيف slide-in
        clientImage.classList.remove("slide-out");
        clientName.classList.remove("slide-out");
        clientProfession.classList.remove("slide-out");
        clientParagraph.classList.remove("slide-out");

        clientImage.classList.add("slide-in");
        clientName.classList.add("slide-in");
        clientProfession.classList.add("slide-in");
        clientParagraph.classList.add("slide-in");

        // بعد ما يخلص الدخول نشيل الكلاس عشان يبقى جاهز للمره الجاية
        setTimeout(() => {
            clientImage.classList.remove("slide-in");
            clientName.classList.remove("slide-in");
            clientProfession.classList.remove("slide-in");
            clientParagraph.classList.remove("slide-in");
        }, 300);
    }, 300);
}

testimonialList.forEach(targetList => {
    targetList.addEventListener('click', () => {

        testimonialList.forEach(anyList => {
            anyList.classList.remove('active-list');
        });
        targetList.classList.add('active-list');

        // جلب الـ testimonial من الـ object حسب الـ id
        const data = testimonials[targetList.id];
        if (data) {
            updateTestimonial(data);
        }
    });
});
// End Testimonial Setting


// Start Scroll Up Button
const scrollUp = document.querySelector('.scroll-up');

window.addEventListener("scroll", () => {
    if (window.scrollY >= 320) {
        scrollUp.classList.add('show');
    } else {
        scrollUp.classList.remove("show");
    }
});

scrollUp.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});
// End Scroll Up Button
