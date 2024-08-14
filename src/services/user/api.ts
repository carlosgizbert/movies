import {
  CreateAccountPayload,
} from './dto';

import { api } from '@/services/index';

export async function createAccount(payload: CreateAccountPayload) {
  const { data } = await api.post('/users/', payload);

  return data;
}