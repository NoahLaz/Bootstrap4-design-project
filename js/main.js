// Featured works Starts
let switcherspans = document.querySelectorAll(".works .content .btns span");
let images = document.querySelectorAll(".works .portfolio .img");

switcherspans.forEach(span => {
    span.addEventListener("click", changeActive);
    span.addEventListener("click", manageImages);
});

function changeActive() {
    switcherspans.forEach(span => {
        span.classList.remove("active");
    });
    this.classList.add("active");
}

function manageImages() {
    images.forEach(img => {
        img.style.display = "none";
    });
    let cat = document.querySelectorAll(this.dataset.cat);
    cat.forEach(img => {
        img.style.display = "block";
    });
}

// Featured works Ends



// why choose us starts 

let section = document.querySelector('.why-choose-us');

let img = document.querySelector('.why-choose-us .image');
let text = document.querySelector('.why-choose-us .text');

// why choose us starts

// Stats Starts

let statSection = document.querySelector('.stats');

let statNumbers = document.querySelectorAll('.stats h2');
let started = false;

window.onscroll = () => {
    if (window.scrollY + 300 >= section.offsetTop) {
        img.style.left = 0;
        text.style.right = 0;
    }
    if (window.scrollY >= statSection.offsetTop) {
        if (!started) {
            statNumbers.forEach((e) => startCount(e));
        }
        started = true;
    }
};

function startCount(el) {
    let goal = el.dataset.goal;
    let count = setInterval(() => {
        el.textContent++;
        if (el.textContent == goal) {
            clearInterval(count);
        }
    }, 1000 / goal);
}

// Stats Ends