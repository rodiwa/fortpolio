import React, { Component } from 'react';
import './App.css';

import ImageBanner from './components/ImageBanner'
import AboutMe from './components/AboutMe'
import Skills from './components/Skills'
import Work from './components/Work'
import Contact from './components/Contact'

import Grid from '@material-ui/core/Grid'

class App extends Component {
  render() {
    return (
      <Grid container >
        <Grid item className='banner-items' xs={12}>
          <ImageBanner />
        </Grid>
        <Grid item className='banner-items about' xs={12}>
          <AboutMe />
        </Grid>
        <Grid item className='banner-items skills' xs={12}>
          <Skills />
        </Grid>
        <Grid item className='banner-items work' xs={12}>
          <Work />
        </Grid>
        <Grid item className='banner-items' xs={12}>
          <Contact />
        </Grid>
      </Grid>
    );
  }
}

export default App;
