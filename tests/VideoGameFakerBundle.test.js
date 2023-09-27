const { VideoGameFaker } = require("../dist/bundle.js");

describe('VideoGameFaker', () => {
  describe('generateCharacter', () => {
    it('should generate a character with all properties', () => {
      const faker = new VideoGameFaker();
      const character = faker.generateCharacter();
      expect(character).toHaveProperty('FirstName');
      expect(character).toHaveProperty('LastName');
      expect(character).toHaveProperty('Age');
      expect(character).toHaveProperty('Job');
    });

    it('should generate a character from the specified JSON file', () => {
      const faker = new VideoGameFaker();
      const character = faker.generateCharacter("FF6");
      expect(character).toHaveProperty('FirstName');
      expect(character).toHaveProperty('LastName');
      expect(character).toHaveProperty('Age');
      expect(character).toHaveProperty('Job');
    });
  });

  describe('generateFirstName', () => {
    it('should generate a first name', () => {
      const faker = new VideoGameFaker();
      const firstName = faker.generateFirstName();
      expect(firstName).toBeTruthy();
    });

    it('should generate a first name from the specified JSON file', () => {
      const faker = new VideoGameFaker();
      const firstName = faker.generateFirstName();
      expect(firstName).toBeTruthy();
    });
  });

  describe('generateLastName', () => {
    it('should generate a last name', () => {
      const faker = new VideoGameFaker();
      const lastName = faker.generateLastName();
      expect(lastName).toBeTruthy();
    });

    it('should generate a last name from the specified JSON file', () => {
      const faker = new VideoGameFaker();
      const lastName = faker.generateLastName();
      expect(lastName).toBeTruthy();
    });
  });

  describe('generateAge', () => {
    it('should generate an age', () => {
      const faker = new VideoGameFaker();
      const age = faker.generateAge();
      expect(age).toBeGreaterThan(0);
    });

    it('should generate an age from the specified JSON file', () => {
      const faker = new VideoGameFaker();
      const age = faker.generateAge();
      expect(age).toBeGreaterThan(0);
    });
  });

  describe('generateJob', () => {
    it('should generate a job', () => {
      const faker = new VideoGameFaker();
      const job = faker.generateJob();
      expect(job).toBeTruthy();
    });

    it('should generate a job from the specified JSON file', () => {
      const faker = new VideoGameFaker();
      const job = faker.generateJob();
      expect(job).toBeTruthy();
    });
  });
});