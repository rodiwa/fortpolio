import React from 'react'
import Grid from '@material-ui/core/Grid'

import GridList from '@material-ui/core/GridList'
import GridListTile from '@material-ui/core/GridListTile'
import GridListTileBar from '@material-ui/core/GridListTileBar'

import bno from '../images/clients/bno.png'
import ck12 from '../images/clients/ck12.png'
import elm from '../images/clients/elm.png'
import med from '../images/clients/med.png'
import msft from '../images/clients/msft.svg'
import nt from '../images/clients/nt.png'
import qnst from '../images/clients/qnst.png'

const tileData = [
  {
    img: `${elm}`,
    title: 'Consumer Connect',
    author: 'EllieMae'
  },
  {
    img: `${qnst}`,
    title: 'Media Platform',
    author: 'Quinstreet'
  },
  {
    img: `${ck12}`,
    title: 'Online Learning Portal',
    author: 'CK 12'
  },
  {
    img: `${nt}`,
    title: 'NT Companion (Mobile)',
    author: 'NoodleTools'
  },
  {
    img: `${nt}`,
    title: 'NT Web App',
    author: 'NoodleTools'
  },
  {
    img: `${med}`,
    title: 'HealthCare',
    author: 'Medsolis'
  },
  {
    img: `${bno}`,
    title: 'Remote Airplay App',
    author: 'Bang & Olufsen'
  },
  {
    img: `${msft}`,
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
          {/* <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
            <ListSubheader component="div">December</ListSubheader>
          </GridListTile> */}
          {tileData.map(tile => (
            <GridListTile key={tile.img}>
              <img src={tile.img} alt={tile.title} />
              <GridListTileBar
                title={tile.title}
                subtitle={<span>{tile.author}</span>}
                // actionIcon={
                //   <IconButton className={classes.icon}>
                //     <InfoIcon />
                //   </IconButton>
                // }
              />
            </GridListTile>
          ))}
        </GridList>
        </Grid>    
      </Grid>
    )
  }
}
