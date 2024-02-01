// Write your code here.
const NavBar = props => {
  const {currentScore, topScore, isGameInProgress} = props

  return (
    <nav>
      <div>
        <div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
            alt="emoji logo"
          />
          <h1>Emoji Game</h1>
        </div>
        <div>
          {isGameInProgress && (
            <div>
              <p>Score: {currentScore}</p>
              <p>Top Score: {topScore}</p>
            </div>
          )}
        </div>
      </div>
    </nav>
  )
}
export default NavBar
