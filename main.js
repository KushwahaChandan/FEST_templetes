//rotation 
const text_rotate = document.querySelector('.text_rotate p');
text.innerHTML = text.innerText.split("").map((char, i) =>
    `<span style="transform:rotate(${i * 5}deg)">$(char)</span>`
).join("")


// click_hide_event

function hidefun() {
    if (document.getElementById("whatsapp").style.display != "none") {
        document.getElementById("whatsapp").style.display = "none";
    } else {
        document.getElementById("whatsapp").style.display = "block";
    }


}

function getQuote() {
    if (document.getElementById("hideQuote").style.display != "none") {
        document.getElementById("hideQuote").style.display = "none";
    } else {
        document.getElementById("hideQuote").style.display = "block";
    }
}

function closequote() {
    if (document.getElementById("hideQuote").style.display = "block") {
        document.getElementById("hideQuote").style.display = "none";
    } else {
        document.getElementById("hideQuote").style.display = "block";
    }
}