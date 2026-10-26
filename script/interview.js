const interviewBtn = document.querySelectorAll("#interview-btn");

interviewBtn.forEach(function (btn) {
    btn.addEventListener("click", function () {

        const totalOffers = document.querySelectorAll("#available-jobs");

        const interviewCount = document.getElementById("interview-count");
        const counts = Number(interviewCount.innerText);

        if (counts < 8) {
            totalOffers.forEach(function (offer) {
                const count = Number(offer.innerText);

                if (count > 0) {
                    offer.innerText = count - 1;
                }
            });

            interviewCount.innerText = counts + 1;
        }
    });
});