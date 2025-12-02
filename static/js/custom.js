// Modal Functionality
const modal = document.getElementById("statementModal");
const openModalBtn = document.getElementById("generateStatementBtn");
const closeModalBtn = document.getElementById("closeModal");
const generateBtn = document.getElementById("generateBtn");

openModalBtn.addEventListener("click", () => {
  modal.classList.add("active");
});

closeModalBtn.addEventListener("click", () => {
  modal.classList.remove("active");
});

modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.classList.remove("active");
  }
});

// Address Toggle
const addressToggle = document.getElementById("addressToggle");
const addressBox = document.getElementById("addressBox");

addressToggle.addEventListener("change", () => {
  if (addressToggle.checked) {
    addressBox.classList.add("active");
  } else {
    addressBox.classList.remove("active");
  }
});

// Generate Statement
generateBtn.addEventListener("click", () => {
  const startYear = document.getElementById("startYear").value;
  const endYear = document.getElementById("endYear").value;
  const includeAddress = addressToggle.checked;

  if (!startYear || !endYear) {
    alert("Please select both start and end years");
    return;
  }

  // Store data in sessionStorage
  sessionStorage.setItem(
    "statementData",
    JSON.stringify({
      startYear,
      endYear,
      includeAddress,
      accountName: "Maria Myers",
      accountNumber: "2091758320",
      address: "Former Notre Dame Convent, Ashton Square.",
    })
  );

  // Open statement page
  window.open("statement.html", "_blank");
});

// Select dropdown
const selectBtn = document.getElementById("selectBtn");
const dropdown = document.getElementById("selectDropdown");
const options = document.querySelectorAll(".select-option");

selectBtn.onclick = () => {
  dropdown.style.display =
    dropdown.style.display === "block" ? "none" : "block";
};

options.forEach((option) => {
  option.onclick = () => {
    selectBtn.innerHTML =
      option.textContent + ' <i class="ri-arrow-down-s-line"></i>';
    document
      .querySelectorAll(".select-option")
      .forEach((o) => o.classList.remove("active"));
    option.classList.add("active");
    dropdown.style.display = "none";
  };
});

// Close when clicking outside
document.addEventListener("click", (e) => {
  if (!e.target.closest(".select-container")) {
    dropdown.style.display = "none";
  }
});
