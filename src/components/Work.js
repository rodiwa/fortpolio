import React from 'react'
import Modal from 'react-modal'
import Grid from '@material-ui/core/Grid'
import GridList from '@material-ui/core/GridList'
import GridListTile from '@material-ui/core/GridListTile'
import GridListTileBar from '@material-ui/core/GridListTileBar'
import Button from '@material-ui/core/Button'
import withWidth from '@material-ui/core/withWidth'

import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md"

import projectsMaster from '../data/projects'

const ModalContent = ({ getNext, getPrev, closeModal, isActive }) => {
  if (isActive >= projectsMaster.length) {
    isActive = 0
  }
  const project = projectsMaster[isActive]
  return (
    <div className="work-details-modal">
      <div className='client'><h2>{project.client}</h2></div>
      <div className='project'><h3>{project.title}</h3></div>
      <div className="screen" style={{ background: '#f2f2f2', padding: '1em', borderRadius: '0.5em' }}>
        <MdKeyboardArrowLeft onClick={getPrev} style={{ cursor: 'pointer' }} size={'3em'} />
        <img alt={project.title} src={project.screen} style={{ border: '1px solid #ccc' }}/>
        <MdKeyboardArrowRight onClick={getNext} style={{ cursor: 'pointer' }} size={'3em'} />
      </div>
      <div className='tools'>

      </div>
      <div className='desc' style={{ margin: '1em 0' }}>
        {project.desc}
      </div>
      <div className='close-button'>
        <Button variant="contained" size="large" color="secondary" onClick={closeModal}>
          Close
        </Button>
      </div>
    </div>
  )
}

const size = {
  sm: 2,
  md: 3,
  lg: 3,
};

class Skills extends React.PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      isOpen: false,
      isActive: 0 // default 1st project
    }

    this.openModal = this.openModal.bind(this)
    this.closeModal = this.closeModal.bind(this)
    this.getNext = this.getNext.bind(this)
    this.getPrev = this.getPrev.bind(this)
    this.handleClickProject = this.handleClickProject.bind(this)
    this.handleArrowKeyModal = this.handleArrowKeyModal.bind(this)
  }

  handleArrowKeyModal(e) {
    if (!this.state.isOpen) {
      return
    }

    if (!(e.keyCode === 37 || e.keyCode === 39)) {
      return
    }

    const isLeftArrow = e.keyCode === 37

    return isLeftArrow ? this.getPrev() : this.getNext()
  }

  componentDidMount() {
    window.addEventListener('keyup', this.handleArrowKeyModal)
    const el = document.getElementById('root')
    Modal.setAppElement(el)
  }

  componentWillUnmount() {
    window.removeEventListener('keyup', this.handleArrowKeyModal)
  }

  handleClickProject(idx) {
    this.setState({ isActive: idx })
    this.openModal()
  }

  openModal() {
    this.setState({
      isOpen: true
    })
  }

  closeModal() {
    this.setState({
      isOpen: false
    })
  }

  getNext() {
    let next = this.state.isActive + 1
    if (next >= projectsMaster.length) {
      next = 0
    }

    this.setState({ isActive: next })
  }

  getPrev() {
    let prev = this.state.isActive - 1
    if (prev < 0) {
      prev = projectsMaster.length - 1
    }

    this.setState({ isActive: prev })
  }

  render() {
    return (
      <Grid container className='section-containers work'>
        <Modal
          // className='modal-work-details'
          isOpen={this.state.isOpen}
          onRequestClose={this.closeModal}
          contentLabel="Example Modal"
          style={{
            content: {
              // maxWidth: '1024px',
              margin: '0 auto',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              top: 'inherit',
              bottom: 'inherit',
              left: 'inherit',
              right: 'inherit',
            }
          }}
        >
          <ModalContent
            getNext={this.getNext}
            getPrev={this.getPrev}
            closeModal={this.closeModal}
            isActive={this.state.isActive} />
        </Modal>

        <Grid item xs={12} sm={8} className='section-title'>
          Work & Projects
        </Grid>     
        <Grid item xs={12} sm={8} className='card-container' >
          <GridList cellHeight={180} cols={size[this.props.width]}>
          {projectsMaster.map((item, idx) => (
            <GridListTile key={idx} onClick={() => this.handleClickProject(idx)}>
              <img src={item.screen} alt={item.title} className={'gridItem'} />
              <GridListTileBar
                title={item.title}
                subtitle={<span>{item.client}</span>}
              />
            </GridListTile>
          ))}
        </GridList>
        </Grid>
      </Grid>
    )
  }
}

export default withWidth()(Skills)
