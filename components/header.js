import React, { Component } from "react"

export default class Header extends Component {

  constructor(props) {
    super(props)
  }

  state = {
    bullsActive: true
  }

  handleBullBtn = (e) => {
    e.preventDefault()
    this.props.handleBullActive(true)
    this.setState({ bullsActive:true })
  }

  handleBearBtn = (e) => {
    e.preventDefault()
    this.props.handleBullActive(false)
    this.setState({ bullsActive:false })
  }

  render(){
    const {
      bullsActive
    } = this.state

    return (
    <div className="sc-gKclnd gOquVo">
        <nav style={{ zIndex:"10" }} className="menu-area navbar-dark bg-darks navbar navbar-expand-lg navbar-light">
            <div className="container">
                <div style={{width:"100%"}} className="m-0 row">
                    <div style={{padding:"0px"}} className="col-lg-2"><a className="sc-iqseJM kOLQGP" href="https://bullsxbears.io/">
                    <img src="img/logo.png" className="sc-jrQzAO kAzuCl" /></a></div>
                    <div style={{display:"flex",padding:"0px"}} className="pt-0 col-lg-10">
                        <div className="navbar-collapse collapse" id="responsive-navbar-nav">
                            <div className="sc-kDTinF ljDPtM navbar-nav">
                                <div className="nav-item dropdown">
                                  <a 
                                    aria-haspopup="true" 
                                    aria-expanded="false" 
                                    id={ `collasible-nav-dropdown${ (bullsActive)?'-active':'' }` }
                                    href="#" 
                                    className="dropdown-toggle nav-link" 
                                    role="button"
                                    onClick={ this.handleBullBtn }
                                    >Bulls</a>
                                  </div>
                                <div className="nav-item dropdown">
                                <a aria-haspopup="true" 
                                    aria-expanded="false" 
                                    id={ `collasible-nav-dropdown${ (!bullsActive)?'-active':'' }` }
                                    href="#" 
                                    className="dropdown-toggle nav-link" 
                                    role="button"
                                    onClick={ this.handleBearBtn }
                                    >Bears</a>
                                  </div>
                                  <a className="sc-pVTFL gkCPqg nav-link" href="https://bullsxbears.io/app">hibrid</a>
                                  <a href="https://store.bullsxbears.io/" target="_blank" className="sc-iCfMLu dTNgHv">app</a>
                            </div>
                            <div className="sc-crHmcD bBHVio">
                            <button 
                              type="button" 
                              className="sc-egiyK hCVlEs btn btn-primary">
                              CONNECT WALLET
                              </button>
                              </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    </div>
    )
  }
}

