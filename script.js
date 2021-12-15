const mobile = document.querySelector(".mobile");
const navToggle = document.querySelector(".nav-toggle");
const navClose = document.querySelector(".nav-close");
const scrollLink = document.querySelectorAll(".scroll-link");
const navbarHeader = document.querySelector(".navbar-header");

navToggle.addEventListener("click", () => {
	mobile.classList.add("mobile-fix");
	document.querySelector(".nav-links").classList.add("show-links");
	navbarHeader.classList.remove("hidden");
	navToggle.classList.add("hidden");
});

navClose.addEventListener("click", () => {
	navbarHeader.classList.add("hidden");
	navToggle.classList.remove("hidden");
	mobile.classList.remove("mobile-fix");
	document.querySelector(".nav-links").classList.remove("show-links");
});

scrollLink.forEach((link) => {
	link.addEventListener("click", () => {
		navbarHeader.classList.add("hidden");
		navToggle.classList.remove("hidden");
		mobile.classList.remove("mobile-fix");
		document.querySelector(".nav-links").classList.remove("show-links");
	});
});

const arr = [
	{
		img: "./images/SnapshootPortfolio-1.png",
		heading1: "Tonic",
		list1: ["canopy", "Back End Dev", "2015"],
		intro1:
			"A daily selection of privately personalized reads; no accounts or sign-ups required.",
		techstack1: ["html", "css", "javaScript"],
		heading2: "Facebook 360",
		list2: ["Facebook", "Full Stack Dev", "2015"],
		intro2:
			"Exploring the future of media in Facebook's first Virtual Reality app; a place to discover and enjoy 360 photos and videos on Gear VR.",
		techstack2: ["html", "Ruby on Rails", "css", "javaScript"],
		para: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex
  distinctio animi ab obcaecati doloremque commodi mollitia amet,
  necessitatibus aliquid quisquam! Nesciunt placeat deserunt aliquam
  perspiciatis atque veritatis quisquam eaque, asperiores maxime a
  rem facere magnam quae. Commodi error quasi debitis reiciendis
  consequuntur esse dolores a culpa velit consequatur corrupti quis,
  sunt impedit facilis cumque minus incidunt assumenda. Adipisci,
  exercitationem, dicta aspernatur labore quisquam provident similique sunt ratione veritatis nemo itaque corporis nobis Dicta
  asperiores saepe, officia et fugiat neque enim!   officiis
  quaerat itaque dolor iusto tempore, vel quis  nesciunt
  officia, vitae magnam atque? Odio et sunt error cum.`,
		list3: ["html", "css", "javaScript", "github", "ruby", "Bootstrap"],
		mainbtn: ["See Project"],
		popupbtn: ["See Live", "See Source"],
		order: 3,
		id: 0,
		right: "",
		rightimg: "",
		data: [1],
		btn: [1],
	},
	{
		img: "./images/SnapshootPortfolio-2.png",
		heading1: "Multi-Post Stories",
		list1: ["canopy", "Back End Dev", "2015"],
		intro1:
			"A daily selection of privately personalized reads; no accounts or sign-ups required.",
		techstack1: ["html", "css", "javaScript"],
		heading2: "Uber Navigation",
		list2: ["Uber", "Lead Developer", "2018"],
		intro2:
			"A smart assistant to make driving more safe, efficient, and fun by unlocking your most expensive computer: your car.",
		techstack2: ["html", "Ruby on Rails", "css", "javaScript"],
		list3: ["html", "css", "javaScript", "github", "ruby", "Bootstrap"],
		mainbtn: ["See Project"],
		popupbtn: ["See Live", "See Source"],
		order: 4,
		id: 1,
		right: "right",
		rightimg: "right-img",
		data: [2],
		btn: [2],
	},
	{
		img: "./images/SnapshootPortfolio-3.png",
		heading1: "Tonic",
		list1: ["canopy", "Back End Dev", "2015"],
		intro1:
			"A daily selection of privately personalized reads; no accounts or sign-ups required.",
		techstack1: ["html", "css", "javaScript"],
		heading2: "Tonic",
		list2: ["Canopy", "Back End Dev", "2015"],
		intro2:
			"A daily selection of privately personalized reads; no accounts or sign-ups required.",
		techstack2: ["html", "Ruby on Rails", "css", "javaScript"],
		list3: ["html", "css", "javaScript", "github", "ruby", "Bootstrap"],
		mainbtn: ["See Project"],
		popupbtn: ["See Live", "See Source"],
		order: 1,
		id: 2,
		right: "",
		rightimg: "",
		data: [3],
		btn: [3],
	},
	{
		img: "./images/SnapshootPortfolio-4.png",
		heading1: "Multi-Post-Stories",
		list1: ["canopy", "Back End Dev", "2015"],
		intro1:
			"A daily selection of privately personalized reads; no accounts or sign-ups required.",
		techstack1: ["html", "css", "javaScript"],
		heading2: "Multi-Post-Stories",
		list2: ["Facebook", "Full Stack Dev", "2015"],
		intro2:
			"Experimental content creation feature that allows users to add to an existing story over the course of a day without spamming their friends.",
		techstack2: ["html", "Ruby on Rails", "css", "javaScript"],
		list3: ["html", "css", "javaScript", "github", "ruby", "Bootstrap"],
		mainbtn: ["See Project"],
		popupbtn: ["See Live", "See Source"],
		order: 2,
		id: 3,
		right: "right",
		rightimg: "right-img",
		data: [4],
		btn: [4],
	},
];

// Function to generate standard portfolio cards in mobile and desktop views.
function protfolio() {
	for (let i = 0; i < arr.length; i += 1) {
		const markup = `<div class="main-card">
	<div
		class="single-card ${arr[i].right} order-${arr[i].order}"
	>
		<div class="card-img ${arr[i].rightimg}">
			<img src="${arr[i].img}" />
		</div>
		<!-- hide after 992 px -->
		<div class="about-portfolio">
			<h2>${arr[i].heading1}</h2>
			<div class="info-portfolio">
				<ul class="list">
					<li class="li">${arr[i].list1[0]}</li>
					<li>${arr[i].list1[1]}</li>
					<li>${arr[i].list1[2]}</li>
				</ul>
			</div>
			<p>${arr[i].intro1}</p>

			<ul class="tech-used">
				<li class="tech">${arr[i].techstack1[0]}</li>
				<li class="tech">${arr[i].techstack1[1]}</li>
				<li class="tech">${arr[i].techstack1[2]}</li>
			</ul>
			<button class="btn project-btn-small common-btn" data-size="${
				arr[i].btn[0]
			}" type="button">
				See Projects
			</button>
		</div>

		<!-- hidden till 992 px -->

		<div class="about-portfolio-max">
			<h2>${arr[i].heading2}</h2>
			<div class="info-portfolio">
				<ul class="list">
					<li class="li">${arr[i].list2[0]}</li>
					<li>${arr[i].list2[1]}</li>
					<li>${arr[i].list2[2]}</li>
				</ul>
			</div>
			<p>${arr[i].intro2}</p>

			<ul class="tech-used">
				<li class="tech">${arr[i].techstack2[0]}</li>
				<li class="tech">${arr[i].techstack2[1]}</li>
				<li class="tech">${arr[i].techstack2[2]}</li>
				<li class="tech">${arr[i].techstack2[3]}</li>
			</ul>
			<button class="btn project-btn-large common-btn" data-size="${
				arr[i].btn[0]
			}" type="button">
				See Projects
			</button>
		</div>
	</div>
	<div class="new-popup large-popup hidden" id='${arr[i].data[0]}'>
		<div class="popup">
			<div class="popup-head">
				<h2>${arr[i].heading2}</h2>
				<span class="popup-close" data-size="${arr[i].btn[0]}">
					<i class="fas fa-times"></i>
				</span>
			</div>
			<div class="info-portfolio info-popup">
				<ul class="list">
					<li class="li">${arr[i].list2[0]}</li>
					<li>${arr[i].list2[1]}</li>
					<li>${arr[i].list2[2]}</li>
				</ul>
			</div>
			<div class="card-img popup-img popup-img-small">
				<img src="${arr[i].img}" alt="Portfolio ${i + 1} image" class="p-img" />
			</div>
			<div class="popup-large-info">
				<p class="popup-large-p">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
					eligendi placeat illo soluta quis porro fugit eum temporibus qui, ab
					cum odit nisi tempora enim vero illum mollitia rerum distinctio quia
					velit. Sed reiciendis vel blanditiis sint ipsam voluptas dolorem alias
					recusandae odio, perferendis iste iusto, atque necessitatibus eaque est! <span class="hidden-para">lorem ipsum dolor sit lorem ipsum dolor sit lorem ipsum dolor sit
          eligendi placeat illo soluta quis porro fugit eum temporibus qui, ab
					cum odit nisi tempora enim vero illum mollitia rerum distinctio quia </span>
				</p>
				<div class="popup-info-links">
					<ul class="tech-used popup-large-tech">
            <div class='dont-hide'>
						  <li class="tech">${arr[i].list3[0]}</li>
						  <li class="tech">${arr[i].list3[1]}</li>
						  <li class="tech">${arr[i].list3[2]}</li>
            </div>
            <div class="hide-for-small">
						  <li class="tech">${arr[i].list3[3]}</li>
						  <li class="tech">${arr[i].list3[4]}</li>
						  <li class="tech">${arr[i].list3[5]}</li>
            </div>
					</ul>
					<hr class="line" />
					<div class="popup-buttons">
						<a href="/" class="btn popup-info-btn"
							>See live <i class="fas fa-external-link-alt link-icon"></i
						></a>
						<a href="/" class="btn popup-info-btn"
							>See source <i class="fab fa-github link-icon"></i
						></a>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
      `;
		work.innerHTML += markup;
	}
}

// Window object fires the portfolio function as soon as the script is loaded.
protfolio();

const commonBtn = document.querySelectorAll(".common-btn");

commonBtn.forEach((btn) => {
	btn.addEventListener("click", (e) => {
		const num = +e.target.getAttribute("data-size");
		const close = document.getElementById(num);
		close.classList.remove("hidden");
		overlay.classList.remove("hidden");
	});
});

const closearr = document.querySelectorAll(".popup-close");
closearr.forEach((el) => {
	el.addEventListener("click", (e) => {
		const tar = +e.target.parentNode.getAttribute("data-size");
		const close = document.getElementById(tar);
		close.classList.add("hidden");
		overlay.classList.add("hidden");
	});
});
