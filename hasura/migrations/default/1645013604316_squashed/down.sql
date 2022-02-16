
alter table "public"."stories" alter column "onAirDate" drop not null;

-- Could not auto-generate a down migration.
-- Please write an appropriate down migration for the SQL below:
-- alter table "public"."stories" add column "onAirDate" date
--  null;
