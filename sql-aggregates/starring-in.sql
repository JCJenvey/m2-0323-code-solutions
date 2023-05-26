select "genres"."name" as "genre",
       count(*) as "totalMovies"
  from "genres"
  join "filmGenre" using ("genreId")
  join "castMembers" using ("filmId")
  join "actors" using ("actorId")
 where "actors"."firstName" = 'Lisa' and
       "actors"."lastName" = 'Monroe'
  group by "genres"."genreId";
