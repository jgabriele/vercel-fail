/* eslint-disable @next/next/link-passhref */
import { Container, Grid, Typography } from '@mui/material'
import { styled } from '@mui/system'
import type { GetServerSideProps, NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'

type SearchArticle = any

type Props = {
  recentlyAddedArticles: SearchArticle[]
}

const StyledContainer = styled(Container)(({ theme }) => ({
  margin: theme.spacing(8),
}))

const Section = styled('div')(({ theme }) => ({
  marginTop: theme.spacing(8),
}))
const UnstyledA = styled('a')(({ theme }) => ({
  '$ *': {
    textDecoration: 'none',
  },
  cursor: 'pointer',
}))

const FakeMarketingBanner = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: 300,
  width: `calc(100% - ${theme.spacing(16)})`,
  background: theme.palette.grey[200],
  border: `1px solid ${theme.palette.grey[400]}`,
  color: theme.palette.grey[600],
  borderRadius: 4,
}))

const Home: NextPage<Props> = ({ recentlyAddedArticles = [] }) => {
  return (
    <div>
      <Head>
        <title>GreenPro</title>
        <meta name="description" content="GreenPro" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <StyledContainer maxWidth="xl" disableGutters>
        <FakeMarketingBanner>Fake marketing banner</FakeMarketingBanner>

        {recentlyAddedArticles.length ? (
          <Section>
            <Typography variant="h2">Ça vient de sortir</Typography>

            <Grid container spacing={2}>
              {recentlyAddedArticles.map((article) => (
                <Grid key={article.objectID} item>
                  <Link
                    key={article.objectID}
                    href={`/article/${article.objectID}`}
                  >
                    <UnstyledA>
                      {article.title}
                    </UnstyledA>
                  </Link>
                </Grid>
              ))}
            </Grid>
          </Section>
        ) : null}
      </StyledContainer>
    </div>
  )
}

export const getServerSideProps: GetServerSideProps<Props> = async () => {
  return {
    props: {
      recentlyAddedArticles: [],
    },
  }
}

export default Home
