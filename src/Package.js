import React, { useState } from "react";
import PackageApi from "./PackageApi";
import StarRating from "./StarRating";

function Package() {
  let [packageList] = useState(PackageApi);

  return (
    <>
      <div class="container">
        <h1 class="text-center">Packages</h1>

        <div class="row second-section">
          {packageList.map((item) => {
            return (
              <>
                <div class="col-md-4">
                  <div class="card">
                    <img src={item.images} alt="noimage" />
                    <h2 class="text-center">{item.country_name}</h2>
                    <p>{item.package_description}</p>
                    {/* <div class="rating">
                      <i class="fa fa-star rating-color"></i>
                      <i class="fa fa-star rating-color"></i>
                      <i class="fa fa-star rating-color"></i>
                      <i class="fa fa-star rating-color"></i>
                      <i class="fa fa-star-half-o rating-color"></i>
                    </div> */}
                    <StarRating initialRating={item.rating} />
                    <h5 class="price">Price: {item.package_price}</h5>
                    <button class="book-now">Book now</button>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Package;
