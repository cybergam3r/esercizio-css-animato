const postits = document.querySelectorAll('.postit');
postits.forEach(postit => {
    const random = randomdegree();
  const randomColor = getRandomColor();
  postit.style.transform = `rotate(${random}deg)`; 
  postit.style.backgroundColor = randomColor;
  postit.addEventListener('mouseover', () => {
    postit.style.transform = `rotate(${randomdegree()}deg) scale(1.2)`; 
  });
  postit.addEventListener('mouseout', () => {
    postit.style.transform = `rotate(${randomdegree()}deg)`;
  });
});
function randomdegree(){
    const rotation = (Math.random() * 30 - 10);
    return rotation
}

function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}