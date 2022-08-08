import React from "react";

const EditableData = ({editFormData, handleEditFormChange, handleEditFormSubmit, handleCancelClick}) => {
    return (
        <div className="">
        <form className="row g-1" onSubmit={handleEditFormSubmit}>
            <div className="col-md-2">
                <label className="form-label">Day</label>
                <input type="text" name="day" className="form-control" value={editFormData.day} onChange={handleEditFormChange}/>
            </div>
            <div className="col-md-2">
                <label className="form-label">Date</label>
                <input type="date" name="date" className="form-control" value={editFormData.date} onChange={handleEditFormChange}/>
            </div>
            <div className="col-8">
                <label className="form-label">Place</label>
                <input type="text" name="place" className="form-control" value={editFormData.place} onChange={handleEditFormChange}/>
            </div>
            <div className="col-12">
                <label className="form-label">Sightseeing</label>
                <textarea rows="3" name="sightseeing" className="form-control" value={editFormData.sightseeing} onChange={handleEditFormChange}/>
            </div>
            <div className="col-md-6">
                <label className="form-label">Transport</label>
                <input type="text" name="transport" className="form-control" value={editFormData.transport} onChange={handleEditFormChange}/>
            </div>
            <div className="col-md-6">
                <label className="form-label">Overnight</label>
                <input type="text" name="overnight" className="form-control" value={editFormData.overnight} onChange={handleEditFormChange}/>
            </div>
            <div className="col-md-6">
                <label className="form-label">Budget</label>
                <input type="text" name="budget" className="form-control" value={editFormData.budget} onChange={handleEditFormChange}/>
            </div>
            <div className="mb-3">
                <button type="submit" class="btn btn-primary">Save</button>
                <button type="button" class="btn btn-secondary" onClick={handleCancelClick}>Cancel</button>
            </div>
            </form>
        </div>
    );
}

export default EditableData