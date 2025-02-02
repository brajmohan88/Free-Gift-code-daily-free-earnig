function redeemGiftCode() {
    let code = document.getElementById("giftCodeInput").value;
    let message = document.getElementById("giftCodeMessage");

    fetch("https://your-backend-link.onrender.com/api/gift-codes/redeem", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ code })
    })
    .then(response => response.json())
    .then(data => {
        message.innerHTML = data.message;
    })
    .catch(error => console.log(error));
}
