import React from 'react'
import Grid from '@material-ui/core/Grid'

const style = {
  
}

export default class AboutMe extends React.PureComponent {
  render() {
    return (
      <Grid container className='section-containers' style={style}>
        <Grid item xs={12} sm={8} className='section-title'>
          About Me
        </Grid>
        <Grid item>
          <Grid item>I am a Front End developer working with React-Redux, VueJS, AngularJS and other f/ws for over 5 years.</Grid>
          <Grid item>My style is to use minimal and simplistic design approaches to create good, clean UI.</Grid>
        </Grid>
      </Grid>
    )
  }
}
