const elHamurgerIcon = document.querySelector('.hamburger-icon');
const elNavbar = document.querySelector('.site-nav');
const elCloseNavbar = document.querySelector('.site-nav__header-btn');
const elFeatureLinks = document.querySelectorAll('.featurs__link');
const elFeatureItems = document.querySelectorAll('.featurs__item');
const elFeaturesInners = document.querySelectorAll('.featurs__inner');
const elFaqItemQuestions = document.querySelectorAll('.faq__item-questions');
const elFaqItemImgs = document.querySelectorAll('.faq__item-img');

function removeItem() {
	elFeaturesInners.forEach(elFeaturesInner => {
		elFeaturesInner.classList.remove('active');
	});
}

elHamurgerIcon.addEventListener('click', () => {
	elNavbar.classList.toggle('active');
	console.log(111);
});

elCloseNavbar.addEventListener('click', () => {
	elNavbar.classList.toggle('active');
});

elFeatureLinks.forEach(elFeatureLink => {
	elFeatureLink.addEventListener('click', e => {
		e.preventDefault();

		// ITEM ACTIVE REMOVE
		elFeatureItems.forEach(elFeatureItem => {
			elFeatureItem.classList.remove('active');
		});

		// ADD LINK ACTIVE
		elFeatureLink.parentElement.classList.add('active');

		// REMOVE ITEM FUNCTION
		removeItem();

		// ADD ITEM
		const ItemTab = document.querySelector(elFeatureLink.dataset.tab);
		ItemTab.classList.add('active');
		console.log(ItemTab);
	});
});
const elFaqItemImg = document.querySelectorAll('.faq__item-img');

elFaqItemQuestions.forEach(elFaqItemQuestion => {
	elFaqItemQuestion.addEventListener('click', () => {
		const activeItem = document.querySelector('.faq__item-questions.active');

		if (activeItem && activeItem !== elFaqItemQuestion) {
			activeItem.classList.remove('active');
			activeItem.nextElementSibling.style.maxHeight = null;
		}

		elFaqItemQuestion.classList.toggle('active');
		const answer = elFaqItemQuestion.nextElementSibling;
		if (elFaqItemQuestion.classList.contains('active')) {
			answer.style.maxHeight = answer.scrollHeight + 'px';
		} else {
			answer.style.maxHeight = null;
		}
	});
});
