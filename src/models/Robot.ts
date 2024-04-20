import { Position } from "../interfaces/Position";
import { RobotCommand } from "../enums/RobotCommand";

export class Robot {
    private maxX: number;
    private maxY: number;
    private position: Position;

    constructor(x:number, y:number) {
        this.position = {
            x: 0 , y: 0
        }
        this.maxX = x;
        this.maxY = y;
    }

    move(command: RobotCommand) : Position {
        const newPosition: Position = { ... this.position};
        switch(command) {
            case RobotCommand.NORTH:
                newPosition.y++;
                break;
            case RobotCommand.SOUTH:
                newPosition.y--;
                break;
            case RobotCommand.EAST:
                newPosition.x++;
                break;
            case RobotCommand.WEST:
                newPosition.x--;
                break; 
        } 

        if(newPosition.x < 0 || newPosition.y < 0 || newPosition.x > this.maxX || newPosition.y > this.maxY) {
            throw new Error(`Cannot move the robot outside the grid boundaries which is (${this.maxX}, ${this.maxY})`);
        }
        this.position = newPosition;
        return this.position;
    }

    report() : Position {
        return this.position;
    }
}