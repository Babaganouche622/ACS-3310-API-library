interface Character {
  FirstName: string;
  LastName: string;
  Age: number;
  Job: string;
}

/**
 * A class for generating fake video game character data.
 * @class
 * @property {any} data - The data object containing the character information.
 * @property {string} firstName - The first name of the generated character.
 * @property {string} lastName - The last name of the generated character.
 * @property {number} age - The age of the generated character.
 * @property {string} job - The job of the generated character.
 * @property {string[]} jsonFiles - An array of JSON file names containing character data.
 */
/**
 * A class for generating fake video game character data.
 */
export class VideoGameFaker{
  private firstName: string;
  private lastName: string;
  private age: number;
  private job: string;
  private jsonFiles: string[];
  private data: string;

  /**
   * Creates an instance of VideoGameFaker.
   */
  constructor() {
    this.firstName;
    this.lastName;
    this.age;
    this.job;
    this.jsonFiles = [
      "FF6",
    ];
    this.data = this.jsonFiles[Math.floor(Math.random() * this.jsonFiles.length)];
  }

  // write a describe method that returns a list of human readable strings for this.jsonFiles

  describe(): string[] {
    return this.jsonFiles;
  }

  /**
   * Generates a random character from the specified data file.
   * @param {string} [fakerData=this.data] - The name of the data file to use.
   * @returns {Character} - The generated character.
   */
  generateCharacter(fakerData: string = this.data): Character {
    const characters = require(`./data/${fakerData}.json`).characters;
    const randomIndex = Math.floor(Math.random() * characters.length);
    this.firstName = characters[randomIndex].FirstName;
    this.lastName = characters[randomIndex].LastName;
    this.age = characters[randomIndex].Age;
    this.job = characters[randomIndex].Job;
    return characters[randomIndex];
  }

  /**
   * Generates a random first name from the specified data file.
   * @param {string} [fakerData] - The name of the data file to use.
   * @returns {string} - The generated first name.
   */
  generateFirstName(fakerData?: string): string {
    this.generateCharacter(fakerData);
    while (this.firstName === null) {
      this.generateCharacter(fakerData);
    }
    return this.firstName;
  }

  /**
   * Generates a random last name from the specified data file.
   * @param {string} [fakerData] - The name of the data file to use.
   * @returns {string} - The generated last name.
   */
  generateLastName(fakerData?: string): string {
    this.generateCharacter(fakerData);
    while (this.lastName === null) {
      this.generateCharacter(fakerData);
    }
    return this.lastName;
  }

  /**
   * Generates a random age from the specified data file.
   * @param {string} [fakerData] - The name of the data file to use.
   * @returns {number} - The generated age.
   */
  generateAge(fakerData?: string): number {
    this.generateCharacter(fakerData);
    while (this.age === null) {
      this.generateCharacter(fakerData);
    }
    return this.age;
  }

  /**
   * Generates a random job from the specified data file.
   * @param {string} [fakerData] - The name of the data file to use.
   * @returns {string} - The generated job.
   */
  generateJob(fakerData?: string): string {
    this.generateCharacter(fakerData);
    while (this.job === null) {
      this.generateCharacter(fakerData);
    }
    return this.job;
  }
}
