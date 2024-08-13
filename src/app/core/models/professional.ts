import { Area } from "./area";
import { Person } from "./person";

export interface Professional extends Person{
    active: boolean;
    area: Area;
}