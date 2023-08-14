// enum availibleTag{}
export const availibleTags = [
    "film", "movie", "anime", "series", "book", "game", "touch grass", "work related",
    "action", "adventure", "comedy", "drama", "indie", "thriller", "sci-fi", "romance", "2d", "3d", "rpg", "visual novel",
    "popular", "classic", "friend reccomendation",
]
export type Tag = typeof availibleTags[number]