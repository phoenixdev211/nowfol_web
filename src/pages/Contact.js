// @mui
import { styled } from '@mui/material/styles';
import { Grid, Container } from '@mui/material';
// _mock
import { _mapContact } from '../_mock';
// components
import Page from '../components/Page';
import { ContactHero, ContactForm } from '../sections/contact';

// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
  paddingTop: theme.spacing(8),
  [theme.breakpoints.up('md')]: {
    paddingTop: theme.spacing(11),
  },
}));

// ----------------------------------------------------------------------

export default function Contact() {
  return (
    <Page title="Contact us">
      <RootStyle>
        <ContactHero />      
      </RootStyle>
    </Page>
  );
}
