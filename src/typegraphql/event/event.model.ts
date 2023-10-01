import { Field, ID, ObjectType } from 'type-graphql';
import {
  Entity,
  PrimaryColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
  BaseEntity,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { User } from '../user/user.model';

@ObjectType()
@Entity({ name: 'events' })
export class Event extends BaseEntity {
  @Field(() => ID)
  @PrimaryColumn({
    type: 'uuid',
    generated: 'uuid',
    name: 'id',
    nullable: false,
  })
  id: string;

  @Field(() => User)
  @ManyToOne(() => User, { nullable: false })
  @JoinColumn({ name: 'created_by' })
  createdBy: User;

  @Field(() => String)
  @Column({ type: 'varchar', name: 'title', nullable: false, length: 50 })
  title: string;

  @Field(() => String)
  @Column({
    type: 'varchar',
    name: 'description',
    nullable: false,
    length: 300,
  })
  description: string;

  @Field(() => Date)
  @Column({ type: 'timestamptz', name: 'starting_at', nullable: false })
  startingAt: Date;

  @Field(() => Date)
  @Column({ type: 'timestamptz', name: 'finishing_at', nullable: false })
  finishingAt: Date;

  @Field(() => Date)
  @CreateDateColumn({ type: 'timestamptz', name: 'created_at' })
  createdAt: Date;

  @Field(() => Date)
  @UpdateDateColumn({ type: 'timestamptz', name: 'updated_at' })
  updatedAt: Date;

  @Field(() => Date, { nullable: true })
  @DeleteDateColumn({ type: 'timestamptz', name: 'deleted_at' })
  deletedAt: Date;
}
