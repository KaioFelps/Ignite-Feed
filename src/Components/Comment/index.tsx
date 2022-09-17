import { ThumbsUp, Trash } from "phosphor-react"
import { useState } from "react"
import { Avatar } from "../Avatar"
import styles from "./comment.module.css"

type CommentProps= {
    content: string;
    onDeleteComment: (params: number) => void;
    id: number;
}

export function Comment(props:CommentProps) {

    const [likeCount, setLikeCount] = useState(0)

// ------------------------------------------------------

    function actionLikeComment() {        
        setLikeCount(oldLikesAmount => oldLikesAmount + 1);
    }

    function actionDeleteThisComment() {
        const { onDeleteComment, id } = props
        onDeleteComment(id)
    }

// ------------------------------------------------------

    return (

        <div className={styles.comment}>

            <Avatar hasBorder={false} src="https://github.com/kaiofelps.png"/>

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong></strong>
                            <time title="15 de setembro, às 21:47" dateTime="2022-09-15 21:47:31">Cerca de 2h atrás</time>
                        </div>

                        <button onClick={actionDeleteThisComment} title="Deletar comentário">
                            <Trash size={24} />
                        </button>
                    </header>

                    <p>{props.content}</p>
                </div>

                <footer>
                    <button onClick={actionLikeComment}>
                        <ThumbsUp />
                        Aplaudir <span>{likeCount}</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}