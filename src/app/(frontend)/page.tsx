'use client'
import { headers as getHeaders } from 'next/headers.js'
import Image from 'next/image'
import { getPayload } from 'payload'
import React from 'react'
import { fileURLToPath } from 'url'
import { useEffect, useState } from 'react'
import { CollectionConfig } from 'payload'

interface Post {
  title: string
  content: string
}

import config from '@/payload.config'
import './styles.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default async function HomePage() {
  const headers = await getHeaders()
  const payloadConfig = await config
  const payload = await getPayload({ config: payloadConfig })
  const { user } = await payload.auth({ headers })

  const fileURL = `vscode://file/${fileURLToPath(import.meta.url)}`
  const HomePage = () => {
    const [post, setPost] = useState(null)

    useEffect(() => {
      const fetchPost = async () => {
        try {
          const res = await fetch('/api/posts/1?depth=1&draft=false&locale=undefined')
          const data = await res.json()
          setPost(data)
        } catch (error) {
          console.error('Error fetching post:', error)
        }
      }

      fetchPost()
    }, [])

    return (
      <div className="home">
        <Navbar />

        <div className="home__content">
          <h1 className="home__title">Welcome to the Payload Starter</h1>

          {post ? (
            <div className="post">
              <h2>{post.title || 'No title available'}</h2>
              <p>{post.content || 'No content available'}</p>
            </div>
          ) : (
            <p>Loading post...</p>
          )}
        </div>

        <Footer />
      </div>
    )
  }
}
