// Your code here

const dodger = document.getElementById("dodger")
const moveDodgerLeft = () => {
  const leftNumbers = dodger.style.left.replace("px", "")
  const left = parseInt(leftNumbers, 10)

  if (left > 0) {
    dodger.style.left = `${left - 1}px`
  }

}
document.addEventListener("keydown", (event) => {
    if (event.key === "ArrowLeft") {
      moveDodgerLeft();
  }
  })
  


const moveDodgerRight = () => {
  const leftNumbers = dodger.style.left.replace("px", "")
  const left = parseInt(leftNumbers, 10)

  if (left <= 179) {
    dodger.style.left = `${left + 1}px`
  }

}
document.addEventListener("keydown", (event) => {
    if (event.key === "ArrowRight") {
      moveDodgerLeft();
  }
  })