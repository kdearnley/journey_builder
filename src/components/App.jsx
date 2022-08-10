import React, { useState, Fragment } from "react";
import data from "./data.json";
import { nanoid } from "nanoid";
import ReadOnlyData from "./ReadOnlyData";
import EditableData from "./EditableData";
import Header from "./Header";
import Footer from "./Footer";

const App = () => {

  const [entries, setEntries] = useState(data);
  const [addFormData, setAddFormData] = useState({
    day: "",
    date: "",
    place: "",
    sightseeing: "",
    transport: "",
    overnight: "",
    budget: ""
  });

  const [editFormData, setEditFormData] = useState({
    day: "",
    date: "",
    place: "",
    sightseeing: "",
    transport: "",
    overnight: "",
    budget: ""
  });

  const [editEntryId, setEditEntryId] = useState(null);

  const [formKey, setFormKey] = useState(1);

  const handleAddFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;
    const newFormData = { ...addFormData};
    newFormData[fieldName] = fieldValue;

    setAddFormData(newFormData).then(null);

  };

  const handleEditFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;
    const newFormData = { ...editFormData};
    newFormData[fieldName] = fieldValue;

    setEditFormData(newFormData);
  };

  const handleAddFormSubmit = (event) => {
    event.preventDefault();
    const newEntry = {
      id: nanoid(),
      day: addFormData.day,
      date: addFormData.date,
      place: addFormData.place,
      sightseeing: addFormData.sightseeing,
      transport: addFormData.transport,
      overnight: addFormData.overnight,
      budget: addFormData.budget,
    };

    const newEntries = [ ...entries, newEntry];
    setEntries(newEntries);
    setFormKey(formKey + 1);
  };

  const handleEditFormSubmit = (event) => {
    event.preventDefault();

    const editedEntry = {
      id: editEntryId,
      day: editFormData.day,
      date: editFormData.date,
      place: editFormData.place,
      sightseeing: editFormData.sightseeing,
      transport: editFormData.transport,
      overnight: editFormData.overnight,
      budget: editFormData.budget,
    }

    const newEntries = [...entries];

    const index = entries.findIndex((entry)=> entry.id === editEntryId);

    newEntries[index] = editedEntry;

    setEntries(newEntries);
    setEditEntryId(null);

  }

  const handleEditClick = (event, entry) => {
    event.preventDefault();
    setEditEntryId(entry.id);

    const formValues = {
      day: entry.day,
      date: entry.date,
      place: entry.place,
      sightseeing: entry.sightseeing,
      transport: entry.transport,
      overnight: entry.overnight,
      budget: entry.budget,
    }
    setEditFormData(formValues);
  };

  const handleCancelClick = () => {
    setEditEntryId(null);
  }

  const handleDeleteClick = (entryId) => {
    const newEntries = [...entries];

    const index = entries.findIndex((entry)=> entry.id === entryId);

    newEntries.splice(index, 1);

    setEntries(newEntries);
  }

  return <div>
    <Header />
    <div className="background">
    <table className="">
          <div className="row justify-content-md-center" >
          <div><h2>Add to Itinerary</h2></div>
    <div className="card center" >
    <form className="row g-1" onSubmit={handleAddFormSubmit} key={formKey}>
      <div className="col-md-2">
        <label className="form-label">Day</label>
        <input type="text" name="day" className="form-control" placeholder="#" onChange={handleAddFormChange}/>
      </div>
      <div className="col-md-2">
        <label className="form-label">Date</label>
        <input type="date" name="date" className="form-control" onChange={handleAddFormChange}/>
      </div>
      <div className="col-md-8">
        <label className="form-label">Place</label>
        <input type="text" name="place" className="form-control" placeholder="Paris" onChange={handleAddFormChange}/>
      </div>
      <div className="col-12">
        <label className="form-label">Sightseeing</label>
        <textarea rows="3" name="sightseeing" className="form-control" placeholder="See the Effel Tower" onChange={handleAddFormChange}/>
      </div>
      <div className="col-md-6">
        <label className="form-label">Transport</label>
        <input type="text" name="transport" className="form-control" placeholder="i.e: Flight, Train..." onChange={handleAddFormChange}/>
      </div>
      <div className="col-md-6">
        <label className="form-label">Overnight</label>
        <input type="text" name="overnight" className="form-control" placeholder="i.e: Hotel, Camping..." onChange={handleAddFormChange}/>
        </div>
      <div className="mb-3">
        <label className="form-label">Budget</label>
        <input type="text" name="budget" className="form-control" onChange={handleAddFormChange}/>
      </div>
      <div>
      <button type="submit" className="btn btn-primary">Add</button>
      </div>
    </form>
</div>


          <tr className="center"><h2>Itinerary</h2></tr>

    <div className="container card">
      {entries.map((entry) => (
        <Fragment>
          {editEntryId === entry.id ? (
            <EditableData 
            editFormData={editFormData} 
            handleEditFormChange={handleEditFormChange}
            handleEditFormSubmit={handleEditFormSubmit}
            handleCancelClick={handleCancelClick}
            />
          ) : (
            <ReadOnlyData 
            entry={entry}
            handleEditClick={handleEditClick}
            handleDeleteClick={handleDeleteClick}
            />
          )}
        </Fragment>

      ))}
    </div>
    </div>
        </table>
<Footer />
  </div>
  </div>
};

export default App;