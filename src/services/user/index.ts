'use client';

import {
  useMutation,
  UseMutationResult,
  useQueryClient,
} from '@tanstack/react-query';

import {
  createAccount,
} from './api';

import {
  CreateAccountPayload,
} from './dto';

import { MutateProps } from '../dto';

export function useCreateAccount({
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  onError = (_error: Error) => null,
  onSuccess = () => null,
}: MutateProps): UseMutationResult<unknown, Error, CreateAccountPayload, unknown> {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (payload: CreateAccountPayload) => createAccount(payload),
    onSuccess: () => {
      if (onSuccess) {
        onSuccess();
      }
      queryClient.invalidateQueries();
    },
    onError: (error: Error) => {
      if (onError) {
        onError(error);
      }
    },
  });
}
