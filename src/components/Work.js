import React from 'react'
import Grid from '@material-ui/core/Grid'

import GridList from '@material-ui/core/GridList'
import GridListTile from '@material-ui/core/GridListTile'
import GridListTileBar from '@material-ui/core/GridListTileBar'

import bno from '../images/clients/bno.png'
import ck12 from '../images/clients/ck12.png'
// import elm from '../images/clients/elm.png'
import med from '../images/clients/med.png'
import msft from '../images/clients/msft.svg'
import nt from '../images/clients/nt.png'
import qnst from '../images/clients/qnst.png'

import elmScreen from '../images/screens/elm-screen.png'
// https://www.elliemae.com/solutions/consumer-engagement/encompass-consumer-connect
import qnstScreen from '../images/screens/qnst-screen.png'
import ck12Screen from '../images/screens/ck12-screen.png'
import ntScreen from '../images/screens/nt-screen.png'
import ntCompScreen from '../images/screens/nt-comp-screen.png'
import medScreen from '../images/screens/meds-screen.png'
import bnoScreen from '../images/screens/bno-screen.png'
import msftScreen from '../images/screens/msft-screen.png'


const tileData = [
  {
    img: `${elmScreen}`,
    title: 'Consumer Connect',
    author: 'EllieMae'
  },
  {
    img: `${qnstScreen}`,
    title: 'Media Platform',
    author: 'Quinstreet'
  },
  {
    img: `${ck12Screen}`,
    title: 'Online Learning Portal',
    author: 'CK 12'
  },
  {
    img: `${ntScreen}`,
    title: 'NT Web App',
    author: 'NoodleTools'
  },
  {
    img: `${ntCompScreen}`,
    title: 'NT Companion (Mobile)',
    author: 'NoodleTools'
  },
  {
    img: `${medScreen}`,
    title: 'HealthCare',
    author: 'Medsolis'
  },
  {
    img: `${bnoScreen}`,
    title: 'Remote Airplay App',
    author: 'Bang & Olufsen'
  },
  {
    img: `${msftScreen}`,
    title: 'SET Campaigns',
    author: 'Microsoft'
  }
]

const classes = {
  gridList: {
    
  }
}

export default class Skills extends React.PureComponent {
  render() {
    return (
      <Grid container className='section-containers work'>
        <Grid item xs={12} sm={8} className='section-title'>
          Work & Projects
        </Grid>     
        <Grid item xs={12} sm={8} className='card-container' >
          <GridList cellHeight={180} className={classes.gridList} cols={3}>
          {tileData.map(tile => (
            <GridListTile key={tile.img}>
              <img src={tile.img} alt={tile.title} />
              <GridListTileBar
                title={tile.title}
                subtitle={<span>{tile.author}</span>}
              />
            </GridListTile>
          ))}
        </GridList>
        </Grid>    
      </Grid>
    )
  }
}
