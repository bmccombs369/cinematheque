List.destroy_all
Movie.destroy_all

friday_thirteen = List.create!(
  name: 'Friday the 13th',
  description: 'I went down to the basement, drew a pentagram, and summoned the best horror movies to watch the next time you need a spook.'
)

Movie.create!(
  movie_db_id: 948,
  list_id: friday_thirteen.id
)

Movie.create!(
  movie_db_id: 4488,
  list_id: friday_thirteen.id
)

Movie.create!(
  movie_db_id: 9728,
  list_id: friday_thirteen.id
)

Movie.create!(
  movie_db_id: 138843,
  list_id: friday_thirteen.id
)