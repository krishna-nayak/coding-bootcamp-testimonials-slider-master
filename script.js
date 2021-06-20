const data = [
    {
        name: `Tanya Sinclair`,
        description: `“ I’ve been interested in coding for a while but never taken the jump, until now. I couldn’t recommend this course enough. I’m now in the job of my dreams and so excited about the future. ”`,
        job: `UX Engineer`,
        pic: `./images/image-tanya.jpg`,
    },
    {
        name: `John Tarkpor`,
        description: `“ If you want to lay the best foundation possible I’d recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer. ”`,
        job: `Junior Front-end Developer`,
        pic: `./images/image-john.jpg`,
    },
];

const description = document.querySelector(".description");
const personName = document.getElementById("name");
const job = document.getElementById("job");

const next = document.getElementById("next");
const prev = document.getElementById("prev");

let currentItem = 0;

window.addEventListener("DOMContentLoaded", function () {
    console.log("Loding Completed ✅");

    showPerson(currentItem);
});

function showPerson(currentItem) {
    const item = data[currentItem];
    const userImg = document.getElementById("user");
    console.log(userImg + " " + item.pic);
    userImg.src = item.pic;
    description.textContent = item.description;
    personName.textContent = item.name;
}

next.addEventListener("click", function () {
    currentItem++;
    if (currentItem === data.length) currentItem = 0;
    showPerson(currentItem);
});

prev.addEventListener("click", function () {
    currentItem--;
    if (currentItem < 0) currentItem = data.length - 1;
    showPerson(currentItem);
});
