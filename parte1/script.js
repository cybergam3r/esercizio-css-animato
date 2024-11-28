const postits = document.querySelectorAll('.postit');
postits.forEach(postit => {
  const rotation = (Math.random() * 30 - 10);
  postit.style.transform = `rotate(${rotation}deg)`; 
  const randomColor = getRandomColor();
  postit.style.backgroundColor = randomColor;
  postit.addEventListener('mouseover', () => {
    postit.style.transform = `rotate(0deg) scale(1.1)`; 
  });
  postit.addEventListener('mouseout', () => {
    postit.style.transform = `rotate(${rotation}deg)`;
  });
});
function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}