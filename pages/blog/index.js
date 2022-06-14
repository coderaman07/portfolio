import { useState } from 'react'
import { Stack, Heading, Text, Divider, Flex, Box } from '@chakra-ui/react'
import Head from 'next/head'
import Link from 'next/link'
import Container from '../../components/Container'
import { FaSearch } from 'react-icons/fa'
import { Input, InputGroup, InputRightElement } from '@chakra-ui/input'
import useMediaQuery from '../../hook/useMediaQuery'
import readingTime from 'reading-time'
import dateFormat from 'dateformat'
import data from '../../components/Data.json'

export default function Index({ articles }) {
  const [query, setQuery] = useState('')
  const handleChange = (e) => setQuery(e.target.value)
  const isLargerThan1024 = useMediaQuery(1024)

  return (
    <Container>
      <Head>
        <title>Blog - {data.name}</title>
        <meta name="title" content={`Blog - ${data.name}`} />
        <meta
          name="description"
          content={data.description}
        />

        <meta property="og:type" content="website" />
        <meta property="og:url" content={`${data.domainName}/blog`} />
        <meta property="og:title" content={`Blog - ${data.name}`} />
        <meta
          property="og:description"
          content={data.description}
        />
        <meta property="og:image" content={data.imageURI} />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={data.domainName} />
        <meta property="twitter:title" content={`Blog - ${data.name}`} />
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
        spacing={5}
        justifyContent="center"
        alignItems="flex-start"
        px={['5vw', '10vw']}
        my={['15vh', '15vh', '22.5vh', '22.5vh']}
      >
        <Heading color="displayColor" fontSize={{ base: '4xl', md: '6xl' }}>
          Blog
        </Heading>
        <Text fontSize={{ base: '14px', md: '16px' }}>
          This is where I share my writings on programming, tutorials, and my
          experiences.
        </Text>
        <InputGroup maxW="400px">
          <InputRightElement pointerEvents="none">
            <FaSearch />
          </InputRightElement>
          <Input
            type="text"
            placeholder="Search articles"
            value={query}
            onChange={handleChange}
          />
        </InputGroup>
        <Divider />
        <Stack spacing={5}>
          {articles
            .filter((e) =>
              e.Headline.toLowerCase().includes(query.toLowerCase()),
            )
            .map((article) => (
              <Stack
                key={article.id}
                direction={isLargerThan1024 ? 'row' : 'column'}
                alignItems="flex-start"
                justifyContent="flex-start"
              >
                <Text
                  color="textSecondary"
                  display={isLargerThan1024 ? 'block' : 'none'}
                >
                  {dateFormat(Date.parse(article.date), 'mmm d yyyy')}
                  <br />{' '}
                  <Text fontSize="sm" textAlign="right">
                    {readingTime(article.Content).text}
                  </Text>
                </Text>
                <Text
                  color="textSecondary"
                  fontSize="sm"
                  display={isLargerThan1024 ? 'none' : 'block'}
                >
                  {dateFormat(Date.parse(article.date), 'mmm d yyyy')}{' '}
                  <Box as="span" fontSize="xs">
                    &bull;
                  </Box>{' '}
                  {readingTime(article.Headline).text}
                </Text>
                <Flex flexDirection="column" px={isLargerThan1024 ? 10 : 0}>
                  <Link href={data.blogURI + 'posts/' + article.slug}>
                    <a target="_blank">
                      <Text
                        color="displayColor"
                        fontSize="xl"
                        fontWeight="bold"
                        cursor="pointer"
                      >
                        {article.Headline}
                      </Text>

                      <Text color="button1" cursor="pointer">
                        Learn more &rarr;
                      </Text>
                    </a>
                  </Link>
                </Flex>
              </Stack>
            ))}
        </Stack>
      </Stack>
    </Container>
  )
}

export async function getStaticProps(){
  let articlesRes = await fetch('https://blogx.pythonanywhere.com/all/')
  let articles = await articlesRes.json()

  return{
    props:{
      articles
    },
    revalidate: 60
  }
}
