module.exports = {
    //Default Expanders
    expanders:
    [
        'genres'
    ],
    //Default Fields (including expander fields)
    fields:
    [
        'id',
        'name',
        'slug',
        'genres.name',
        'summary',
        'storyline'
    ]
};