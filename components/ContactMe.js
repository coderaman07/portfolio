import { Link, Button, chakra, Heading, Stack, Text } from '@chakra-ui/react'
import useMediaQuery from '../hook/useMediaQuery'
import { FaLinkedin, FaEnvelope, FaFileAlt } from 'react-icons/fa'
import SlideUpWhenVisible from '../hook/SlideUpWhenVisible'
import ReactGA from 'react-ga'
import data from './Data.json'

export default function ContactMe() {
  const isLargerThan800 = useMediaQuery(800)
  const handleClick = (event) => {
    ReactGA.event({
      category: 'click',
      action: event,
    })
  }
  return (
    <>
      <Stack
        spacing={10}
        h="70vh"
        w="100%"
        alignItems="center"
        justifyContent="center"
      >
        <SlideUpWhenVisible>
          <Heading fontSize={{ base: '4xl', md: '5xl' }} textAlign="center">
            Keep In Touch.
          </Heading>
        </SlideUpWhenVisible>

        <SlideUpWhenVisible>
          <Text fontSize="md" color="textSecondary" textAlign="center">
            I&apos;m currently open to work as a{' '}
            <Link
              href={`${data.blogURI}contact`}
              isExternal
              onClick={() => handleClick('contact_email')}
            >
              <chakra.span
                color="button1"
                display={{ base: 'block', md: 'inline' }}
              >
                {' '}
                {data.dreamDesignation}.
              </chakra.span>
            </Link>
            <br /> Let&apos;s get in touch and talk more about your projects.
          </Text>
        </SlideUpWhenVisible>

        <SlideUpWhenVisible>
          <Stack isInline spacing={4}>
            <Link
              href={data.socialLinks.linkedin}
              isExternal
              onClick={() => handleClick('contact_linkedin')}
            >
              <Button
                leftIcon={<FaLinkedin fill="#3CCF91" />}
                position="static"
                size={isLargerThan800 ? 'md' : 'sm'}
                color="white"
              >
                LinkedIn
              </Button>
            </Link>
            <Link
              href={data.socialLinks.gmail}
              isExternal
              onClick={() => handleClick('contact_email')}
            >
              <Button
                color="white"
                leftIcon={<FaEnvelope fill="#3CCF91" />}
                transition="0.3s"
                position="static"
                size={isLargerThan800 ? 'md' : 'sm'}
              >
                Email
              </Button>
            </Link>
            <Link
              href={data.resume}
              isExternal
              onClick={() => handleClick('contact_resume')}
            >
              <Button
                leftIcon={<FaFileAlt fill="#3CCF91" />}
                position="static"
                size={isLargerThan800 ? 'md' : 'sm'}
                color="white"
              >
                Resume
              </Button>
            </Link>
          </Stack>
        </SlideUpWhenVisible>
      </Stack>
    </>
  )
}
