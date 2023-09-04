const calculateButton = document.querySelector(".calculate");
const container = document.querySelector(".container");
calculateButton.addEventListener("click", () => {
  const birthDay = document.querySelector("input[type='date']").value;
  if (birthDay !== "") {
    const birthDate = new Date(birthDay);
    const today = new Date();
    let yearsDiff = today.getFullYear() - birthDate.getFullYear();
    let monthsDiff = today.getMonth() - birthDate.getMonth();
    let daysDiff = today.getDate() - birthDate.getDate();

    if (daysDiff < 0) {
      const daysInMonth = new Date(
        today.getFullYear(),
        today.getMonth(),
        0
      ).getDate();
      daysDiff += daysInMonth;
      monthsDiff -= 1;
    }

    if (monthsDiff < 0) {
      monthsDiff += 12;
      yearsDiff -= 1;
    }
    const result = document.querySelector(".result");
    result.innerHTML = "";
    result.innerHTML = `Your Age is <span>${yearsDiff}</span> Years <span>${monthsDiff}</span> Months <span>${daysDiff}</span> Days.`;

    container.appendChild(result);
  }
});
