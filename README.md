# JavaScript User Registry

A small **User Registry system** built with JavaScript.

This project was created to practice important JavaScript concepts such as:

* `this`
* Classes
* `User.prototype`
* Objects
* Arrays
* Destructuring
* Spread syntax
* Rest parameters
* Loops
* Functions
* `filter()`
* `reduce()`
* `sort()`

## 📌 Project Goal

The goal of this project is to build a simple system that can:

* Create users
* Give each user a unique ID
* Add and remove skills
* Search users
* Find users by ID
* Calculate user statistics
* Find users with the most skills

## 🏗️ Project Structure

The project contains two main classes:

### User

The `User` class contains:

* `id`
* `name`
* `age`
* `skills`

Methods:

```text
addSkills(...skills)
removeSkill(skill)
getProfile()
```

The following methods are added using `User.prototype`:

```text
introduce()
isAdult()
```

### UserRegistry

The `UserRegistry` class manages multiple users.

Methods:

```text
addUser(user)
removeUser(id)
findUser(id)
search(options)
getStats()
getTopUsers(count)
```

## 🧠 Concepts Practiced

### Classes

Used to create `User` and `UserRegistry` objects.

### Static Properties

A static counter is used to generate unique user IDs.

```js
static nextid = 1;
```

### `this`

Used to access properties belonging to the current user or registry.

### Prototypes

Methods such as `introduce()` and `isAdult()` are added through:

```js
User.prototype
```

### Rest Parameters

`addSkills()` accepts any number of skills:

```js
user1.addSkills("Git", "Node.js");
```

### Spread Syntax

Used to create new arrays without modifying the original array.

```js
this.skills = [...this.skills, ...skills];
```

### Destructuring

Used in the search function:

```js
const { name, age, skill } = options;
```

### Array Methods

The project also practices:

```text
filter()
reduce()
indexOf()
sort()
splice()
```

## ▶️ How to Run

Make sure Node.js is installed.

Run:

```bash
node main.js
```

## 🧪 Example

Create users:

```js
const user1 = new User(
    "Brahim",
    22,
    ["C", "C++", "JavaScript"]
);

const user2 = new User(
    "Ali",
    17,
    ["Python", "JavaScript"]
);
```

Search by age:

```js
registry.search({
    age: 22
});
```

Search by skill:

```js
registry.search({
    skill: "JavaScript"
});
```

Get statistics:

```js
registry.getStats();
```

Get the top users:

```js
registry.getTopUsers(2);
```

## 🎯 Learning Objective

This project is part of my JavaScript learning journey.

The main objective is to understand how JavaScript objects, classes, prototypes, arrays, and modern JavaScript syntax work together in a real project.

## 📄 License

This project is for learning and educational purposes.
