import React from 'react'
import Grid from '@material-ui/core/Grid'
import { FaUserTie } from 'react-icons/fa'

export default class Clients extends React.PureComponent {
  render() {
    return (
      <Grid container className='section-containers clients'>
        <Grid item xs={12} sm={8} className='section-title'>
          Clients
        </Grid>
        <Grid item xs={12} className='card-container' >
          
        </Grid>    
        <Grid item xs={12} sm={8} className='section-icon'>
          <FaUserTie />
        </Grid>
      </Grid>
    )
  }
}
