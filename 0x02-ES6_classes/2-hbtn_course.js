export default class HolbertonCourse {
  constructor(name, length, students) {
    this._name = name;
    this._length = length;
    this._students = students;
  }

  set name(newName) {
    if (typeof newName === 'string') {
      this._name = newName;
    } else {
      throw new Error('Name must be a string');
    }
  }

  get name() {
    return this._name;
  }

  set length(newLength) {
    if (typeof newLength === 'number') {
      this._length = newLength;
    } else {
      throw new Error('Length must be a number');
    }
  }

  get length() {
    return this._length;
  }

  set students(newStudents) {
    if (Array.isArray(newStudents) && newStudents.every((item) => typeof item === 'string')) {
      this._students = newStudents;
    } else {
      throw new Error('Students must be an array of strings');
    }
  }

  get students() {
    return this._students;
  }
}
