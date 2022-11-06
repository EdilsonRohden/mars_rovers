import { Plateau } from "../entity/Plateau"
import { Command } from "../enum/commands"
import { Rover } from "../entity/Rover"
import { Direction } from "../entity/Direction"

function parsePlateauSize(line: string): { x: number, y: number } {
    try {
        const [x, y] = line.split(' ').map(el => parseInt(el))
        if (x <= 0 || y <= 0) {
            throw new Error('Plateau size must be greater than zero.')
        }
        return { x, y }
    } catch (error) {
        throw new Error("Error parsing plateau data!!")
    }
}

function parseRoverLines(lines: Array<string>): Array<Rover> {
    const result: Array<Rover> = []
    for (let i = 1; i < lines.length; i += 2) {
        try {
            const [withStart, heightStart, direction] = lines[i].split(' ');
            const commands = lines[i + 1].split('').map(el => el as Command);
            result.push(new Rover(parseInt(withStart), parseInt(heightStart), new Direction(direction), commands))
            if (commands.length <= 0) {
                console.error(`Rover x: ${withStart}, y: ${heightStart}, doesn't have any commands!`)
            }
        } catch (e) {
            console.error("Error parsing rover input!!")
        }
    }
    return result
}

function plateauFactory(input: string): Plateau {
    const splitedInput = input.split('\n')
    const { x: widht, y: height } = parsePlateauSize(splitedInput[0])
    const plateau = new Plateau(widht, height)
    const rovers = parseRoverLines(splitedInput)
    rovers.forEach(rover => plateau.deployRover(rover))
    return plateau
}

export { plateauFactory };