import { EntityManager } from 'typeorm';
import { User } from '../../typegraphql/user/user.model';
import { UseCase } from '../use-case.type';
import { ForbiddenError } from 'type-graphql';
import { UserRole } from '../../enums/user-roles';
import { CreateEventInput } from '../../typegraphql/event/dto/create.input';
import { Event } from '../../typegraphql/event/event.model';

export type CreateEventUseCase = UseCase<CreateEventInput, Event>;

export const createEventUseCaseFactory =
  ({ entityManager }: { entityManager: EntityManager }): CreateEventUseCase =>
  async (input, ctx) => {
    if (ctx.role !== UserRole.ADMIN) {
      throw new ForbiddenError();
    }

    const user = await entityManager
      .getRepository(User)
      .findOne({ where: { id: input.createdById } });
    if (!user) {
      throw new Error('The user does not exist!');
    }

    const newEvent = await entityManager
      .getRepository(Event)
      .create({ ...input, createdBy: user })
      .save();
    return newEvent;
  };
