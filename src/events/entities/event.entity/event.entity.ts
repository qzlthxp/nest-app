import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index(['name', 'type'])
@Entity()
export class Event {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  type: string;

  // @Index() 定义一个索引
  @Index()
  @Column()
  name: string;

  @Column('json')
  payload: Record<string, any>;
}
