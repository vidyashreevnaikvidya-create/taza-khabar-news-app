const newsData = {
  today: [
    {
      title: "India Clinches Victory in Final Match!",
      detail: "In an exciting turn of events, India secured the final win against Australia."
    },
    {
      title: "Tech Innovation: AI Breaks New Records",
      detail: "New AI models now surpass human-level performance in translation tasks."
    },
    {
      title: "Rain Floods Parts of Bangalore Again",
      detail: "Heavy downpour leads to traffic snarls and waterlogging in several areas."
    }
  ],
  yesterday: [
    {
      title: "Stock Market Falls 200 Points",
      detail: "Due to geopolitical tensions, Nifty and Sensex saw a sharp dip."
    },
    {
      title: "Wildlife Discovery in Western Ghats",
      detail: "Scientists discover 3 new amphibian species in the rainforests."
    },
    {
      title: "G20 Summit: Key Agreements Signed",
      detail: "Leaders signed trade and environmental deals during the final session."
    }
  ]
};

function showToday() {
  displayNews(newsData.today);
}

function showYesterday() {
  displayNews(newsData.yesterday);
}

function displayNews(newsList) {
  const container = document.getElementById("news-container");
  container.innerHTML = "";
  newsList.forEach(news => {
    const card = document.createElement("div");
    card.className = "news-card";

    const title = document.createElement("h3");
    title.textContent = news.title;

    const detail = document.createElement("p");
    detail.textContent = news.detail;

    card.appendChild(title);
    card.appendChild(detail);
    container.appendChild(card);
  });
}

window.onload = showToday;