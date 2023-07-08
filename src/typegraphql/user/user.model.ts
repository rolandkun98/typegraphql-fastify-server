import { Field, ID, ObjectType } from 'type-graphql';
import {
  Entity,
  PrimaryColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
  BaseEntity,
} from 'typeorm';

@ObjectType()
@Entity()
export class User extends BaseEntity {
  @Field(() => ID)
  @PrimaryColumn({
    type: 'uuid',
    generated: 'uuid',
    name: 'id',
    nullable: false,
  })
  id: string;

  @Field(() => String)
  @Column({ type: 'text', name: 'first_name', nullable: false })
  firstName: string;

  @Field(() => String)
  @Column({ type: 'text', name: 'last_name', nullable: false })
  lastName: string;

  @Field(() => String)
  @Column({ type: 'text', name: 'email', nullable: false })
  email: string;

  @Field(() => Date)
  @CreateDateColumn({ type: 'timestamptz' })
  createdAt: Date;

  @Field(() => Date)
  @UpdateDateColumn({ type: 'timestamptz' })
  updatedAt: Date;

  @Field(() => Date, { nullable: true })
  @DeleteDateColumn({ type: 'timestamptz' })
  deletedAt: Date;
}
