
const rejectedBtn = document.querySelectorAll("#rejected-btn");

rejectedBtn.forEach(function (btn) {
    btn.addEventListener("click", function () {

        const totalOffer = document.getElementById("available-jobs");
        const totalOffers = Number(totalOffer.innerText);

        const rejectedCount = document.getElementById("rejected-count");
        const count = Number(rejectedCount.innerText);

        if (totalOffers > 0 && count < 8) {
            totalOffer.innerText = totalOffers - 1;
            rejectedCount.innerText = count + 1;
        }

    });
});