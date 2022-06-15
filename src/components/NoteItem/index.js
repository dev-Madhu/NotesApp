// Write your code here
import {NoteBox, NoteTitle, NoteText} from './styledComponents'

const Notes = props => {
  const {commentDetails} = props
  const {title, description} = commentDetails

  return (
    <NoteBox>
      <NoteTitle>{title}</NoteTitle>
      <NoteText>{description}</NoteText>
    </NoteBox>
  )
}
export default Notes
