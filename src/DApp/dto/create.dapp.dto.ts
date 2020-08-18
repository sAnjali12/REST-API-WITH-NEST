import { IsString, IsInt } from 'class-validator';

export class CreateDAppDto {
    @IsString()
    readonly name: String
    readonly description: String

    @IsInt()
    readonly owner_id: Number

    @IsString()
    readonly status: String
    
    readonly consumers: []

    
    
}