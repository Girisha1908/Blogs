// script.js

const posts = [
  {
    id: 1,
    title: "Welcome to My Blog",
    date: "October 30, 2025",
    image: "image1.png",
    description: "An introduction to what this blog is about and what to expect.",
    content: `
      <p>Welcome to my blog! This space is where I share my experiences, learnings, and insights on topics that matter to me.</p>
      <p>Here’s a sneak peek of what’s coming: personal growth stories, tech tutorials, reflections, and a bit of creativity.</p>
      <img src="image1.png" alt="blog intro image">
      <p>Stick around—each post aims to offer something meaningful you can take away.</p>
    `
  },
  {
    id: 2,
    title: "Learning Git and GitHub",
    date: "October 25, 2025",
    image: "image2.png",
    description: "A simple guide to understanding Git and GitHub for beginners.",
    content: `
      <p>Version control might sound complicated, but Git makes it simple once you get the basics.</p>
      <img src="image2.png" alt="git and github image">
      <p>Git helps you track changes in your code. GitHub lets you store and collaborate on those changes online.</p>
      <p>Learning this skill improves your teamwork, coding discipline, and professional credibility.</p>
    `
  }
];

// Populate current year
document.getElementById("year").textContent = new Date().getFullYear();

const postsContainer = document.getElementById("posts");
const postDetail = document.getElementById("post-detail");

function renderPosts() {
  postsContainer.innerHTML = posts.map(post => `
    <div class="card">
      <img src="${post.image}" alt="${post.title}">
      <h2>${post.title}</h2>
      <small>${post.date}</small>
      <p>${post.description}</p>
      <a href="#" class="read-more" onclick="openPost(${post.id});return false;">Read More →</a>
    </div>
  `).join("");
}

function openPost(id) {
  const post = posts.find(p => p.id === id);
  if (!post) return;

  postsContainer.classList.add("hidden");
  postDetail.classList.remove("hidden");

  postDetail.innerHTML = `
    <div class="card">
      <h2>${post.title}</h2>
      <small>${post.date}</small>
      <div>${post.content}</div>
      <a href="#" class="back-btn" onclick="goBack();return false;">← Back to Home</a>
    </div>
  `;
}

function goBack() {
  postDetail.classList.add("hidden");
  postsContainer.classList.remove("hidden");
}

renderPosts();
