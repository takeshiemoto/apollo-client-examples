SET check_function_bodies = false;
CREATE FUNCTION public."set_current_timestamp_updatedAt"() RETURNS trigger
    LANGUAGE plpgsql
    AS $$
DECLARE
  _new record;
BEGIN
  _new := NEW;
  _new."updatedAt" = NOW();
  RETURN _new;
END;
$$;
CREATE TABLE public.hero_story (
    id integer NOT NULL,
    "heroId" integer NOT NULL,
    "storyId" integer NOT NULL,
    "createdAt" timestamp with time zone DEFAULT now() NOT NULL,
    "updatedAt" timestamp with time zone DEFAULT now() NOT NULL
);
CREATE SEQUENCE public.hero_story_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
ALTER SEQUENCE public.hero_story_id_seq OWNED BY public.hero_story.id;
CREATE TABLE public.heroes (
    id integer NOT NULL,
    name text NOT NULL,
    "createdAt" timestamp with time zone DEFAULT now() NOT NULL,
    "updatedAt" timestamp with time zone DEFAULT now() NOT NULL
);
CREATE SEQUENCE public.heroes_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
ALTER SEQUENCE public.heroes_id_seq OWNED BY public.heroes.id;
CREATE TABLE public.monster_story (
    id integer NOT NULL,
    "monsterId" integer NOT NULL,
    "storyId" integer NOT NULL,
    "createdAt" timestamp with time zone DEFAULT now() NOT NULL,
    "updatedAt" timestamp with time zone DEFAULT now() NOT NULL
);
CREATE SEQUENCE public."monsterStory_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
ALTER SEQUENCE public."monsterStory_id_seq" OWNED BY public.monster_story.id;
CREATE TABLE public.monsters (
    id integer NOT NULL,
    name text NOT NULL,
    "createdAt" timestamp without time zone DEFAULT now() NOT NULL,
    "updatedAt" timestamp with time zone DEFAULT now() NOT NULL
);
CREATE SEQUENCE public.monsters_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
ALTER SEQUENCE public.monsters_id_seq OWNED BY public.monsters.id;
CREATE TABLE public.stories (
    id integer NOT NULL,
    title text NOT NULL,
    "createdAt" timestamp with time zone DEFAULT now() NOT NULL,
    "updatedAt" timestamp with time zone DEFAULT now() NOT NULL
);
CREATE SEQUENCE public.stories_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
ALTER SEQUENCE public.stories_id_seq OWNED BY public.stories.id;
ALTER TABLE ONLY public.hero_story ALTER COLUMN id SET DEFAULT nextval('public.hero_story_id_seq'::regclass);
ALTER TABLE ONLY public.heroes ALTER COLUMN id SET DEFAULT nextval('public.heroes_id_seq'::regclass);
ALTER TABLE ONLY public.monster_story ALTER COLUMN id SET DEFAULT nextval('public."monsterStory_id_seq"'::regclass);
ALTER TABLE ONLY public.monsters ALTER COLUMN id SET DEFAULT nextval('public.monsters_id_seq'::regclass);
ALTER TABLE ONLY public.stories ALTER COLUMN id SET DEFAULT nextval('public.stories_id_seq'::regclass);
ALTER TABLE ONLY public.hero_story
    ADD CONSTRAINT hero_story_pkey PRIMARY KEY (id);
ALTER TABLE ONLY public.heroes
    ADD CONSTRAINT heroes_pkey PRIMARY KEY (id);
ALTER TABLE ONLY public.monster_story
    ADD CONSTRAINT "monsterStory_pkey" PRIMARY KEY (id);
ALTER TABLE ONLY public.monsters
    ADD CONSTRAINT monsters_pkey PRIMARY KEY (id);
ALTER TABLE ONLY public.stories
    ADD CONSTRAINT stories_pkey PRIMARY KEY (id);
CREATE TRIGGER "set_public_hero_story_updatedAt" BEFORE UPDATE ON public.hero_story FOR EACH ROW EXECUTE FUNCTION public."set_current_timestamp_updatedAt"();
COMMENT ON TRIGGER "set_public_hero_story_updatedAt" ON public.hero_story IS 'trigger to set value of column "updatedAt" to current timestamp on row update';
CREATE TRIGGER "set_public_heroes_updatedAt" BEFORE UPDATE ON public.heroes FOR EACH ROW EXECUTE FUNCTION public."set_current_timestamp_updatedAt"();
COMMENT ON TRIGGER "set_public_heroes_updatedAt" ON public.heroes IS 'trigger to set value of column "updatedAt" to current timestamp on row update';
CREATE TRIGGER "set_public_monsterStory_updatedAt" BEFORE UPDATE ON public.monster_story FOR EACH ROW EXECUTE FUNCTION public."set_current_timestamp_updatedAt"();
COMMENT ON TRIGGER "set_public_monsterStory_updatedAt" ON public.monster_story IS 'trigger to set value of column "updatedAt" to current timestamp on row update';
CREATE TRIGGER "set_public_monsters_updatedAt" BEFORE UPDATE ON public.monsters FOR EACH ROW EXECUTE FUNCTION public."set_current_timestamp_updatedAt"();
COMMENT ON TRIGGER "set_public_monsters_updatedAt" ON public.monsters IS 'trigger to set value of column "updatedAt" to current timestamp on row update';
CREATE TRIGGER "set_public_stories_updatedAt" BEFORE UPDATE ON public.stories FOR EACH ROW EXECUTE FUNCTION public."set_current_timestamp_updatedAt"();
COMMENT ON TRIGGER "set_public_stories_updatedAt" ON public.stories IS 'trigger to set value of column "updatedAt" to current timestamp on row update';
ALTER TABLE ONLY public.hero_story
    ADD CONSTRAINT "hero_story_heroId_fkey" FOREIGN KEY ("heroId") REFERENCES public.heroes(id) ON UPDATE RESTRICT ON DELETE RESTRICT;
ALTER TABLE ONLY public.hero_story
    ADD CONSTRAINT "hero_story_storyId_fkey" FOREIGN KEY ("storyId") REFERENCES public.stories(id) ON UPDATE RESTRICT ON DELETE RESTRICT;
ALTER TABLE ONLY public.monster_story
    ADD CONSTRAINT "monsterStory_monsterId_fkey" FOREIGN KEY ("monsterId") REFERENCES public.monsters(id) ON UPDATE RESTRICT ON DELETE RESTRICT;
ALTER TABLE ONLY public.monster_story
    ADD CONSTRAINT "monsterStory_storyId_fkey" FOREIGN KEY ("storyId") REFERENCES public.stories(id) ON UPDATE RESTRICT ON DELETE RESTRICT;
