import React from "react";

const Carousel = () => {
  return (
    <>
      <div
        id="carouselExampleControls"
        class="carousel slide"
        data-ride="carousel"
      >
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img
              src="https://media.contentapi.ea.com/content/dam/eacom/images/2021/03/ea-featured-tile-generic-electronic-arts.png.adapt.crop16x9.1023w.png"
              class="d-block w-100"
              alt="..."
            />
            <div class="carousel-caption justify-content-center align-items-center">
                          <div>
                              <h2>Gameface:EA's Gameplan In 2023.</h2>
                              <p>With the recent partnerships with Japanese Developer Koei Tecmo and Revamp of Battlefield: What is EA's ultimate endgoal for 2023-2024?</p>
                              <span class="btn btn-sm btn-primary">Read More</span>
                          </div>
                      </div>
          </div>
          <div class="carousel-item">
            <img
              src="https://news.microsoft.com/wp-content/uploads/prod/2022/01/header_0120_1920x1080.jpg"
              class="d-block w-100"
              alt="..."
            />
            <div class="carousel-caption justify-content-center align-items-center">
              <div>
                <h2>
                Activision announced that the recently released Call of Duty: Modern Warfare 2 enjoyed the most lucrative launch in the history of the franchise, generating $800 million in just three days after it hit the markets.
                </h2>
                <p>
                The new title has officially surpassed the previous franchise sales records set by MW3 in 2014.{" "}
                </p>
                <span class="btn btn-sm btn-primary">Read More</span>
              </div>
            </div>
          </div>
          <div class="carousel-item">
            <img
              src="https://beebom.com/wp-content/uploads/2020/07/Xbox-logo-evolution-feat..jpg?w=750&quality=75"
              class="d-block w-100"
              alt="..."
            />
            <div class="carousel-caption justify-content-center align-items-center">
              <div>
                <h2>
                Xbox Gaming Group Posts First Quarter (2023) Earnings With Sales Slightly Increasing for Xbox Consoles and Xbox Game Pass.
                </h2>
                <p>
                Xbox Content and Services revenue decreases 3% but overall gaming revenue increased slightly year on year from $3.59 Billion to $3.61 Billion.{" "}
                </p>
                <span class="btn btn-sm btn-primary">Read More</span>
              </div>
            </div>
          </div>
        </div>
        <a
          class="carousel-control-prev"
          href="#carouselExampleControls"
          role="button"
          data-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a
          class="carousel-control-next"
          href="#carouselExampleControls"
          role="button"
          data-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>
    </>
  );
};

export default Carousel;
