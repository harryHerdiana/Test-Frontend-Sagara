import Head from 'next/head'
import NewsList from '../components/news/news-list'
import { getAllNews } from '../helpers/api-utils'

export default function Home(props) {
  const news = props.allNews
  console.log(news)
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>Sagaratech Test</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NewsList items={news}/>
    </div>
  )
}

export async function getStaticProps(){
  const news = await getAllNews()
  return{
    props:{
      allNews:news,
    },
    revalidate:60,
  }
}