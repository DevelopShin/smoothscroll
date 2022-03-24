import SignleComment from "./Comment";
import { TextArea, Button, WriteContainer } from "./CommentElements";
import { Wrapper, CommentBoard } from "./UseExElements";
import React, { useState } from 'react'
import ReplyBoard from "./ReplyBoard";
import { Replaycontainer } from "./CommentElements";
function MainComment() {

  const [OnReply, setOnReply] = useState(false)
  const OnReplyHandler = () => {
    setOnReply(!OnReply)
  }
  const [commentList, setcommentList] = useState({})

  const [comment, setcomment] = useState('')
  return (

    <Wrapper id='contaniner'>
      <CommentBoard id='board'>

        <WriteContainer>
          <TextArea rows={6} name="textarea" value={''} />
          <Button >Submit</Button>
        </WriteContainer>
<br/>
<hr />
        <SignleComment data OnReplyHandler={OnReplyHandler} />

        
        {/* Reply comments */}
        {OnReply &&
          <Replaycontainer >
            <ReplyBoard />

            <WriteContainer >
              <TextArea rows={3} />
              <Button >Submit</Button>
            </WriteContainer >
          </Replaycontainer>
        }

      </CommentBoard>
    </Wrapper>
  )
}

export default MainComment
