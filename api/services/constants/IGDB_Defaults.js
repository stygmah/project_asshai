module.exports = {
    //Default Expanders
    expanders:
    [
        'genres',
        'publishers',
        'developers',
        'game'
    ],
    //Default Fields (including expander fields)
    fields:
    [
        //Native Fields
        'id',
        'name',
        'genres.name',
        'summary',
        'storyline',
        'publishers',
        'developers',
        'category',
        'cover',
        'esrb',
        'pegi',
        'websites',
        'release_dates',
        'game',
        'cover',
        'screenshots',
        'videos',
        //Expanded fields
        'genres.name',
        'publishers.name',
        'developers.name',
        'game.name'
    ]
};
