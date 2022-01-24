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
    activeIndex: 0,
    info:{},
    bearInfo:{},
    connectBtnText: "CONNECT WALLET",
    attackOptionsOpen:"",
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
    this.setState({modalIsOpen:false,info: {},index: 0,imageURL: ""})
  }

  openModal = async (e) => {
    const jsonResult = await fetch(`https://bullsxbears.io/bulls/token_${ e }.json`)
    const jsonBearsResult = await fetch(`https://bullsxbears.io/bears/token_${ e }.json`)
    //const jsonResult = await fetch(`http://localhost:3000/bulls/token_${ e }.json`)
    //const jsonBearsResult = await fetch(`http://localhost:3000/bears/token_${ e }.json`)
    const info = await jsonResult.json()
    const bearInfo = await jsonBearsResult.json()

    this.setState({
      modalIsOpen:true,
      activeIndex: e,
      info,
      bearInfo
    })
  }

  updateConnectButton = () => {
      console.log("updating")

     if(window.ethereum && 
        window.ethereum.selectedAddress &&
        window.ethereum.selectedAddress != ""){

        const walletAddress = window.ethereum.selectedAddress
        
        const connectLabel = "Connected: " +
          String(walletAddress).substring(0, 6) +
          "..." +
          String(walletAddress).substring(38)
        
        console.log("Selected Address", connectLabel)

        this.setState({ connectBtnText: connectLabel })
    } else {
        this.setState({ connectBtnText: "CONNECT WALLET" })
    }
  }

  connect = async () => {
      console.log("Connecting")
      if(window.ethereum){
          try {
            const addressArray = await window.ethereum.request({
              method: "eth_requestAccounts",
            })

            this.updateConnectButton()

            return window.ethereum.selectedAddress

          } catch (err) {

            const obj = {
              address: "",
              status: err.message,
            }

            console.log("Error",obj)          
          }
      } else {
          console.log("ethereum not enabled")
      }
  }

  openAttackOptions = () => {
    this.setState({ attackOptionsOpen: "options-open" })
  }

  closeAttackOptions = () => {
    this.setState({ attackOptionsOpen: "" }) 
  }

  render(){

      const {
        openedActive,
        bullsActive,
        active,
        inactive,
        attackOptionsOpen,
        searchValue,
        unopenedBulls,
        unopenedBears,
        bullsArray,
        modalIsOpen,
        activeIndex,
        info,
        bearInfo,
        connectBtnText
      } = this.state

      console.log("info",info,bearInfo)

      let imageURL = ""

      if(activeIndex > 0){
        imageURL = `/bulls/token_${ activeIndex }.png`
      }

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
              onClickCard={ this.openModal } 
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
                  <div 
                    className="fade modal show" 
                    style={{ 
                      display:(modalIsOpen)?"block":"none",
                      backgroundColor: "rgba(0,0,0,0.7)"
                      }}>
                    <div className="modal-dialog modal-lg modal-dialog-centered">
                      <div className="modal-content">
                        <div className="modal-header"><button type="button" className="close" onClick={ this.closeModal }><span aria-hidden="true">×</span></button></div>
                        <div className="show-grid modal-body">
                            <div className="sc-jHkVzv eCkbRk">
                                <div className="row">
                                    <div className={ `modal-fight ${ attackOptionsOpen }` }>
                                      <div className="close-options"><button type="button" className="close" onClick={ this.closeAttackOptions }><span aria-hidden="true">×</span></button></div>
                                      <div className="fight-block">
                                        <span>
                                          <img src="img/attack.png" alt="" 
                                          style={{ marginTop: "-20px" }}
                                          />
                                        </span>
                                        <span style={{ 
                                          display:"inline-block",
                                          marginLeft:"10px"
                                         }}>
                                          <div style={{
                                            color:"rgb(72, 188, 30)",
                                            fontWeight:"bold"
                                          }}>BULL #{ activeIndex }</div>
                                          <div style={{
                                            fontWeight:"bold"
                                          }}>ATTACK{ " " }
                                          { (info && info.attack)? info.attack :"" }{" "}
                                           of 15</div>
                                        </span>
                                      </div>
                                      <div className="fight-block">
                                        <div class="progress-container">
                                            <div class="progress-skill progress-attack"
                                            style={{ width: ((((info && info.attack)? info.attack :0)*100)/15) + "%" }}
                                            >
                                            { (info && info.attack)? info.attack :"" }{" "}
                                            /15</div>
                                        </div>
                                      </div>
                                      <div className="fight-block" style={{textAlign:"center"}}>
                                        <img src="img/versus.png" alt="" />
                                      </div>
                                      <div className="fight-block">
                                        <span>
                                          <img src="img/defense.png" alt="" 
                                          style={{ marginTop: "-20px" }}
                                          />
                                        </span>
                                        <span style={{ 
                                          display:"inline-block",
                                          marginLeft:"10px"
                                         }}>
                                          <div style={{
                                            color:"#ff5555",
                                            fontWeight:"bold"
                                          }}>BEAR #{ activeIndex }</div>
                                          <div style={{
                                            fontWeight:"bold"
                                          }}>DEFENSE{ " " }
                                          { (bearInfo && bearInfo.defense)? bearInfo.defense :"" }{" "}
                                           of 25</div>
                                        </span>
                                      </div>
                                      <div className="fight-block">
                                        <div class="progress-container">
                                            <div class="progress-skill progress-defense"
                                            style={{ width: ((((bearInfo && bearInfo.defense)? bearInfo.defense :0)*100)/25) + "%" }}
                                            >
                                            { (bearInfo && bearInfo.defense)? bearInfo.defense :"" }{" "}
                                            /25</div>
                                        </div>
                                      </div>
                                      <div className="fight-button" style={{ textAlign:"center", paddingTop: "10px" }}>
                                        <img src="img/see_the_fight.png" alt="" 
                                        style={{ cursor:"pointer" }}
                                        />
                                      </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="sc-bQtKYq cIopet">
                                            <h4>BULL #{ activeIndex }</h4>
                                        </div>
                                        <div className="sc-fmBCVi jLocsb" style={{ borderRadius:"10px" }}>
                                        <img 
                                        src={ imageURL }
                                        alt={ `bull_${ activeIndex }` }
                                        key={ activeIndex } 
                                        id={ `bull_${ activeIndex }` } 
                                        className="sc-fXEqDS cLGYmY" 
                                        style={{ width:"100%", borderRadius:"10px" }}
                                        />
                                        </div>
                                        <button
                                        className="sc-FNXRL gBCJeY" 
                                        style={{ backgroundColor: "#00a83a" }}>
                                        Mint on Ethereum
                                        </button>
                                        <img onClick={ this.openAttackOptions } className="attack-options" src="img/attack.png" alt="Attack options" 
                                          style={{ marginTop: "10px", float:"right",cursor:"pointer" }}
                                          title="See attack options"
                                          />
                                    </div>
                                    <div className="col-md-1"></div>
                                    <div className="col-md-4">
                                        <div className="sc-lkgTHX kctDZO">
                                            <div className="sc-eFegNN kPXwHm">
                                                <h5 style={{ marginTop:"10px" }}>mouth</h5>
                                                <div style={{ 
                                                  fontSize: "13px",
                                                  width:"120px",
                                                  textTransform:"capitalize"
                                                }}>
                                                { (info && info.mouth)? info.mouth.replace(/_/g," ").toLowerCase() :"" }
                                                </div>
                                            </div>
                                            <div className="sc-eFegNN kPXwHm">
                                                <h5 style={{ marginTop:"10px" }}>accesories</h5>
                                                <div style={{ 
                                                  fontSize: "13px",
                                                  width:"120px",
                                                  textTransform:"capitalize"
                                                }}>
                                                { (info && info.accesories)? info.accesories.replace(/_/g," ").toLowerCase() :"" }
                                                </div>
                                            </div>
                                            <div className="sc-eFegNN kPXwHm">
                                                <h5 style={{ marginTop:"10px" }}>skin</h5>
                                                <div style={{ 
                                                  fontSize: "13px",
                                                  width:"120px",
                                                  textTransform:"capitalize"
                                                }}>
                                                { (info && info.skin)? info.skin.replace(/_/g," ").toLowerCase() :"" }
                                                </div>
                                            </div>
                                            <div className="sc-eFegNN kPXwHm">
                                                <h5 style={{ marginTop:"10px" }}>body</h5>
                                                <div style={{ 
                                                  fontSize: "13px",
                                                  width:"120px",
                                                  textTransform:"capitalize"
                                                }}>
                                                { (info && info.body)? info.body.replace(/_/g," ").toLowerCase() :"" }
                                                </div>
                                            </div>
                                            <div className="sc-eFegNN kPXwHm">
                                                <h5 style={{ marginTop:"10px" }}>background</h5>
                                                <div style={{ 
                                                  fontSize: "13px",
                                                  width:"120px",
                                                  textTransform:"capitalize"
                                                }}>
                                                { (info && info.background)? info.background.replace(/_/g," ").toLowerCase() :"" }
                                                </div>
                                            </div>
                                            <div className="sc-eFegNN kPXwHm">
                                                <h5 style={{ marginTop:"10px" }}>eyes</h5>
                                                <div style={{ 
                                                  fontSize: "13px",
                                                  width:"120px",
                                                  textTransform:"capitalize"
                                                }}>
                                                { (info && info.eyes)? info.eyes.replace(/_/g," ").toLowerCase() :"" }
                                                </div>
                                            </div>
                                            <div className="sc-eFegNN kPXwHm">
                                                <h5 style={{ marginTop:"10px" }}>head</h5>
                                                <div style={{ 
                                                  fontSize: "13px",
                                                  width:"120px",
                                                  textTransform:"capitalize"
                                                }}>
                                                { (info && info.head)? info.head.replace(/_/g," ").toLowerCase() :"" }
                                                </div>
                                            </div>
                                        </div>
                                        <h4 className="sc-jWUzzU eevPcX">BULL: <span>Not Minted</span></h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
                  </div>

                  <Header 
                    handleBullActive={ this.handleBullActive } 
                    handleConnect={ this.connect }
                    connectBtnText={ connectBtnText }
                    />
                  <main className="sc-bYoBSM hmXtHk">
                      <div className="react-reveal fadeInRight" style={{animationDuration:"1000ms",animationDelay:"0ms",animationIterationCount:"1",opacity:"1"}}>
                          <div className="container">
                              <div className="sc-dOpZeA emtXXD">
                                  <div className="infinite-scroll-component__outerdiv">
                                      <div className="infinite-scroll-component" style={{height:"auto",overflow:"hidden"}}>
                                          <div className="row title">
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
