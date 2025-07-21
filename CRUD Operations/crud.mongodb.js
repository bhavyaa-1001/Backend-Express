use("new")

// console.log(db)
db.createCollection("courses")
db.courses.insertOne({
    name: "Bhavya",
    age: 22,
    assignments: [
        { title: "Assignment 1", score: 85 },
        { title: "Assignment 2", score: 90 },
        { title: "Assignment 3", score: 78 }
    ],
    completed: false,
})