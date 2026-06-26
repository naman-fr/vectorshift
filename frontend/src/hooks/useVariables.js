import { useMemo } from 'react';

// Matches valid JavaScript identifiers inside {{ }}
// e.g. {{ input }} -> input, {{ my_var123 }} -> my_var123
const VARIABLE_REGEX = /{{\s*([a-zA-Z_$][a-zA-Z0-9_$]*)\s*}}/g;

export const useVariables = (text) => {
  const variables = useMemo(() => {
    const matches = Array.from(text.matchAll(VARIABLE_REGEX));
    // Extract capture group and deduplicate, preserving order
    const extracted = matches.map(match => match[1]);
    return [...new Set(extracted)];
  }, [text]);

  return variables;
};
