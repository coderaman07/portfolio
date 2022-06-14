import { useState } from 'react'
import { Stack, Heading, Text, SimpleGrid, Divider } from '@chakra-ui/react'
import data from '../../components/Data.json'
import projektData from '../../components/ProjektData.json'
import Cards from '../../components/Card'
import Container from '../../components/Container'
import Head from 'next/head'
import { Input, InputGroup, InputRightElement } from '@chakra-ui/input'
import { FaSearch } from 'react-icons/fa'

export default function Projects() {
  const [query, setQuery] = useState('')
  const handleChange = (e) => {
    setQuery(e.target.value)
  }

  return (
    <>
      <Container>
        <Head>
          <title>{data.name} - {data.designation}</title>
          <meta name="title" content={`${data.name} - ${data.designation}`} />
          <meta
            name="description"
            content={data.description}
          />

          <meta property="og:type" content="website" />
          <meta property="og:url" content={`${data.domainName}/projects`} />
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
          <meta
            property="twitter:url"
            content={`${data.domainName}/projects`}
          />
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
          spacing={10}
          justifyContent="center"
          px={['5vw', '10vw']}
          my={['15vh', '15vh', '22.5vh', '22.5vh']}
        >
          <Stack spacing={5}>
            {' '}
            <Heading color="displayColor" fontSize={{ base: '4xl', md: '6xl' }}>
              Projects
            </Heading>
            <Text fontSize={{ base: '14px', md: '16px' }}>
              I love building projects and practice my Programming skills,
              here&apos;s an archive of things that I&apos;ve worked on.
            </Text>
            <InputGroup maxW="400px">
              <InputRightElement pointerEvents="none" children={FaSearch} />
              <Input
                type="text"
                placeholder="Search projects"
                value={query}
                onChange={handleChange}
              />
            </InputGroup>
            <Divider />
          </Stack>
          <SimpleGrid columns={{ sm: 1, md: 2 }} spacing={8}>
            {projektData
              .filter((e) =>
                e.projectName.toLowerCase().includes(query.toLowerCase()),
              )
              .map((project) => (
                <Cards
                  key={project.id}
                  imageURL={project.imageURI}
                  title={project.projectName}
                  desc={project.projectDesc}
                  githubLink={project.ProjectRepoLink}
                  deployLink={project.liveLink}
                  tag={project.tags}
                />
              ))}
          </SimpleGrid>
        </Stack>
      </Container>
    </>
  )
}