export class Api {
  private static baseUrl: string = '$BACKEND_URL'
  public static async getEvents(props: {
    countryCode: string
    city: string
  }): Promise<EventResponse> {
    const { countryCode, city } = props
    const response = await fetch(`${this.baseUrl}?countryCode=${countryCode}&city=${city}`)
    const data = await response.json()
    return data
  }
}

export interface EventData {
  id: string
  eventName: string
  venue: string
  startDate: string // ISO string format
  endDate: string // ISO string format
  images: string[]
  description: string
  dateOf: string
  countryCode: string
  city: string
}

export interface EventResponse {
  countryCode: string
  city: string
  dateOf: string
  events: EventData[]
}
