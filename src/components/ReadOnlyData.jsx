import React from "react";
import moment from "moment";

const ReadOnlyData = ({entry, handleEditClick, handleDeleteClick }) => {
    return (
      <div>
        <form className="">
        <div className="col-7 itin content">
             <h1 className="title">{entry.place}</h1>
            </div>
          <div className="row" >
          {/* row justify-content-md-center */}
            <div className="col-md-2 itin content">
              <h4 className="content">Day: {entry.day}</h4>
            </div>
            <div className="col-md-6 itin content">
              <h4 className="content">Date: {moment(entry.date).format('d MMMM, YYYY')}</h4>
            </div>
          </div>
          <div className="row justify-content-md-left">
            <div className="col-md-3 itin content">
              Transport: {entry.transport}
            </div>
            <div className="col-md-3 itin content">
              Overnight: {entry.overnight}
            </div>
            <div className="col col-md-3 itin content">
              Budget: {entry.budget}
            </div>
            <div className="row">
            <div className="col-12 itin content">
              Sightseeing: {entry.sightseeing}
            </div>
          </div>
            <div className="col-md-6 itin"></div>
            <div className="col-10 itin"></div>
            <span className="">
                <button className="btn btn-primary" type="button" onClick={(event) => handleEditClick(event, entry)}>Edit</button>

                <button className="btn btn-danger" type="button" onClick={() => handleDeleteClick(entry.id)}>Delete</button>
            </span>
            <div className="centre" ><h3>~ ~ ~</h3></div>
          </div>
        </form>
        </div>
    )
}

export default ReadOnlyData