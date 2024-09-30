export class Api {
  private static baseUrl: string = 'http://172-236-21-45.ip.linodeusercontent.com:8080/event'
  public static async getEvents(props: {
    countryCode: string
    city: string
  }): Promise<EventResponse> {
    const { countryCode, city } = props
    // const response = await fetch(`${this.baseUrl}?countryCode=${countryCode}&city=${city}`)
    // const data = await response.json()
    return {
      countryCode: 'UK',
      city: 'Brighton',
      dateOf: '2024-09-29',
      events: [
        {
          id: '66f9b1aeaa40c4661f583ac9',
          eventName: 'Brighton Beats: House Edition',
          venue: 'Patterns',
          startDate: '2024-09-29T22:00:00Z',
          endDate: '2024-09-30T03:00:00Z',
          images: [
            'https://eu-assets.simpleview-europe.com/brighton2021/imageresizer/?image=%2Fdmsimgs%2F11_407364805.jpg\u0026action=ProductDetailImageFullWidthSite',
            'https://www.google.com/imgres?q=nightclub\u0026imgurl=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2F3%2F32%2FWikipedia_space_ibiza%252803%2529.jpg%2F640px-Wikipedia_space_ibiza%252803%2529.jpg\u0026imgrefurl=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FNightclub\u0026docid=oMEUZbLHHoMZ4M\u0026tbnid=vPe3yJgMVs3E_M\u0026vet=12ahUKEwjR3biC1uiIAxV-g_0HHWEgGEMQM3oECGQQAA..i\u0026w=640\u0026h=427\u0026hcb=2\u0026ved=2ahUKEwjR3biC1uiIAxV-g_0HHWEgGEMQM3oECGQQAA',
          ],
          description:
            "Join us for a night of non-stop house music at Patterns. Top DJs will spin the latest beats until the early hours. Don't miss Brighton's ultimate house night!",
          dateOf: '2024-09-29',
          countryCode: 'UK',
          city: 'Brighton',
        },
        {
          id: '66f9b1aeaa40c4661f583aca',
          eventName: 'Disco Fever Night',
          venue: 'The Green Door Store',
          startDate: '2024-09-29T22:00:00Z',
          endDate: '2024-09-30T03:00:00Z',
          images: [
            'https://business.getonbloc.com/wp-content/uploads/2019/09/5.21_the-chainsmokers_jewel-grand-opening_photo-credit-al-powers-6-2-1.jpg',
            'https://cdn.vox-cdn.com/thumbor/dEcwQcUvi4zL3rgIbtpeCrm4-W4=/0x0:1000x662/1200x900/filters:focal(420x251:580x411):no_upscale()/cdn.vox-cdn.com/uploads/chorus_image/image/62582637/1_Oak_1.0.0.1503110128.18.jpg',
          ],
          description:
            'Relive the disco days at The Green Door Store! Expect glitter balls, funky beats, and all the classics that will keep you dancing all night long.',
          dateOf: '2024-09-29',
          countryCode: 'UK',
          city: 'Brighton',
        },
        {
          id: '66f9b1aeaa40c4661f583acb',
          eventName: 'Techno Takeover',
          venue: 'The Arch',
          startDate: '2024-09-29T22:00:00Z',
          endDate: '2024-09-30T03:00:00Z',
          images: [
            'https://i.guim.co.uk/img/static/sys-images/Guardian/Pix/pictures/2014/12/24/1419417019465/d3b28d0a-2874-49d0-b508-833968170943-620x412.jpeg?width=445\u0026dpr=1\u0026s=none',
            'https://www.google.com/url?sa=i\u0026url=https%3A%2F%2Fwww.walesonline.co.uk%2Fwhats-on%2Fmusic-nightlife-news%2Ffuture-wales-evolving-challenged-nightclub-26261222\u0026psig=AOvVaw1I9xE8JMerMa4wNS9CACKf\u0026ust=1727717137153000\u0026source=images\u0026cd=vfe\u0026opi=89978449\u0026ved=0CBQQjRxqFwoTCPi6qYPW6IgDFQAAAAAdAAAAABAI',
          ],
          description:
            'Experience the best underground techno at The Arch. From deep basslines to experimental beats, this is a night for true techno lovers.',
          dateOf: '2024-09-29',
          countryCode: 'UK',
          city: 'Brighton',
        },
        {
          id: '66f9b1aeaa40c4661f583acc',
          eventName: 'Bassline Extravaganza',
          venue: 'Coalition',
          startDate: '2024-09-29T22:00:00Z',
          endDate: '2024-09-30T03:00:00Z',
          images: [
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQS4z4p9lr_b67xrQdihE00iLhx8GdaxC7rw\u0026s',
            'https://static.designmynight.com/uploads/2018/11/Patterns-Brighton-Club-optimised.jpg',
          ],
          description:
            "Coalition hosts a massive night of bass-heavy tracks. Get ready for a rave-like atmosphere as Brighton's best DJs take control.",
          dateOf: '2024-09-29',
          countryCode: 'UK',
          city: 'Brighton',
        },
        {
          id: '66f9b1aeaa40c4661f583acd',
          eventName: 'Underground Vibes',
          venue: 'Volks Club',
          startDate: '2024-09-29T22:00:00Z',
          endDate: '2024-09-30T03:00:00Z',
          images: [
            'https://www.peterboroughtoday.co.uk/webimg/T0FLMTMzODAyNzE3.jpg?crop=3:2,smart\u0026trim=\u0026width=1200\u0026auto=webp\u0026quality=75',
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDge6MASKqXxFJ3HG1cHnkIZy3PrNGDJovJw\u0026s',
          ],
          description:
            'For those who love the underground scene, Volks Club is the place to be. Raw, gritty, and full of energy, this night promises unforgettable beats.',
          dateOf: '2024-09-29',
          countryCode: 'UK',
          city: 'Brighton',
        },
        {
          id: '66f9b1aeaa40c4661f583ace',
          eventName: 'All Night Drum \u0026 Bass',
          venue: 'Shooshh Brighton',
          startDate: '2024-09-29T22:00:00Z',
          endDate: '2024-09-30T03:00:00Z',
          images: [
            'https://yourherefordshire.co.uk/wp-content/uploads/2024/05/99F69CE4-20C5-4CA0-8359-22208E1B4D41-1080x675.jpeg',
            'https://www.laserworld.com/images_gallery/9/1024/Laserworld_at_Opera_Club_Zagreb_by_Luminos-0008-web.jpg',
          ],
          description:
            'Shooshh brings you the biggest drum \u0026 bass night in town. Expect heavy drops, fast beats, and a crowd that won’t stop moving.',
          dateOf: '2024-09-29',
          countryCode: 'UK',
          city: 'Brighton',
        },
        {
          id: '66f9b1aeaa40c4661f583acf',
          eventName: 'Retro Electro Night',
          venue: 'Concorde 2',
          startDate: '2024-09-29T22:00:00Z',
          endDate: '2024-09-30T03:00:00Z',
          images: [
            'https://offloadmedia.feverup.com/secretldn.com/wp-content/uploads/2022/02/25132433/Untitled-3.jpg',
            'https://media.timeout.com/images/101605667/750/562/image.jpg',
          ],
          description:
            'Step into the past with a retro-electro fusion at Concorde 2. Expect a night filled with synths, beats, and vintage vibes.',
          dateOf: '2024-09-29',
          countryCode: 'UK',
          city: 'Brighton',
        },
        {
          id: '66f9b1aeaa40c4661f583ad0',
          eventName: 'Electronic Madness',
          venue: 'Chalk',
          startDate: '2024-09-29T22:00:00Z',
          endDate: '2024-09-30T03:00:00Z',
          images: [
            'https://www.onyxroom.com/wp-content/uploads/2022/11/Nightclub.jpeg',
            'https://ntia.co.uk/wp-content/uploads/sites/13/2023/08/photo-1542628682-88321d2a4828-1024x683.webp',
          ],
          description:
            'End your weekend with a blast of electronic music at Chalk. Get ready for an intense night of beats that will keep your energy high.',
          dateOf: '2024-09-29',
          countryCode: 'UK',
          city: 'Brighton',
        },
        {
          id: '66f9b1aeaa40c4661f583ad1',
          eventName: 'Funky Dance Floors',
          venue: 'Komedia',
          startDate: '2024-09-29T22:00:00Z',
          endDate: '2024-09-30T03:00:00Z',
          images: [
            'https://www.thetravelpocketguide.com/wp-content/uploads/matty-adame-nLUb9GThIcg-unsplash.jpg',
            'https://www.tagvenue.com/images/location-pages/1920x1080/4584.jpg',
          ],
          description:
            'Step into the funky vibes at Komedia. From retro dance floors to funk classics, this night guarantees a trip back in time with a modern twist.',
          dateOf: '2024-09-29',
          countryCode: 'UK',
          city: 'Brighton',
        },
        {
          id: '66f9b1aeaa40c4661f583ad2',
          eventName: 'Neon Nights',
          venue: 'The Haunt',
          startDate: '2024-09-29T22:00:00Z',
          endDate: '2024-09-30T03:00:00Z',
          images: [
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcJ8H31qH0sUQaSBNs9SppnxU5EHgJ85fHeA\u0026s',
            'https://www.stealthclub.co.uk/wp-content/uploads/2024/05/Blackscarletclubs-B-8315-2500x1667.jpg',
          ],
          description:
            'Get ready for an epic night of neon lights and electric vibes at The Haunt. This party brings together an eclectic mix of electronic genres.',
          dateOf: '2024-09-29',
          countryCode: 'UK',
          city: 'Brighton',
        },
        {
          id: '66f9b1aeaa40c4661f583ad3',
          eventName: 'Sunday Chill: Lounge Beats',
          venue: 'Patterns',
          startDate: '2024-09-29T22:00:00Z',
          endDate: '2024-09-30T03:00:00Z',
          images: [
            'https://static.independent.co.uk/s3fs-public/thumbnails/image/2018/01/11/14/fabric.jpg',
            'https://archello.s3.eu-central-1.amazonaws.com/images/2018/11/14/Domingo.ProgettiReferences-Nightclub-Red-Jonkoping.1542202496.8519.jpg',
          ],
          description:
            'Unwind with laid-back beats and good vibes at Patterns for a perfect Sunday evening. Enjoy drinks and sunset views to chill tunes.',
          dateOf: '2024-09-29',
          countryCode: 'UK',
          city: 'Brighton',
        },
        {
          id: '66f9b1aeaa40c4661f583ad4',
          eventName: 'Beachside Grooves',
          venue: 'The Arch',
          startDate: '2024-09-29T22:00:00Z',
          endDate: '2024-09-30T03:00:00Z',
          images: [
            'https://assets.simpleviewcms.com/simpleview/image/fetch/c_limit,q_75,w_1200/https://lasvegas.simpleviewcrm.com/images/listings/original_drais-nightclub_8E831258-9254-D09F-2F9DE9444833E3DB-8e8310f9f219fae.jpg',
            'https://www.lefez.co.uk/media/bbalevb4/le-club-home-page-banner-image-and-le-club-page.jpg?anchor=center\u0026mode=crop\u0026width=1920\u0026height=1246\u0026rnd=132697003142600000',
          ],
          description:
            'Close the weekend in style with relaxed grooves and house music at The Arch, right by the beach.',
          dateOf: '2024-09-29',
          countryCode: 'UK',
          city: 'Brighton',
        },
      ],
    }
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
