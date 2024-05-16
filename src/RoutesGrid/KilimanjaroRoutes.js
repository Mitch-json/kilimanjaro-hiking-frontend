import React from 'react'
import { Link } from 'react-router-dom'

function KilimanjaroRoutes() {
  return (
    <>
        <Link to="/routes/selected/northern-circuit-route" className="grid-item cat-1">
            <div className="cnt-box cnt-box-info boxed" data-href="treks-single.html">
                <div className="extra-field">From $2,500</div>
                <div className="img-box" >
                    <img src={require('../assets/routes/northern-circuit.jpg')} alt="" />
                </div>
                <div className="caption">
                    <h2>Northern Circuit Route</h2>
                    <div className="cnt-info">
                        <div><span>Days</span><span>7</span></div>
                        <div><span>Difficulty</span><span>Hard</span></div>
                    </div>
                    <p>
                        Monte bianco is a mountain located in the deep nature and sourrounded by animals.
                    </p>
                    <div className="bottom-info">
                        Mt Kilimanjaro, Tanzania
                    </div>
                </div>
            </div>
        </Link>
        <div className="grid-item cat-2" >
            <div className="cnt-box cnt-box-info boxed" data-href="treks-single.html">
                <div className="extra-field">From $2,500</div>
                <Link className="img-box" to="/routes/selected/lemosho-route">
                    <img src={require('../assets/routes/lemosho.jpg')} alt="" />
                </Link>
                <div className="caption">
                    <h2>Lemosho Route</h2>
                    <div className="cnt-info">
                        <div><span>Days</span><span>7</span></div>
                        <div><span>Difficulty</span><span>Medium</span></div>
                    </div>
                    <p>
                        Civetta mountain is a mountain located in the nature and sourrounded by animals.
                    </p>
                    <div className="bottom-info">
                        Mt Kilimanjaro, Tanzania
                    </div>
                </div>
            </div>
        </div>
        <div className="grid-item cat-1 cat-3 cat-4">
            <div className="cnt-box cnt-box-info boxed" data-href="treks-single.html">
                <div className="extra-field">From $2,500</div>
                <Link className="img-box" to="/routes/selected/machame-route">
                    <img src={require('../assets/routes/machame.jpg')} alt="" />
                </Link>
                <div className="caption">
                    <h2>Machame Route</h2>
                    <div className="cnt-info">
                        <div><span>Days</span><span>7</span></div>
                        <div><span>Difficulty</span><span>Hard</span></div>
                    </div>
                    <p>
                        Nevegal mountain is a mountain located in the nature and sourrounded by animals.
                    </p>
                    <div className="bottom-info">
                        Mt Kilimanjaro, Tanzania
                    </div>
                </div>
            </div>
        </div>
        <div className="grid-item cat-2">
            <div className="cnt-box cnt-box-info boxed" data-href="treks-single.html">
                <div className="extra-field">From $2,500</div>
                <Link className="img-box" to="/routes/selected/rongai-route">
                    <img src={require('../assets/routes/rongai.jpg')} alt="" />
                </Link>
                <div className="caption">
                    <h2>Rongai Route</h2>
                    <div className="cnt-info">
                        <div><span>Days</span><span>7</span></div>
                        <div><span>Difficulty</span><span>Medium</span></div>
                    </div>
                    <p>
                        Glacial is a mountain glacier located in the deep nature and sourrounded by animals.
                    </p>
                    <div className="bottom-info">
                        Mt Kilimanjaro, Tanzania
                    </div>
                </div>
            </div>
        </div>
        <div className="grid-item cat-1">
            <div className="cnt-box cnt-box-info boxed" data-href="treks-single.html">
                <div className="extra-field">From $2,500</div>
                <Link className="img-box" to="/routes/selected/marangu-route">
                    <img src={require('../assets/routes/marangu.jpg')} alt="" />
                </Link>
                <div className="caption">
                    <h2> Marangu “Coca-Cola” Route</h2>
                    <div className="cnt-info">
                        <div><span>Days</span><span>7</span></div>
                        <div><span>Difficulty</span><span>Hard</span></div>
                    </div>
                    <p>
                        A trip for the whole family located in the deep nature and sourrounded by animals.
                    </p>
                    <div className="bottom-info">
                        Mt Kilimanjaro, Tanzania
                    </div>
                </div>
            </div>
        </div>
        <div className="grid-item cat-2">
            <div className="cnt-box cnt-box-info boxed" data-href="treks-single.html">
                <div className="extra-field">From $2,500</div>
                <Link className="img-box" to="/routes/selected/umbwe-route">
                    <img src={require('../assets/routes/umbwe.jpg')} alt="" />
                </Link>
                <div className="caption">
                    <h2>Umbwe Route</h2>
                    <div className="cnt-info">
                        <div><span>Days</span><span>7</span></div>
                        <div><span>Difficulty</span><span>Hard</span></div>
                    </div>
                    <p>
                        Monte Albert is a mountain located in the deep nature and sourrounded by animals.
                    </p>
                    <div className="bottom-info">
                        Mt Kilimanjaro, Tanzania 
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default KilimanjaroRoutes