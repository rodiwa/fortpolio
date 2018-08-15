import React from 'react'
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'
import { FaGithub } from 'react-icons/fa'
import { FaTwitter } from 'react-icons/fa'
import { FaLinkedinIn } from 'react-icons/fa'
import { FaStackOverflow } from 'react-icons/fa'

const style = {
  display: 'flex',
  flexDirection: 'column'
}

const socialBtnStyle = {
  fontSize: '2em',
  color: 'darkslategray'
}

export default class Contact extends React.PureComponent {
  render() {
    return (
      <Grid container className='section-containers'>
        <Grid item xs={12} sm={8} className='section-title'>
          Get In Touch
        </Grid>        
        <Grid item xs={12} sm={7}>
          <form noValidate autoComplete="off" style={style}>
            <TextField
              id="with-placeholder"
              label="Your email"
              margin="normal"
            />

            <TextField
              id="multiline-static"
              label="Say something"
              multiline
              rows="4"
              margin="normal"
            />
          </form>
        </Grid>
        <Grid item xs={12} xs={6} className='social-icons'>
          <FaGithub style={socialBtnStyle} />
          <FaTwitter style={socialBtnStyle} />
          <FaLinkedinIn style={socialBtnStyle} />
          <FaStackOverflow style={socialBtnStyle} />
        </Grid>
      </Grid>
    )
  }
}
