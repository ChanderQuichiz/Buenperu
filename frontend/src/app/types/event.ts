export type event = {
    eventId?: number,
    name: string,
    eventSrc: string,
    eventType: 'league' | 'tournament' | 'friendly',
    sportType: string,
    format: string,
    category: string,
    startDate: Date,
    endDate: Date,
    pointsWin: number,
    pointsDraw: number,
    pointsLoss: number,
    maxTeams: number | null,
    accountId: number,
    status: 'draft' | 'active' | 'finished'
}