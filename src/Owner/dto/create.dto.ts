import { IsString, IsInt,  IsEmail} from 'class-validator';


export class CreateOwnerDto {
    @IsString()
    readonly username: string;

    @IsString()
    readonly firstName: string;

    @IsString()
    readonly lastName: string;

    @IsEmail()
    readonly email: string;

    @IsInt()
    readonly dapps:  [];
}