import { ApiProperty } from "@nestjs/swagger";

export class CreateProductDto {
    @ApiProperty()
    name: string;

    @ApiProperty()
    des: string;

    @ApiProperty()
    link:string;

    @ApiProperty()
    price: number;

    @ApiProperty()
    pricesale:number;

}
