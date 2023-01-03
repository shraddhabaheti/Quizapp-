import React from 'react'

export default function Admin() {
  return (
    <div>
      <h1>FinalPage</h1>

<table class="table table-bordered border-info">
    <thead>
        <tr className='align-middle'>

            <th scope="col">Name</th>
            <th scope="col">GKScore</th>
            <th scope="col">CssScore</th>
        </tr>
    </thead>
    <tbody>
        {
            global.dataArray.map((item) => {
                return (
                    <tr className='align-middle'>
                        <th scope="row">{item?.name}</th>
                      
                        <td>{item?.GK}</td>
                        <td>{item?.Css}</td>
                    </tr>
                )
            })
        }



    </tbody>
</table>

    </div>
  )
}
