
document.getElementById("interview-btn").addEventListener("click", function () {

    const totalOffers = document.querySelectorAll("#available-jobs");

    totalOffers.forEach(function (offer) {
        const count = Number(offer.innerText);

        if (count > 0) {
            offer.innerText = count - 1;
        }
    });

});



