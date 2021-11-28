import React,{ Component } from "react"
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Header from '../components/header'
import Footer from '../components/footer'
import TokenCard from '../components/tokencard'



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
    unopenedBulls: 10000,
    unopenedBears: 10000
  }

  handleBullActive = (bullsActive) => {

    this.setState({ bullsActive,openedActive:false })
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

  render(){

      const {
        openedActive,
        bullsActive,
        active,
        inactive,
        searchValue,
        unopenedBulls,
        unopenedBears,
      } = this.state

      const BullsUnopen = []
      const BullsOpen = []
      const BearsUnopen = []
      const BearsOpen = []

      for (var i = 0; i < 5; i++) {
          BullsUnopen.push(<TokenCard type="BULL" key={i} index={i + 1} />)
      }

      for (var i = 0; i < 5; i++) {
          BearsUnopen.push(<TokenCard type="BEARS" key={i} index={i + 1} />)
      }

      return (
        <div >
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
                                                <div className="sc-hZyDwR kVWZbf">Unopened { unopenedBulls } / 10000</div>
                                            </div>
                                            {
                                              (!openedActive)?
                                              (<div className="row">{ BullsUnopen }</div>):
                                              (<div className="row">{ BullsOpen }</div>)
                                            }
                                          </div>
                                           <div className="bears" 
                                           style={{ display:(bullsActive)?'none':'block' }}
                                           >
                                            <div className="row">
                                                <div className="sc-hZyDwR kVWZbf">Unopened { unopenedBears } / 10000</div>
                                            </div>
                                            {
                                              (!openedActive)?
                                              (<div className="row">{ BearsUnopen }</div>):
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
                  <Footer />
              </div>
          </div>
          </main>
        </div>
      )
  }
}
