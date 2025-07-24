function generateNumbers() {
  let nums = [];
  let hasEven = false;

  while (!hasEven) {
    nums = [];
    hasEven = false;
    for (let i = 0; i < 4; i++) {
      let n = Math.floor(Math.random() * 10);
      nums.push(n);
      if (n % 2 === 0) hasEven = true;
    }
  }

  return nums;
}

function displayNumbers() {
  const container = document.getElementById("numbers-container");
  container.innerHTML = "";

  const numbers = generateNumbers();

  numbers.forEach(n => {
    const btn = document.createElement("button");
    btn.textContent = n;
    btn.onclick = () => {
      if (n % 2 === 0) {
        displayNumbers(); // 點選偶數才換下一頁
      } else {
        alert("這不是偶數，請選偶數！");
      }
    };
    container.appendChild(btn);
  });
}

displayNumbers();
