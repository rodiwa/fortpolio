import React from 'react'
import background from '../images/bgs/apple-1.jpg'
import Grid from '@material-ui/core/Grid'

const style = {
  alignItems: 'flex-end',
  flexDirection: 'column',
  color: 'white',
  background: `url(${background}) no-repeat top center/cover`
}

const styleBox = {
  color: 'cornflowerblue',
  fontWeight: 100,
  maxWidth: '90vw',
  flexDirection: 'column',
  display: 'flex',
  alignItems: 'flex-end',
}

const styleSpan = {
  textAlign: 'right',
  color: 'gold'
}

const styleSpan1 = {
  fontSize: '2em',
  textAlign: 'right',
  fontFamily: '"Rock Salt", cursive',
}

const skills = [
  'ES6, JavaScript, React, Redux, Firebase, VS Code, Angular, Expo, React Native'
]

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
            {/* { skills.map((item, idx) => <span key={idx}>{item}</span>) } */}
          </span>
        </Grid>
      </Grid>
    )
  }
}
