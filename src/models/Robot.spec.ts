import { Robot } from "./Robot";
import { RobotCommand } from "../enums/RobotCommand";
import { MAX_X, MAX_Y } from "../common/Constants";


describe('Robot tests', () => {
    test('robot should move to a valid position', () => {
        const robot: Robot = new Robot(MAX_X, MAX_Y);
        robot.move(RobotCommand.NORTH);
        robot.move(RobotCommand.NORTH);
        robot.move(RobotCommand.NORTH);
        robot.move(RobotCommand.EAST);
        expect(robot.report()).toStrictEqual({x: 1, y:3});
    });

    test('robot should throw an error for out of grid move', () => {
        const robot: Robot = new Robot(MAX_X, MAX_Y);
        expect(() => robot.move(RobotCommand.WEST)).toThrow(); 
    });
})