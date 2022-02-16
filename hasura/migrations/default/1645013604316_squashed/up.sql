
alter table "public"."stories" add column "onAirDate" date
 null;

alter table "public"."stories" alter column "onAirDate" set not null;
