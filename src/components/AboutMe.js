import React from 'react'
import Grid from '@material-ui/core/Grid'
import { FaUserNinja } from 'react-icons/fa'

const style = {
  
}

export default class AboutMe extends React.PureComponent {
  render() {
    return (
      <Grid container className='section-containers about-me' style={style}>
        <Grid item xs={12} sm={8} className='section-title'>
          What's My Story?
        </Grid>
        <Grid item>
          <Grid item className='desc'>I am a Front End Developer and a UI/UX enthusiast who uses minimal and simplistic design approaches to create good, clean UI.</Grid>
          <Grid item className='desc'>I help clients translate their ideas into smart web & mobile apps to provide better reachability to their customers.</Grid>
        </Grid>
        <Grid item xs={12} sm={8} className='section-icon'>
          <FaUserNinja />
        </Grid>
      </Grid>
    )
  }
}
