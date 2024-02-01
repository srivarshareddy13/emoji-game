// Write your code here.
const WinOrLossCard = props => {
  const {isWon, onClickAgain, score} = props

  const WON_IMG = 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'
  const LOSE_IMG = 'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'

  const imgUrl = isWon ? WON_IMG : LOSE_IMG
  const gameStatus = isWon ? 'You Won' : 'You Lose'
  const scoreLabel = isWon ? 'Best Score' : 'Score'

  return (
    <div>
      <div>
        <h1>{gameStatus}</h1>
        <p>{scoreLabel}</p>
        <p>{score}/12</p>
        <button type="button" onClick={onClickAgain}>
          Play Again
        </button>
      </div>
      <div>
        <img src={imgUrl} alt="win or loss" />
      </div>
    </div>
  )
}
export default WinOrLossCard
