import React from 'react'
import Grid from '@material-ui/core/Grid'
import { FaUserNinja } from 'react-icons/fa'

import bulb from '../images/icons/bulb.svg'
import happy from '../images/icons/happy.svg'
import responsive from '../images/icons/responsive.svg'

console.log(bulb)

const style = {
  
}

export default class AboutMe extends React.PureComponent {
  render() {
    return (
      <Grid container className='section-containers about-me' style={style}>
        <Grid item xs={12} sm={8} className='section-title'>
          What's My Story?
        </Grid>
        <Grid item xs={12} sm={8} lg={6} className='text'>
          <Grid item className='desc'>I am a UI/UX enthusiast who helps clients and businesses translate their ideas into smart web and mobile apps to provide more reachability to their end users.</Grid>
          <Grid item className='desc'>I use open source tools extensively and latest programming standards to provide elegant user-friendly interfaces.</Grid>
        </Grid>
        <Grid item xs={12} md={8} className='section-icon'>
          <Grid item className='about-icons'><img src={responsive} /><span className='title'>Responsive Design</span><span className='desc'>asdadad asdjh ajhsdg asjdh sa</span></Grid>
          <Grid item className='about-icons' style={{ margin: '0 2em' }}><img src={happy} /><span className='title'>User Friendly UX</span><span className='desc'>asdadad asdjh ajhsdg asjdh sa</span></Grid>
          <Grid item className='about-icons'><img src={bulb} /><span className='title'>Intuitive Ideas</span><span className='desc'>asdadad asdjh ajhsdg asjdh sa</span></Grid>
        </Grid>
      </Grid>
    )
  }
}
