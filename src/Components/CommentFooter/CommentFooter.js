import React from "react";
import CommentVotes from "../CommentVotes/CommentVotes";
import CommentBtn from "../CommentBtn/CommentBtn";

export default function CommentFooter({
  vote,
  setVoted,
  score,
  setScore,
  updateScore,
  commentData,
  setReplying,
  setDeleting,
  setDeleteModalState,
  setEditing,
}) {
  return (
    <div className="comment--footer">
      <CommentVotes
        vote={vote}
        setVoted={setVoted}
        score={score}
        setScore={setScore}
        updateScore={updateScore}
        commentData={commentData}
      />

      <CommentBtn
        commentData={commentData}
        setReplying={setReplying}
        setDeleting={setDeleting}
        setDeleteModalState={setDeleteModalState}
        setEditing={setEditing}
      />
    </div>
  );
}
