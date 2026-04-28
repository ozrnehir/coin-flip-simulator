let coinSound = new Audio('./sound/coinsound.mp3')

let tura = 0
let yazi = 0

let coin = document.querySelector('.coin')
let flipBtn = document.querySelector('#flip-button')
let resetBtn = document.querySelector('#reset-button')

flipBtn.addEventListener('click', () => {
  let i = Math.floor(Math.random() * 2)

  coinSound.currentTime = 0
  coinSound.play()

  // Animasyonu sıfırla
  coin.style.animation = 'none'
  coin.offsetHeight // reflow tetikler

  setTimeout(() => {
    if (i === 0) {
      coin.style.animation = 'spin-tura 3s forwards'
      tura++
    } else {
      coin.style.animation = 'spin-yazi 3s forwards'
      yazi++
    }
  }, 100)

  setTimeout(updateStats, 3000)
  disableButton()
})

function updateStats () {
  document.querySelector('#tura-count').textContent = `Tura: ${tura}`
  document.querySelector('#yazi-count').textContent = `Yazi: ${yazi}`
}

function disableButton () {
  flipBtn.disabled = true
  setTimeout(() => {
    flipBtn.disabled = false
  }, 3000)
}

resetBtn.addEventListener('click', () => {
  coin.style.animation = 'none'
  tura = 0
  yazi = 0
  updateStats()
})
