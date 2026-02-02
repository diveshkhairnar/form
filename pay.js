
 /*-document.getElementById("paymentForm").addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Payment option selected successfully!");
});

document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");
    const paymentMethods = document.getElementsByName("payment");

    form.addEventListener("submit", function (e) {
        e.preventDefault(); // stop page reload

        let selectedMethod = "";
        for (let method of paymentMethods) {
            if (method.checked) {
                selectedMethod = method.nextElementSibling
                    ? method.nextElementSibling.innerText
                    : method.parentElement.innerText;
            }
        }

        if (selectedMethod === "") {
            alert("Please select a payment method");
            return;
        }

        alert("Payment Successful using " + selectedMethod);
        form.reset();
    });
}); **/

document.addEventListener("DOMContentLoaded", function () {

    const cardSection = document.getElementById("cardSection");
    const upiSection = document.getElementById("upiSection");
    const netSection = document.getElementById("netSection");

    function hideAll() {
        if (cardSection) cardSection.style.display = "none";
        if (upiSection) upiSection.style.display = "none";
        if (netSection) netSection.style.display = "none";
    }

    hideAll();
    if (cardSection) cardSection.style.display = "table-row";

    const radios = document.querySelectorAll("input[name='payment']");

    radios.forEach(radio => {
        radio.addEventListener("change", function () {
            hideAll();

            if (this.value === "card" && cardSection)
                cardSection.style.display = "table-row";

            if (this.value === "upi" && upiSection)
                upiSection.style.display = "table-row";

            if (this.value === "net" && netSection)
                netSection.style.display = "table-row";
        });
    });

    // Form submit
    document.querySelector("form").addEventListener("submit", function (e) {
        e.preventDefault();
        alert("Payment submitted successfully!");
    });

});


document.addEventListener("DOMContentLoaded", function () {

    const cardSection = document.getElementById("cardSection");
    const upiSection = document.getElementById("upiSection");
    const netSection = document.getElementById("netSection");

    function hideAll() {
        if (cardSection) cardSection.style.display = "none";
        if (upiSection) upiSection.style.display = "none";
        if (netSection) netSection.style.display = "none";
    }

    hideAll();
    if (cardSection) cardSection.style.display = "table-row";

    const radios = document.querySelectorAll("input[name='payment']");

    radios.forEach(radio => {
        radio.addEventListener("change", function () {
            hideAll();

            if (this.value === "card" && cardSection)
                cardSection.style.display = "table-row";

            if (this.value === "upi" && upiSection)
                upiSection.style.display = "table-row";

            if (this.value === "net" && netSection)
                netSection.style.display = "table-row";
        });
    });

    // Form submit
    document.querySelector("form").addEventListener("submit", function (e) {
        e.preventDefault();
        alert("Payment submitted successfully!");
    });

});
