import { Tag, availibleTags } from './TagType'
import { Task } from './TaskClass'
const templateTasks = [
    { label: "Avatar: The Last Airbender", tags: ['book'], numtags: [3] },
    { label: "The Lord of the Rings", numtags: [0, 12, 9] },
    { label: "Attack on Titan", numtags: [1, 3, 10] },
    { label: "Pulp Fiction", numtags: [0, 7, 10] },
    { label: "The Witcher 3: Wild Hunt", numtags: [2, 3, 18] },
    { label: "To Kill a Mockingbird", numtags: [4, 21, 12] },
    { label: "Stardew Valley", numtags: [2, 11, 15] },
    { label: "Star Wars: A New Hope", numtags: [0, 13, 9] },
    { label: "Friends (TV Show)", numtags: [1, 6] },
    { label: "The Great Gatsby", numtags: [4, 21, 12] },
    { label: "Inception", numtags: [0, 3, 18], description: "Mind-bending science fiction film by Christopher Nolan." },
    { label: "Harry Potter and the Sorcerer's Stone", numtags: [0, 14, 21], description: "First book in the magical Harry Potter series." },
    { label: "The Elder Scrolls V: Skyrim", numtags: [2, 3, 18], description: "Open-world fantasy RPG known for its vast exploration." },
    { label: "Breaking Bad", numtags: [1, 16], description: "Critically acclaimed TV series about a chemistry teacher turned methamphetamine manufacturer." },
    { label: "Blade Runner 2049", numtags: [0, 3, 13], description: "Sequel to the iconic science fiction film Blade Runner." },
    { label: "The Hobbit", numtags: [4, 12, 9], description: "Fantasy novel by J.R.R. Tolkien, a prelude to The Lord of the Rings." },
    { label: "Dark Souls", numtags: [2, 17, 19], description: "Challenging action RPG known for its difficulty and atmospheric world." },
    { label: "Stranger Things", numtags: [1, 10, 16], description: "Popular TV show blending supernatural elements with 80s nostalgia." },
    { label: "1984", numtags: [4, 13, 21], description: "Dystopian novel by George Orwell, a cautionary tale of totalitarianism." },
    { label: "The Legend of Zelda: Breath of the Wild", numtags: [2, 11, 18], description: "Critically acclaimed open-world adventure game." },
    { label: "The Matrix", numtags: [0, 3, 13], description: "Science fiction film exploring the concept of reality and virtual worlds." },
    { label: "Sherlock Holmes", numtags: [4, 12, 14], description: "Classic detective stories by Arthur Conan Doyle." },
    { label: "The Last of Us", numtags: [2, 10, 16], description: "Post-apocalyptic video game known for its emotional storytelling." },
    { label: "Jurassic Park", numtags: [0, 11, 18], description: "Sci-fi adventure film about the resurrection of dinosaurs." },
    { label: "One Piece", numtags: [1, 7, 10], description: "Long-running anime and manga series about pirates searching for the ultimate treasure." },
    { label: "The Catcher in the Rye", numtags: [4, 14, 21], description: "Classic novel exploring themes of teenage angst and identity." },
    { label: "Mass Effect", numtags: [2, 3, 19], description: "Space-themed RPG series known for its branching narrative." },
    { label: "Stranger Than Fiction", numtags: [0, 7, 12], description: "Film blurring the lines between reality and fiction." },
    { label: "Firefly", numtags: [1, 3, 9], description: "Sci-fi TV show set in a space-western universe." },
    { label: "The Catcher in the Rye", numtags: [4, 14, 21], description: "Classic novel exploring themes of teenage angst and identity." },
    { label: "The Martian", numtags: [4, 12, 18], description: "Novel about an astronaut stranded on Mars, struggling to survive." },
    { label: "BioShock", numtags: [2, 7, 19], description: "First-person shooter game with deep philosophical themes." },
    { label: "The Simpsons", numtags: [1, 6, 16], description: "Long-running animated TV show known for its humor and satire." },
    { label: "A Song of Ice and Fire", numtags: [4, 12, 21], description: "Epic fantasy book series by George R.R. Martin, basis for Game of Thrones." },
    { label: "Memento", numtags: [0, 7, 13], description: "Film exploring memory and identity through a unique narrative structure." },
    { label: "Final Fantasy VII", numtags: [2, 17, 19], description: "Iconic RPG video game known for its compelling characters and story." },
    { label: "The Office (US)", numtags: [1, 6, 16], description: "Mockumentary-style TV show capturing office life humor." },
    { label: "The Martian", numtags: [4, 12, 18], description: "Novel about an astronaut stranded on Mars, struggling to survive." },
    { label: "Portal", numtags: [2, 7, 18], description: "Puzzle-platformer game known for its unique mechanics and humor." },
    { label: "Black Mirror", numtags: [1, 10, 13], description: "Anthology series exploring the dark side of technology and society." },
    { label: "Brave New World", numtags: [4, 13, 21], description: "Dystopian novel by Aldous Huxley, depicting a future society driven by technology." },

    { "label": "Game of Thrones", "numtags": [3, 7, 11] }
    , { "label": "Harry Potter and the Order of the Phoenix", "description": "Fifth book in the series.", "numtags": [2, 8, 12] }
    , { "label": "The Witcher 3: Wild Hunt", "numtags": [1, 4, 9] }
    , { "label": "Lord of the Rings: The Fellowship of the Ring", "numtags": [2, 5, 10] }
    , { "label": "Stranger Things", "numtags": [3, 6, 11] }
    , { "label": "Pulp Fiction", "numtags": [1, 7, 13] }
    , { "label": "The Great Gatsby", "numtags": [2, 8, 14] }
    , { "label": "Red Dead Redemption 2", "numtags": [1, 4, 9] }
    , { "label": "The Shining", "numtags": [3, 10, 13] }
    , { "label": "The Elder Scrolls V: Skyrim", "numtags": [1, 4, 9] }
    , { "label": "Avatar: The Last Airbender", "numtags": [3, 6, 11] }
    , { "label": "1984", "numtags": [2, 8, 14] }
    , { "label": "Dark Souls", "numtags": [1, 4, 9] }
    , { "label": "Star Wars: Episode IV - A New Hope", "numtags": [2, 5, 10] }
    , { "label": "Friends (TV Show)", "numtags": [3, 6, 11] }
    , { "label": "Inception", "numtags": [1, 7, 12] }
    , { "label": "To Kill a Mockingbird", "numtags": [2, 8, 14] }
    , { "label": "The Legend of Zelda: Breath of the Wild", "numtags": [1, 4, 9] }
    , { "label": "Silence of the Lambs", "numtags": [3, 10, 13] }
    , { "label": "Breaking Bad", "numtags": [3, 6, 11] }
]

export const tasksTEMPORARY: Task[] = templateTasks.slice(1, 4).map((stask) => {
    stask.tags = stask.numtags.map((id: number) => availibleTags[id]);
    return new Task(stask)
});
