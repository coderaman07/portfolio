import {
  Link,
  Text,
  Stack,
  Heading,
  Box,
  Button,
  SlideFade,
  Image,
} from '@chakra-ui/react'
import { FaEnvelope, FaGithub, FaLinkedin, FaInstagramSquare, FaBlog, FaReddit, FaTwitter, FaFacebook, FaYoutube, FaDev, FaTelegram, FaSpotify } from 'react-icons/fa'
import useMediaQuery from '../hook/useMediaQuery'
import data from './Data.json'
import IntroductionButton from './DecoratedIntroductionButton'

export default function Introduction() {
  const isLargerThan800 = useMediaQuery(800)
  return (
    <>
      <Stack spacing={10} justifyContent="flex-start" alignItems="flex-start">
        <SlideFade
          direction="top"
          in={true}
          transition={{ enter: { duration: 0.4, delay: 0.7 } }}
        >
          <Box position="relative">
            <Image
              src="https://svgsilh.com/svg/26432.svg"
              filter="invert(0.1)"
              w={{ base: '70px', md: '150px' }}
              position="absolute"
              top={{ base: '0', md: '-15' }}
              left={{ base: '-5', md: '-10' }}
              zIndex={0}
              alt=""
            ></Image>
            <Text
              color="button1"
              fontSize="display2"
              fontWeight="medium"
              position="relative"
              zIndex={1}
            >
              Hey there!, I&apos;m-
            </Text>
          </Box>
          <Heading
            lineHeight={'95%'}
            fontSize="display"
            color="displayColor"
            letterSpacing={{ sm: '-1.2px', md: '-1.8px' }}
            position="relative"
            zIndex={1}
          >
            {data.name}.
          </Heading>
        </SlideFade>

        <SlideFade
          direction="top"
          in={true}
          transition={{ enter: { duration: 0.4, delay: 0.8 } }}
        >
          <Heading
            color="textSecondary"
            fontSize="display2"
            fontWeight="medium"
            whiteSpace="pre-wrap"
            letterSpacing="-1.6px"
          >
            <Box color="displayColor" as="span">
              {data.designation}.
            </Box>{' '}
            A self-taught developer{' '}
            {isLargerThan800
              ? 'with an\ninterest in Computer Science.'
              : 'with an interest in Computer Science.'}
          </Heading>
        </SlideFade>

        <SlideFade
          direction="top"
          in={true}
          transition={{ enter: { duration: 0.4, delay: 0.9 } }}
        >
          <Text fontSize="display3" color="textSecondary">
            {data.firstLineIntro}
            <br />
            <Stack isInline spacing={1}>
              <Box>
                {data.secondLineIntro}
              </Box>
            </Stack>
          </Text>
        </SlideFade>
        <SlideFade
          direction="top"
          in={true}
          transition={{ enter: { duration: 0.4, delay: 1.0 } }}
        >
          <Stack isInline spacing={4}>
            {data.socialLinks.github && <IntroductionButton socialLink={data.socialLinks.github} Icon={FaGithub} IconName={'Github'} />}
            {data.socialLinks.linkedin && <IntroductionButton socialLink={data.socialLinks.linkedin} Icon={FaLinkedin} IconName={'LinkedIn'} />}
            {data.socialLinks.gmail && <IntroductionButton socialLink={data.socialLinks.gmail} Icon={FaEnvelope} IconName={'Email'} />}
          </Stack>
          <Stack isInline spacing={4} marginTop={2}>
            {data.socialLinks.instagram && <IntroductionButton socialLink={data.socialLinks.instagram} Icon={FaInstagramSquare} IconName={'Instagram'} />}
            {data.socialLinks.reddit && <IntroductionButton socialLink={data.socialLinks.reddit} Icon={FaReddit} IconName={'Reddit'} />}
            {data.socialLinks.blog && <IntroductionButton socialLink={data.socialLinks.blog} Icon={FaBlog} IconName={'Blog'} />}
          </Stack>
          <Stack isInline spacing={4} marginTop={2}>
            {data.socialLinks.twitter && <IntroductionButton socialLink={data.socialLinks.twitter} Icon={FaTwitter} IconName={'Twitter'} />}
            {data.socialLinks.youtube && <IntroductionButton socialLink={data.socialLinks.blog} Icon={FaYoutube} IconName={'YouTube'} />}
            {data.socialLinks.dev && <IntroductionButton socialLink={data.socialLinks.dev} Icon={FaDev} IconName={'Dev'} />}
          </Stack>
          <Stack isInline spacing={4} marginTop={2}>
            {data.socialLinks.facebook && <IntroductionButton socialLink={data.socialLinks.facebook} Icon={FaFacebook} IconName={'Facebook'} />}
            {data.socialLinks.telegram && <IntroductionButton socialLink={data.socialLinks.telegram} Icon={FaTelegram} IconName={'Telegram'} />}
            {data.socialLinks.spotify && <IntroductionButton socialLink={data.socialLinks.spotify} Icon={FaSpotify} IconName={'Spotify'} />}
          </Stack>
        </SlideFade>
      </Stack>
    </>
  )
}
