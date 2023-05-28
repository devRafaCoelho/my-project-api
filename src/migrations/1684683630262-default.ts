import { MigrationInterface, QueryRunner } from "typeorm";

export class Default1684683630262 implements MigrationInterface {
    name = 'Default1684683630262'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "customers" DROP COLUMN "avatar_url"`);
        await queryRunner.query(`ALTER TABLE "customers" DROP COLUMN "avatar_path"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "customers" ADD "avatar_path" text`);
        await queryRunner.query(`ALTER TABLE "customers" ADD "avatar_url" text`);
    }

}
