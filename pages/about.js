import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <>
    <Link href="/home"><a>Home</a></Link>
    <br></br>
      About page
    </>
  )
}
