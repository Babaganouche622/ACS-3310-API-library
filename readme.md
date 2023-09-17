# Video Game Faker

## Table of Contents
- [Introduction](#introduction)
- [Installation](#installation)
- [Usage](#usage)
- [Methods](#methods)
- [Example](#example)

## Introduction
The VideoGameFaker class is a tool for generating fake video game character data. It is designed to create fictional characters with attributes such as first name, last name, age, and job. This class can be useful for generating random character data for video game development, testing, or any other scenario where fictional character information is needed.

## Introduction

The `VideoGameFaker` class is a tool for generating fake video game character data. It is designed to create fictional characters with attributes such as first name, last name, age, and job. This class can be useful for generating random character data for stubbing fake data.

## Installation

To use the VideoGameFaker class, you can follow these installation steps:

Ensure you have Node.js installed on your system. You can download it here.

Create a new directory for your project or navigate to an existing one in your terminal.

In your project directory, run the following command to initialize a new Node.js project:

```
npm init -y
```

Install the video-game-faker package using npm:

```
npm install video-game-faker
```

## Usage

To use the VideoGameFaker class in your project, you need to import it:

```javascript
import VideoGameFaker from 'video-game-faker';
```

Then, you can create an instance of the VideoGameFaker class:

```javascript
const characterGenerator = new VideoGameFaker();
```

Once you have an instance, you can use it to generate character data.

## Methods
The VideoGameFaker class provides the following methods for generating character data:

describe(): This returns a list of all available data sources. Right now this is only going to show you "FF6". You can use these to pass into any method and generate specific data from that game instead.

`generateCharacter(fakerData)` Generates a random character from the specified data file. If fakerData is not provided, it uses a random data file.

`generateFirstName(fakerData)`: Generates a random first name from the specified data file. If fakerData is not provided, it uses a random data file.

`generateLastName(fakerData)`: Generates a random last name from the specified data file. If fakerData is not provided, it uses a random data file.

`generateAge(fakerData)`: Generates a random age from the specified data file. If fakerData is not provided, it uses a random data file.

`generateJob(fakerData)`: Generates a random job from the specified data file. If fakerData is not provided, it uses a random data file.

## Example
Here's an example of how to use the VideoGameFaker class to generate a random character:

```javascript
import VideoGameFaker from 'video-game-faker';

const characterGenerator = new VideoGameFaker();


console.log('Generated Character:');
console.log(`First Name: ${generateFirstName()}`);
console.log(`Last Name: ${generateLastName()}`);
console.log(`Age: ${generateAge()}`);
console.log(`Job: ${generateJob()}`);
```
