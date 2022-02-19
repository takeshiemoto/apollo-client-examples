import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  date: any;
  timestamp: any;
  timestamptz: any;
};

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Int']>;
  _gt?: InputMaybe<Scalars['Int']>;
  _gte?: InputMaybe<Scalars['Int']>;
  _in?: InputMaybe<Array<Scalars['Int']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['Int']>;
  _lte?: InputMaybe<Scalars['Int']>;
  _neq?: InputMaybe<Scalars['Int']>;
  _nin?: InputMaybe<Array<Scalars['Int']>>;
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['String']>;
  _gt?: InputMaybe<Scalars['String']>;
  _gte?: InputMaybe<Scalars['String']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars['String']>;
  _in?: InputMaybe<Array<Scalars['String']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars['String']>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars['String']>;
  _lt?: InputMaybe<Scalars['String']>;
  _lte?: InputMaybe<Scalars['String']>;
  _neq?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars['String']>;
  _nin?: InputMaybe<Array<Scalars['String']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars['String']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars['String']>;
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars['String']>;
};

/** Boolean expression to compare columns of type "date". All fields are combined with logical 'AND'. */
export type Date_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['date']>;
  _gt?: InputMaybe<Scalars['date']>;
  _gte?: InputMaybe<Scalars['date']>;
  _in?: InputMaybe<Array<Scalars['date']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['date']>;
  _lte?: InputMaybe<Scalars['date']>;
  _neq?: InputMaybe<Scalars['date']>;
  _nin?: InputMaybe<Array<Scalars['date']>>;
};

/** columns and relationships of "hero_story" */
export type Hero_Story = {
  __typename?: 'hero_story';
  createdAt: Scalars['timestamptz'];
  /** An object relationship */
  hero: Heroes;
  heroId: Scalars['Int'];
  id: Scalars['Int'];
  /** An object relationship */
  story: Stories;
  storyId: Scalars['Int'];
  updatedAt: Scalars['timestamptz'];
};

/** aggregated selection of "hero_story" */
export type Hero_Story_Aggregate = {
  __typename?: 'hero_story_aggregate';
  aggregate?: Maybe<Hero_Story_Aggregate_Fields>;
  nodes: Array<Hero_Story>;
};

/** aggregate fields of "hero_story" */
export type Hero_Story_Aggregate_Fields = {
  __typename?: 'hero_story_aggregate_fields';
  avg?: Maybe<Hero_Story_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Hero_Story_Max_Fields>;
  min?: Maybe<Hero_Story_Min_Fields>;
  stddev?: Maybe<Hero_Story_Stddev_Fields>;
  stddev_pop?: Maybe<Hero_Story_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Hero_Story_Stddev_Samp_Fields>;
  sum?: Maybe<Hero_Story_Sum_Fields>;
  var_pop?: Maybe<Hero_Story_Var_Pop_Fields>;
  var_samp?: Maybe<Hero_Story_Var_Samp_Fields>;
  variance?: Maybe<Hero_Story_Variance_Fields>;
};

/** aggregate fields of "hero_story" */
export type Hero_Story_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Hero_Story_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "hero_story" */
export type Hero_Story_Aggregate_Order_By = {
  avg?: InputMaybe<Hero_Story_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Hero_Story_Max_Order_By>;
  min?: InputMaybe<Hero_Story_Min_Order_By>;
  stddev?: InputMaybe<Hero_Story_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Hero_Story_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Hero_Story_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Hero_Story_Sum_Order_By>;
  var_pop?: InputMaybe<Hero_Story_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Hero_Story_Var_Samp_Order_By>;
  variance?: InputMaybe<Hero_Story_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "hero_story" */
export type Hero_Story_Arr_Rel_Insert_Input = {
  data: Array<Hero_Story_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Hero_Story_On_Conflict>;
};

/** aggregate avg on columns */
export type Hero_Story_Avg_Fields = {
  __typename?: 'hero_story_avg_fields';
  heroId?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  storyId?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "hero_story" */
export type Hero_Story_Avg_Order_By = {
  heroId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  storyId?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "hero_story". All fields are combined with a logical 'AND'. */
export type Hero_Story_Bool_Exp = {
  _and?: InputMaybe<Array<Hero_Story_Bool_Exp>>;
  _not?: InputMaybe<Hero_Story_Bool_Exp>;
  _or?: InputMaybe<Array<Hero_Story_Bool_Exp>>;
  createdAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  hero?: InputMaybe<Heroes_Bool_Exp>;
  heroId?: InputMaybe<Int_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  story?: InputMaybe<Stories_Bool_Exp>;
  storyId?: InputMaybe<Int_Comparison_Exp>;
  updatedAt?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "hero_story" */
export enum Hero_Story_Constraint {
  /** unique or primary key constraint */
  HeroStoryPkey = 'hero_story_pkey',
}

/** input type for incrementing numeric columns in table "hero_story" */
export type Hero_Story_Inc_Input = {
  heroId?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['Int']>;
  storyId?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "hero_story" */
export type Hero_Story_Insert_Input = {
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  hero?: InputMaybe<Heroes_Obj_Rel_Insert_Input>;
  heroId?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['Int']>;
  story?: InputMaybe<Stories_Obj_Rel_Insert_Input>;
  storyId?: InputMaybe<Scalars['Int']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Hero_Story_Max_Fields = {
  __typename?: 'hero_story_max_fields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  heroId?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  storyId?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "hero_story" */
export type Hero_Story_Max_Order_By = {
  createdAt?: InputMaybe<Order_By>;
  heroId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  storyId?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Hero_Story_Min_Fields = {
  __typename?: 'hero_story_min_fields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  heroId?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  storyId?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "hero_story" */
export type Hero_Story_Min_Order_By = {
  createdAt?: InputMaybe<Order_By>;
  heroId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  storyId?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "hero_story" */
export type Hero_Story_Mutation_Response = {
  __typename?: 'hero_story_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Hero_Story>;
};

/** on_conflict condition type for table "hero_story" */
export type Hero_Story_On_Conflict = {
  constraint: Hero_Story_Constraint;
  update_columns?: Array<Hero_Story_Update_Column>;
  where?: InputMaybe<Hero_Story_Bool_Exp>;
};

/** Ordering options when selecting data from "hero_story". */
export type Hero_Story_Order_By = {
  createdAt?: InputMaybe<Order_By>;
  hero?: InputMaybe<Heroes_Order_By>;
  heroId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  story?: InputMaybe<Stories_Order_By>;
  storyId?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
};

/** primary key columns input for table: hero_story */
export type Hero_Story_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "hero_story" */
export enum Hero_Story_Select_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  HeroId = 'heroId',
  /** column name */
  Id = 'id',
  /** column name */
  StoryId = 'storyId',
  /** column name */
  UpdatedAt = 'updatedAt',
}

/** input type for updating data in table "hero_story" */
export type Hero_Story_Set_Input = {
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  heroId?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['Int']>;
  storyId?: InputMaybe<Scalars['Int']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate stddev on columns */
export type Hero_Story_Stddev_Fields = {
  __typename?: 'hero_story_stddev_fields';
  heroId?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  storyId?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "hero_story" */
export type Hero_Story_Stddev_Order_By = {
  heroId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  storyId?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Hero_Story_Stddev_Pop_Fields = {
  __typename?: 'hero_story_stddev_pop_fields';
  heroId?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  storyId?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "hero_story" */
export type Hero_Story_Stddev_Pop_Order_By = {
  heroId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  storyId?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Hero_Story_Stddev_Samp_Fields = {
  __typename?: 'hero_story_stddev_samp_fields';
  heroId?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  storyId?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "hero_story" */
export type Hero_Story_Stddev_Samp_Order_By = {
  heroId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  storyId?: InputMaybe<Order_By>;
};

/** aggregate sum on columns */
export type Hero_Story_Sum_Fields = {
  __typename?: 'hero_story_sum_fields';
  heroId?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  storyId?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "hero_story" */
export type Hero_Story_Sum_Order_By = {
  heroId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  storyId?: InputMaybe<Order_By>;
};

/** update columns of table "hero_story" */
export enum Hero_Story_Update_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  HeroId = 'heroId',
  /** column name */
  Id = 'id',
  /** column name */
  StoryId = 'storyId',
  /** column name */
  UpdatedAt = 'updatedAt',
}

/** aggregate var_pop on columns */
export type Hero_Story_Var_Pop_Fields = {
  __typename?: 'hero_story_var_pop_fields';
  heroId?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  storyId?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "hero_story" */
export type Hero_Story_Var_Pop_Order_By = {
  heroId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  storyId?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Hero_Story_Var_Samp_Fields = {
  __typename?: 'hero_story_var_samp_fields';
  heroId?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  storyId?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "hero_story" */
export type Hero_Story_Var_Samp_Order_By = {
  heroId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  storyId?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Hero_Story_Variance_Fields = {
  __typename?: 'hero_story_variance_fields';
  heroId?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  storyId?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "hero_story" */
export type Hero_Story_Variance_Order_By = {
  heroId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  storyId?: InputMaybe<Order_By>;
};

/** columns and relationships of "heroes" */
export type Heroes = {
  __typename?: 'heroes';
  createdAt: Scalars['timestamptz'];
  /** An array relationship */
  hero_stories: Array<Hero_Story>;
  /** An aggregate relationship */
  hero_stories_aggregate: Hero_Story_Aggregate;
  id: Scalars['Int'];
  name: Scalars['String'];
  updatedAt: Scalars['timestamptz'];
};

/** columns and relationships of "heroes" */
export type HeroesHero_StoriesArgs = {
  distinct_on?: InputMaybe<Array<Hero_Story_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Hero_Story_Order_By>>;
  where?: InputMaybe<Hero_Story_Bool_Exp>;
};

/** columns and relationships of "heroes" */
export type HeroesHero_Stories_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Hero_Story_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Hero_Story_Order_By>>;
  where?: InputMaybe<Hero_Story_Bool_Exp>;
};

/** aggregated selection of "heroes" */
export type Heroes_Aggregate = {
  __typename?: 'heroes_aggregate';
  aggregate?: Maybe<Heroes_Aggregate_Fields>;
  nodes: Array<Heroes>;
};

/** aggregate fields of "heroes" */
export type Heroes_Aggregate_Fields = {
  __typename?: 'heroes_aggregate_fields';
  avg?: Maybe<Heroes_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Heroes_Max_Fields>;
  min?: Maybe<Heroes_Min_Fields>;
  stddev?: Maybe<Heroes_Stddev_Fields>;
  stddev_pop?: Maybe<Heroes_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Heroes_Stddev_Samp_Fields>;
  sum?: Maybe<Heroes_Sum_Fields>;
  var_pop?: Maybe<Heroes_Var_Pop_Fields>;
  var_samp?: Maybe<Heroes_Var_Samp_Fields>;
  variance?: Maybe<Heroes_Variance_Fields>;
};

/** aggregate fields of "heroes" */
export type Heroes_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Heroes_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Heroes_Avg_Fields = {
  __typename?: 'heroes_avg_fields';
  id?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "heroes". All fields are combined with a logical 'AND'. */
export type Heroes_Bool_Exp = {
  _and?: InputMaybe<Array<Heroes_Bool_Exp>>;
  _not?: InputMaybe<Heroes_Bool_Exp>;
  _or?: InputMaybe<Array<Heroes_Bool_Exp>>;
  createdAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  hero_stories?: InputMaybe<Hero_Story_Bool_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  updatedAt?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "heroes" */
export enum Heroes_Constraint {
  /** unique or primary key constraint */
  HeroesPkey = 'heroes_pkey',
}

/** input type for incrementing numeric columns in table "heroes" */
export type Heroes_Inc_Input = {
  id?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "heroes" */
export type Heroes_Insert_Input = {
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  hero_stories?: InputMaybe<Hero_Story_Arr_Rel_Insert_Input>;
  id?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Heroes_Max_Fields = {
  __typename?: 'heroes_max_fields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** aggregate min on columns */
export type Heroes_Min_Fields = {
  __typename?: 'heroes_min_fields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** response of any mutation on the table "heroes" */
export type Heroes_Mutation_Response = {
  __typename?: 'heroes_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Heroes>;
};

/** input type for inserting object relation for remote table "heroes" */
export type Heroes_Obj_Rel_Insert_Input = {
  data: Heroes_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Heroes_On_Conflict>;
};

/** on_conflict condition type for table "heroes" */
export type Heroes_On_Conflict = {
  constraint: Heroes_Constraint;
  update_columns?: Array<Heroes_Update_Column>;
  where?: InputMaybe<Heroes_Bool_Exp>;
};

/** Ordering options when selecting data from "heroes". */
export type Heroes_Order_By = {
  createdAt?: InputMaybe<Order_By>;
  hero_stories_aggregate?: InputMaybe<Hero_Story_Aggregate_Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
};

/** primary key columns input for table: heroes */
export type Heroes_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "heroes" */
export enum Heroes_Select_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  UpdatedAt = 'updatedAt',
}

/** input type for updating data in table "heroes" */
export type Heroes_Set_Input = {
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate stddev on columns */
export type Heroes_Stddev_Fields = {
  __typename?: 'heroes_stddev_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Heroes_Stddev_Pop_Fields = {
  __typename?: 'heroes_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Heroes_Stddev_Samp_Fields = {
  __typename?: 'heroes_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Heroes_Sum_Fields = {
  __typename?: 'heroes_sum_fields';
  id?: Maybe<Scalars['Int']>;
};

/** update columns of table "heroes" */
export enum Heroes_Update_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  UpdatedAt = 'updatedAt',
}

/** aggregate var_pop on columns */
export type Heroes_Var_Pop_Fields = {
  __typename?: 'heroes_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Heroes_Var_Samp_Fields = {
  __typename?: 'heroes_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Heroes_Variance_Fields = {
  __typename?: 'heroes_variance_fields';
  id?: Maybe<Scalars['Float']>;
};

/** columns and relationships of "monster_story" */
export type Monster_Story = {
  __typename?: 'monster_story';
  createdAt: Scalars['timestamptz'];
  id: Scalars['Int'];
  /** An object relationship */
  monster: Monsters;
  monsterId: Scalars['Int'];
  /** An object relationship */
  story: Stories;
  storyId: Scalars['Int'];
  updatedAt: Scalars['timestamptz'];
};

/** aggregated selection of "monster_story" */
export type Monster_Story_Aggregate = {
  __typename?: 'monster_story_aggregate';
  aggregate?: Maybe<Monster_Story_Aggregate_Fields>;
  nodes: Array<Monster_Story>;
};

/** aggregate fields of "monster_story" */
export type Monster_Story_Aggregate_Fields = {
  __typename?: 'monster_story_aggregate_fields';
  avg?: Maybe<Monster_Story_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Monster_Story_Max_Fields>;
  min?: Maybe<Monster_Story_Min_Fields>;
  stddev?: Maybe<Monster_Story_Stddev_Fields>;
  stddev_pop?: Maybe<Monster_Story_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Monster_Story_Stddev_Samp_Fields>;
  sum?: Maybe<Monster_Story_Sum_Fields>;
  var_pop?: Maybe<Monster_Story_Var_Pop_Fields>;
  var_samp?: Maybe<Monster_Story_Var_Samp_Fields>;
  variance?: Maybe<Monster_Story_Variance_Fields>;
};

/** aggregate fields of "monster_story" */
export type Monster_Story_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Monster_Story_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "monster_story" */
export type Monster_Story_Aggregate_Order_By = {
  avg?: InputMaybe<Monster_Story_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Monster_Story_Max_Order_By>;
  min?: InputMaybe<Monster_Story_Min_Order_By>;
  stddev?: InputMaybe<Monster_Story_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Monster_Story_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Monster_Story_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Monster_Story_Sum_Order_By>;
  var_pop?: InputMaybe<Monster_Story_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Monster_Story_Var_Samp_Order_By>;
  variance?: InputMaybe<Monster_Story_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "monster_story" */
export type Monster_Story_Arr_Rel_Insert_Input = {
  data: Array<Monster_Story_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Monster_Story_On_Conflict>;
};

/** aggregate avg on columns */
export type Monster_Story_Avg_Fields = {
  __typename?: 'monster_story_avg_fields';
  id?: Maybe<Scalars['Float']>;
  monsterId?: Maybe<Scalars['Float']>;
  storyId?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "monster_story" */
export type Monster_Story_Avg_Order_By = {
  id?: InputMaybe<Order_By>;
  monsterId?: InputMaybe<Order_By>;
  storyId?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "monster_story". All fields are combined with a logical 'AND'. */
export type Monster_Story_Bool_Exp = {
  _and?: InputMaybe<Array<Monster_Story_Bool_Exp>>;
  _not?: InputMaybe<Monster_Story_Bool_Exp>;
  _or?: InputMaybe<Array<Monster_Story_Bool_Exp>>;
  createdAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  monster?: InputMaybe<Monsters_Bool_Exp>;
  monsterId?: InputMaybe<Int_Comparison_Exp>;
  story?: InputMaybe<Stories_Bool_Exp>;
  storyId?: InputMaybe<Int_Comparison_Exp>;
  updatedAt?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "monster_story" */
export enum Monster_Story_Constraint {
  /** unique or primary key constraint */
  MonsterStoryPkey = 'monsterStory_pkey',
}

/** input type for incrementing numeric columns in table "monster_story" */
export type Monster_Story_Inc_Input = {
  id?: InputMaybe<Scalars['Int']>;
  monsterId?: InputMaybe<Scalars['Int']>;
  storyId?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "monster_story" */
export type Monster_Story_Insert_Input = {
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['Int']>;
  monster?: InputMaybe<Monsters_Obj_Rel_Insert_Input>;
  monsterId?: InputMaybe<Scalars['Int']>;
  story?: InputMaybe<Stories_Obj_Rel_Insert_Input>;
  storyId?: InputMaybe<Scalars['Int']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Monster_Story_Max_Fields = {
  __typename?: 'monster_story_max_fields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  monsterId?: Maybe<Scalars['Int']>;
  storyId?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "monster_story" */
export type Monster_Story_Max_Order_By = {
  createdAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  monsterId?: InputMaybe<Order_By>;
  storyId?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Monster_Story_Min_Fields = {
  __typename?: 'monster_story_min_fields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  monsterId?: Maybe<Scalars['Int']>;
  storyId?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "monster_story" */
export type Monster_Story_Min_Order_By = {
  createdAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  monsterId?: InputMaybe<Order_By>;
  storyId?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "monster_story" */
export type Monster_Story_Mutation_Response = {
  __typename?: 'monster_story_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Monster_Story>;
};

/** on_conflict condition type for table "monster_story" */
export type Monster_Story_On_Conflict = {
  constraint: Monster_Story_Constraint;
  update_columns?: Array<Monster_Story_Update_Column>;
  where?: InputMaybe<Monster_Story_Bool_Exp>;
};

/** Ordering options when selecting data from "monster_story". */
export type Monster_Story_Order_By = {
  createdAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  monster?: InputMaybe<Monsters_Order_By>;
  monsterId?: InputMaybe<Order_By>;
  story?: InputMaybe<Stories_Order_By>;
  storyId?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
};

/** primary key columns input for table: monster_story */
export type Monster_Story_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "monster_story" */
export enum Monster_Story_Select_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  MonsterId = 'monsterId',
  /** column name */
  StoryId = 'storyId',
  /** column name */
  UpdatedAt = 'updatedAt',
}

/** input type for updating data in table "monster_story" */
export type Monster_Story_Set_Input = {
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['Int']>;
  monsterId?: InputMaybe<Scalars['Int']>;
  storyId?: InputMaybe<Scalars['Int']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate stddev on columns */
export type Monster_Story_Stddev_Fields = {
  __typename?: 'monster_story_stddev_fields';
  id?: Maybe<Scalars['Float']>;
  monsterId?: Maybe<Scalars['Float']>;
  storyId?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "monster_story" */
export type Monster_Story_Stddev_Order_By = {
  id?: InputMaybe<Order_By>;
  monsterId?: InputMaybe<Order_By>;
  storyId?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Monster_Story_Stddev_Pop_Fields = {
  __typename?: 'monster_story_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
  monsterId?: Maybe<Scalars['Float']>;
  storyId?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "monster_story" */
export type Monster_Story_Stddev_Pop_Order_By = {
  id?: InputMaybe<Order_By>;
  monsterId?: InputMaybe<Order_By>;
  storyId?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Monster_Story_Stddev_Samp_Fields = {
  __typename?: 'monster_story_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
  monsterId?: Maybe<Scalars['Float']>;
  storyId?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "monster_story" */
export type Monster_Story_Stddev_Samp_Order_By = {
  id?: InputMaybe<Order_By>;
  monsterId?: InputMaybe<Order_By>;
  storyId?: InputMaybe<Order_By>;
};

/** aggregate sum on columns */
export type Monster_Story_Sum_Fields = {
  __typename?: 'monster_story_sum_fields';
  id?: Maybe<Scalars['Int']>;
  monsterId?: Maybe<Scalars['Int']>;
  storyId?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "monster_story" */
export type Monster_Story_Sum_Order_By = {
  id?: InputMaybe<Order_By>;
  monsterId?: InputMaybe<Order_By>;
  storyId?: InputMaybe<Order_By>;
};

/** update columns of table "monster_story" */
export enum Monster_Story_Update_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  MonsterId = 'monsterId',
  /** column name */
  StoryId = 'storyId',
  /** column name */
  UpdatedAt = 'updatedAt',
}

/** aggregate var_pop on columns */
export type Monster_Story_Var_Pop_Fields = {
  __typename?: 'monster_story_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
  monsterId?: Maybe<Scalars['Float']>;
  storyId?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "monster_story" */
export type Monster_Story_Var_Pop_Order_By = {
  id?: InputMaybe<Order_By>;
  monsterId?: InputMaybe<Order_By>;
  storyId?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Monster_Story_Var_Samp_Fields = {
  __typename?: 'monster_story_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
  monsterId?: Maybe<Scalars['Float']>;
  storyId?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "monster_story" */
export type Monster_Story_Var_Samp_Order_By = {
  id?: InputMaybe<Order_By>;
  monsterId?: InputMaybe<Order_By>;
  storyId?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Monster_Story_Variance_Fields = {
  __typename?: 'monster_story_variance_fields';
  id?: Maybe<Scalars['Float']>;
  monsterId?: Maybe<Scalars['Float']>;
  storyId?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "monster_story" */
export type Monster_Story_Variance_Order_By = {
  id?: InputMaybe<Order_By>;
  monsterId?: InputMaybe<Order_By>;
  storyId?: InputMaybe<Order_By>;
};

/** columns and relationships of "monsters" */
export type Monsters = {
  __typename?: 'monsters';
  createdAt: Scalars['timestamp'];
  id: Scalars['Int'];
  /** An array relationship */
  monsterStories: Array<Monster_Story>;
  /** An aggregate relationship */
  monsterStories_aggregate: Monster_Story_Aggregate;
  name: Scalars['String'];
  updatedAt: Scalars['timestamptz'];
};

/** columns and relationships of "monsters" */
export type MonstersMonsterStoriesArgs = {
  distinct_on?: InputMaybe<Array<Monster_Story_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Monster_Story_Order_By>>;
  where?: InputMaybe<Monster_Story_Bool_Exp>;
};

/** columns and relationships of "monsters" */
export type MonstersMonsterStories_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Monster_Story_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Monster_Story_Order_By>>;
  where?: InputMaybe<Monster_Story_Bool_Exp>;
};

/** aggregated selection of "monsters" */
export type Monsters_Aggregate = {
  __typename?: 'monsters_aggregate';
  aggregate?: Maybe<Monsters_Aggregate_Fields>;
  nodes: Array<Monsters>;
};

/** aggregate fields of "monsters" */
export type Monsters_Aggregate_Fields = {
  __typename?: 'monsters_aggregate_fields';
  avg?: Maybe<Monsters_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Monsters_Max_Fields>;
  min?: Maybe<Monsters_Min_Fields>;
  stddev?: Maybe<Monsters_Stddev_Fields>;
  stddev_pop?: Maybe<Monsters_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Monsters_Stddev_Samp_Fields>;
  sum?: Maybe<Monsters_Sum_Fields>;
  var_pop?: Maybe<Monsters_Var_Pop_Fields>;
  var_samp?: Maybe<Monsters_Var_Samp_Fields>;
  variance?: Maybe<Monsters_Variance_Fields>;
};

/** aggregate fields of "monsters" */
export type Monsters_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Monsters_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Monsters_Avg_Fields = {
  __typename?: 'monsters_avg_fields';
  id?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "monsters". All fields are combined with a logical 'AND'. */
export type Monsters_Bool_Exp = {
  _and?: InputMaybe<Array<Monsters_Bool_Exp>>;
  _not?: InputMaybe<Monsters_Bool_Exp>;
  _or?: InputMaybe<Array<Monsters_Bool_Exp>>;
  createdAt?: InputMaybe<Timestamp_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  monsterStories?: InputMaybe<Monster_Story_Bool_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  updatedAt?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "monsters" */
export enum Monsters_Constraint {
  /** unique or primary key constraint */
  MonstersPkey = 'monsters_pkey',
}

/** input type for incrementing numeric columns in table "monsters" */
export type Monsters_Inc_Input = {
  id?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "monsters" */
export type Monsters_Insert_Input = {
  createdAt?: InputMaybe<Scalars['timestamp']>;
  id?: InputMaybe<Scalars['Int']>;
  monsterStories?: InputMaybe<Monster_Story_Arr_Rel_Insert_Input>;
  name?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Monsters_Max_Fields = {
  __typename?: 'monsters_max_fields';
  createdAt?: Maybe<Scalars['timestamp']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** aggregate min on columns */
export type Monsters_Min_Fields = {
  __typename?: 'monsters_min_fields';
  createdAt?: Maybe<Scalars['timestamp']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** response of any mutation on the table "monsters" */
export type Monsters_Mutation_Response = {
  __typename?: 'monsters_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Monsters>;
};

/** input type for inserting object relation for remote table "monsters" */
export type Monsters_Obj_Rel_Insert_Input = {
  data: Monsters_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Monsters_On_Conflict>;
};

/** on_conflict condition type for table "monsters" */
export type Monsters_On_Conflict = {
  constraint: Monsters_Constraint;
  update_columns?: Array<Monsters_Update_Column>;
  where?: InputMaybe<Monsters_Bool_Exp>;
};

/** Ordering options when selecting data from "monsters". */
export type Monsters_Order_By = {
  createdAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  monsterStories_aggregate?: InputMaybe<Monster_Story_Aggregate_Order_By>;
  name?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
};

/** primary key columns input for table: monsters */
export type Monsters_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "monsters" */
export enum Monsters_Select_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  UpdatedAt = 'updatedAt',
}

/** input type for updating data in table "monsters" */
export type Monsters_Set_Input = {
  createdAt?: InputMaybe<Scalars['timestamp']>;
  id?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate stddev on columns */
export type Monsters_Stddev_Fields = {
  __typename?: 'monsters_stddev_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Monsters_Stddev_Pop_Fields = {
  __typename?: 'monsters_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Monsters_Stddev_Samp_Fields = {
  __typename?: 'monsters_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Monsters_Sum_Fields = {
  __typename?: 'monsters_sum_fields';
  id?: Maybe<Scalars['Int']>;
};

/** update columns of table "monsters" */
export enum Monsters_Update_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  UpdatedAt = 'updatedAt',
}

/** aggregate var_pop on columns */
export type Monsters_Var_Pop_Fields = {
  __typename?: 'monsters_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Monsters_Var_Samp_Fields = {
  __typename?: 'monsters_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Monsters_Variance_Fields = {
  __typename?: 'monsters_variance_fields';
  id?: Maybe<Scalars['Float']>;
};

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  /** delete data from the table: "hero_story" */
  delete_hero_story?: Maybe<Hero_Story_Mutation_Response>;
  /** delete single row from the table: "hero_story" */
  delete_hero_story_by_pk?: Maybe<Hero_Story>;
  /** delete data from the table: "heroes" */
  delete_heroes?: Maybe<Heroes_Mutation_Response>;
  /** delete single row from the table: "heroes" */
  delete_heroes_by_pk?: Maybe<Heroes>;
  /** delete data from the table: "monster_story" */
  delete_monster_story?: Maybe<Monster_Story_Mutation_Response>;
  /** delete single row from the table: "monster_story" */
  delete_monster_story_by_pk?: Maybe<Monster_Story>;
  /** delete data from the table: "monsters" */
  delete_monsters?: Maybe<Monsters_Mutation_Response>;
  /** delete single row from the table: "monsters" */
  delete_monsters_by_pk?: Maybe<Monsters>;
  /** delete data from the table: "stories" */
  delete_stories?: Maybe<Stories_Mutation_Response>;
  /** delete single row from the table: "stories" */
  delete_stories_by_pk?: Maybe<Stories>;
  /** insert data into the table: "hero_story" */
  insert_hero_story?: Maybe<Hero_Story_Mutation_Response>;
  /** insert a single row into the table: "hero_story" */
  insert_hero_story_one?: Maybe<Hero_Story>;
  /** insert data into the table: "heroes" */
  insert_heroes?: Maybe<Heroes_Mutation_Response>;
  /** insert a single row into the table: "heroes" */
  insert_heroes_one?: Maybe<Heroes>;
  /** insert data into the table: "monster_story" */
  insert_monster_story?: Maybe<Monster_Story_Mutation_Response>;
  /** insert a single row into the table: "monster_story" */
  insert_monster_story_one?: Maybe<Monster_Story>;
  /** insert data into the table: "monsters" */
  insert_monsters?: Maybe<Monsters_Mutation_Response>;
  /** insert a single row into the table: "monsters" */
  insert_monsters_one?: Maybe<Monsters>;
  /** insert data into the table: "stories" */
  insert_stories?: Maybe<Stories_Mutation_Response>;
  /** insert a single row into the table: "stories" */
  insert_stories_one?: Maybe<Stories>;
  /** update data of the table: "hero_story" */
  update_hero_story?: Maybe<Hero_Story_Mutation_Response>;
  /** update single row of the table: "hero_story" */
  update_hero_story_by_pk?: Maybe<Hero_Story>;
  /** update data of the table: "heroes" */
  update_heroes?: Maybe<Heroes_Mutation_Response>;
  /** update single row of the table: "heroes" */
  update_heroes_by_pk?: Maybe<Heroes>;
  /** update data of the table: "monster_story" */
  update_monster_story?: Maybe<Monster_Story_Mutation_Response>;
  /** update single row of the table: "monster_story" */
  update_monster_story_by_pk?: Maybe<Monster_Story>;
  /** update data of the table: "monsters" */
  update_monsters?: Maybe<Monsters_Mutation_Response>;
  /** update single row of the table: "monsters" */
  update_monsters_by_pk?: Maybe<Monsters>;
  /** update data of the table: "stories" */
  update_stories?: Maybe<Stories_Mutation_Response>;
  /** update single row of the table: "stories" */
  update_stories_by_pk?: Maybe<Stories>;
};

/** mutation root */
export type Mutation_RootDelete_Hero_StoryArgs = {
  where: Hero_Story_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Hero_Story_By_PkArgs = {
  id: Scalars['Int'];
};

/** mutation root */
export type Mutation_RootDelete_HeroesArgs = {
  where: Heroes_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Heroes_By_PkArgs = {
  id: Scalars['Int'];
};

/** mutation root */
export type Mutation_RootDelete_Monster_StoryArgs = {
  where: Monster_Story_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Monster_Story_By_PkArgs = {
  id: Scalars['Int'];
};

/** mutation root */
export type Mutation_RootDelete_MonstersArgs = {
  where: Monsters_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Monsters_By_PkArgs = {
  id: Scalars['Int'];
};

/** mutation root */
export type Mutation_RootDelete_StoriesArgs = {
  where: Stories_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Stories_By_PkArgs = {
  id: Scalars['Int'];
};

/** mutation root */
export type Mutation_RootInsert_Hero_StoryArgs = {
  objects: Array<Hero_Story_Insert_Input>;
  on_conflict?: InputMaybe<Hero_Story_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Hero_Story_OneArgs = {
  object: Hero_Story_Insert_Input;
  on_conflict?: InputMaybe<Hero_Story_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_HeroesArgs = {
  objects: Array<Heroes_Insert_Input>;
  on_conflict?: InputMaybe<Heroes_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Heroes_OneArgs = {
  object: Heroes_Insert_Input;
  on_conflict?: InputMaybe<Heroes_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Monster_StoryArgs = {
  objects: Array<Monster_Story_Insert_Input>;
  on_conflict?: InputMaybe<Monster_Story_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Monster_Story_OneArgs = {
  object: Monster_Story_Insert_Input;
  on_conflict?: InputMaybe<Monster_Story_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_MonstersArgs = {
  objects: Array<Monsters_Insert_Input>;
  on_conflict?: InputMaybe<Monsters_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Monsters_OneArgs = {
  object: Monsters_Insert_Input;
  on_conflict?: InputMaybe<Monsters_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_StoriesArgs = {
  objects: Array<Stories_Insert_Input>;
  on_conflict?: InputMaybe<Stories_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Stories_OneArgs = {
  object: Stories_Insert_Input;
  on_conflict?: InputMaybe<Stories_On_Conflict>;
};

/** mutation root */
export type Mutation_RootUpdate_Hero_StoryArgs = {
  _inc?: InputMaybe<Hero_Story_Inc_Input>;
  _set?: InputMaybe<Hero_Story_Set_Input>;
  where: Hero_Story_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Hero_Story_By_PkArgs = {
  _inc?: InputMaybe<Hero_Story_Inc_Input>;
  _set?: InputMaybe<Hero_Story_Set_Input>;
  pk_columns: Hero_Story_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_HeroesArgs = {
  _inc?: InputMaybe<Heroes_Inc_Input>;
  _set?: InputMaybe<Heroes_Set_Input>;
  where: Heroes_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Heroes_By_PkArgs = {
  _inc?: InputMaybe<Heroes_Inc_Input>;
  _set?: InputMaybe<Heroes_Set_Input>;
  pk_columns: Heroes_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_Monster_StoryArgs = {
  _inc?: InputMaybe<Monster_Story_Inc_Input>;
  _set?: InputMaybe<Monster_Story_Set_Input>;
  where: Monster_Story_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Monster_Story_By_PkArgs = {
  _inc?: InputMaybe<Monster_Story_Inc_Input>;
  _set?: InputMaybe<Monster_Story_Set_Input>;
  pk_columns: Monster_Story_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_MonstersArgs = {
  _inc?: InputMaybe<Monsters_Inc_Input>;
  _set?: InputMaybe<Monsters_Set_Input>;
  where: Monsters_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Monsters_By_PkArgs = {
  _inc?: InputMaybe<Monsters_Inc_Input>;
  _set?: InputMaybe<Monsters_Set_Input>;
  pk_columns: Monsters_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_StoriesArgs = {
  _inc?: InputMaybe<Stories_Inc_Input>;
  _set?: InputMaybe<Stories_Set_Input>;
  where: Stories_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Stories_By_PkArgs = {
  _inc?: InputMaybe<Stories_Inc_Input>;
  _set?: InputMaybe<Stories_Set_Input>;
  pk_columns: Stories_Pk_Columns_Input;
};

/** column ordering options */
export enum Order_By {
  /** in ascending order, nulls last */
  Asc = 'asc',
  /** in ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in descending order, nulls first */
  Desc = 'desc',
  /** in descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in descending order, nulls last */
  DescNullsLast = 'desc_nulls_last',
}

export type Query_Root = {
  __typename?: 'query_root';
  /** fetch data from the table: "hero_story" */
  hero_story: Array<Hero_Story>;
  /** fetch aggregated fields from the table: "hero_story" */
  hero_story_aggregate: Hero_Story_Aggregate;
  /** fetch data from the table: "hero_story" using primary key columns */
  hero_story_by_pk?: Maybe<Hero_Story>;
  /** fetch data from the table: "heroes" */
  heroes: Array<Heroes>;
  /** fetch aggregated fields from the table: "heroes" */
  heroes_aggregate: Heroes_Aggregate;
  /** fetch data from the table: "heroes" using primary key columns */
  heroes_by_pk?: Maybe<Heroes>;
  /** fetch data from the table: "monster_story" */
  monster_story: Array<Monster_Story>;
  /** fetch aggregated fields from the table: "monster_story" */
  monster_story_aggregate: Monster_Story_Aggregate;
  /** fetch data from the table: "monster_story" using primary key columns */
  monster_story_by_pk?: Maybe<Monster_Story>;
  /** fetch data from the table: "monsters" */
  monsters: Array<Monsters>;
  /** fetch aggregated fields from the table: "monsters" */
  monsters_aggregate: Monsters_Aggregate;
  /** fetch data from the table: "monsters" using primary key columns */
  monsters_by_pk?: Maybe<Monsters>;
  /** fetch data from the table: "stories" */
  stories: Array<Stories>;
  /** fetch aggregated fields from the table: "stories" */
  stories_aggregate: Stories_Aggregate;
  /** fetch data from the table: "stories" using primary key columns */
  stories_by_pk?: Maybe<Stories>;
};

export type Query_RootHero_StoryArgs = {
  distinct_on?: InputMaybe<Array<Hero_Story_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Hero_Story_Order_By>>;
  where?: InputMaybe<Hero_Story_Bool_Exp>;
};

export type Query_RootHero_Story_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Hero_Story_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Hero_Story_Order_By>>;
  where?: InputMaybe<Hero_Story_Bool_Exp>;
};

export type Query_RootHero_Story_By_PkArgs = {
  id: Scalars['Int'];
};

export type Query_RootHeroesArgs = {
  distinct_on?: InputMaybe<Array<Heroes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Heroes_Order_By>>;
  where?: InputMaybe<Heroes_Bool_Exp>;
};

export type Query_RootHeroes_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Heroes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Heroes_Order_By>>;
  where?: InputMaybe<Heroes_Bool_Exp>;
};

export type Query_RootHeroes_By_PkArgs = {
  id: Scalars['Int'];
};

export type Query_RootMonster_StoryArgs = {
  distinct_on?: InputMaybe<Array<Monster_Story_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Monster_Story_Order_By>>;
  where?: InputMaybe<Monster_Story_Bool_Exp>;
};

export type Query_RootMonster_Story_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Monster_Story_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Monster_Story_Order_By>>;
  where?: InputMaybe<Monster_Story_Bool_Exp>;
};

export type Query_RootMonster_Story_By_PkArgs = {
  id: Scalars['Int'];
};

export type Query_RootMonstersArgs = {
  distinct_on?: InputMaybe<Array<Monsters_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Monsters_Order_By>>;
  where?: InputMaybe<Monsters_Bool_Exp>;
};

export type Query_RootMonsters_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Monsters_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Monsters_Order_By>>;
  where?: InputMaybe<Monsters_Bool_Exp>;
};

export type Query_RootMonsters_By_PkArgs = {
  id: Scalars['Int'];
};

export type Query_RootStoriesArgs = {
  distinct_on?: InputMaybe<Array<Stories_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Stories_Order_By>>;
  where?: InputMaybe<Stories_Bool_Exp>;
};

export type Query_RootStories_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Stories_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Stories_Order_By>>;
  where?: InputMaybe<Stories_Bool_Exp>;
};

export type Query_RootStories_By_PkArgs = {
  id: Scalars['Int'];
};

/** columns and relationships of "stories" */
export type Stories = {
  __typename?: 'stories';
  createdAt: Scalars['timestamptz'];
  /** An array relationship */
  hero_stories: Array<Hero_Story>;
  /** An aggregate relationship */
  hero_stories_aggregate: Hero_Story_Aggregate;
  id: Scalars['Int'];
  /** An array relationship */
  monsterStories: Array<Monster_Story>;
  /** An aggregate relationship */
  monsterStories_aggregate: Monster_Story_Aggregate;
  onAirDate: Scalars['date'];
  title: Scalars['String'];
  updatedAt: Scalars['timestamptz'];
};

/** columns and relationships of "stories" */
export type StoriesHero_StoriesArgs = {
  distinct_on?: InputMaybe<Array<Hero_Story_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Hero_Story_Order_By>>;
  where?: InputMaybe<Hero_Story_Bool_Exp>;
};

/** columns and relationships of "stories" */
export type StoriesHero_Stories_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Hero_Story_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Hero_Story_Order_By>>;
  where?: InputMaybe<Hero_Story_Bool_Exp>;
};

/** columns and relationships of "stories" */
export type StoriesMonsterStoriesArgs = {
  distinct_on?: InputMaybe<Array<Monster_Story_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Monster_Story_Order_By>>;
  where?: InputMaybe<Monster_Story_Bool_Exp>;
};

/** columns and relationships of "stories" */
export type StoriesMonsterStories_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Monster_Story_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Monster_Story_Order_By>>;
  where?: InputMaybe<Monster_Story_Bool_Exp>;
};

/** aggregated selection of "stories" */
export type Stories_Aggregate = {
  __typename?: 'stories_aggregate';
  aggregate?: Maybe<Stories_Aggregate_Fields>;
  nodes: Array<Stories>;
};

/** aggregate fields of "stories" */
export type Stories_Aggregate_Fields = {
  __typename?: 'stories_aggregate_fields';
  avg?: Maybe<Stories_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Stories_Max_Fields>;
  min?: Maybe<Stories_Min_Fields>;
  stddev?: Maybe<Stories_Stddev_Fields>;
  stddev_pop?: Maybe<Stories_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Stories_Stddev_Samp_Fields>;
  sum?: Maybe<Stories_Sum_Fields>;
  var_pop?: Maybe<Stories_Var_Pop_Fields>;
  var_samp?: Maybe<Stories_Var_Samp_Fields>;
  variance?: Maybe<Stories_Variance_Fields>;
};

/** aggregate fields of "stories" */
export type Stories_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Stories_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Stories_Avg_Fields = {
  __typename?: 'stories_avg_fields';
  id?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "stories". All fields are combined with a logical 'AND'. */
export type Stories_Bool_Exp = {
  _and?: InputMaybe<Array<Stories_Bool_Exp>>;
  _not?: InputMaybe<Stories_Bool_Exp>;
  _or?: InputMaybe<Array<Stories_Bool_Exp>>;
  createdAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  hero_stories?: InputMaybe<Hero_Story_Bool_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  monsterStories?: InputMaybe<Monster_Story_Bool_Exp>;
  onAirDate?: InputMaybe<Date_Comparison_Exp>;
  title?: InputMaybe<String_Comparison_Exp>;
  updatedAt?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "stories" */
export enum Stories_Constraint {
  /** unique or primary key constraint */
  StoriesPkey = 'stories_pkey',
}

/** input type for incrementing numeric columns in table "stories" */
export type Stories_Inc_Input = {
  id?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "stories" */
export type Stories_Insert_Input = {
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  hero_stories?: InputMaybe<Hero_Story_Arr_Rel_Insert_Input>;
  id?: InputMaybe<Scalars['Int']>;
  monsterStories?: InputMaybe<Monster_Story_Arr_Rel_Insert_Input>;
  onAirDate?: InputMaybe<Scalars['date']>;
  title?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Stories_Max_Fields = {
  __typename?: 'stories_max_fields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  onAirDate?: Maybe<Scalars['date']>;
  title?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** aggregate min on columns */
export type Stories_Min_Fields = {
  __typename?: 'stories_min_fields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  onAirDate?: Maybe<Scalars['date']>;
  title?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** response of any mutation on the table "stories" */
export type Stories_Mutation_Response = {
  __typename?: 'stories_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Stories>;
};

/** input type for inserting object relation for remote table "stories" */
export type Stories_Obj_Rel_Insert_Input = {
  data: Stories_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Stories_On_Conflict>;
};

/** on_conflict condition type for table "stories" */
export type Stories_On_Conflict = {
  constraint: Stories_Constraint;
  update_columns?: Array<Stories_Update_Column>;
  where?: InputMaybe<Stories_Bool_Exp>;
};

/** Ordering options when selecting data from "stories". */
export type Stories_Order_By = {
  createdAt?: InputMaybe<Order_By>;
  hero_stories_aggregate?: InputMaybe<Hero_Story_Aggregate_Order_By>;
  id?: InputMaybe<Order_By>;
  monsterStories_aggregate?: InputMaybe<Monster_Story_Aggregate_Order_By>;
  onAirDate?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
};

/** primary key columns input for table: stories */
export type Stories_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "stories" */
export enum Stories_Select_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  OnAirDate = 'onAirDate',
  /** column name */
  Title = 'title',
  /** column name */
  UpdatedAt = 'updatedAt',
}

/** input type for updating data in table "stories" */
export type Stories_Set_Input = {
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['Int']>;
  onAirDate?: InputMaybe<Scalars['date']>;
  title?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate stddev on columns */
export type Stories_Stddev_Fields = {
  __typename?: 'stories_stddev_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Stories_Stddev_Pop_Fields = {
  __typename?: 'stories_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Stories_Stddev_Samp_Fields = {
  __typename?: 'stories_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Stories_Sum_Fields = {
  __typename?: 'stories_sum_fields';
  id?: Maybe<Scalars['Int']>;
};

/** update columns of table "stories" */
export enum Stories_Update_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  OnAirDate = 'onAirDate',
  /** column name */
  Title = 'title',
  /** column name */
  UpdatedAt = 'updatedAt',
}

/** aggregate var_pop on columns */
export type Stories_Var_Pop_Fields = {
  __typename?: 'stories_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Stories_Var_Samp_Fields = {
  __typename?: 'stories_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Stories_Variance_Fields = {
  __typename?: 'stories_variance_fields';
  id?: Maybe<Scalars['Float']>;
};

export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "hero_story" */
  hero_story: Array<Hero_Story>;
  /** fetch aggregated fields from the table: "hero_story" */
  hero_story_aggregate: Hero_Story_Aggregate;
  /** fetch data from the table: "hero_story" using primary key columns */
  hero_story_by_pk?: Maybe<Hero_Story>;
  /** fetch data from the table: "heroes" */
  heroes: Array<Heroes>;
  /** fetch aggregated fields from the table: "heroes" */
  heroes_aggregate: Heroes_Aggregate;
  /** fetch data from the table: "heroes" using primary key columns */
  heroes_by_pk?: Maybe<Heroes>;
  /** fetch data from the table: "monster_story" */
  monster_story: Array<Monster_Story>;
  /** fetch aggregated fields from the table: "monster_story" */
  monster_story_aggregate: Monster_Story_Aggregate;
  /** fetch data from the table: "monster_story" using primary key columns */
  monster_story_by_pk?: Maybe<Monster_Story>;
  /** fetch data from the table: "monsters" */
  monsters: Array<Monsters>;
  /** fetch aggregated fields from the table: "monsters" */
  monsters_aggregate: Monsters_Aggregate;
  /** fetch data from the table: "monsters" using primary key columns */
  monsters_by_pk?: Maybe<Monsters>;
  /** fetch data from the table: "stories" */
  stories: Array<Stories>;
  /** fetch aggregated fields from the table: "stories" */
  stories_aggregate: Stories_Aggregate;
  /** fetch data from the table: "stories" using primary key columns */
  stories_by_pk?: Maybe<Stories>;
};

export type Subscription_RootHero_StoryArgs = {
  distinct_on?: InputMaybe<Array<Hero_Story_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Hero_Story_Order_By>>;
  where?: InputMaybe<Hero_Story_Bool_Exp>;
};

export type Subscription_RootHero_Story_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Hero_Story_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Hero_Story_Order_By>>;
  where?: InputMaybe<Hero_Story_Bool_Exp>;
};

export type Subscription_RootHero_Story_By_PkArgs = {
  id: Scalars['Int'];
};

export type Subscription_RootHeroesArgs = {
  distinct_on?: InputMaybe<Array<Heroes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Heroes_Order_By>>;
  where?: InputMaybe<Heroes_Bool_Exp>;
};

export type Subscription_RootHeroes_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Heroes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Heroes_Order_By>>;
  where?: InputMaybe<Heroes_Bool_Exp>;
};

export type Subscription_RootHeroes_By_PkArgs = {
  id: Scalars['Int'];
};

export type Subscription_RootMonster_StoryArgs = {
  distinct_on?: InputMaybe<Array<Monster_Story_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Monster_Story_Order_By>>;
  where?: InputMaybe<Monster_Story_Bool_Exp>;
};

export type Subscription_RootMonster_Story_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Monster_Story_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Monster_Story_Order_By>>;
  where?: InputMaybe<Monster_Story_Bool_Exp>;
};

export type Subscription_RootMonster_Story_By_PkArgs = {
  id: Scalars['Int'];
};

export type Subscription_RootMonstersArgs = {
  distinct_on?: InputMaybe<Array<Monsters_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Monsters_Order_By>>;
  where?: InputMaybe<Monsters_Bool_Exp>;
};

export type Subscription_RootMonsters_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Monsters_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Monsters_Order_By>>;
  where?: InputMaybe<Monsters_Bool_Exp>;
};

export type Subscription_RootMonsters_By_PkArgs = {
  id: Scalars['Int'];
};

export type Subscription_RootStoriesArgs = {
  distinct_on?: InputMaybe<Array<Stories_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Stories_Order_By>>;
  where?: InputMaybe<Stories_Bool_Exp>;
};

export type Subscription_RootStories_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Stories_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Stories_Order_By>>;
  where?: InputMaybe<Stories_Bool_Exp>;
};

export type Subscription_RootStories_By_PkArgs = {
  id: Scalars['Int'];
};

/** Boolean expression to compare columns of type "timestamp". All fields are combined with logical 'AND'. */
export type Timestamp_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['timestamp']>;
  _gt?: InputMaybe<Scalars['timestamp']>;
  _gte?: InputMaybe<Scalars['timestamp']>;
  _in?: InputMaybe<Array<Scalars['timestamp']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['timestamp']>;
  _lte?: InputMaybe<Scalars['timestamp']>;
  _neq?: InputMaybe<Scalars['timestamp']>;
  _nin?: InputMaybe<Array<Scalars['timestamp']>>;
};

/** Boolean expression to compare columns of type "timestamptz". All fields are combined with logical 'AND'. */
export type Timestamptz_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['timestamptz']>;
  _gt?: InputMaybe<Scalars['timestamptz']>;
  _gte?: InputMaybe<Scalars['timestamptz']>;
  _in?: InputMaybe<Array<Scalars['timestamptz']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['timestamptz']>;
  _lte?: InputMaybe<Scalars['timestamptz']>;
  _neq?: InputMaybe<Scalars['timestamptz']>;
  _nin?: InputMaybe<Array<Scalars['timestamptz']>>;
};

export type GetMonstersQueryVariables = Exact<{ [key: string]: never }>;

export type GetMonstersQuery = {
  __typename?: 'query_root';
  monsters: Array<{
    __typename?: 'monsters';
    id: number;
    name: string;
    createdAt: any;
    updatedAt: any;
  }>;
};

export const GetMonstersDocument = gql`
  query GetMonsters {
    monsters {
      id
      name
      createdAt
      updatedAt
    }
  }
`;

/**
 * __useGetMonstersQuery__
 *
 * To run a query within a React component, call `useGetMonstersQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetMonstersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetMonstersQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetMonstersQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GetMonstersQuery,
    GetMonstersQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetMonstersQuery, GetMonstersQueryVariables>(
    GetMonstersDocument,
    options
  );
}
export function useGetMonstersLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetMonstersQuery,
    GetMonstersQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetMonstersQuery, GetMonstersQueryVariables>(
    GetMonstersDocument,
    options
  );
}
export type GetMonstersQueryHookResult = ReturnType<typeof useGetMonstersQuery>;
export type GetMonstersLazyQueryHookResult = ReturnType<
  typeof useGetMonstersLazyQuery
>;
export type GetMonstersQueryResult = Apollo.QueryResult<
  GetMonstersQuery,
  GetMonstersQueryVariables
>;
