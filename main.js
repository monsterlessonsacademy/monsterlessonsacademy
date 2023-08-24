class FileSystem {
  save(data) {
    // Implementation
  }
}

class ExternalDB {
  save(data) {
    // Implementation
  }
}

class LocalPersistance {
  save(data) {
    // Implementation
  }
}

class PersistanceManager {
  saveData(db, data) {
    db.save(data);
  }
}
