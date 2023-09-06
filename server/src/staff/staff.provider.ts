import { Staff } from './staff.entity';
import { STAFF_REPOSITORY } from '../constants';

export const staffProviders = [
  {
    provide: STAFF_REPOSITORY,
    useValue: Staff,
  },
];
