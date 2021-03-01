import React from 'react'

const Members = () => {
    return (
        <div className="col-sm-4">
          <div className="panel panel-primary">
            <div className="panel-heading top-bar">
              <div className="col-md-8 col-xs-8">
                <h3 className="panel-title">
                  <span className="glyphicon glyphicon-book"></span> Contacts
                </h3>
              </div>
            </div>
            
            <table className="table table-striped table-hover">
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Masha</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Vasya</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>Inna</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
    )
}

export default Members
