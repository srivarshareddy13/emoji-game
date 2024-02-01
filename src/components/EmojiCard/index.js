// Write your code here.
const EmojiCard = props => {
  const {details, clickEmoji} = props
  const {id, emojiUrl, emojiName} = details

  const onClickEmoji = () => {
    clickEmoji(id)
  }

  return (
    <li>
      <button type="button" onClick={onClickEmoji}>
        <img src={emojiUrl} alt={emojiName} />
      </button>
    </li>
  )
}
export default EmojiCard
