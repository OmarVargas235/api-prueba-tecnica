import { prop, getModelForClass } from '@typegoose/typegoose';
import { BaseEntity } from '@config/base.entity';

export class HistoryEntity extends BaseEntity {
    @prop({ type: String, required: true })
    name!: string;

    @prop({ type: String, required: true })
    lastName!: string;

    @prop({ type: String, required: true })
    company!: string;

    @prop({ type: String, required: true, unique: true })
    email!: string;

    @prop({ type: String, required: true })
    password!: string;
}

const historyModel = getModelForClass(HistoryEntity);

export default historyModel;