import { calculateRemainingTime } from "./calculateRemainingTIme";


describe("calculateRemainingTime", () => {
    test("returns remaining time from start to end date", () => {
        // Arrange
        const startTime = new Date("2023-04-11T17:00:00");
        const endTime = new Date("2023-04-13T18:10:20");
        // Act
        const { days, hours, minutes, seconds } = calculateRemainingTime(endTime, startTime)
        // Assert
        expect(days).toBe(`2\u00A0days`);
        expect(hours).toBe(`1\u00A0hour`);
        expect(minutes).toBe(`10\u00A0minutes`);
        expect(seconds).toBe(`20\u00A0seconds`);
    });
    test("counterFinished returns true if no time left", () => {
        // Arrange
        const startTime = new Date("2023-04-11T18:00:00");
        const endTime = new Date("2023-04-11T18:00:00");
        // Act
        const { counterFinished } = calculateRemainingTime(endTime, startTime)
        // Assert
        expect(counterFinished).toBeTrue;
    });
    test("if start time NOT a date return counterFinished true", () => {
        // Arrange
        const startTime = "";
        const endTime = new Date("2023-04-11T18:00:00");
        // Act
        const { counterFinished } = calculateRemainingTime(endTime, startTime)
        // Assert
        expect(counterFinished).toBeTrue;
    });
    test("if end time NOT a date return counterFinished true", () => {
        // Arrange
        const startTime = new Date("2023-04-11T18:00:00");
        const endTime = 1;
        // Act
        const { counterFinished } = calculateRemainingTime(endTime, startTime)
        // Assert
        expect(counterFinished).toBeTrue;
    })
})