import React, { useState } from 'react'
import '../Component/GlobalVarible'
export default function FinalPage() {
    let gkScore = localStorage.getItem('QuizScore');
    
    let Css = localStorage.getItem('CssQuestionScore');
    let user = localStorage.getItem('userName');

    var objectArray = {
        name: user,
        GK: gkScore,
        Css: Css
    }

    global.dataArray.push(objectArray)

    console.log("=====>", global.dataArray)

    return (
        <div>

            {/* <h1>FinalPage</h1>

            <table class="table">
                <thead>
                    <tr>

                        <th scope="col">Name</th>
                        <th scope="col">GKScore</th>
                        <th scope="col">CssScore</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        global.dataArray.map((item) => {
                            return (
                                <tr>
                                    <th scope="row">{item?.name}</th>
                                  
                                    <td>{item?.GK}</td>
                                    <td>{item?.Css}</td>
                                </tr>
                            )
                        })
                    }



                </tbody>
            </table> */}
        </div>

    )


}
