import { MigrationInterface, QueryRunner } from "typeorm";

export class Default1684625654393 implements MigrationInterface {
    name = 'Default1684625654393'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "avatar_url"`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "avatar_path"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" ADD "avatar_path" text`);
        await queryRunner.query(`ALTER TABLE "users" ADD "avatar_url" text`);
    }

}
