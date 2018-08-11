import React from 'react'
// import backgorund from '../images/open-sign-yellow.jpg'
import Grid from '@material-ui/core/Grid'

const style = {
  justifyContent: 'flex-end'
  
}

const styleBox = {
  color: 'cornflowerblue',
  fontWeight: 100,
  maxWidth: '90vw',
  flexDirection: 'column',
  display: 'flex',
  alignItems: 'flex-end',
  // backgroundImage: `url(${backgorund})`
}

const styleSpan = {
  textAlign: 'right'
}

const styleSpan1 = {
  fontSize: '3em',
  textAlign: 'right'
}

const skills = [
  'ES6, JavaScript, React, Redux, Firebase, VS Code, Angular, Expo, React Native'
]

export default class ImageBanner extends React.PureComponent {
  render() {
    return (
      <Grid container className='section-containers' style={style}>
        <Grid item>
          <span style={styleSpan1}>Web Developer</span>
        </Grid>
        <Grid item>
          <span style={styleSpan}>
            { skills.map((item, idx) => <span key={idx}>{item}</span>) }
          </span>
        </Grid>
      </Grid>
    )
  }
}
