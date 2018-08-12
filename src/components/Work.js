import React from 'react'
import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardActions from '@material-ui/core/CardActions'
import Button from '@material-ui/core/Button'
import { FaCodeBranch } from 'react-icons/fa'

export default class Skills extends React.PureComponent {
  render() {
    return (
      <Grid container className='section-containers work'>
        <Grid item xs={12} sm={8} className='section-title'>
          Work & Projects
        </Grid>     
        <Grid item xs={12} className='card-container' >
          <Card className='skills-card'>
            <CardContent>
              sdasd
            </CardContent>
            <CardActions>
              <Button size="small" variant="contained" color="secondary">Learn More</Button>
            </CardActions>
          </Card>
          <Card className='skills-card'>
            <CardContent>
              sdasd
            </CardContent>
          </Card>
          <Card className='skills-card'>
            <CardContent>
              sdasd
            </CardContent>
          </Card>
          <Card className='skills-card'>
            <CardContent>
              sdasd
            </CardContent>
          </Card>
          <Card className='skills-card'>
            <CardContent>
              sdasd
            </CardContent>
          </Card>
        </Grid>    
        <Grid item xs={12} sm={8} className='section-icon'>
          <FaCodeBranch />
        </Grid>
      </Grid>
    )
  }
}
