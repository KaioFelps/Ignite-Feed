import { useState } from 'react'

import {Post} from "./Components/Post"
import { Header } from "./Components/Header"
import { Asidebar } from "./Components/Asidebar"

import "./global.css"
import styles from "./App.module.css"

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/kaiofelps.png",
      name: "Kaio Felps",
      role: "Web Developer"
    },
    content: [
      {type: "paragraph", content: `Fala galeraa 👋`},
      {type: "paragraph", content: `Acabei de subir mais um projeto no meu portifólio. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀`},
      {type: "link", content: `👉 jane.design/doctorcare`},
    ],
    publishedAt: new Date("2022-09-16 20:00:00")
    // Evitar ao máximo que o backend retorne html, pois assim fica muito mais fácil de deixarmos nosso site aberto para vulnerabilidades, pois se conseguirem jogar uma tag script dentro do conteúdo do post, você estará executando um script no seu site que outro usuário jogou dentro do post.
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://github.com/maykbrito.png",
      name: "Mayk Brito",
      role: "FullStack Developer"
    },
    content: [
      {type: "paragraph", content: `Fala galeraa 👋`},
      {type: "paragraph", content: `Acabei de subir mais um projeto no meu portifólio. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀`},
      {type: "link", content: `👉 jane.design/doctorcare`},
    ],
    publishedAt: new Date("2022-09-16 21:00:00")
    // Evitar ao máximo que o backend retorne html, pois assim fica muito mais fácil de deixarmos nosso site aberto para vulnerabilidades, pois se conseguirem jogar uma tag script dentro do conteúdo do post, você estará executando um script no seu site que outro usuário jogou dentro do post.
  },
]

export function App() {
  
  return (
    <>
    <Header/>
    
    <div className={styles.wrapper}>
      <Asidebar author="Kaio Felipe" role="Web Developer"/>

      <main>
        {posts.map(post => {
          return (
            <Post
              key={post.id}
              author={post.author}
              publishedAt={post.publishedAt}
              content={post.content}
            />
          )
        })}
      </main>
    </div>
    </>
  )
}