const data = diplomaData;

function totalScore(group) {
  return group.scores.quiz + group.scores.lab + group.scores.explanation;
}

function getBadge(total, rank) {
  if (rank === 1) return "🏆 AI Champion";
  if (total >= 90) return "🔥 Code Master";
  if (total >= 80) return "🧠 Model Builder";
  if (total >= 70) return "🚀 Rising Team";
  return "💡 Keep Improving";
}

function renderStats(sortedGroups) {
  document.getElementById("totalGroups").textContent = data.groups.length;
  document.getElementById("totalStudents").textContent = data.groups.length * 4;
  document.getElementById("currentWeek").textContent = data.currentWeek;
  document.getElementById("topGroup").textContent = sortedGroups[0]?.name || "—";
}

function renderLeaderboard() {
  const sorted = [...data.groups].sort((a, b) => totalScore(b) - totalScore(a));
  renderStats(sorted);

  const body = document.getElementById("leaderboardBody");
  body.innerHTML = sorted.map((group, index) => {
    const rank = index + 1;
    const total = totalScore(group);
    return `
      <tr>
        <td class="rank">${rank === 1 ? "🥇" : rank === 2 ? "🥈" : rank === 3 ? "🥉" : rank}</td>
        <td class="group-name">${group.name}<small>${group.theme}</small></td>
        <td>${group.scores.quiz}</td>
        <td>${group.scores.lab}</td>
        <td>${group.scores.explanation}</td>
        <td>${total}</td>
        <td><span class="badge">${getBadge(total, rank)}</span></td>
      </tr>
    `;
  }).join("");
}

function renderLearningWeek() {
  const week = data.learningWeek;
  document.getElementById("learningWeekCard").innerHTML = `
    <p class="eyebrow">${week.week}</p>
    <h3>${week.title}</h3>
    <div class="pill-row">
      ${week.concepts.map(concept => `<span class="pill">${concept}</span>`).join("")}
    </div>
    <div class="info-line"><strong>Mini lab:</strong> ${week.miniLab}</div>
    <div class="info-line"><strong>Code focus:</strong> ${week.codeFocus}</div>
    <div class="info-line"><strong>Common mistake:</strong> ${week.commonMistake}</div>
  `;
}

function renderResources() {
  document.getElementById("resourceGrid").innerHTML = data.resources.map(resource => `
    <article class="resource-card">
      <div class="meta">
        <span>${resource.week}</span>
        <span>${resource.topic}</span>
        <span>${resource.type}</span>
      </div>
      <h3>${resource.title}</h3>
      <p class="card-text"><strong>${resource.group}</strong></p>
      <p class="card-text">${resource.useful}</p>
      <a class="resource-link" href="${resource.link}" target="_blank" rel="noopener">Open resource →</a>
    </article>
  `).join("");
}

function renderExplanations() {
  document.getElementById("explanationGrid").innerHTML = data.explanations.map(item => `
    <article class="explanation-card">
      <div class="meta"><span>${item.group}</span></div>
      <h3>${item.title}</h3>
      <p class="card-text">“${item.text}”</p>
    </article>
  `).join("");
}

function renderWordOfWeek() {
  const word = data.wordOfWeek;
  document.getElementById("wordCard").innerHTML = `
    <div class="word-main">
      <div>
        <p class="eyebrow">AI Word of the Week</p>
        <div class="word-label">${word.word}</div>
      </div>
      <div>
        <p class="card-text"><strong>Simple meaning:</strong> ${word.meaning}</p>
        <p class="card-text arabic">${word.arabic}</p>
        <p class="card-text"><strong>Example:</strong> ${word.example}</p>
      </div>
    </div>
  `;
}

function renderGroups() {
  document.getElementById("groupGrid").innerHTML = data.groups.map(group => `
    <article class="group-card">
      <div class="meta"><span>${group.name}</span><span>${group.theme}</span></div>
      <h3>${group.theme}</h3>
      <ul class="member-list">
        ${group.members.map(member => `<li>${member}</li>`).join("")}
      </ul>
      <div class="achievement-list">
        ${group.achievements.map(item => `<span class="achievement">${item}</span>`).join("")}
      </div>
    </article>
  `).join("");
}

function renderAnnouncements() {
  document.getElementById("announcementList").innerHTML = data.announcements.map(item => `
    <article class="announcement-card">
      <h3>${item.title}</h3>
      <p class="card-text">${item.text}</p>
    </article>
  `).join("");
}

function setupMenu() {
  const menuBtn = document.getElementById("menuBtn");
  const navLinks = document.getElementById("navLinks");
  menuBtn.addEventListener("click", () => navLinks.classList.toggle("open"));
  navLinks.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => navLinks.classList.remove("open"));
  });
}

renderLeaderboard();
renderLearningWeek();
renderResources();
renderExplanations();
renderWordOfWeek();
renderGroups();
renderAnnouncements();
setupMenu();
