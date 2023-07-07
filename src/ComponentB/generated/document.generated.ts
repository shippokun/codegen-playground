import * as Types from '../../src/gql/__generated__/types';

export type ComponentB_TypeBFragment = { readonly __typename?: 'TypeB', readonly param1?: string | null, readonly param2?: string | null };

export type ComponentB_TypeAFragment = { readonly __typename?: 'TypeA', readonly field3?: string | null, readonly field4?: string | null, readonly field5?: string | null, readonly field6?: string | null, readonly field7?: { readonly __typename?: 'TypeB', readonly param1?: string | null, readonly param2?: string | null } | null };

export declare const ComponentB_TypeB: import("graphql").DocumentNode;
export declare const ComponentB_TypeA: import("graphql").DocumentNode;
export const ComponentB_TypeBFragmentDoc = `
    fragment ComponentB_TypeB on TypeB {
  param1
  param2
}
    `;
export const ComponentB_TypeAFragmentDoc = `
    fragment ComponentB_TypeA on TypeA {
  field3
  field4
  field5
  field6
  field7 {
    ...ComponentB_TypeB
  }
}
    ${ComponentB_TypeBFragmentDoc}`;