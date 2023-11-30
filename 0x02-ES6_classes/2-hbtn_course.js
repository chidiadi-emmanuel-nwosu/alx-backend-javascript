export default class HolbertonCourse {
  constructor(name, length, students) {
    this._name = name;
    this._length = length;
    this._students = students;
  }

  set name(setName) {
    if (typeof setName === 'string') {
      this._name = setName;
    } else {
      throw new Error('Name must be a string');
    }
  }

  get name() {
    return `${this._name}`;
  }

  set length(setLength) {
    if (typeof setLength === 'number') {
      this._length = setLength;
    } else {
      throw new Error('Length must be a number');
    }
  }

  get length() {
    return `${this._length}`;
  }

  set students(setStudents) {
    if (Array.isArray(setStudents) && setStudents.every((item) => typeof item === 'string')) {
      this._students = setStudents;
    } else {
      throw new Error('Students must be an array of strings');
    }
  }

  get students() {
    return `${this._students}`;
  }
}
