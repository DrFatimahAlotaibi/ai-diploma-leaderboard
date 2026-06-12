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
        ${(group.badges || group.achievements || []).map(item => `<span class="achievement">${item}</span>`).join("")}
      </div>
    </article>
  `).join("");
}

function resourceCard(resource) {
  return `
    <article class="resource-card simple-resource">
      <h3>${resource.title}</h3>
      <p class="group-label">${resource.group}</p>
      <a class="resource-link" href="${resource.link}" target="_blank" rel="noopener">Open resource →</a>
    </article>
  `;
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

function renderWord() {
  const word = diplomaData.wordOfWeek;
  $("wordCard").innerHTML = `
    <div class="word-main">
      <div class="word-label">${word.word}</div>
      <div>
        <p class="card-text"><strong>Meaning:</strong> ${word.meaning}</p>
        <p class="arabic">${word.arabic}</p>
        <p class="card-text"><strong>Example:</strong> ${word.example}</p>
      </div>
    </div>
  `;
}

function renderExperts() {
  $("expertGrid").innerHTML = diplomaData.aiExperts.map(expert => `
    <article class="expert-card">
      <h3>${expert.name}</h3>
      <p class="group-label">${expert.role}</p>
      <p class="card-text"><strong>Known for:</strong> ${expert.knownFor}</p>
      <span class="achievement">Suggested by ${expert.group}</span>
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
  menuBtn.addEventListener("click", () => navLinks.classList.toggle("open"));
}

function init() {
  setLinks();
  renderLeaderboard();
  renderResources();
  renderExplanations();
  renderWord();
  renderExperts();
  renderGroups();
  renderAnnouncements();
  initMenu();
}

init();
