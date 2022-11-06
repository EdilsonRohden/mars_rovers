import { Rover } from "./Rover";

export class Plateau {
    constructor(width: number, height: number) {
        this.width = width;
        this.height = height;
        this.rovers = []
    }
    private width: number;
    private height: number;
    private rovers: Array<Rover>;

    public deployRover(rover: Rover) {
        if (rover.getPosition().heigth > this.height) {
            console.error("Rover was deployed outside the Plateau!!")
            return
        }

        if (rover.getPosition().width > this.width) {
            console.error("Rover was deployed outside the Plateau!!")
            return
        }

        if (rover.getPosition().heigth < 0) {
            console.error("Rover was deployed outside the Plateau!!")
            return
        }

        if (rover.getPosition().width < 0) {
            console.error("Rover was deployed outside the Plateau!!")
            return
        }
        this.rovers.push(rover)
    }

    public explore() {
        this.rovers.forEach(rover => {
            rover.explore(this.width, this.height)
        })
    }

    public reportRoversPositions(): Array<string> {
        return this.rovers.map(rover => rover.summarize())
    }
}