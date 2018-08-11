import React from 'react'
import Grid from '@material-ui/core/Grid'

export default class Skills extends React.PureComponent {
  render() {
    return (
      <Grid container className='section-containers'>
        <Grid item xs={12} sm={8} className='section-title'>
          Skills
        </Grid>     
      </Grid>
    )
  }
}
