/** @format */

// Smooth scrolling for links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
	anchor.addEventListener("click", function (e) {
		e.preventDefault();

		document.querySelector(this.getAttribute("href")).scrollIntoView({
			behavior: "smooth",
		});
	});
});

// Filter functionality
function filterVideos(category) {
	const videoItems = document.querySelectorAll(".video-item");
	videoItems.forEach((item) => {
		if (category === "all" || item.getAttribute("data-category") === category) {
			item.style.display = "block";
		} else {
			item.style.display = "none";
		}
	});
}

// Search functionality
function searchPortfolio() {
	const input = document.getElementById("portfolioSearch").value.toLowerCase();
	const videoItems = document.querySelectorAll(".video-item");
	videoItems.forEach((item) => {
		const overlayText = item
			.querySelector(".video-overlay p")
			.textContent.toLowerCase();
		if (overlayText.includes(input)) {
			item.style.display = "block";
		} else {
			item.style.display = "none";
		}
	});
}

// Lazy load videos
document.addEventListener("DOMContentLoaded", function () {
	const lazyVideos = document.querySelectorAll(".lazy-video");
	lazyVideos.forEach((video) => {
		const observer = new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					entry.target.play();
				} else {
					entry.target.pause();
				}
			});
		});
		observer.observe(video);
	});
});
