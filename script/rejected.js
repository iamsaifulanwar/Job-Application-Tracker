const rejectedBtn = document.querySelectorAll("#rejected-btn");

rejectedBtn.forEach(function (btn) {
    btn.addEventListener("click", function () {

        const totalOffers = document.querySelectorAll("#available-jobs");

        const rejectedCount = document.getElementById("rejected-count");
        const counts = Number(rejectedCount.innerText);

        if (counts < 8) {
            totalOffers.forEach(function (offer) {
                const count = Number(offer.innerText);

                if (count > 0) {
                    offer.innerText = count - 1;
                }
            });

            rejectedCount.innerText = counts + 1;
        }
    });
});