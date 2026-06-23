const $ = (id) => document.getElementById(id);

function totalScore(group) {
  return (group.scores.quiz || 0) + (group.scores.lab || 0) + (group.scores.explanation || 0);
}

function badgeForScore(score) {
  if (score >= 90) return "🏆 AI Champion";
  if (score >= 70) return "🔥 Code Master";
  if (score >= 50) return "🧠 Model Builder";
  if (score >= 25) return "🚀 Rising Team";
  return "💡 Keep Improving";
}

function setLinks() {
  const links = diplomaData.submissionLinks || {};

  const linkMap = {
    heroResourceBtn: links.resourceForm,
    resourceSubmitBtn: links.resourceForm,
    resourceVoteBtn: links.resourceVoteForm,
    explanationSubmitBtn: links.explanationForm,
    aiWordSubmitBtn: links.aiWordForm,
    aiExpertSubmitBtn: links.aiExpertForm
  };

  Object.entries(linkMap).forEach(([id, url]) => {
    const el = $(id);
    if (!el) return;

    el.href = url && url !== "#" ? url : "#";

    if (!url || url === "#") {
      el.classList.add("disabled");
      el.title = "Add the Google Form link in data.js";
    } else {
      el.classList.remove("disabled");
      el.title = "";
      el.target = "_blank";
      el.rel = "noopener";
    }
  });
}

function renderStats(sortedGroups) {
  $("statGroups").textContent = diplomaData.groups.length;
  $("statStudents").textContent = diplomaData.groups.reduce((sum, g) => sum + g.members.length, 0);
  $("statWeek").textContent = diplomaData.currentWeek;
  $("statTop").textContent = sortedGroups[0]?.name || "—";
}

function renderLeaderboard() {
  const sorted = [...diplomaData.groups].sort((a, b) => totalScore(b) - totalScore(a));

  renderStats(sorted);

  $("leaderboardBody").innerHTML = sorted.map((group, index) => {
    const total = totalScore(group);

    return `
      <tr>
        <td class="rank">${index === 0 ? "🥇" : index === 1 ? "🥈" : index === 2 ? "🥉" : index + 1}</td>
        <td class="group-name">${group.name}<small>${group.members.length} members</small></td>
        <td>${group.scores.quiz}</td>
        <td>${group.scores.lab}</td>
        <td>${group.scores.explanation}</td>
        <td>${total}</td>
        <td><span class="badge">${badgeForScore(total)}</span></td>
      </tr>
    `;
  }).join("");
}

function renderGroups() {
  $("groupGrid").innerHTML = diplomaData.groups.map(group => `
    <article class="group-card">
      <h3>${group.name}</h3>

      <ul class="member-list">
        ${group.members.map(member => `<li>${member}</li>`).join("")}
      </ul>

      <div class="achievement-list">
        ${(group.badges || group.achievements || []).map(item => `
          <span class="achievement">${item}</span>
        `).join("")}
      </div>
    </article>
  `).join("");
}

function resourceCard(resource) {
  return `
    <article class="resource-card simple-resource">
      <h3>${resource.title}</h3>
      <p class="group-label">${resource.group}</p>
      <a class="resource-link" href="${resource.link}" target="_blank" rel="noopener">
        Open resource →
      </a>
    </article>
  `;
}
function renderCourseGallery() {
  const galleryContainer = document.getElementById("course-gallery");

  if (!galleryContainer || !diplomaData.courseGallery) return;

  galleryContainer.innerHTML = diplomaData.courseGallery
    .map(
      (item) => `
        <article class="gallery-card">
          <a href="${item.fullImage}" target="_blank" rel="noopener noreferrer">
            <img
              src="${item.image}"
              alt="${item.title} by ${item.group}"
              class="gallery-image"
            />
          </a>

          <div class="gallery-content">
            <p class="gallery-group">${item.group}</p>
            <h3>${item.title}</h3>
            <p class="gallery-members">${item.members.join(" • ")}</p>
            <p class="gallery-caption">${item.caption}</p>

            <a
              class="gallery-link"
              href="${item.fullImage}"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Photo →
            </a>
          </div>
        </article>
      `
    )
    .join("");
}

function renderResources() {
  const best = diplomaData.bestResource;

  $("bestResourceCard").innerHTML = `
    <p class="eyebrow">Best Resource</p>
    <h3>🌟 ${best.title}</h3>
    <p><strong>${best.group}</strong></p>
    <p>${best.note}</p>
  `;

  $("courseResourceGrid").innerHTML = diplomaData.currentCourseResources.map(resourceCard).join("");
  $("generalResourceGrid").innerHTML = diplomaData.generalAIResources.map(resourceCard).join("");
}

function renderExplanations() {
  $("explanationGrid").innerHTML = diplomaData.explanations.map(item => `
    <article class="explanation-card">
      <h3>${item.title}</h3>
      <p class="group-label">${item.group}</p>
      <p class="card-text">${item.text}</p>
    </article>
  `).join("");
}

function renderAIWords() {
  const container = $("wordCard");
  if (!container || !diplomaData.aiWords) return;

  container.innerHTML = diplomaData.aiWords.map(item => `
    <article class="word-card">
      <div class="meta">
        <span>${item.group}</span>
      </div>

      <div class="word-main">
        <div class="word-label">${item.word}</div>

        <div>
          ${item.arabic ? `<p class="arabic">${item.arabic}</p>` : ""}
          ${item.meaning ? `<p class="card-text"><strong>Meaning:</strong> ${item.meaning}</p>` : ""}
          ${item.example ? `<p class="card-text"><strong>Example:</strong> ${item.example}</p>` : ""}
        </div>
      </div>
    </article>
  `).join("");
}

function renderExperts() {
  const container = $("expertGrid");
  if (!container || !diplomaData.aiExperts) return;

  container.innerHTML = diplomaData.aiExperts.map(expert => `
    <article class="expert-card">
      <h3>${expert.name}</h3>

      <div class="meta">
        <span>${expert.role}</span>
        <span>Suggested by ${expert.group}</span>
      </div>

      <p class="card-text"><strong>Known for:</strong> ${expert.knownFor}</p>

      ${expert.link ? `
        <a class="resource-link" href="${expert.link}" target="_blank" rel="noopener">
          Learn more →
        </a>
      ` : ""}
    </article>
  `).join("");
}

function renderAnnouncements() {
  $("announcementList").innerHTML = diplomaData.announcements.map(item => `
    <article class="announcement-card">
      <h3>${item.title}</h3>
      <p class="card-text">${item.text}</p>
    </article>
  `).join("");
}

function initMenu() {
  const menuBtn = $("menuBtn");
  const navLinks = $("navLinks");

  if (!menuBtn || !navLinks) return;

  menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("open");
  });
}

function init() {
  setLinks();
  renderLeaderboard();
  renderResources();
  renderExplanations();
  renderAIWords();
  renderExperts();
  renderGroups();
  renderAnnouncements();
  initMenu();
  renderCourseGallery();
}

init();
