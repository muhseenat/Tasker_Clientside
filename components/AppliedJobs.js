import React from 'react'

const AppliedJobs = () => {
  return (


    <>
      <table id="dtBasicExample" className="table table-striped table-bordered mt-5 mb-5" cellspacing="0" width="100%">
        <thead>
          <tr>
            <th className="th-sm">Name
            </th>
            <th className="th-sm">Position
            </th>
            <th className="th-sm">Office
            </th>
            <th className="th-sm">Age
            </th>
            <th className="th-sm">Start date
            </th>
            <th className="th-sm">Salary
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Tiger Nixon</td>
            <td>System Architect</td>
            <td>Edinburgh</td>
            <td>61</td>
            <td>2011/04/25</td>
            <td>$320,800</td>
          </tr>

          <tr>
            <td>Donna Snider</td>
            <td>Customer Support</td>
            <td>New York</td>
            <td>27</td>
            <td>2011/01/25</td>
            <td>$112,000</td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <th>Name
            </th>
            <th>Position
            </th>
            <th>Office
            </th>
            <th>Age
            </th>
            <th>Start date
            </th>
            <th>Salary
            </th>
          </tr>
        </tfoot>
      </table>


    </>
  )
}

export default AppliedJobs