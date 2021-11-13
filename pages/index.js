import Head from 'next/head'
import { Stack } from '@chakra-ui/react'
import Container from '../components/Container'
import Introduction from '../components/Introduction'
import FeaturedProjects from '../components/FeaturedProjects'
import LatestArticle from '../components/LatestArticle'
import AboutMe from '../components/AboutMe'
import ContactMe from '../components/ContactMe'
import data from '../components/Data.json'

export default function Index({ projects, articles }) {
  return (
    <>
      <Container enableTransition={true}>
        <Head>
          <title>{data.name} - {data.designation}</title>
          <meta name="title" content={`${data.name} - ${data.designation}`}/>
          <meta name="keywords" content={data.keywords} />
          <meta
            name="description"
            content={data.description}
          />

          <meta property="og:type" content="website" />
          <meta property="og:url" content={data.domainName} />
          <meta
            property="og:title"
            content={`${data.name} - ${data.designation}`}
          />
          <meta
            property="og:description"
            content={data.description}
          />
          <meta property="og:image" content={data.imageURI} />

          <meta property="twitter:card" content="summary_large_image" />
          <meta property="twitter:url" content={data.domainName} />
          <meta
            property="twitter:title"
            content={`${data.name} - ${data.designation}`}
          />
          <meta
            property="twitter:description"
            content={data.description}
          />
          <meta
            property="twitter:image"
            content={data.imageURI}
          />
        </Head>

        <Stack
          as="main"
          spacing="144px"
          justifyContent="center"
          alignItems="flex-start"
          px={{ base: '5vw', md: '10vw' }}
          mt={{ base: '15vh', md: '22.5vh' }}
        >
          <Introduction />
          <AboutMe />
          <FeaturedProjects />
          <LatestArticle articles={articles} />
          <ContactMe />
        </Stack>
      </Container>
    </>
  )
}

export async function getStaticProps() {
  let articlesRes = await fetch('https://blogx.pythonanywhere.com/all/')
  let projectsRes = await fetch('https://api.github.com/users/coderaman07/repos?sort=updated')
  let articles = await articlesRes.json()
  let projects = await projectsRes.json()
  return{
    props:{
      articles,
      projects
    },
    revalidate: 60
  }
}
