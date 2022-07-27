import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Header from './Header';
import MainFeaturedPost from './MainFeaturedPost';
import FeaturedPost from './FeaturedPost';
import Sidebar from './Sidebar';
import Footer from './Footer';


const sections = [
  { title: 'Peter Brachacki', url: '#' },
  { title: 'Barry Newbery', url: '#' },
  { title: 'Tom Yardley Jones', url: '#' },
  { title: 'Richard Hudolin', url: '#' },
  { title: 'Colin Richmond', url: '#' },
  { title: 'Colin Richmond refurb', url: '#' },
  { title: 'Arwel Jones', url: '#' },
  { title: 'TARDIS A/B', url: '#' },
  { title: 'TARDIS C', url: '#' },
  { title: 'TARDIS D', url: '#' },
];

const mainFeaturedPost = {
  title: 'The Eccelston Era',
  description:
    "The TARDIS prop used for the first series of the revival era of Doctor Who. Bulit in 2004 and last used in 2013, this prop is the most iconic version of the TARDIS prop",
  image: 'https://live.staticflickr.com/4337/35782265574_fc643e9346_b.jpg',
  imageText: 'main image description',
  linkText: 'Continue reading…',
};

const featuredPosts = [
  {
    title: 'The Arwel Jones Box',
    date: 'Nov 12',
    description:
      'The current iteration of the iconic police box.',
    image: 'https://preview.redd.it/y8flemrcdvg61.jpg?auto=webp&s=a319ef353ed4822fc42a48d8cb9f8f9401a76810',
    imageLabel: 'Image Text',
  },
  {
    title: 'Peter Brachacki interior',
    date: 'Nov 11',
    description:
      'The original TARDIS Interior used during the 1960s',
    image: 'https://live.staticflickr.com/7618/16871160256_3abd3af72f_b.jpg',
    imageLabel: 'Image Text',
  },
];



const sidebar = {
  title: 'About',
  description:
    'The TARDIS is a fictional time machine and spacecraft that appears in the British science fiction television series Doctor Who and its various spin-offs. Its exterior appearance mimics a police box, an obsolete type of telephone kiosk that was once commonly seen on streets in Britain.',
  archives: [
    { title: 'March 2022', url: '#' },
    { title: 'February 2020', url: '#' },
    { title: 'January 2020', url: '#' },
    { title: 'November 1999', url: '#' },
    { title: 'October 1999', url: '#' },
    { title: 'September 1999', url: '#' },
    { title: 'August 1999', url: '#' },
    { title: 'July 1999', url: '#' },
    { title: 'June 1999', url: '#' },
    { title: 'May 1999', url: '#' },
    { title: 'April 1989', url: '#' },
  ],
  social: [
    { name: 'GitHub', icon: GitHubIcon },
    { name: 'Twitter', icon: TwitterIcon },
    { name: 'Facebook', icon: FacebookIcon },
  ],
};

const theme = createTheme();

export default function Blog() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="lg">
        <Header title="Blog" sections={sections} />
        <main>
          <MainFeaturedPost post={mainFeaturedPost} />
          <Grid container spacing={4}>
            {featuredPosts.map((post) => (
              <FeaturedPost key={post.title} post={post} />
            ))}
          </Grid>
          <Grid container spacing={5} sx={{ mt: 3 }}>
           
            <Sidebar
              title={sidebar.title}
              description={sidebar.description}
              archives={sidebar.archives}
              social={sidebar.social}
            />
          </Grid>
        </main>
      </Container>
      <Footer
        title="Footer"
        description="Something here to give the footer a purpose!"
      />
    </ThemeProvider>
  );
}