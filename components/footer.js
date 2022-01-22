export default function Footer(props) {
  return (<footer id="footer">
            <div className="footer-block">
                <div className="container">
                    <div className="footer-logo">
                        <a href="#section1">
                            <img src="img/logo-footer.png" alt="BullsxBears collection" style={{ width:"70px" }}/>
                        </a>
                    </div>
                    <ul className="footer-btns" style={{ marginLeft: "120px" }}>
                        <li style={{ listStyle: "none" }}><a href="#" target="_blank" rel="noreferrer" className="btn-outline"><span className="btn-inner">10k MEMBERS <span><img src="img/discord.png" alt="" />
                         </span></span></a></li>
                        <li style={{ listStyle: "none" }}><a href="#" target="_blank" rel="noreferrer" className="btn-outline btn-twitter"><span className="btn-inner">11k FOLLOWERS <span className="icon-twitter1 icon"><img src="img/twitter.png" alt="" /></span></span></a></li>
                    </ul>
                    <ul className="footer-nav">
                        <li style={{ listStyle: "none" }}><a href="#" target="_blank" rel="noreferrer">
                            <img src="img/youtube.png" alt="Opensea" />
                        </a></li>
                        <li style={{ listStyle: "none" }}><a href="#" target="_blank" rel="noreferrer">
                            <img src="img/opensea.svg" alt="Opensea" />
                        </a></li>
                        <li style={{ listStyle: "none" }}><a href="#" target="_blank" rel="noreferrer">
                            <img src="img/discord.svg" alt="discord" />
                        </a></li>
                        <li style={{ listStyle: "none" }}><a href="#" target="_blank" rel="noreferrer" onclick="return!1">
                            <img src="img/twitter.svg" alt="Twitter" />
                        </a></li>
                    </ul>
                </div>
            </div>
            <div className="footer-area">
                <div className="container">
                    <ul className="copyright">
                        <li style={{ listStyle: "none" }}>Copyright © Baby Ghosts 2021</li>
                        <li style={{ listStyle: "none" }}>All Rights Reserved</li>
                        <li style={{ listStyle: "none" }}><a href="terms.html" target="popup" onclick="return window.open(&quot;terms.html&quot;,&quot;popup&quot;,&quot;width=600,height=600&quot;),!1">Terms of Use</a></li>
                    </ul>
                </div>
            </div>
        </footer>)
}