import { IsString, IsInt } from 'class-validator';

export class CreateInfoDto {
    @IsString()
    readonly name: string;

    @IsString()
    readonly qualification: string;

    @IsInt()
    readonly age: number;
    
    
}