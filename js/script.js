const elHamurgerIcon = document.querySelector('.hamburger-icon');
const elNavbar = document.querySelector('.site-nav');
const elCloseNavbar = document.querySelector('.site-nav__header-btn');
const elFeatureLinks = document.querySelectorAll('.featurs__link');
const elFeatureItems = document.querySelectorAll('.featurs__item');
const elFeaturesInners = document.querySelectorAll('.featurs__inner');

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
