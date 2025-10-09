import "./trending.css";

function TrendingPop() {
  return (
    <div className="trending-popup">
      <div className="uno-bx">
        <h4>Top-Search</h4>
        <ul>
          <li>
            <a className="gen-trtsp-img-bx" href="">
              <div className="trtsp-img-bx">
                <img
                  className="trtsp-img"
                  src="images/illustration-images/agbada-two-img.jpg"
                  alt=""
                />
              </div>
              <span>Agbada</span>
            </a>
          </li>
          <li>
            <a className="gen-trtsp-img-bx" href="">
              <div className="trtsp-img-bx">
                <img
                  className="trtsp-img"
                  src="images/illustration-images/native-attire.jpg"
                  alt=""
                />
              </div>
              <span>Native</span>
            </a>
          </li>
          <li>
            <a className="gen-trtsp-img-bx" href="">
              <div className="trtsp-img-bx">
                <img
                  className="trtsp-img"
                  src="images/illustration-images/ankara-women-one.jpg"
                  alt=""
                />
              </div>
              <span>Ankara</span>
            </a>
          </li>
          <li>
            <a className="gen-trtsp-img-bx" href="">
              <div className="trtsp-img-bx">
                <img
                  className="trtsp-img"
                  src="images/illustration-images/fitted-blue-gown.jpg"
                  alt=""
                />
              </div>
              <span>Gowns</span>
            </a>
          </li>
            <li>
            <a className="gen-trtsp-img-bx" href="">
              <div className="trtsp-img-bx">
                <img
                  className="trtsp-img"
                  src="images/illustration-images/pencil-skirt-one.jpg"
                  alt=""
                />
              </div>
              <span>skirts</span>
            </a>
          </li>
        </ul>
      </div>
      <div className="dos-bx">
         <ul>
            <li>
                <a className="trnd-link" href="">
                    <div className="trnd-img-bx">
                        <img className="trnd-img" src="images/illustration-images/men-suit-five.jpg" alt="" />
                    </div>
                    <span className="trnd-title">New Season Look</span>
                </a>
            </li>
         </ul>
      </div>
      <div className="tres-bx">
          <ul>
            <li>
                <a className="trnd-link" href="">
                    <div className="trnd-img-bx">
                        <img className="trnd-img" src="images/illustration-images/women-native-five.jpg" alt="" />
                    </div>
                    <span className="trnd-title">New Season Look</span>
                </a>
            </li>
         </ul>
      </div>
      <div className="cuat-bx">
          <ul>
            <li>
                <a className="trnd-link" href="">
                    <div className="trnd-img-bx">
                        <img className="trnd-img" src="images/illustration-images/men-native-six.jpg" alt="" />
                    </div>
                    <span className="trnd-title">New Season Look</span>
                </a>
            </li>
         </ul>
      </div>
    </div>
  );
}

export default TrendingPop;
