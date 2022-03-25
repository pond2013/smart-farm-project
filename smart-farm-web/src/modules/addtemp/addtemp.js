import React from "react";
import './addtemp.scss'


function Temp(){
    return(
        <>
            <div class="bg">
                <h2>เพิ่มการตั้งค่าอุณหภูมิ</h2>
                <div class="card-temp">
                    <p>อุณหภูมิ</p>
                    <input type="number"></input>
                    <p>ทำงาน (นาที)</p>
                    <input type="number"></input>
                    <p>รีเลย์</p>
                    <div>
                        <input type="checkbox" id="relay1" name="interest" value="relay1"></input>
                        <label for="relay1">รีเลย์ 1</label>
                    </div>
                </div>
                <input type="submit" value="SAVE"></input>
            </div>

        </>
    );

}
export default Temp;