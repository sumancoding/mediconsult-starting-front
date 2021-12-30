import React from "react";

function Button() {
  return (
    <div className="drop-down">
      <form>
        <label for="city"> </label>
        <select id="city" name="city">
          <option value="" id="city">
            {" "}
            Please select a city{" "}
          </option>
          <option value="Helsinki" id="city">
            Helsinki
          </option>{" "}
          <option value="Joensuu" id="city">
            Joensuu
          </option>
          <option value="Kuopio" id="city">
            Kuopio
          </option>
          <option value="Oulu" id="city">
            Oulu
          </option>
          <option value="Salo" id="city">
            Salo
          </option>
        </select>
      </form>
    </div>
  );
}

export default Button;
