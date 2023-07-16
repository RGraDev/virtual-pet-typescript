import { Pet } from "../src/Pet";

describe("Pet", () => {
   describe("constructor", () => {
      it("returns an object", () => {
         expect(new Pet("Fido")).toBeInstanceOf(Object);
      });
      it("returns the name property", () => {
         expect(new Pet("Fido").name).toBe("Fido");
      });
   });

   describe("growUp", () => {
      it("increments age by 1, hunger by 5, fitness by -3", () => {
         const pet = new Pet("Fido");
         pet.growUp();
         expect(pet.age).toBe(1);
         expect(pet.hunger).toBe(5);
         expect(pet.fitness).toBe(7);
      });
      it("should throw and error", () => {
         const pet = new Pet("Fido");
         pet.age = 30;
         expect(() => pet.growUp()).toThrow("Your pet is no longer alive :(");
      });
   });

   describe("walk", () => {
      it("should increase fitness by 4", function () {
         const pet = new Pet("Fido");
         pet.fitness = 3;
         pet.walk();
         expect(pet.fitness).toEqual(7);
      });
      it("should cap fitness at 10", function () {
         const pet = new Pet("Fido");
         pet.fitness = 7;
         pet.walk();
         expect(pet.fitness).toEqual(10);
      });
      it("Should throw an error saying the pet isn't alive", () => {
         const pet = new Pet("Fido");
         pet.fitness = 0;
         expect(() => pet.walk()).toThrow("Your pet is no longer alive :(");
      });
   });

   describe("feed", () => {
      it("should decrease hunger by 3", function () {
         const pet = new Pet("Fido");
         pet.hunger = 4;
         pet.feed();
         expect(pet.hunger).toEqual(1);
      });
      it("should reduce hunger to 0", function () {
         const pet = new Pet("Fido");
         pet.hunger = 2;
         pet.feed();
         expect(pet.hunger).toEqual(0);
      });
      it("Should throw an error saying the pet isn't alive", () => {
         const pet = new Pet("Fido");
         pet.hunger = 10;
         expect(() => pet.walk()).toThrow("Your pet is no longer alive :(");
      });
   });

   describe("checkUp", () => {
      it("Should say pet is hungry and needs a walk", function () {
         const pet = new Pet("Fido");
         pet.hunger = 5;
         pet.fitness = 2;
         expect(pet.checkUp()).toEqual("I am hungry AND I need a walk");
      });
      it("Should say pet needs a walk", function () {
         const pet = new Pet("Fido");
         pet.hunger = 1;
         pet.fitness = 2;
         expect(pet.checkUp()).toEqual("I need a walk");
      });
      it("Should say pet is hungry", function () {
         const pet = new Pet("Fido");
         pet.hunger = 6;
         pet.fitness = 7;
         expect(pet.checkUp()).toEqual("I am hungry");
      });
      it("Should say pet is great", function () {
         const pet = new Pet("Fido");
         pet.hunger = 1;
         pet.fitness = 8;
         expect(pet.checkUp()).toEqual("I feel great!");
      });
   });

   describe("isAlive", () => {
      it("should return false", function () {
         const pet = new Pet("Fido");
         pet.hunger = 10;
         pet.fitness = 0;
         pet.age = 30;
         expect(pet.isAlive).toEqual(false);
      });
      it("should return true", function () {
         const pet = new Pet("Fido");
         pet.hunger = 5;
         pet.fitness = 5;
         pet.age = 10;
         expect(pet.isAlive).toEqual(true);
      });
   });

   describe("adoptChild", () => {
      it("should return array of children", () => {
         const parent = new Pet("Dave");
         const child = new Pet("Amelia");

         parent.adoptChild(child);

         expect(parent.children).toBeInstanceOf(Array);
         expect(parent.children[0]).toBe(child);
      });
   });
});

