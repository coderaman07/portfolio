import React, { useEffect } from 'react'
import Link from 'next/link'
import { chakra, Flex, Stack, Text } from '@chakra-ui/react'
import Navbar from './Navbar'
import ReactGA from 'react-ga'
import data from './Data.json'

const Container = ({ enableTransition, children }) => {
  useEffect(() => {
    ReactGA.initialize(process.env.NEXT_PUBLIC_UA_CODE)
    ReactGA.pageview(window.location.pathname + window.location.search)
  }, [])

  return (
    <>
      <Navbar enableTransition={enableTransition} />
      <Flex as="main" justifyContent="center" flexDirection="column">
        {children}
      </Flex>
      <Stack alignItems="center" mt={10} mb={5}>
        <Text textAlign="center" fontSize="sm">
          Designed by <Link href="https://github.com/abdulrcs">
          <a>
              <chakra.span fontWeight="semibold" color="button1">
                Abdul Rahman
              </chakra.span>
          </a>
          </Link>.
          Developed by <Link href="https://github.com/coderaman07">
            <a>
              <chakra.span fontWeight="semibold" color="button1">
                Aman Ojha
              </chakra.span>
            </a>
          </Link>.
          <br />
          Built with{' '}
          <chakra.span fontWeight="semibold" color="button1">
            Next.js
          </chakra.span>{' '}
          &{' '}
          <chakra.span fontWeight="semibold" color="button1">
            Chakra UI
          </chakra.span>
          . Hosted on{' '}
          <chakra.span fontWeight="semibold" color="button1">
            Vercel
          </chakra.span>
          .
        </Text>
      </Stack>
    </>
  )
}

export default Container
