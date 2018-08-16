import React from 'react'
import background from '../images/bgs/apple-1.jpg'
import Grid from '@material-ui/core/Grid'

const style = {
  alignItems: 'flex-end',
  flexDirection: 'column',
  color: 'white',
  background: `url(${background}) no-repeat top center/cover`
}

const styleSpan = {
  textAlign: 'right',
  color: 'gold',
  textShadow: '1px 1px 5px #000'
}

const styleSpan1 = {
  fontSize: '2em',
  textAlign: 'right',
  fontFamily: '"Rock Salt", cursive',
}

export default class ImageBanner extends React.PureComponent {
  render() {
    return (
      <Grid container className='section-containers image-banner' style={style}>
        <Grid item style={styleSpan}>
          <span style={styleSpan1}>Web Developer</span>
        </Grid>
        <Grid item style={styleSpan}>
          <span style={styleSpan}>
            Ola! I'm Rohit from Mumbai and I'm here to help you make some really cool web apps
          </span>
        </Grid>
      </Grid>
    )
  }
}
