import { Command } from "../enum/commands";
import { DirectionEnum } from "../enum/DirectionEnum";
import { Direction } from "./Direction";

export class Rover {
    constructor(width: number, height: number, orientation: Direction, commands: Array<Command>) {
        this.width = width;
        this.height = height;
        this.orientation = orientation;
        this.commands = commands;
        this.BOTTOM_LEFT = 0;
    }
    private height: number;
    private width: number;
    private orientation: Direction;
    private commands: Array<Command>;
    private BOTTOM_LEFT: number;

    private tryToGoNorth(limitH: number) {
        if (this.height < limitH) {
            this.height += 1
            return
        }
        console.warn("Rover cannot move NORTH anymore!!")
    }
    private tryToGoSouth() {
        if (this.height > this.BOTTOM_LEFT) {
            this.height -= 1
            return
        }
        console.warn("Rover cannot move SOUTH anymore!!")
    }
    private tryToGoEast(limitW: number) {
        if (this.width < limitW) {
            this.width += 1
            return
        }
        console.warn("Rover cannot move EAST anymore!!")
    }
    private tryToGoWest() {
        if (this.width > this.BOTTOM_LEFT) {
            this.width -= 1
            return
        }
        console.warn("Rover cannot move WEST anymore!!")
    }


    private tryToGoForward(limitW: number, limitH: number) {
        switch (this.orientation.getDirection()) {
            case DirectionEnum.N:
                this.tryToGoNorth(limitH)
                break
            case DirectionEnum.S:
                this.tryToGoSouth()
                break
            case DirectionEnum.E:
                this.tryToGoEast(limitW)
                break
            case DirectionEnum.W:
                this.tryToGoWest()
                break
        }
    }

    public summarize(): string {
        return `${this.width} ${this.height} ${this.orientation.getDirection()}`
    }

    public getPosition(): { heigth: number, width: number } {
        return { heigth: this.height, width: this.width }
    }

    public explore(plateauWidth: number, plateauHeight: number) {
        this.commands.forEach(command => {
            switch (command) {
                case Command.L:
                case Command.R:
                    this.orientation.changeDirection(command)
                    break;
                case Command.M:
                    this.tryToGoForward(plateauWidth, plateauHeight)
                    break;
            }
        })
    }
}