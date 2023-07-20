interface Isbn {
    isbn10: string
    isbn13: string
}

interface Rank {
    primary_isbn10: string
    primary_isbn13: string
    rank: number
    list_name: string
    display_name: string
    published_date: string
    bestsellers_date: string
    weeks_on_list: number
    rank_last_week: number
    asterisk: number
    dagger: number
}

interface Review {
    book_review_link: string
    first_chapter_link: string
    sunday_review_link: string
    article_chapter_link: string
}

export interface Book {
    title: string
    description: string
    contributor: string
    author: string
    contributor_note: string
    price: number
    age_group: string
    publisher: string
    isbns: Isbn[]
    ranks_history: Rank[]
    reviews: Review[]
}