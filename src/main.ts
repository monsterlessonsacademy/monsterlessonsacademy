class FileSystem {
  writeToFile(data) {
    // Implementation
  }
}

class ExternalDB {
  writeToDatabase(data) {
    // Implementation
  }
}

class LocalPersistance {
  push(data) {
    // Implementation
  }
}

class PersistanceManager {
  saveData(db, data) {
    if (db instanceof FileSystem) {
      db.writeToFile(data);
    }

    if (db instanceof ExternalDB) {
      db.writeToDatabase(data);
    }

    if (db instanceof LocalPersistance) {
      db.push(data);
    }
  }
}

