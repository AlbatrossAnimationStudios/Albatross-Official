// toggle header

function toggleHeader() {
    var headerElement = document.querySelector("header");
    var titleElement = document.querySelector("#title");

    if (window.pageYOffset >= titleElement.offsetTop + titleElement.offsetHeight) {
        headerElement.classList.add("show-header");
    } else {
        headerElement.classList.remove("show-header");
    }
}

function smoothScroll(targetElement) {
    var targetOffset = document.querySelector(targetElement).offsetTop;

    window.scrollTo({
        top: targetOffset,
        behavior: "smooth"
    });
}

// contact form

function submitForm() {
    var nameValue = document.getElementById("name").value;
    var emailValue = document.getElementById("email").value;
    var topicValue = document.getElementById("topic").value;
    var messageValue = document.getElementById("message").value;

    fetch("https://discord.com/api/webhooks/1181772402393358356/x-99Gdfb70MCF9Mueg2udArGtuR0L-OPiTBLbu9oBd5zHkofuGFTU0hmO8Eg3v_bQ8An", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            username: "Contact Form",
            content: `**Name:** ${nameValue}
**Email/Discord:** ${emailValue}
**Topic:** ${topicValue}
**- Message:** ` + messageValue
        })
    }).then(response => {
        if (!response.ok) {
            throw new Error("Error");
        }
        alert("Message Sent!");
    }).catch(error => {
        console.error("Error:", error);
    });
}

// play background video

        document.addEventListener("DOMContentLoaded", function () {
            var backgroundVideoElement = document.getElementById("backgroundVideo");

            // Autoplay the video
            backgroundVideoElement.play();

            // Play the video on touchstart to ensure it continues playing on mobile
            document.addEventListener("touchstart", function () {
                backgroundVideoElement.play();
            });

            // Pause the video when the document is hidden (e.g., user switches tabs or goes to another app)
            document.addEventListener("visibilitychange", function () {
                if (document.hidden) {
                    backgroundVideoElement.pause();
                } else {
                    backgroundVideoElement.play();
                }
            });
        });

// background music

document.addEventListener("DOMContentLoaded", function () {
    var backgroundMusicElement = document.getElementById("backgroundMusic");
    var isPlaying = false;
    var notificationPopupElement = document.getElementById("notificationPopup");

    function hideNotification() {
        notificationPopupElement.style.display = "none";
    }

    backgroundMusicElement.addEventListener("playing", function () {
        isPlaying = true;
        hideNotification();
    });

    document.addEventListener("click", function () {
        if (!isPlaying) {
            backgroundMusicElement.play();
            isPlaying = true;
            hideNotification();
        }
    });
});

// old background video js

//window.addEventListener("scroll", toggleHeader);

// document.addEventListener("DOMContentLoaded", function () {
//    var backgroundVideoElement = document.getElementById("backgroundVideo");

//    backgroundVideoElement.addEventListener("canplay", function () {
//        backgroundVideoElement.play();
//    });

//    document.addEventListener("touchstart", function () {
//        backgroundVideoElement.play();
//    });
//});