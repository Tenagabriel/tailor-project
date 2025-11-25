import "./reviews.css"

function Reviews() {
    return (
        <div className="rev-max-bx">
            <div className="reviews-bx">
                <h1 className="reviews-hdlne">What Our Users Say</h1>
                <p className="reviews-txt">
                    Hear from our satisfied tailors and customers who have transformed their style and business with My-Tailor.
                </p>
                <div className="reviews-wrtp-bx">
                    <div className="rev-qt-img-bx">
                        <img className="reviews-qt-img" src="images/icons/quote.png" alt="" />
                    </div>
                    <div className="reviews-wrtp">
                       <div className="reviews-psnl">
                           <p>
                               “My-Tailor exceeded my expectations from start to finish. Finding the right tailor was quick,
                                communication was easy, and every detail of my request was understood perfectly. The platform felt smooth,
                                secure, and very professional. I never imagined getting custom clothing could be this convenient.
                                I’ll definitely use it again.”
                           </p>
                             <h4>- Aisha K.</h4>
                       </div>
                         <div className="reviews-psnl">
                           <p>
                               “My-Tailor has transformed how I find customers and showcase my work.
                                The platform is easy to use, communication with clients is smooth, and I get consistent quality leads.
                                Managing orders and sharing updates feels effortless. It has genuinely helped me grow my business and connect with customers
                                who value my skill.”
                           </p>
                                <h4>- Tunde S.</h4>
                       </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Reviews;