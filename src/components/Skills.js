import React from 'react'
import Grid from '@material-ui/core/Grid'
import Highcharts from 'highcharts'

import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'

import LogoMaster from '../data/logos'

// material ui colors
// https://materialuicolors.co/
const COLORS = {
  RED: '#f06292',
  LIME: '#dce775',
  BLUE: '#4fc3f7',
  TEAL: '#4db6ac',
  ORANGE: '#ff8a65',
  INDIGO: '#7986cb',
  // CYAN: '#4dd0e1',
}

export const LogoContainer = ({ type }) => {
  let filteredList = LogoMaster.filter(item => {
    return item.type === type
  })

  if (type === 'all') {
    filteredList = LogoMaster
  }

  return filteredList.map((item, idx) => {
    const className = `logo ${item.long ? 'long' : ''}`
    return (
      <img key={idx} className={className} src={`${item.logo}`} />
    )
  })
}

export default class Skills extends React.PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      type: 'all'
    }

    this.handleChange = this.handleChange.bind(this)
  }

  componentDidMount() {
    let colors = [] //COLORS.map(item => item)
    for (let color in COLORS) {
      colors.push(COLORS[color])
    }
    const config = {
      title: {
        text: 'My Most Recent Tech Stack',
      },
      chart: {
        backgroundColor: 'gold',
        width: 600,
      },
      credits: {
        enabled: false
      },
      tooltip: {
        enabled: false
      },
      series: [{
        type: 'pie',
        borderColor: '#eee',
        borderWidth: 1,
        colors,
        cursor: 'pointer',
        dataLabels: {
          style: {
            fontSize: '0.8em',
            fontFamily: 'roboto',
            textOutline: null,
            color: 'darkslategray',
            fontWeight: 300
          },
          // connectorWidth: 2,
          distance: -30,
          // softConnector: 20,
          useHTML: true,
        },
        padding: 50,
        allowPointSelect: false,
        keys: ['name', 'y', 'selected', 'sliced'],
        data: [
          ['Yarn', 5, true],
          ['ReactJS', 20, true],
          ['Redux', 30, true],
          ['Create React App', 15, true],
          ['Material UI', 20, false],
          ['Firebase Auth', 5, false],
          ['Firebase Realtime DB', 15, false],
          ['SCSS', 10, false],
          ['Jest', 15, false],
          ['Enzyme', 15, false],
        ],
      }]
    }
    Highcharts.chart('pieChart', config)
  }

  handleChange(event, type) {
    this.setState({
      type
    })
  }

  render() {
    return (
      <Grid container className='section-containers skills'>
        <Grid item xs={12} sm={8} className='section-title'>
          Technical Overview
        </Grid>
        <Grid item className='charts'>
          <Grid item xs={12} md={6} className='section-icon chart'>
            <div id='pieChart'></div>
          </Grid>
        </Grid>
        <Grid item xs={12} className='tools'>
          <Grid item xs={12}>
            <Tabs fullWidth
              value={this.state.type}
              onChange={this.handleChange}
              indicatorColor="primary"
              textColor="primary"
              scrollable
              scrollButtons="auto"
            >
              <Tab label="All" value='all'/>
              <Tab label="UI FW" value='ui'/>
              <Tab label='CSS' value='css' />
              <Tab label='Tests' value='tests' />
              <Tab label='Backend' value='backend' />
              <Tab label='DB' value='db' />
              <Tab label='Issue' value='issue' />
              <Tab label='Mockups' value='mockups' />
              <Tab label="Package Managers" value='packageManager' />
              <Tab label="Code Revision" value='codeRevision'/>
              <Tab label='Utils' value='utils' />
              <Tab label='Debugger' value='debugger' />
              <Tab label='Editors' value='editors' />
              <Tab label='Misc' value='misc' />
            </Tabs>
          </Grid>
          <Grid item xs={12} className='logo-container'>
            <LogoContainer type={this.state.type}/>          
          </Grid>
        </Grid>        
      </Grid>
    )
  }
}
