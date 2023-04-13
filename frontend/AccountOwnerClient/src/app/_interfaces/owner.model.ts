import { Account } from './account.model';
export interface Owner {
    id: string;
    name: string;
    dataOfBirth: Date;
    address: string;

    accounts?: Account[];
}
