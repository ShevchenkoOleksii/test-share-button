const shareBtn = document.getElementById('share-button');
const link = 'https://facebook.com/sharer.php?u=https://shevchenkooleksii.github.io/test-share-button/';

shareBtn.addEventListener('click', (e) => {
	e.preventDefault();
	window.open(link, 'newwindow', 'width=300, height=250');
});
