import explore from '../service/explorationService'

export function evaluate(inputFile: string): Array<string> {
    return explore(inputFile)
}
