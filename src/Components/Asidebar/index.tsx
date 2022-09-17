import styles from "./Asidebar.module.css"
import { PencilLine } from "phosphor-react"
import { Avatar } from "../Avatar"

type AsideBar= {
    author: string;
    role: string;
}

export function Asidebar(props: AsideBar) {
    return (
        <aside className={styles.asidebar}>
            <img
            className={styles.cover}
            src="https://images.unsplash.com/photo-1661956600684-97d3a4320e45?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=50" alt="User's avatar picture"/>
        
            <div className={styles.profile}>
                <Avatar src="https://github.com/KaioFelps.png"/>

                <strong>{props.author}</strong>
                <span>{props.role}</span>
            </div>

            <footer>
                <a href="#">
                    <PencilLine size="20"/>
                    Editar seu perfil
                </a>
            </footer>
        </aside>
    )
}