// Write your code here
import {useState} from 'react'
import {v4} from 'uuid'

import NoteItem from '../NoteItem'

import {
  MainContainer,
  NotesContainer,
  Heading,
  Form,
  TitleInput,
  NoteTextArea,
  AddButton,
  EmptyNotesViewContainer,
  Image,
  EmptyNotesHeading,
  Description,
  NotesList,
} from './styledComponents'

const Notes = () => {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [comments, setComments] = useState([])

  const onChangeTitle = event => {
    setTitle(event.target.value)
  }

  const onChangeTextArea = event => {
    setDescription(event.target.value)
  }

  const onSubmitAddBtn = event => {
    event.preventDefault()
    const newComment = {
      id: v4(),
      title,
      description,
    }
    setComments(prevCommentsList => [...prevCommentsList, newComment])
    setTitle('')
    setDescription('')
  }

  const renderNotes = () => (
    <NotesList>
      {comments.map(eachNote => (
        <NoteItem key={eachNote.id} commentDetails={eachNote} />
      ))}
    </NotesList>
  )

  const renderEmptyNotesView = () => (
    <EmptyNotesViewContainer>
      <Image
        src="https://assets.ccbp.in/frontend/hooks/empty-notes-img.png"
        alt="notes empty"
      />
      <EmptyNotesHeading>No Notes Yet</EmptyNotesHeading>
      <Description>Notes you add will appear here</Description>
    </EmptyNotesViewContainer>
  )

  return (
    <MainContainer>
      <NotesContainer>
        <Heading>Notes</Heading>
        <Form onSubmit={onSubmitAddBtn}>
          <TitleInput
            type="text"
            placeholder="Title"
            value={title}
            onChange={onChangeTitle}
          />
          <NoteTextArea
            placeholder="Take a Note..."
            value={description}
            onChange={onChangeTextArea}
            rows="3"
          />
          <AddButton type="submit">Add</AddButton>
        </Form>
        {comments.length === 0 ? renderEmptyNotesView() : renderNotes()}
      </NotesContainer>
    </MainContainer>
  )
}
export default Notes
