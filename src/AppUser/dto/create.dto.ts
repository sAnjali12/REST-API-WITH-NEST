import { IsString, IsInt,  IsEmail} from 'class-validator';


export class CreateAppUserDto {
    @IsString()
    readonly username: string;

    @IsString()
    readonly firstName: string;

    @IsString()
    readonly lastName: string;

    @IsEmail()
    readonly email: string;

    @IsInt()
    readonly dapp_id:  [];
}