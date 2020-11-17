import { Route } from './route';
import { User } from './user';
/**Defines Purchases */
export class Purchase {
  constructor(
    public route: Route,
    public user: User,
    public railroadCarNumber: number,
    public seats: number[],
    public price: number,
    public paid: boolean
  ) {}
}
