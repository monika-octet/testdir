import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Link href="/about"><a>About</a></Link>
      <br></br>
      Home page
    </>
  )
}
