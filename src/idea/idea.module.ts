import { Module } from '@nestjs/common';

import { IdeaService } from './idea/idea.service';

import { IdeaController } from './idea.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { IdeaEntity } from 'dist/idea/idea.entity';

@Module({
  imports: [TypeOrmModule.forFeature([IdeaEntity])],
  controllers: [IdeaController],
  providers: [IdeaService]
})
export class IdeaModule {}
