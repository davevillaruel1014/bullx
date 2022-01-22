export default function Footer(props) {
  return (<footer id="footer">
            <div className="footer-block">
                <div className="container">
                    <div className="footer-logo">
                        <a href="#section1">
                            <img src="favicon.png" alt="Baby Ghosts NFT. collection" />
                        </a>
                    </div>
                    <ul className="footer-btns">
                        <li style={{ listStyle: "none" }}><a href="https://discord.gg/BabyGhosts" target="_blank" rel="noreferrer" className="btn-outline"><span className="btn-inner">10k MEMBERS <span className="icon-discord1 icon"></span></span></a></li>
                        <li style={{ listStyle: "none" }}><a href="https://twitter.com/BabyGhosts_NFT" target="_blank" rel="noreferrer" className="btn-outline btn-twitter"><span className="btn-inner">11k FOLLOWERS <span className="icon-twitter1 icon"></span></span></a></li>
                    </ul>
                    <ul className="footer-nav">
                        <li style={{ listStyle: "none" }}><a href="https://opensea.io/collection/babyghosts" target="_blank" rel="noreferrer">
                            <img src="img/opensea.svg" alt="Opensea" />
                        </a></li>
                        <li style={{ listStyle: "none" }}><a href="https://discord.gg/BabyGhosts" target="_blank" rel="noreferrer">
                            <img src="img/discord.svg" alt="discord" />
                        </a></li>
                        <li style={{ listStyle: "none" }}><a href="https://twitter.com/BabyGhosts_NFT" target="_blank" rel="noreferrer" onclick="return!1">
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