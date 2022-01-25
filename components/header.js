import React, { Component } from "react"

export default class Header extends Component {

    constructor(props) {
        super(props)
    }

    state = {
        bullsActive: true,
        mobileMenu: ""
    }

    handleBullBtn = (e) => {
        e.preventDefault()
        this.props.handleBullActive(true)
        this.setState({ bullsActive: true })
    }

    handleBearBtn = (e) => {
        e.preventDefault()
        this.props.handleBullActive(false)
        this.setState({ bullsActive: false })
    }

    toggleMobileMenu = () => {
      (this.state.mobileMenu === "navbar-collapse show")?
        this.setState({ mobileMenu: ""}):
        this.setState({ mobileMenu: "navbar-collapse show"})
    }

    render() {
        const {
            bullsActive,
            mobileMenu
        } = this.state

        return (
            <div className="sc-gKclnd gOquVo">
        <nav style={{ zIndex:"10" }} className="menu-area navbar-dark bg-darks navbar navbar-expand-lg navbar-light">
            <div className="container">
                <div style={{width:"100%"}} className="m-0 row">
                    <div style={{padding:"0px"}} className="col-lg-2"><a className="sc-iqseJM kOLQGP" href="https://bullsxbears.io/">
                    <img src="img/logo.png" className="sc-jrQzAO kAzuCl" /></a></div>
                    <div style={{display:"flex",padding:"0px"}} className="pt-0 col-lg-10">
                        <button onClick={this.toggleMobileMenu } aria-controls="responsive-navbar-nav" type="button" aria-label="Toggle navigation" className="navbar-toggler"><span className="navbar-toggler-icon"></span></button>
                        <div className={ `navbar-collapse ` + (mobileMenu === "navbar-collapse show")? "navbar-collapse show":"navbar-collapse collapse" }
                          id="responsive-navbar-nav"
                          style={(mobileMenu === "navbar-collapse show")? {height:"355px"}:{} }
                          >
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
                                  <a 
                                  className="sc-pVTFL gkCPqg nav-link" 
                                  href="#"
                                  style={{
                                    background: "linear-gradient(90deg, rgba(0,255,0,1) 30%, rgba(255,94,88,1) 70%)",
                                    "background-clip": "text",
                                    "-webkit-text-fill-color": "transparent",
                                    color: "white",
                                    maxWidth:"66px"
                                   }}
                                  >hibrids</a>
                                  <a className="sc-pVTFL gkCPqg nav-link" href="#">merch</a>
                                  <a className="sc-pVTFL gkCPqg nav-link" href="#">app</a>
                                  
                            </div>
                            <div className="sc-crHmcD bBHVio">
                            <button 
                              type="button" 
                              onClick={ this.props.handleConnect }
                              className="sc-egiyK hCVlEs btn btn-primary">
                              { this.props.connectBtnText }
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