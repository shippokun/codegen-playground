export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  Date: { input: string; output: string; }
};

export type Query = {
  __typename?: 'Query';
  things: TypeA;
};

export type TypeA = {
  __typename?: 'TypeA';
  field1?: Maybe<Scalars['String']['output']>;
  field2?: Maybe<Scalars['String']['output']>;
  field3?: Maybe<Scalars['String']['output']>;
  field4?: Maybe<Scalars['String']['output']>;
  field5?: Maybe<Scalars['String']['output']>;
  field6?: Maybe<Scalars['String']['output']>;
  field7?: Maybe<TypeB>;
};

export type TypeB = {
  __typename?: 'TypeB';
  param1?: Maybe<Scalars['String']['output']>;
  param2?: Maybe<Scalars['String']['output']>;
};
