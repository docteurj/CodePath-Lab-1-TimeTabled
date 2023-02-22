import React from "react";
import Event from './Event'


const Calendar = () => {
  return (
    <table>
    <thead>
         <tr>
            <th></th>
            <th>Sunday</th>
            <th>Monday</th>
            <th>Tuesday</th>
            <th>Wednesday</th>
            <th>Thursday</th>
            <th>Friday</th>
            <th>Saturday</th>
        </tr>         
    </thead>
    <tbody>
      <tr>
          <td className="time">8AM</td>
          <Event />
          <Event event='Breakfast🥚' color ='green'location='Metro Diner'/>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
      </tr>
      <tr>
          <td className="time">9AM</td>
          <Event event='Latte ☕️' color ='blue' location='StarBucks'/>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
      </tr>
      <tr>
          <td className="time">10AM</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
      </tr>
      <tr>
          <td className="time">11AM</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
      </tr>
      <tr>
          <td className="time">12PM</td>
          <td></td>
          <td></td>
          <Event event='Brunch 🥞' color ='green' location='Waffle House'/>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
      </tr>
      <tr>
          <td className="time">1PM</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <Event event='Subway 🚊' color ='pink'/>
          <td></td>
          <td></td>
      </tr>
      <tr>
          <td className="time">2PM</td>
          <td></td>
          <td></td>
          <td></td>
          <Event event='Surfing 🌊' color ='blue' location='Beach'/>          
          <td></td>
          <td></td>
          <td></td>
      </tr>
      <tr>
          <td className="time">3PM</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
      </tr>
      <tr>
          <td className="time">4PM</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <Event event='Late Cafe ☕️' color ='blue'/>
          <td></td>
      </tr>
      <tr>
          <td className="time">5PM</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <Event event='Fancy Dinner 🎩' color ='green' location='Burger King'/>
      </tr>
    </tbody>
  </table>

  );
};


export default Calendar;
