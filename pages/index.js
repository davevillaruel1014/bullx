import React,{ Component } from "react"
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Header from '../components/header'
import Footer from '../components/footer'
import TokenCard from '../components/tokencard'
import { InView } from 'react-intersection-observer'


const showEach = 50

export default class Home extends Component{

  constructor(props) {
    super(props);
  }

  state = {
    active: "jdnvCT",
    inactive: "iVxcmt",
    openedActive: false,
    bullsActive: true,
    searchValue:"",
    unopenedBulls: 9999,
    unopenedBears: 9999,
    modalIsOpen:false,
    bullsArray: Array.from(Array(showEach),(x,i)=>i)
  }

  handleBullActive = (bullsActive) => {

    this.setState({ bullsActive,openedActive:false })
  }

  handleOpenCard = (e) => {
    console.log("opened card",e)
  }

  handleOpenTab = (e) => {
    console.log("open",this.state.openedActive)
    this.setState({ openedActive:true })
  }

  handleUnopenTab = (e) => {
    console.log("unopen",this.state.openedActive)
    this.setState({ openedActive:false })
  }

  handleSearch = (e) => {
    console.log("value",e.target.value)
    this.setState({searchValue:e.target.value})
  }

  handleEnd = (inView, entry) => {
    console.log('Inview:', inView)

    if(inView) {
      const visibleBulls = this.state.bullsArray.length
      const bullsArray = Array.from(Array(visibleBulls + showEach),(x,i)=>i)
      this.setState({bullsArray})
    }
  }

  closeModal = () => {
    this.setState({modalIsOpen:false})
  }

  openModal = () => {
    this.setState({modalIsOpen:true})
  }

  render(){

      const {
        openedActive,
        bullsActive,
        active,
        inactive,
        searchValue,
        unopenedBulls,
        unopenedBears,
        bullsArray,
        modalIsOpen
      } = this.state

      /*
      const customStyles = {
        content: {
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)',
        },
      };*/


      const BullsOpen = []
      const BearsOpen = []
      
      const maxColumns = 5
      const rows = [...Array( Math.ceil(bullsArray.length / maxColumns) )];
      // chunk the products into the array of rows
      const bullsRows = rows.map( (row, idx) => 
        bullsArray.slice(idx * maxColumns, idx * maxColumns + maxColumns) )
      // map the rows as div.row
      const BullsUnopen = bullsRows.map((row, idx) => (
          <div className="row" key={idx} >
            { row.map( bull => <TokenCard 
              type="BULL" 
              key={bull} 
              index={bull + 1} 
              onClickCard={ this.handleOpenCard } 
              /> )}
          </div> )
      )

      const BearsUnopen = bullsRows.map((row, idx) => (
          <div className="row" key={idx} >
            { row.map( bear => <TokenCard type="BEAR" key={bear} index={bear + 1} /> )}
          </div> )
      )


      return (
        <div>
          <Head>
            <title>Bulls X Bears</title>
            <meta name="viewport" content="width=device-width,initial-scale=1" />
            <meta name="description" content="Welcome to Bulls X Bears" />
            <link rel="icon" href="favicon.png" />
            <link rel="stylesheet" type="text/css" href="styles.css" />
          </Head>
          <main>
            <div id="root">
              <div>
                  <div className="fade modal show" style={{ display:(modalIsOpen)?"block":"none" }}>
                    <div className="modal-dialog modal-lg modal-dialog-centered">
                      <div className="modal-content">
                        <div className="modal-header"><button type="button" className="close" onClick={ this.closeModal }><span aria-hidden="true">×</span></button></div>
                        <div className="show-grid modal-body">
                            <div className="sc-jHkVzv eCkbRk">
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="sc-bQtKYq cIopet">
                                            <h4>DOGGY #0</h4>
                                        </div>
                                        <div className="sc-fmBCVi jLocsb" style={{ borderRadius:"10px" }}>
                                        <img src="https://arweave.net/yrJjOZcUsIXBtKBMDM2_nLBjpMIImiDrtTlvK1Ak6K8" 
                                        alt="" 
                                        className="sc-fXEqDS cLGYmY" 
                                        style={{ width:"100%", borderRadius:"10px" }}
                                        />
                                        </div><button className="sc-FNXRL gBCJeY">view on opensea</button>
                                    </div>
                                    <div className="col-md-1"></div>
                                    <div className="col-md-4">
                                        <h4 className="sc-jWUzzU eevPcX">rarity score: <span>71.0756</span></h4>
                                        <h4 className="sc-jWUzzU eevPcX">Rarity rank: <span>7034</span></h4>
                                        <div className="sc-lkgTHX kctDZO">
                                            <div className="sc-eFegNN kPXwHm">
                                                <h5>hats</h5>
                                                <h6>Stuntman Helmet</h6>
                                            </div>
                                            <div className="sc-eFegNN kPXwHm">
                                                <h5>mouth</h5>
                                                <h6>Beauty</h6>
                                            </div>
                                            <div className="sc-eFegNN kPXwHm">
                                                <h5>clothing</h5>
                                                <h6>Iron Collar</h6>
                                            </div>
                                            <div className="sc-eFegNN kPXwHm">
                                                <h5>fur</h5>
                                                <h6>Blue</h6>
                                            </div>
                                            <div className="sc-eFegNN kPXwHm">
                                                <h5>eyewear</h5>
                                                <h6>Polarized</h6>
                                            </div>
                                            <div className="sc-eFegNN kPXwHm">
                                                <h5>background</h5>
                                                <h6>Gray</h6>
                                            </div>
                                            <div className="sc-eFegNN kPXwHm">
                                                <h5>eyes</h5>
                                                <h6>Covered</h6>
                                            </div>
                                        </div>
                                        <h4 className="sc-jWUzzU eevPcX">PUPPY: <span>Not Minted</span></h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
                  </div>

                  <Header handleBullActive={ this.handleBullActive } />
                  <main className="sc-bYoBSM hmXtHk">
                      <div className="react-reveal fadeInRight" style={{animationDuration:"1000ms",animationDelay:"0ms",animationIterationCount:"1",opacity:"1"}}>
                          <div className="container">
                              <div className="sc-dOpZeA emtXXD">
                                  <div className="infinite-scroll-component__outerdiv">
                                      <div className="infinite-scroll-component" style={{height:"auto",overflow:"hidden"}}>
                                          <div className="row">
                                              <div className="col-md-3">
                                                  <h1 className="sc-jaskfy fHfkXz">{ (bullsActive)?"Bulls":"Bears" }</h1>
                                              </div>
                                              <div className="col-md-6">
                                                  <div className="sc-eCFVrV hCsGqW">
                                                      <div 
                                                      className={ `sc-ibkupM ${ (!openedActive)? active:inactive  }` } 
                                                      onClick={ this.handleUnopenTab }>Unopened</div>
                                                      <div className={ `sc-ibkupM ${ (openedActive)? active:inactive  }` } 
                                                      onClick={ this.handleOpenTab }>Opened</div>
                                                  </div>
                                              </div>
                                              <div className="col-md-3">
                                                  <div className="sc-jlRYqD dPgGbQ">
                                                      <div className="mb-4 input-group">
                                                          <div className="input-group-prepend"><span className="input-group-text"><svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                                                      <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"></path>
                                                                  </svg></span></div>
                                                                  <input 
                                                                  placeholder="SEARCH BY ID" 
                                                                  type="number" 
                                                                  id="inlineFormInputGroupUsername2" 
                                                                  className="sc-cbTmKc kloLJK form-control" 
                                                                  value={ searchValue }
                                                                  onChange={ this.handleSearch }
                                                                  />
                                                      </div>
                                                  </div>
                                              </div>
                                          </div>
                                          <div className="bulls"
                                          style={{ display:(bullsActive)?'block':'none' }}
                                          >
                                            <div className="row">
                                                <div className="sc-hZyDwR kVWZbf">Unopened { unopenedBulls } / 9999</div>
                                            </div>
                                            {
                                              (!openedActive)?
                                              (BullsUnopen):
                                              (<div className="row">{ BullsOpen }</div>)
                                            }
                                          </div>
                                           <div className="bears" 
                                           style={{ display:(bullsActive)?'none':'block' }}
                                           >
                                            <div className="row">
                                                <div className="sc-hZyDwR kVWZbf">Unopened { unopenedBears } / 9999</div>
                                            </div>
                                            {
                                              (!openedActive)?
                                              (BearsUnopen):
                                              (<div className="row">{ BearsOpen }</div>)
                                            }
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                      <div className="notifications-wrapper"></div>
                  </main>
                  <InView 
                    as="div" 
                    onChange={ this.handleEnd }
                    >
                    <Footer />
                  </InView>
              </div>
          </div>
          </main>
        </div>
      )
  }
}
