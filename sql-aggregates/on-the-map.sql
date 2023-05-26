select "countries"."name" as "country",
       count(*) as "totalCities"
  from "countries"
  join "cities" using ("countryId")
  group by "countries"."countryId";
