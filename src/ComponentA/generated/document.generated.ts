import * as Types from '../../src/gql/__generated__/types';

export type ComponentA_TypeAFragment = { readonly __typename?: 'TypeA', readonly field1?: string | null };

export declare const ComponentA_TypeA: import("graphql").DocumentNode;
export const ComponentA_TypeAFragmentDoc = `
    fragment ComponentA_TypeA on TypeA {
  field1
}
    `;