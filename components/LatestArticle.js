import { Heading } from '@chakra-ui/layout'
import { Box, Flex, Link, Stack, Text, SimpleGrid } from '@chakra-ui/react'
import dateFormat from 'dateformat'
import SlideUpWhenVisible from '../hook/SlideUpWhenVisible'
import NextLink from 'next/link'
import data from './Data.json'
import readingTime from 'reading-time'

export default function LatestArticle({ articles }) {
  return (
    <Stack
      spacing={5}
      w="100%"
      display={articles.length < 2 ? 'none' : 'block'}
    >
      <SlideUpWhenVisible key={0}>
        <Flex alignItems="center" justifyContent="space-between">
          <Heading fontSize={{ base: 'xl', md: '2xl' }} fontFamily="Ubuntu">
            📰 Latest Article.
          </Heading>
          <NextLink href="/blog">
            <Link>
              <Text fontSize={{ base: 'sm', md: 'md' }}>
                View all articles &rarr;
              </Text>
            </Link>
          </NextLink>
        </Flex>
      </SlideUpWhenVisible>
      <SimpleGrid columns={{ sm: 1, md: 2 }} spacing={{ base: 2, md: 4 }}>
        {articles.map((article, index) => (
          <SlideUpWhenVisible key={article.id}>
            <Link
              href={ data.blogURI + 'posts/' + article.slug}
              _hover={{ textDecoration: 'none' }}
              _focus={{ outline: 'none' }}
              w="100%"
              isExternal
            >
              <Stack
                direction="column"
                alignItems="flex-start"
                bg="secondary"
                _hover={{ bg: '#111' }}
                transition="0.3s"
                border="1px"
                borderColor={{ base: '#333', md: 'borderColor' }}
                borderRadius="10px"
                p={5}
                justifyContent="flex-start"
                space={2}
              >
                <Text
                  color="displayColor"
                  fontSize={{ base: 'md', md: 'xl' }}
                  fontWeight="bold"
                  cursor="pointer"
                >
                  {article.Headline}
                </Text>
                <Text color="textSecondary" fontSize="sm">
                  {dateFormat(Date.parse(article.date), 'mmmm d yyyy')}{' '}
                  <Box as="span" fontSize="xs">
                    &bull;
                  </Box>{' '}
                  {readingTime(article.Content).text}
                </Text>
              </Stack>
            </Link>
          </SlideUpWhenVisible>
        ))}
      </SimpleGrid>
    </Stack>
  )
}
