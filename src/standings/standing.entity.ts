import {
  AfterInsert,
  AfterRemove,
  AfterUpdate,
  Entity,
  Column,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
  CreateDateColumn,
} from 'typeorm';

@Entity()
export class Standing {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  grand_prix: string;

  @Column({ type: 'date' })
  racing_date: string;

  @Column()
  driver: string;

  @Column()
  nationality: string;

  @Column()
  team: string;

  @Column()
  position: string;

  @Column()
  license_plate: number;

  @Column()
  laps: number;

  @Column()
  time_retire: string;

  @Column({ default: 0 })
  points: number;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @AfterInsert()
  logInsert() {
    console.log('Inserted Standing with id', this.id);
  }

  @AfterUpdate()
  logUpdate() {
    console.log('Updated Standing with id', this.id);
  }

  @AfterRemove()
  logRemove() {
    console.log('Removed Standing with id', this.id);
  }
}
