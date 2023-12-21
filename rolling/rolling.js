window.addEventListener('keydown', onkeydown);

const rolling_group = document.getElementById("rolling_group");

const rolling_left = document.getElementById("rolling_left");
const rolling_middle = document.getElementById("rolling_middle");
const rolling_right = document.getElementById("rolling_right");

let move_x = 0;
let move_y = 0;
function onkeydown(e) {
  console.log(e);
  switch (e.key) {
    case 'ArrowLeft':
      move_x -= 10;
      rect.style.transform = `translateX(${move_x}px) translateY(${move_y}px)`;
      break;
    case 'ArrowRight':
      move_x += 10;
      rect.style.transform = `translateX(${move_x}px) translateY(${move_y}px)`;
      break;
    case 'ArrowUp':
      move_y -= 10;
      rect.style.transform = `translateX(${move_x}px) translateY(${move_y}px)`;
      break;
    case 'ArrowDown':
      move_y += 10;
      rect.style.transform = `translateX(${move_x}px) translateY(${move_y}px)`;
      break;
  }
}

for (let i = 0; i < 6; ++i) {
  const item = document.createElement('li');
  item.classList.add('rolling_item');
  item.innerText = String(i);
  rolling_left.appendChild(item);
}

for (let i = 0; i < 6; ++i) {
  const item = document.createElement('li');
  item.classList.add('rolling_item');
  rolling_middle.appendChild(item);
}

for (let i = 0; i < 6; ++i) {
  const item = document.createElement('li');
  item.classList.add('rolling_item');
  rolling_right.appendChild(item);
}

// move_y += (item_height * Math.sqrt(2));

// 첫번째를 마지막에 넣기
// let fisrtToLast = rolling_left.removeChild(rolling_left.firstElementChild);
// rolling_left.appendChild(fisrtToLast);

// 마지막을 첫번째에 넣기
// let lastToFirst = rolling_left.removeChild(rolling_left.lastElementChild);
// rolling_left.insertBefore(lastToFirst, rolling_left.firstElementChild);

setInterval(() => {
  move_y -= 3;

  // 리스트의 첫번째 요소
  let firstRect = rolling_left.firstElementChild.getBoundingClientRect();
 
  // 첫번째 요소의 바닥과 롤링 그룹 검사
  if (firstRect.y + firstRect.height < rolling_group.getBoundingClientRect().y) {

    // 현재 롤링 리스트에서 바로 제거하고 맨 뒤로 넣어준다.
    let fisrtToLast = rolling_left.removeChild(rolling_left.firstElementChild);
    rolling_left.appendChild(fisrtToLast);

    // 롤링 리스트에서 맨 앞에 요소가 빠졌기 때문에
    // 빠진 요소 길이만큼 롤링 리스트의 위치를 되돌려줌
    const item_height = rolling_left.firstElementChild.getBoundingClientRect().height;
    move_y += item_height * Math.sqrt(2);
    
    rolling_left.style.transform = `translateY(${move_y}px)`;
  }
  else{
    rolling_left.style.transform = `translateY(${move_y}px)`;
  }
}, 60);