﻿import {PersonDto} from "./person";

export class BookingDto {
    constructor(
        public id: number,
        public dayOfWeek: number,
        public week: string,
        public hour: string,
        public personId: string,
        public person: PersonDto
    ) {
    }
}