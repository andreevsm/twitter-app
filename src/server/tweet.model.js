class Tweet {
    constructor(text, created_at, favorite_count, user) {
        this.text = text;
        this.created_at = created_at;
        this.favorite_count = favorite_count;
        this.user = user;
    }
}

module.exports = Tweet;