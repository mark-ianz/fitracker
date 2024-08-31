// Update script to set the 'sets' field in all exercises within all documents
db.programs.updateMany(
  { "exercises.sets": { $exists: true } }, // Match documents where `sets` exists in `exercises`
  { 
    $set: { 
      "exercises.$[ex].sets": { "reps": 0, "weight": 0 } // Set default values
    }
  },
  {
    arrayFilters: [
      { "ex.sets": { $eq: [] } } // Match exercises where `sets` is an empty array
    ]
  }
);
