import React from 'react';
import './main.scss';

function Main() {
    function switchChecked(){

    }
    return(
        <>
            <div class="bg">
                <div>
                    <div class="card-top">
                        <div class="card-relay">

                        </div>
                        <div class="card-relay">

                        </div>
                        <div class="card-relay">

                        </div>
                        <div class="card-relay">

                        </div>
                    </div>
                    <div>
                        
                    </div>
                    
                    <div class="card-buttom">
                        <div>
                            <div class="text-switch">
                                <label id="auto">Auto</label>
                                <label class="switch">
                                    <input type="checkbox" class="slider" onChange={switchChecked()}></input>
                                    <span class="slider"></span>
                                </label>
                                <label id="manual">Manual</label>
                                
                            </div>
                           
                        </div>
                        
                        <div class="card-relay-buttom">

                        </div>
                        <div class="card-relay-buttom">

                        </div>
                        <div class="card-relay-buttom">

                        </div>
                        <div class="card-relay-buttom">

                        </div>
                    </div>
                </div>
                
                
            </div> 
            

        </>
        
    );
}

export default Main;