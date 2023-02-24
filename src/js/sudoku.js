let sudoku = [
  [0, 0, 0, 2, 7, 0, 0, 0, 0],
  [0, 6, 4, 1, 0, 5, 0, 0, 9],
  [0, 7, 0, 0, 0, 0, 3, 0, 0],
  [0, 3, 1, 6, 9, 0, 0, 0, 0],
  [0, 0, 2, 0, 0, 0, 4, 0, 0],
  [0, 0, 0, 0, 2, 1, 9, 3, 0],
  [0, 0, 8, 0, 0, 0, 0, 2, 0],
  [9, 0, 0, 5, 0, 4, 7, 1, 0],
  [0, 0, 0, 0, 8, 2, 0, 0, 0],
]

let solution = []

function setup() {
  create_divs()
  redraw(sudoku)
}

function create_divs() {
  const grid = document.getElementById('grid')
  for (let y = 0; y < 9; y++) {
    let row = document.createElement('div')
    row.classList.add('row')
    if (y === 2 || y === 5) row.classList.add('border-bottom')
    row.id = `row-${y}`
    grid.appendChild(row)
    for (let x = 0; x < 9; x++) {
      let cell = document.createElement('div')
      cell.classList.add('cell')
      if (x === 2 || x === 5) cell.classList.add('border-right')
      cell.id = `cell-${x}-${y}`
      row.appendChild(cell)

      let span = document.createElement('span')
      span.id = `span-${x}-${y}`
      cell.appendChild(span)

      let input = document.createElement('input')
      input.setAttribute('type', 'number')
      input.setAttribute('min', 0)
      input.setAttribute('max', 9)
      input.setAttribute('step', 1)
      input.classList.add('hidden')
      input.oninput = (event) => {
        sudoku[y][x] = parseInt(event.target.value)
      }
      input.onblur = () => {
        input.classList.add('hidden')
        span.classList.remove('hidden')
        let val = parseInt(input.value)
        if (val !== 0) {
          span.innerHTML = `${val}`
        } else {
          span.innerHTML = ''
        }
      }
      cell.appendChild(input)

      cell.onclick = () => {
        span.classList.add('hidden')
        input.classList.remove('hidden')
      }
    }
  }
}

function redraw(s) {
  s.forEach((row, y) => {
    row.forEach((val, x) => {
      if (val !== 0) {
        document.getElementById(`span-${x}-${y}`).innerHTML = `${val}`
      } else {
        document.getElementById(`span-${x}-${y}`).innerHTML = ''
      }
    })
  })
}

function copy_sudoku(sudoku) {
  let result = []
  sudoku.forEach((row) => result.push([...row]))
  return result
}

function solve_backtracking() {
  if (number_of_clues(sudoku) < 17) {
    console.log('minimum amount of clues must be 17')
    return
  }
  solve(sudoku)
  redraw(solution)
}

function number_of_clues(s) {
  return s.flat().filter((val) => val !== 0).length
}

function solve(s) {
  let s_copy = copy_sudoku(s)
  for (let y = 0; y < 9; y++) {
    for (let x = 0; x < 9; x++) {
      if (s_copy[y][x] === 0) {
        for (let n = 1; n < 10; n++) {
          if (possible(x, y, n, s_copy)) {
            s_copy[y][x] = n
            solve(s_copy)
            s_copy[y][x] = 0
          }
        }
        return
      }
    }
  }
  solution = s_copy
}

function reset() {
  redraw(sudoku)
}

function cl() {
  sudoku = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
  ]
  redraw(sudoku)
}

function possible(x, y, n, s) {
  for (let i = 0; i < 9; i++) {
    if (s[y][i] === n) return false
  }
  for (let i = 0; i < 9; i++) {
    if (s[i][x] === n) return false
  }

  const x0 = Math.floor(x / 3) * 3
  const y0 = Math.floor(y / 3) * 3

  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (s[y0 + j][x0 + i] === n) return false
    }
  }

  return true
}
