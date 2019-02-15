console.log("Script connected");

// Build a Library Project
console.log("Build a Library Project");

class Media {
    constructor(title) {
        this._title = title;
        this._isCheckedOut = false;
        this._ratings = [];
    }
    get title() {
        return this._title;
    }
    get isCheckedOut() {
        return this._isCheckedOut;
    }
    get ratings() {
        return this._ratings;
    }
    set isCheckedOut(newValue) {
        this._isCheckedOut = newValue;
    }
    toggleCheckOutStatus() {
        this._isCheckedOut = !this._isCheckedOut;
    }
    getAverageRating() {
        let averageRating = this._ratings.reduce((previousValue, currentValue, index, array) => {
            return previousValue + currentValue / array.length;
        }, 0);

        return averageRating;
    }
    addRating(newRating) {
        if (newRating >= 1 && newRating <= 5) {
            return this._ratings.push(newRating);
        }
    }
}

class Book extends Media {
    constructor(author , title ,pages){
        super(title);
        this._author = author;
        this._pages = pages;
    }
    get author(){
        return this._author;
    }
    get pages(){
        return this._pages;
    }

}

class Moive extends Media {
    constructor(director , title ,runTime){
        super(title);
        this._director = director;
        this._runTime = runTime;
    }
    get director(){
        return this._director;
    }
    get runTime(){
        return this._runTime;
    }
    
}

class CD extends Moive {
    constructor(artist , title ){
        super(title);
        this._artist = artist;
        this._songs = ['tere naam','Patola','suit suit'];
    }
    get artist(){
        return this._artist;
    }
    get songs(){
        return this._songs;
    }
    shuffle(){
        var a = Math.floor(Math.random * 3);

    }

}

const historyOfEverything =  new Book('Bill Bryson', 'A Short History of Nearly Everything',544)
historyOfEverything.toggleCheckOutStatus();
console.log(historyOfEverything._isCheckedOut);
historyOfEverything.addRating(4);
historyOfEverything.addRating(5);
historyOfEverything.addRating(5);
console.log(historyOfEverything.getAverageRating());

const speed = new Moive('Jan de Bont','Speed',116);
speed.toggleCheckOutStatus();
console.log(speed._isCheckedOut);
speed.addRating(1);
speed.addRating(1);
speed.addRating(5);
console.log(speed.getAverageRating());

// School Catalogue Project
console.log("School Catalogue Project");


class School {
    constructor(name ,level ,numberOfStudents ) {
        this._name = name,
        this._level = level,
        this._numberOfStudents = numberOfStudents
    }
    get name(){
        return this._name;
    }
    get level(){
        return this._level;
    }
    get numberOfStudents() {
        return this._numberOfStudents;
    }
    set numberOfStudents(newNumberOfStudents) {
        if (typeof newNumberOfStudents === 'number') {
            return this._numberOfStudents = newNumberOfStudents;
        } else {
            console.log('Invalid input: numberOfStudents must be set to a Number.');
        }
        
    }
    quickFacts(){
        console.log(`${this._name} educates ${this._numberOfStudents} students at the ${this._level} school level`);
    }
    static pickSubstituteTeacher(substituteTeachers) {
        let randomNum = Math.floor(Math.random() * substituteTeachers.length);
        return substituteTeachers[randomNum];
    }

}

class PrimarySchool extends School {
    constructor(name ,numberOfStudents,pickupPolicy) {
        super(name ,'primary' ,numberOfStudents);
        this._pickupPolicy = pickupPolicy;
    }
    get pickupPolicy(){
        return this._pickupPolicy;
    }
}

class Middle extends School {
    constructor(name ,level ,numberOfStudents){
        super(name ,level ,numberOfStudents);

    }
}

class HighSchool extends School {
    constructor(name ,numberOfStudents, sportsTeams){
        super(name ,'high' ,numberOfStudents);
        this._sportsTeams = sportsTeams;
    }

    get sportsTeams() {
        return this._sportsTeams;
    }
}

const lorraineHansbury = new PrimarySchool('Lorraine Hansbury',514,'Students must be picked up by a parent, guardian, or a family member over the age of 13.');
lorraineHansbury.quickFacts();

School.pickSubstituteTeacher(['Jamal Crawford', 'Lou Williams', 'J. R. Smith', 'James Harden', 'Jason Terry', 'Manu Ginobli']);

const alSmith = new HighSchool('Al E. Smith',415,['Baseball', 'Basketball', 'Volleyball', 'Track and Field']);

console.log(alSmith.sportsTeams);



