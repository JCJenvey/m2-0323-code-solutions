select "c"."firstName",
       "c"."lastName",
       sum("payments"."amount") as "totalSpent"
  from "customers" as "c"
  join "payments" using ("customerId")
  group by "c"."customerId"
  order by "totalSpent" desc;
