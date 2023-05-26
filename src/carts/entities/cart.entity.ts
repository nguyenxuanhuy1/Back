import { ApiProperty } from "@nestjs/swagger";

export class cart {
    @ApiProperty()
    name: string;

    @ApiProperty()
    des: string;

    @ApiProperty()
    link: string;

    @ApiProperty()
    price: number;

    @ApiProperty()
    pricesale: number;

}
