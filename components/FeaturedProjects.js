import {
  Link,
  Stack,
  Heading,
  Text,
  SimpleGrid,
  Flex,
  Box,
} from '@chakra-ui/layout'
import NextLink from 'next/link'
import Cards from './Card'
import SlideUpWhenVisible from '../hook/SlideUpWhenVisible'
import ReactGA from 'react-ga'
import ProjectData from './ProjektData.json'

export default function FeaturedProjects() {
  const handleClick = (event) => {
    ReactGA.event({
      category: 'click',
      action: event,
    })
  }

  return (
    <>
      <Stack spacing={8} w="full">
        <SimpleGrid columns={{ sm: 1, md: 2 }} spacing={16}>
          <SlideUpWhenVisible threshold={0.1} key={0}>
            <Stack spacing={1}>
              <Stack
                isInline
                alignItems="center"
                justifyContent="space-between"
              >
                <Heading
                  fontSize={{ base: 'xl', md: '2xl' }}
                  color="displayColor"
                  fontFamily="Ubuntu"
                >
                  All Creative Works.
                </Heading>
                <NextLink href="/projects" passHref>
                  <Link
                    onClick={() => handleClick('featuredprojects_explore more')}
                  >
                    <Text
                      display={{ base: 'block', md: 'none' }}
                      fontSize={{ base: 'sm', md: 'xl' }}
                      color="button1"
                      _hover={{ color: 'button2' }}
                    >
                      {' '}
                      Explore more &rarr;
                    </Text>
                  </Link>
                </NextLink>
              </Stack>
              <Text fontSize={{ base: 'md', md: 'xl' }} color="textSecondary">
                Here's some of my projects that I have worked on.
              </Text>
              <NextLink href="/projects">
                <Link
                  onClick={() => handleClick('featuredprojects_explore more')}
                >
                  <Text
                    display={{ base: 'none', md: 'block' }}
                    fontSize={{ base: 'md', md: 'xl' }}
                  >
                    Explore more &rarr;
                  </Text>
                </Link>
              </NextLink>
            </Stack>
          </SlideUpWhenVisible>
          {ProjectData.map((project) => {
            if (project.id > 4) return;
            if (project.id % 2 == 0) {
              return (
                <SlideUpWhenVisible>
                  <Box mt={{ md: '-50%' }}>
                    <Cards
                      key={project.id}
                      {...console.log(project.id)}
                      imageURL={project.imageURI}
                      title={project.projectName}
                      desc={project.projectDesc}
                      githubLink={project.ProjectRepoLink}
                      deployLink={project.liveLink}
                      tag={project.tags}
                    />
                  </Box>
                </SlideUpWhenVisible>
              )
            } else {
              return (
                <SlideUpWhenVisible>
                  <Cards
                    key={project.id}
                    {...console.log(project.id)}
                    imageURL={project.imageURI}
                    title={project.projectName}
                    desc={project.projectDesc}
                    githubLink={project.ProjectRepoLink}
                    deployLink={project.liveLink}
                    tag={project.tags}
                  />
                </SlideUpWhenVisible>
              )
            }
          })}
          {/* <SlideUpWhenVisible threshold={0.8}>
            <Cards
              imageURL={projects[2].fields.imageUrl}
              title={projects[2].fields.title}
              desc={projects[2].fields.description}
              githubLink={projects[2].fields.githubLink}
              deployLink={projects[2].fields.deployLink}
              tag={projects[2].fields.tags}
            />
          </SlideUpWhenVisible> */}
        </SimpleGrid>
      </Stack>
    </>
  )
}
