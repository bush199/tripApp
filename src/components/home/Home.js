import React from "react";

function Card() {
  return (
    <div className="Card">
      <h3>Trip Events</h3>
      <div className="row row-cols-1 row-cols-md-3 card-hotel">
        <div className="col mb-4">
          <div className="card">
            <img
              src="Delhi.jpg"
              className="card-img-top"
              alt="Delhi"
              height="300px"
              width="300px"
            />
            <div className="card-body">
              <h5 class="card-title">Delhi</h5>
              <p class="card-text">
               {/* Rating : <span class="fa fa-star ch ecked"></span>  */}
                 {/* <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span> */}
              </p>
            </div>
          </div>
        </div>
        <div className="col mb-4">
          <div className="card">
            <img src="Goa.jpg" className="card-img-top"  height="300px"
              width="300px" alt="abs" />
            <div className="card-body">
              <h5 className="card-title">Goa</h5>
              <p className="card-text">
                {/* Rating : <span className="fa fa-star checked"></span>
                <span classNameName="fa fa-star checked"></span>
                <span classNameName="fa fa-star checked"></span>
                <span classNameName="fa fa-star checked"></span>
                <span classNameName="fa fa-star"></span> */}
              </p>
            </div>
          </div>
        </div>
        <div className="col mb-4">
          <div className="card">
            <img src="Karwar.jpg" className="card-img-top"   height="300px"
              width="300px" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Karwar</h5>
              <p className="card-text">
                {/* Rating : <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star"></span> */}
              </p>
            </div>
          </div>
        </div>
        <div className="col mb-4">
          <div className="card">
            <img src="kashmir.jpg" className="card-img-top"  height="300px"
              width="300px"
              alt="..." />
            <div className="card-body">
              <h5 className="card-title">Kashmir</h5>
              <p className="card-text">
                {/* Rating : <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star"></span>
                <span className="fa fa-star"></span> */}
              </p>
            </div>
          </div>
        </div>
        <div className="col mb-4">
          <div className="card">
            <img src="Kerala.jpeg" className="card-img-top"  height="300px"
              width="300px"  alt="..." />
            <div className="card-body">
              <h5 className="card-title">Kerala</h5>
              <p className="card-text">
                {/* Rating : <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star"></span>
                <span className="fa fa-star"></span> */}
              </p>
            </div>
          </div>
        </div>
        <div className="col mb-4">
          <div className="card">
            <img src="Meghalaya.jpg" className="card-img-top"  height="300px"
              width="300px"  alt="..." />
            <div className="card-body">
              <h5 className="card-title">Meghalaya</h5>
              <p className="card-text">
                {/* Rating : <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star"></span>
                <span className="fa fa-star"></span> */}
              </p>
            </div>
          </div>
        </div>
        <div className="col mb-4">
          <div className="card">
            <img src="Shimla.jpg" className="card-img-top"  height="300px"
              width="300px"  alt="..." />
            <div className="card-body">
              <h5 className="card-title">Shimla</h5>
              <p className="card-text">
                {/* Rating : <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star"></span>
                <span className="fa fa-star"></span> */}
              </p>
            </div>
          </div>
        </div>
        <div className="col mb-4">
          <div className="card">
            <img src="Rajasthan1.jpeg" className="card-img-top"  height="300px"
              width="300px"  alt="..." />
            <div className="card-body">
              <h5 className="card-title">Rajasthan</h5>
              <p className="card-text">
                {/* Rating : <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star"></span>
                <span className="fa fa-star"></span> */}
              </p>
            </div>
          </div>
        </div>
        <div className="col mb-4">
          <div className="card">
            <img src="Leh Laddak.jpg" className="card-img-top"   height="300px"
              width="300px" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Leh Laddak</h5>
              <p className="card-text">
                {/* Rating : <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star"></span> */}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    
  );
}

export default Card;
