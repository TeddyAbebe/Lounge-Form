import React, { useState } from "react";

const Form = () => {
  const [selectedLounge, setSelectedLounge] = useState("");
  const [arrivalDate, setArrivalDate] = useState("");
  const [arrivalTime, setArrivalTime] = useState("");
  const [flightNumber, setFlightNumber] = useState("");
  const [numAdults, setNumAdults] = useState(1);
  const [numChildren, setNumChildren] = useState(0);
  const [numInfants, setNumInfants] = useState(0);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [agreeToConditions, setAgreeToConditions] = useState(false);

  const handleFormSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="bgPic flex flex-col">
      <form
        onSubmit={handleFormSubmit}
        className="flex flex-col justify-center items-start pl-[5%] gap-4 bg-black bg-opacity-60 backdrop-blur-sm w-full min-h-screen "
      >
        <div className="flex flex-col gap-1">
          <label
            htmlFor="lounge"
            className="text-white text-xl font-medium font-mono"
          >
            Lounge selected
          </label>

          <select
            id="lounge"
            value={selectedLounge}
            onChange={(e) => setSelectedLounge(e.target.value)}
            className="border px-10 rounded-[5px]"
          >
            <option value="MSQ - Domestic Lounge">MSQ - Domestic Lounge</option>
            <option value="JFK - Delta Sky Club">JFK - Delta Sky Club</option>
            <option value="LHR - British Airways Galleries Club">
              LHR - British Airways Galleries Club
            </option>
            <option value="CDG - Air France Lounge">
              CDG - Air France Lounge
            </option>
            <option value="SIN - Singapore Airlines SilverKris Lounge">
              SIN - Singapore Airlines SilverKris Lounge
            </option>
            <option value="ICN - Korean Air Lounge">
              ICN - Korean Air Lounge
            </option>
            <option value="HKG - Cathay Pacific The Pier Lounge">
              HKG - Cathay Pacific The Pier Lounge
            </option>
            <option value="SYD - Qantas Club">SYD - Qantas Club</option>
            <option value="ORD - United Club">ORD - United Club</option>
            <option value="FRA - Lufthansa Business Lounge">
              FRA - Lufthansa Business Lounge
            </option>
            <option value="AMS - KLM Crown Lounge">
              AMS - KLM Crown Lounge
            </option>
            <option value="BKK - Thai Airways Royal Silk Lounge">
              BKK - Thai Airways Royal Silk Lounge
            </option>
            {/* Add more options here */}
          </select>
        </div>

        <div className="flex flex-col gap-1">
          <label
            htmlFor="arrival-date"
            className="text-white text-xl font-medium font-mono"
          >
            Date and time of arrival at lounge
          </label>

          <div className="flex gap-2">
            <input
              id="arrival-date"
              type="date"
              required
              value={arrivalDate}
              onChange={(e) => setArrivalDate(e.target.value)}
              className="border px-1 rounded-[5px]"
            />
            <input
              type="time"
              value={arrivalTime}
              required
              onChange={(e) => setArrivalTime(e.target.value)}
              className="border px-1 rounded-[5px]"
            />
          </div>
        </div>

        <div>
          <input
            id="flight-number"
            type="text"
            value={flightNumber}
            placeholder="Flight number *"
            required
            onChange={(e) => setFlightNumber(e.target.value)}
            className="border px-1 rounded-[5px]"
          />
        </div>

        <div className="flex flex-col gap-3 w-[40%]">
          <label
            htmlFor="num-passengers"
            className="text-white text-lg font-medium font-mono"
          >
            No. of passengers
          </label>
          <div className="flex">
            <div className="flex flex-col gap-4 w-[80%]">
              <div className="flex justify-between gap-4">
                <label
                  htmlFor="num-adults"
                  className="text-sm text-white w-[50%] font-mono"
                >
                  Adults (12+) *
                </label>

                <select
                  id="num-adults"
                  type="number"
                  min="1"
                  required
                  value={numAdults}
                  onChange={(e) => setNumAdults(parseInt(e.target.value))}
                  className="border px-3 rounded-[5px] w-[30%]"
                >
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                  <option value="9">9</option>
                </select>
                <p className="w-[20%] text-white">US$34</p>
              </div>

              <div className="flex justify-between gap-4">
                <label
                  htmlFor="num-children"
                  className="text-sm text-white w-[50%] font-mono"
                >
                  Children (2-11) *
                </label>

                <select
                  id="num-children"
                  type="number"
                  min="0"
                  required
                  value={numChildren}
                  onChange={(e) => setNumChildren(parseInt(e.target.value))}
                  className="border px-3 rounded-[5px] flex w-[30%]"
                >
                  <option value="0">0</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                  <option value="9">9</option>
                </select>
                <p className="w-[20%] text-white">US$34</p>
              </div>

              <div className="flex justify-between gap-4">
                <label
                  htmlFor="num-infants"
                  className="text-sm text-white w-[50%] font-mono"
                >
                  Infants (0-1) *
                </label>

                <select
                  id="num-infants"
                  type="number"
                  required
                  min="0"
                  value={numInfants}
                  onChange={(e) => setNumInfants(parseInt(e.target.value))}
                  className="border  px-3 rounded-[5px] w-[30%]"
                >
                  <option value="0">0</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                  <option value="9">9</option>
                </select>
                <p className="w-[20%] text-white">US$0</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <div className="flex flex-col">
            <label
              htmlFor="adult1"
              className="tex-sm text-white font-medium font-mono"
            >
              Adult 1
            </label>
            <select
              id="adult1"
              required
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className="border rounded-[5px]"
            >
              <option value="Mr">Mr.</option>
              <option value="Mr">Mrs</option>
              <option value="Mr">Ms.</option>
              <option value="Mr">Miss</option>
              <option value="Mr">Dr.</option>
              <option value="Mr">Sir</option>
              <option value="Mr">Lady</option>
            </select>
          </div>

          <div className="flex flex-col">
            <label
              htmlFor="first-name"
              className="tex-sm text-white font-medium font-mono"
            >
              First name *
            </label>
            <input
              id="first-name"
              required
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className="border rounded-[5px]"
            />
          </div>

          <div className="flex flex-col">
            <label
              htmlFor="last-name"
              className="tex-sm text-white font-medium font-mono"
            >
              Last name *
            </label>
            <input
              id="last-name"
              required
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className="border rounded-[5px]"
            />
          </div>
        </div>

        <div>
          <input
            id="conditions-checkbox"
            required
            type="checkbox"
            checked={agreeToConditions}
            onChange={(e) => setAgreeToConditions(e.target.checked)}
            className="border mr-2"
          />
          <label htmlFor="conditions-checkbox" className="text-white font-mono">
            I confirm that I have read and agree to the Conditions. *
          </label>
        </div>

        <div className="w-1/4 flex justify-center items-center">
          <button
            type="submit"
            className="bg-black text-white font-mono px-4 py-3 mt-4 rounded-md font-bold border duration-500 border-black hover:bg-white hover:text-black text-md"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
