function Booking() {
  //date validation

  function validateDates() {
    var startDate = document.getElementById("start_date").value;
    var endDate = document.getElementById("end_date").value;

    if (endDate <= startDate) {
      alert("End date should be greater than the start date.");
      return false; // Prevent the form from submitting
    }
    alert("Form submitted successfully!");
    return true; // Allow the form to submit
  }

  function setMinDate() {
    var today = new Date().toISOString().split("T")[0];
    document.getElementById("start_date").setAttribute("min", today);
  }
  function setMinDate2() {
    var today = new Date().toISOString().split("T")[0];
    document.getElementById("end_date").setAttribute("min", today);
  }

  return (
    <>
      <div class="container-fluid" style={{ backgroundColor: "white" }}>
        <h4 class="text-center" id="booking">
          <br />
          <br />
        </h4>
        <div class="row first-section">
          <div class="col-md-6 logo-section">
            <img src="images/illustration.svg" alt="no" class="logo" />
          </div>
          <div class="col-md-6 booking-section">
            <div class="container">
              <form action="#" onSubmit={validateDates}>
                <label for="country">Country</label>
                <select id="country" name="country" required>
                  <option value="australia">United states</option>
                  <option value="canada">India</option>
                  <option value="usa">France</option>
                  <option value="usa">Germany</option>
                </select>

                <label for="lname">How many person</label>
                <input
                  type="number"
                  id="quantity"
                  name="quantity"
                  min="1"
                  max="30"
                  required
                />

                <div class="row">
                  <div class="col-md-6">
                    <label for="startdate">Start date:</label>
                    <input
                      type="date"
                      id="start_date"
                      name="startdate"
                      onFocus={setMinDate}
                      required
                    />
                  </div>
                  <div class="col-md-6">
                    <label for="enddate">End date:</label>
                    <input
                      type="date"
                      id="end_date"
                      name="enddate"
                      onFocus={setMinDate2}
                      required
                    />
                  </div>
                </div>

                <label for="description">description</label>
                <textarea
                  id="description"
                  name="description"
                  rows="4"
                  cols="40"
                  minlength="50"
                  maxlength="500"
                  required
                ></textarea>
                <br />
                <div class="text-center">
                  <input
                    id="book-now"
                    class="btn btn-md"
                    type="submit"
                    value="Book now"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <br />
    </>
  );
}

export default Booking;
