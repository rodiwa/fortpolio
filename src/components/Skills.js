import React from 'react'
import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardActions from '@material-ui/core/CardActions'
import Button from '@material-ui/core/Button'
import { FaWrench } from 'react-icons/fa'
import Typography from '@material-ui/core/Typography'

const card = {
  title: {},
  more: {
    display: 'flex',
    alignItems: 'center',
  }
}

export default class Skills extends React.PureComponent {
  render() {
    return (
      <Grid container className='section-containers skills'>
        <Grid item xs={12} sm={8} className='section-title'>
          Technical Skillset
        </Grid>
        <Grid item xs={12} className='card-container' >
          <Card className='skills-card'>
            <CardContent>
              <Typography className={card.title} color="textSecondary">
                UI Frameworks
              </Typography>
              <Typography component="p" className={card.content}>
                <ul>
                  <li>React-Redux</li>
                  <li>Angular</li>
                  <li>AngularJS</li>
                </ul>
              </Typography>
            </CardContent>
          </Card>
          <Card className='skills-card'>
            <CardContent>
              <Typography className={card.title} color="textSecondary">
                CSS Styling
              </Typography>
              <Typography component="p" className={card.content}>
                <ul>
                  <li>SCSS, SASS</li>
                  <li>Flex, Grids</li>
                  <li>Material UI, Bootstrap</li>
                </ul>
              </Typography>
            </CardContent>
          </Card>
          <Card className='skills-card'>
            <CardContent>
              <Typography className={card.title} color="textSecondary">
                Testing Tools
              </Typography>
              <Typography component="p" className={card.content}>
                <ul>
                  <li>Jest</li>
                  <li>Enzyme</li>
                  <li>Sinon, Mocha, Chai</li>
                </ul>
              </Typography>
            </CardContent>
          </Card>
          <Card className='skills-card'>
            <CardContent>
              <Typography className={card.title} color="textSecondary">
                Database
              </Typography>
              <Typography component="p" className={card.content}>
                <ul>
                  <li>MongoDB</li>
                  <li>Firebase Realtime DB</li>
                  <li>MySQL</li>
                </ul>
              </Typography>
            </CardContent>
          </Card>
          <Card className='skills-card'>
            <CardContent>
              <Typography className={card.title} color="textSecondary">
                Code Revision
              </Typography>
              <Typography component="p" className={card.content}>
                <ul>
                  <li>Github</li>
                  <li>Github Desktop</li>
                  <li>Git Bash</li>
                </ul>
              </Typography>
            </CardContent>
          </Card>
          <Card className='skills-card'>
            <CardContent>
              <Typography className={card.title} color="textSecondary">
                Issue Tracking
              </Typography>
              <Typography component="p" className={card.content}>
                <ul>
                  <li>JIRA</li>
                  <li>Bugzilla</li>
                  <li>Trello</li>
                </ul>
              </Typography>
            </CardContent>
          </Card>
          <Card className='skills-card'>
            <CardContent>
              <Typography className={card.title} color="textSecondary">
                Dev Tools
              </Typography>
              <Typography component="p" className={card.content}>
                <ul>
                  <li>Chrome Dev Tools</li>
                  <li>React Dev</li>
                  <li>Firebug</li>
                </ul>
              </Typography>
            </CardContent>
          </Card>
          <Card className='skills-card'>
            <CardContent>
              <Typography className={card.title} color="textSecondary">
                IDEs & Editors
              </Typography>
              <Typography component="p" className={card.content}>
                <ul>
                  <li>VS Code</li>
                  <li>Atom</li>
                  <li>Sublime 3</li>
                </ul>
              </Typography>
            </CardContent>
          </Card>
          <Card className='skills-card'>
            <CardContent>
              <Typography className={card.title} color="textSecondary">
                Misc
              </Typography>
              <Typography component="p" className={card.content}>
                React Native, Native Base, Expo, PWA, Electron JS, VS Code Extensions, Balsamiq, Photoshop
              </Typography>
            </CardContent>
          </Card>
          <Card className='skills-card' style={card.more}>
            <CardContent>
              <CardActions>
                <Button size="small" variant="contained" color="secondary">Show Me More</Button>
              </CardActions>
            </CardContent>
          </Card>
        </Grid>    
        <Grid item xs={12} sm={8} className='section-icon'>
          <FaWrench />
        </Grid>
      </Grid>
    )
  }
}
