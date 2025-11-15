//https://cogitorium.info/2021/02/jekyll-github-revision
document.addEventListener("DOMContentLoaded", () => {
  const revisionSpans = document.querySelectorAll("span.revision");

  revisionSpans.forEach(revisionSpan => {
    // Get the data attributes from the div
    const repo = revisionSpan.dataset.repo;
    const pagePath = revisionSpan.dataset.page;

    if (!repo || !pagePath) return;

    const commitsUrl = `https://api.github.com/repos/${repo}/commits?path=${pagePath}&page=1&per_page=2`;

    fetch(commitsUrl)
      .then(response => response.json())
      .then(json => {
        if (json.length > 1) {
          // Only the title of the commit
          const title = json[0].commit.message.split("\n")[0];

          const date = new Date(json[0].commit.author.date);
          //Format date to "%B %e, %Y" (see https://strftime.net/)
          const options = { year: 'numeric', month: 'long', day: 'numeric' };
          const formattedDate = new Intl.DateTimeFormat('en-US', options).format(date);

          revisionSpan.innerHTML =
            "Last Modified: " + formattedDate + " - " + title
            + ` (<a href="https://github.com/${repo}/commits/main/${pagePath}">history</a>)`;
        }
        else {
          revisionSpan.innerHTML = "Last Modified: Never"
            + ` (<a href="https://github.com/${repo}/commits/main/${pagePath}">history</a>)`;;
        }
      })
      .catch(err => {
        console.error("Failed to fetch revision info:", err);
      });
  });
});