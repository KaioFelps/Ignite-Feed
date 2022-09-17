import styles from "./post.module.css"
import { Comment } from "../Comment"
import { Avatar } from "../Avatar"
import { format, formatDistanceToNow } from "date-fns"
import ptBr from"date-fns/locale/pt-BR"
import { ChangeEvent, FormEvent, InvalidEvent, useState } from "react"

type Author = {
    name: string;
    role: string;
    avatarUrl: string;
}

type Content = {
    type: string; // paragraph" | "link
    content: string;
}

type PostProps = {
    author: Author;
    publishedAt: Date;
    content: Content[];
}

export type CommentsType = {
    text: string;
    id: number;
    onDeleteComment: (id:number) => void;
}

type CommentState = {
    text: string;
    id: number;
}

export function Post({ author, publishedAt, content }: PostProps) {
    const [comments, setComments] = useState<CommentState[]>([])

    const [newCommentText, setNewCommentText] = useState("") // sempre importante iniciar o estado com uma informação que tem o mesmo tipo da informação que armazenaremos posteriormente

    const publishedDateFormatted = format(publishedAt, "d 'de' LLLL 'às' HH'h'mm", {locale: ptBr})
    const publishedRelativeToNow = formatDistanceToNow(publishedAt, {
        locale: ptBr,
    })

// ------------------------------------------------------

    function validateFirstChar() {
        if(newCommentText[0] == " ") {
            setNewCommentText("")
        }
    }

    function actionAddNewComment(event: FormEvent) /* esse FormEvent vem do próprio reactJS e sua biblioteca */ {
        event.preventDefault() // faz com que não recarrege a pagina ao realizar o submit

        if(newCommentText !== " ") {
            const newCommentObject = {
                text: newCommentText,
                id: comments.length + 1
            }

            setComments([...comments, newCommentObject ])
        }
        // spread operator (...) lê os valores do estato e copia eles
        setNewCommentText("");
    }
    
    function actionNewCommentChange(event: ChangeEvent<HTMLTextAreaElement>) /* como "passar um parâmetro" pro tipo FormEvent informando qual o tipo de form event */ {
        event.target.setCustomValidity("")

        setNewCommentText(event.target.value)
        // setNewCommentText(event.target.value, comments.length + 1)
    }

    function actionNewCommentInvalid(event: InvalidEvent<HTMLTextAreaElement>) {
        event.target.setCustomValidity("Digite algo antes de comentar!")
    }

    function deleteComment(beingDeletedComment: number) {
        setComments(oldComments => oldComments.filter(thisComment => thisComment.id !== beingDeletedComment))
    }

// ------------------------------------------------------

    const isNewCommentEmpty = newCommentText.length === 0

    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar src={author.avatarUrl}/>
                    <div className={styles.authorInfo}>
                        <strong>{author.name}</strong>
                        <span>{author.role}</span>
                    </div>
                </div>

                <time title={publishedDateFormatted} dateTime={publishedAt.toISOString()}>{`Publicado há ${publishedRelativeToNow}`}</time>
            </header>

            <div className={styles.content}>
                {content.map(line => {
                    switch (line.type) {
                        case "paragraph":
                            return <p key={line.content}>{line.content}</p>
                            break;
                        case "link":
                            return <p key={line.content}><a href="">{line.content}</a></p>
                            break;
                    }
                })}
            </div>

            <form onSubmit={actionAddNewComment} className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>

                <textarea
                    name="comment"
                    placeholder="Deixe um comentário"
                    onChange={actionNewCommentChange}
                    onInvalid={actionNewCommentInvalid}
                    onKeyUp={validateFirstChar}
                    value={newCommentText}
                    required
                />

                <footer> {/* para efeito de aparecer no docus do textarea */}
                    <button disabled={isNewCommentEmpty} type="submit">Comentar</button>
                </footer>
            </form>

            <div className={styles.commentList}>
                {comments.map((comment) => {
                    return (
                    <Comment
                        key={comment.id}
                        id={comment.id}
                        content={comment.text}
                        onDeleteComment={deleteComment}
                    />
                    )
                })}
            </div>
        </article>
    )
}