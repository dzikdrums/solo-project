const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector(".sidebar");
const content = document.querySelector(".content-wrapper");
const header = document.querySelector(".header");
const headerWrapper = document.querySelector(".header-whitebar");
const sidebarListItems = document.querySelectorAll(".sidebar__list-item");
const allWindows = document.querySelectorAll("section");
const sidebarOverlay = document.querySelector(".sidebar-overlay");
const chatHistory = document.querySelector(".chat__history");
const chatInput = document.querySelector(".chat__input-field");
const chatSendBtn = document.querySelector(".btn-send");

// =========================
// ======= CHAT ==========
//==========================

function addMessage() {
  const chatMessage = chatInput.value;
  const chatMessageHTML =
    '<p class="chat__history-inner chat-user">' + chatMessage + "</p>";
  chatInput.value = "";

  chatHistory.innerHTML += chatMessageHTML;
}

chatSendBtn.addEventListener("click", function() {
  addMessage();
});

document.addEventListener("keyup", function(e) {
  if (e.keyCode === 13) {
    addMessage();
  }
});

// =========================
// ======= HAMBURGER ==========
//==========================

const hamburgerClickHandler = () => {
  hamburger.classList.toggle("hamburger-active");
  nav.classList.toggle("sidebar-active");
  content.classList.toggle("content-wrapper-active");
  headerWrapper.classList.toggle("header-whitebar-active");
  header.classList.toggle("header-active");
  sidebarOverlay.classList.toggle("sidebar-overlay-active");
};

hamburger.addEventListener("click", hamburgerClickHandler);

for (let sidebarListItem of sidebarListItems) {
  sidebarListItem.addEventListener("click", function() {
    const clickedElement = this;
    const activeItems = document.querySelectorAll(".sidebar__list-item-active");

    for (let activeItem of activeItems) {
      activeItem.classList.remove("sidebar__list-item-active");
    }
    clickedElement.classList.add("sidebar__list-item-active");

    const clickedElementTag = clickedElement.getAttribute("data-tags");

    const windows = document.querySelectorAll("." + clickedElementTag);

    for (let window of allWindows) {
      window.classList.remove("active");
    }

    for (let window of windows) {
      window.classList.add("active");
    }
  });
}

// =========================
// ======= MODALS ==========
//==========================

function closeModal() {
  document.getElementById("overlay").classList.remove("show");
}

document.querySelectorAll("#overlay .js--close-modal").forEach(function(btn) {
  btn.addEventListener("click", function(e) {
    e.preventDefault();
    closeModal();
  });
});

document.querySelector("#overlay").addEventListener("click", function(e) {
  if (e.target === this) {
    closeModal();
  }
});

document.addEventListener("keyup", function(e) {
  if (e.keyCode === 27) {
    closeModal();
  }
});

function openModal(modal) {
  document.querySelectorAll("#overlay > *").forEach(function(modal) {
    modal.classList.remove("show");
  });
  document.querySelector("#overlay").classList.add("show");
  document.querySelector(modal).classList.add("show");
}

document.querySelector(".manager").addEventListener("click", function() {
  openModal("#manager");
});

document.querySelector(".login").addEventListener("click", function() {
  openModal("#login");
});

document.querySelector(".quit").addEventListener("click", function() {
  openModal("#quit");
});

// =========================
// ======= CHART ==========
//==========================

var ctx = document.getElementById("myChart").getContext("2d");

var chart = new Chart(ctx, {
  // 1
  type: "bar",
  data: {
    // 2
    labels: ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10"],
    // 3
    datasets: [
      {
        // 4
        label: "Signups",
        // 5
        backgroundColor: "#8DBEC8",
        borderColor: "#8DBEC8",
        // 6
        data: [52, 51, 41, 94, 26, 6, 72, 9, 21, 88]
      },
      {
        label: "FTD",
        backgroundColor: "#F29E4E",
        borderColor: "#F29E4E",
        data: [6, 72, 1, 0, 47, 11, 50, 44, 63, 76]
      },
      {
        label: "Earned",
        backgroundColor: "#71B374",
        borderColor: "#71B374",
        data: [59, 49, 68, 90, 67, 41, 13, 38, 48, 48],
        // 7
        hidden: true
      }
    ]
  }
});
