'use client';

import { ApolloProvider as BaseApolloProvider } from '@apollo/client';
import { client } from './apollo';
import { ReactNode } from 'react';

export function ApolloProvider({ children }: { children: ReactNode }) {
  return (
    <BaseApolloProvider client={client}>
      {children}
    </BaseApolloProvider>
  );
} 