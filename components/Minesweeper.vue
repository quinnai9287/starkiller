<template>
  <div>
    <div class="header">
      <div class="header-item">Minesweeper</div>
      <div class="header-item">Mines: {{ mines }}</div>
      <div class="header-item">Timer: {{ timerDisplay }}</div>
      <button v-if="isGameOver" class="header-item" @click="initializeGrid">Restart</button>
    </div>
    <div class="grid">
      <div v-for="(row, rowIndex) in grid" :key="rowIndex">
        <div
          v-for="(cell, colIndex) in row"
          :key="colIndex"
          class="cell"
          :class="{ 'is-reveal': cell.isRevealed }"
          @click="handleClick(rowIndex, colIndex)"
        >
          {{ cell.isRevealed ? (cell.isMine ? '💣' : cell.count || ' ') : ' ' }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const isTimerStarted = ref(false);
const isGameOver = ref(false);
const totalSeconds = ref(0);
const rows = ref(10);
const cols = ref(10);
const mines = ref(20);
const grid = reactive([]);

let timer = null;

const timerDisplay = computed(() => {
  const minutes = Math.floor(totalSeconds.value / 60);
  const seconds = totalSeconds.value % 60;
  return `${formatTime(minutes)}:${formatTime(seconds)}`;
});

const startTimer = () => {
  timer = setInterval(() => {
    totalSeconds.value++;
  }, 1000);
};

const stopTimer = () => {
  clearInterval(timer);
  isGameOver.value = true;
};

const formatTime = (value) => {
  return value < 10 ? `0${value}` : value;
};

const initializeGrid = () => {
  for (let i = 0; i < rows.value; i++) {
    grid[i] = [];
    for (let j = 0; j < cols.value; j++) {
      grid[i][j] = {
        isMine: false,
        count: 0,
        isRevealed: false,
      };
    }
  }

  placingMines();
  calculateMines();
  isGameOver.value = false;
  isTimerStarted.value = false;
  totalSeconds.value = 0;
};

const placingMines = () => {
  let minesPlaced = 0;
  while (minesPlaced < mines.value) {
    const randomRow = Math.floor(Math.random() * rows.value);
    const randomCol = Math.floor(Math.random() * cols.value);

    if (!grid[randomRow][randomCol].isMine) {
      grid[randomRow][randomCol].isMine = true;
      minesPlaced++;
    }
  }
};

const countMinesAround = (row, col) => {
  let count = 0;
  for (let i = -1; i <= 1; i++) {
    for (let j = -1; j <= 1; j++) {
      const newRow = row + i;
      const newCol = col + j;

      if (newRow >= 0 && newRow < rows.value && newCol >= 0 && newCol < cols.value && grid[newRow][newCol].isMine) {
        count++;
      }
    }
  }
  return count;
};

const calculateMines = () => {
  for (let i = 0; i < rows.value; i++) {
    for (let j = 0; j < cols.value; j++) {
      if (!grid[i][j].isMine) {
        grid[i][j].count = countMinesAround(i, j);
      }
    }
  }
};

// const revealCell = (row, col) => {
//   // 递归展开周围非地雷的格子
//   if (row >= 0 && row < rows.value && col >= 0 && col < cols.value) {
//     grid[row][col].isRevealed = true;

//     if (grid[row][col].count === 0) {
//       for (let i = -1; i <= 1; i++) {
//         for (let j = -1; j <= 1; j++) {
//           revealCell(row + i, col + j);
//         }
//       }
//     }
//   }
// };

const revealCell = (startRow, startCol) => {
  const queue = [{ row: startRow, col: startCol }];

  while (queue.length > 0) {
    const { row, col } = queue.shift();

    if (row >= 0 && row < rows.value && col >= 0 && col < cols.value && !grid[row][col].isRevealed) {
      grid[row][col].isRevealed = true;

      if (grid[row][col].count === 0) {
        for (let i = -1; i <= 1; i++) {
          for (let j = -1; j <= 1; j++) {
            queue.push({ row: row + i, col: col + j });
          }
        }
      }
    }
  }
};

const revealAllMines = () => {
  for (let i = 0; i < rows.value; i++) {
    for (let j = 0; j < cols.value; j++) {
      if (!grid[i][j].isRevealed) {
        grid[i][j].isRevealed = grid[i][j].isMine;
      }
    }
  }
};

const handleClick = (row, col) => {
  if (!isTimerStarted.value) {
    isTimerStarted.value = true;
    startTimer();
  }
  if (grid[row][col].isMine) {
    // 处理踩到地雷的情况
    alert('Game Over! You stepped on a mine.');
    stopTimer();
    revealAllMines();
    // 可以在此重置游戏
  } else {
    // 展开周围格子
    revealCell(row, col);
  }
};

onMounted(() => {
  initializeGrid();
});
</script>

<style lang="scss" scoped>
/* 添加一些基本的样式，可以根据需要进行调整 */
.grid {
  display: grid;
  grid-template-columns: repeat(10, 30px);
  gap: 1px;
}
.cell {
  width: 30px;
  height: 30px;
  border: 1px solid #ccc;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  background-color: #aaa;

  &.is-reveal {
    background-color: #fff;
  }
}
</style>
