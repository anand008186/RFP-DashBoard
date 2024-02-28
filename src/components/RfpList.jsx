import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const rfpList = [
  // ... your mock data as shown earlier
  {
    id: 1,
    status: 'Active',
    cashId: 'CASH-123',
    dueDate: '2021-05-01',
    lanes: 5,
    partners: 3,
    },
    {
    id: 2,
    status: 'Active',
    cashId: 'CASH-124',
    dueDate: '2021-05-02',
    lanes: 6,
    partners: 4,
    },
    {
    id: 3,
    status: 'Active',
    cashId: 'CASH-125',
    dueDate: '2021-05-03',
    lanes: 7,
    partners: 5,
    },
    {
    id: 4,
    status: 'Active',
    cashId: 'CASH-126',
    dueDate: '2021-05-04',
    lanes: 8,
    partners: 6,
    },
    {
    id: 5,
    status: 'Active',
    cashId: 'CASH-127',
    dueDate: '2021-05-05',
    lanes: 9,
    partners: 7,
    }
    ];
const RFPList = () => {
  return (
    <div className="container mt-5">
      <h1 className="mb-4">RFP List</h1>
      <div className="row mb-3">
        <div className="col">
          <button className="btn btn-primary">Create</button>
        </div>
        <div className="col">
          <input type="text" className="form-control" placeholder="Search in table" />
        </div>
        <div className="col">
          <input type="date" className="form-control" />
        </div>
      </div>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>RFP No.</th>
            <th>Status</th>
            <th>CASH ID</th>
            <th>Due Date</th>
            <th>No. Of Lanes</th>
            <th>No. Of Business Partner Involved</th>
            <th>Comm</th>
          </tr>
        </thead>
        <tbody>
          {rfpList.map((rfp) => (
            <tr key={rfp.id}>
              <td>{rfp.id}</td>
              <td>{rfp.status}</td>
              <td>{rfp.cashId}</td>
              <td>{rfp.dueDate}</td>
              <td>{rfp.lanes}</td>
              <td>{rfp.partners}</td>
              <td>Lorem the pri</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RFPList;
